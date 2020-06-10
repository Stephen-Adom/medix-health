<template>
    <v-container>
        <vue-topprogress ref="topProgress" color="#00C851" colorShadow="#00C851" :height="5" errorColor="#CC0000"></vue-topprogress>
        <v-row class="px-5">
            <section>
                <span class="subtitle-2 font-weight-bold">Canceled <span class="caption">({{canceled_appointments.length}} appointments)</span></span>
            </section>
            <v-spacer />
            <v-icon color="info darken-1">mdi-account-group</v-icon>
        </v-row>
            <v-row v-if="canceled_appointments.length">
                <v-col cols="6" md="3" sm="4" v-for="appointment in canceled_appointments" :key="appointment.id">
                    <v-card outlined>
                        <v-card-text class="pa-1">
                            <v-row>
                                <v-col cols="4">
                                    <v-avatar size="60">
                                        <v-img :src="getImage(appointment.patient)" />
                                    </v-avatar>
                                </v-col>
                                <v-col cols="8" class="d-flex flex-column">
                                    <span class="subtitle-2 font-weight-bold black--text">{{appointment.patient.title}} {{appointment.patient.firstname}} {{appointment.patient.lastname}}</span>
                                    <span class="caption font-weight-bold grey--text">{{appointment.patient.job_title}}</span>
                                    <div class="d-flex mt-1">
                                        <v-tooltip top>
                                            <template v-slot:activator="{on}">
                                                <v-btn color="red darken-2" v-on="on" class="mr-2" depressed fab x-small dark width="30" height="30" @click="delete_appointment(appointment)">
                                                    <v-icon size="14">mdi-delete</v-icon>
                                                </v-btn>
                                            </template>
                                        <span class="caption">delete</span>
                                        </v-tooltip>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-card-text>
                        <v-divider class="my-0" />
                        <v-card-text class="pa-1">
                            <v-row>
                                <v-col cols="6">
                                    <span class="subtitle-1 font-weight-light black--text">{{appointment.timing.start_time | formatTime}}</span>
                                </v-col>
                                <v-col cols="6">
                                    <span class="subtitle-2 font-weight-bold grey--text">{{appointment.schedule.schedule_date | formatDate}}</span>
                                </v-col>
                            </v-row>
                        </v-card-text>
                        <v-divider class="my-0" />
                        <v-card-text class="text-center">
                            <span class="subtitle-2 font-weight-bold"><a @click="appontment_details(appointment)">View Details</a></span>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        <v-row v-else>
			<v-col cols="12">
				<v-card style="border-top: 4px solid green;">
					<v-card-text class="d-flex">
						<v-responsive max-width="30%">
							<v-img src="/app_asset/undraw_void_3ggu.svg" width="60%" class="mx-auto" />
						</v-responsive>
						<span class="text-center grey--text font-weight-bold subtitle-1 font-italic mx-5" style="margin-top: 80px;">No Appointment(s) Data Available !!!</span>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>

    <v-dialog v-model="loading_dialog" hide-overlay persistent width="300">
        <v-card color="primary" dark>
            <v-card-text>
                <span class="caption font-italic">updating...</span>
                <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
            </v-card-text>
        </v-card>
    </v-dialog>
    </v-container>
</template>

<script>

import {mapGetters, mapActions} from 'vuex';

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

export default {
    data: () => ({
        loading_dialog: false,
    }),
    computed:{
        ...mapGetters(['canceled_appointments']),
    },
    mounted () {
        this.$refs.topProgress.start()
    
        // Use setTimeout for demo
        setTimeout(() => {
            this.$refs.topProgress.done()
        }, 1000)
    },
    filters:{
        formatDate(value){
            return moment(value).format('YY-MMM-Do');
        },
        formatTime(value){
            return moment(value).format('LT');
        }
    },
    methods:{
        ...mapActions(['fetchCanceledAppointment']),

        getImage(patient){
            if(patient.image){
                return '/patients/profiles/' + patient.image;
            }else{
                if(patient.gender === 'Male'){
                    return '/app_asset/male_avatar.png'
                }else{
                    return '/app_asset/undraw_female_avatar_l3ey.png'
                }
            }
        },

        appontment_details(appointment){
            this.$router.push({name: 'appointment_canceled_details', params: {id: appointment.id}});
        },

        delete_appointment(appointment){
            this.$refs.topProgress.start();
            swalWithBootstrapButtons.fire({
                title: 'Are you sure?',
                text: "The selected appointment will be deleted!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
                }).then((result) => {
                if (result.value) {
                    this.loading_dialog = true;
                    axios.delete('/api/delete_appointment/' + appointment.id).then(response => {
                    if(response.data.success){
                        this.fetchCanceledAppointment();
                        this.$refs.topProgress.done();
                        this.loading_dialog = false;
                        var index = this.canceled_appointments.indexOf(appointment);
                        this.canceled_appointments.splice(index, 1);
                        swalWithBootstrapButtons.fire(
                            'Deleted!',
                            'Appointment Deleted.',
                            'success'
                        )
                    }
                    })
                    
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    this.$refs.topProgress.fail();
                    this.loading_dialog = false;
                    swalWithBootstrapButtons.fire(
                    'Reverted',
                    'The Application Process is reversed :)',
                    'info'
                    )
                }
            }) 
        }
    }
}
</script>
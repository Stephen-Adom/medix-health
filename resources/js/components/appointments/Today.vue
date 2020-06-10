<template>
    <v-container>
        <vue-topprogress ref="topProgress" color="#00C851" colorShadow="#00C851" :height="5" errorColor="#CC0000"></vue-topprogress>
        <v-row class="px-5">
            <section>
                <span class="subtitle-2 font-weight-bold">Today <span class="caption">({{today_appointments.length}} appointments)</span></span>
            </section>
            <v-spacer />
            <v-icon color="info darken-1">mdi-account-group</v-icon>
        </v-row>
            <v-row v-if="today_appointments.length">
                <v-col cols="6" md="3" sm="4" v-for="appointment in today_appointments" :key="appointment.id">
                    <v-card outlined>
                        <v-card-text class="pa-1">
                            <v-row>
                                <v-col cols="4">
                                    <v-avatar size="60">
                                        <v-img :src="getImage(appointment.patient)" />
                                    </v-avatar>
                                </v-col>
                                <v-col cols="8" class="d-flex flex-column">
                                    <span class="subtitle-2 font-weight-bold black--text d-inline-block text-truncate">{{appointment.patient.title}} {{appointment.patient.firstname}} {{appointment.patient.lastname}}</span>
                                    <span class="caption font-weight-bold grey--text">{{appointment.patient.job_title}}</span>
                                    <div class="d-flex mt-1">
                                        <v-tooltip top>
                                            <template v-slot:activator="{on}">
                                                <v-btn color="info darken-2" v-on="on" class="mr-2" depressed fab x-small dark width="30" height="30" @click="accept_appointment(appointment)">
                                                    <v-icon size="14">mdi-check</v-icon>
                                                </v-btn>
                                            </template>
                                            <span class="caption">accept</span>
                                        </v-tooltip>

                                        <v-tooltip top>
                                            <template v-slot:activator="{on}">
                                                <v-btn color="grey" v-on="on" class="mr-2" depressed fab x-small dark width="30" height="30" @click="cancel_appointment(appointment)">
                                                    <v-icon size="14">mdi-close</v-icon>
                                                </v-btn>
                                            </template>
                                            <span class="caption">cancel</span>
                                        </v-tooltip>

                                        <v-tooltip top>
                                            <template v-slot:activator="{on}">
                                                <v-btn color="grey" v-on="on" depressed fab x-small dark width="30" height="30" @click="reschedule_appointment(appointment)">
                                                    <v-icon size="14">mdi-swap-horizontal</v-icon>
                                                </v-btn>
                                            </template>
                                            <span class="caption">reschedule</span>
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

        <v-dialog v-model="reschedule_dialog" width="600">

            <v-card>
                <v-card-title class="subtitle-1 font-weight-bold" primary-title> Reschedule Patient</v-card-title>
                <v-divider />
                <v-card-text>
                    <div>
                        <span class="subtitle-1 font-weight-bold d-block">Available Dates:</span>
                        <v-row>
                            <v-col cols="12">
                                <v-chip-group v-model="appointment_day" active-class="success--text text--accent-4 darken-2" row>
                                    <template v-if="schedules.length">
                                        <v-chip filter outlined class="ma-2" :value="schedule.id" v-for="schedule in schedules" :key="schedule.id">{{schedule.schedule_date | formatDate}}</v-chip>
                                    </template>
                                    <template v-else>
                                        <span><i>No available dates</i></span>
                                    </template>
                                </v-chip-group>
                            </v-col>
                        </v-row>
                    </div>
                    <v-divider class="my-3"/>
                    <div>
                        <span class="subtitle-1 font-weight-bold d-block">Available Times:</span>
                        <v-row>
                            <v-col cols="12">
                                <v-chip-group v-model="appointment_time" active-class="white--text text--accent-4 darken-2" row>
                                    <template v-if="timings.length">
                                        <v-chip filter color="success darken-1" v-for="timing in timings" :key="timing.id" :value="timing.id" label class="ma-2">{{timing.start_time | formatTime}} - {{timing.end_time | formatTime}}</v-chip>
                                    </template>
                                    <template v-else>
                                        <span><i>No available times</i></span>
                                    </template>
                                </v-chip-group>
                            </v-col>
                        </v-row>
                    </div>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="info darken-2" tile depressed dark class="px-4 ma-2" @click="newBooked">
                    <span class="caption">update</span>
                </v-btn>
                <v-btn color="red darken-2" tile depressed dark class="px-4 ma-2" @click="closeSchedule">
                    <span class="caption">cancel</span>
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

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
import {Toast} from '../../app';
import {bus} from '../../app';
import {mapGetters, mapActions} from 'vuex';
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

export default {
    data:() => ({
        loading_dialog: false,
        reschedule_dialog: false,
        reschedule_patient: null,
        schedules:[],
        timings:[],
        appointment_day: null,
        appointment_time: null
    }),
    filters:{
        formatDate(value){
            return moment(value).format('YY-MMM-Do');
        },
        formatTime(value){
            return moment(value).format('LT');
        }
    },
    methods:{
        ...mapActions(['fetchTodayAppointment', 'fetchCanceledAppointment']),

        appontment_details(appointment){
            this.$router.push({name: 'appointment_today_details', params: {id: appointment.id}});
        },

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
        
        getDoctorSchedule(){
            axios.get('/my_schedules').then(response => {
                this.schedules = response.data.schedule;
            });
        },
        getDoctorTime(id){
            axios.post('/api/doctor_time', {id: id}).then(response => {
                if(response.data.no_timings){
                    Toast.fire({
                        icon: 'info',
                        title: 'No Available time'
                    });
                }
                if(response.data.timing){
                    this.timings = response.data.timing;
                }
            });
        },
        closeSchedule(){
            this.reschedule_dialog = false;
            this.appointment_day = null;
            this.appointment_time = null;
            this.timings = [];
        },

        reschedule_appointment(appointment){
            this.reschedule_patient = appointment;
            if(this.reschedule_patient){
                this.reschedule_dialog = true;
            }
        },

        cancel_appointment(appointment){
            this.$refs.topProgress.start();
            swalWithBootstrapButtons.fire({
                title: 'Are you sure?',
                text: "The selected appointment will be cancel!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, cancel!',
                cancelButtonText: 'No, close!',
                reverseButtons: true
                }).then((result) => {
                if (result.value) {
                    this.loading_dialog = true;
                    axios.patch('/api/cancel_appointment/' + appointment.id).then(response => {
                    if(response.data.success){
                        this.fetchTodayAppointment();
                        this.fetchCanceledAppointment();
                        this.$refs.topProgress.done();
                        this.loading_dialog = false;
                        var index = this.today_appointments.indexOf(appointment);
                        this.today_appointments.splice(index, 1);
                        swalWithBootstrapButtons.fire(
                            'Canceled!',
                            'Appointment Canceled.',
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
        },

        accept_appointment(appointment){
            this.$refs.topProgress.start();
            swalWithBootstrapButtons.fire({
                title: 'Are you sure?',
                text: "The selected appointment will be accepted!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Accept!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
                }).then((result) => {
                if (result.value) {
                    this.loading_dialog = true;
                    axios.patch('/api/accept_appointment/' + appointment.id).then(response => {
                    if(response.data.success){
                        this.fetchTodayAppointment();
                        this.$refs.topProgress.done();
                        this.loading_dialog = false;
                        var index = this.today_appointments.indexOf(appointment);
                        this.today_appointments.splice(index, 1);
                        swalWithBootstrapButtons.fire(
                            'Accepted!',
                            'Appointment is prepared for Examination.',
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
        },

        newBooked(){
            if(this.appointment_time === null && this.appointment_time === null){
                Swal.fire(
                'Data Error',
                'No Time and Date Selected',
                'error'
                )
            }else{
                this.$refs.topProgress.start();
                this.loading_dialog = true;
                axios.patch('/api/reschedule_appointment/'+ this.reschedule_patient.id, {appointment_time: this.appointment_time, appointment_day: this.appointment_day}).then(response => {
                    if(response.data.success){
                        this.$refs.topProgress.done();
                        this.loading_dialog = false;
                        this.fetchTodayAppointment();
                        this.reschedule_dialog = false;
                         this.appointment_day = null;
                        this.appointment_time = null;
                        this.timings = [];
                        Toast.fire({
                            icon: 'success',
                            title: 'Appointment rescheduled'
                        });
                    }      
                })
            }
        }
    },
    created(){
        this.getDoctorSchedule();
    },
    mounted () {
        this.$refs.topProgress.start()
    
        // Use setTimeout for demo
        setTimeout(() => {
            this.$refs.topProgress.done()
        }, 1000)
    },
    computed:{
        ...mapGetters(['today_appointments']),
        getRescheduleImage(){
            if(this.reschedulePatient.patient.gender === 'Male'){
                return '/app_asset/male_avatar.png'
            }else{
                return '/app_asset/undraw_female_avatar_l3ey.png'
            }
        },
    },
    watch:{
        appointment_day(){
            if(this.appointment_day !== null){
                this.getDoctorTime(this.appointment_day);
            }
        }
    }

}
</script>

<style scoped>

</style>



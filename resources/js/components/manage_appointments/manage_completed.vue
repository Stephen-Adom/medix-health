<template>
        <v-container>
        <v-row class="px-5">
            <section>
                <span class="subtitle-2 font-weight-bold">Completed <span class="caption">({{manage_completed_appointments.length}} appointments)</span></span>
            </section>
            <v-spacer />
            <v-icon color="info darken-1">mdi-account-group</v-icon>
        </v-row>
            <v-row v-if="manage_completed_appointments.length">
                <v-col cols="6" md="3" sm="4" v-for="appointment in manage_completed_appointments" :key="appointment.id">
                    <v-card outlined>
                        <v-card-text class="pa-1">
                            <v-row>
                                <v-col cols="3">
                                    <v-avatar size="60">
                                        <v-img :src="getImage(appointment.patient)" />
                                    </v-avatar>
                                </v-col>
                                <v-col cols="9" class="d-flex flex-column">
                                    <span class="subtitle-2 font-weight-bold black--text">{{appointment.patient.title}} {{appointment.patient.firstname}} {{appointment.patient.lastname}}</span>
                                    <span class="caption font-weight-bold grey--text">{{appointment.patient.job_title}}</span>
                                    <span class="caption font-weight-bold black--text">By: {{appointment.user.title}} {{appointment.user.firstname}} {{appointment.user.lastname}}</span>
                                    <div class="d-flex mt-1">
                                         <v-icon size="14" color="success darken-3 mr-1">mdi-check-bold</v-icon>
                                        <span class="grey--text caption font-weight-bold darken-10">Completed at {{appointment.completed_time | formatFullTime}}</span>
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
    </v-container>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import {Toast} from '../../app';
import moment from 'moment';

export default {
    data:() => ({
  
    }),
    created () {
        
    },
    computed:{
        ...mapGetters(['manage_completed_appointments']),
    },
    watch:{

    },
    filters:{
        formatDate(value){
            return moment(value).format('YY-MMM-Do');
        },
        formatTime(value){
            return moment(value).format('LT');
        },
        formatFullTime(value){
            return moment(value).format('LT');
        }
    },
    methods:{

        appontment_details(appointment){
            this.$router.push({name: 'manage_appointment_completed_details', params: {id: appointment.id}});
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
        getGenderColor(gender){
            if(gender === 'Male'){
                return 'primary'
            }else{
                return 'success'
            }
        },
        formatGender(gender){
            if(gender == 'Male'){
                return 'mdi-gender-male'
            }else{
                return 'mdi-gender-female'
            }
        },
        deleteItem(item){
            let index = this.manage_completed_appointments.indexOf(item);
            this.manage_completed_appointments.splice(index, 1);
            axios.delete('/api/delete_appointment/'+ item.id).then(response => {
                if(response.data.success){
                    Toast.fire({
                        icon: 'success',
                        title: 'Appointment removed'
                    });
                }
            })
        },
        clearAll(){
            this.appointments = [];
            axios.post('/clear_all').then(response => {
                if(response.data.success){
                    Toast.fire({
                        icon: 'success',
                        title: 'All Appointment cleared'
                    });
                }
            })
        }
    }
}
</script>

<style scoped>

</style>



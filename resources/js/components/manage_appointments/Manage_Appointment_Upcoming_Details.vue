<template>
    <v-container>
        <vue-topprogress ref="topProgress" color="#00C851" colorShadow="#00C851" :height="5" errorColor="#CC0000"></vue-topprogress>
        <v-row class="px-5 d-flex flex-column mt-3">
            <section class="d-flex">
                <span class="subtitle-1 font-weight-bold mt-2">User Profile</span>
                <v-btn tile depressed dark class="red darken-2 px-5 ml-auto" @click="goback">
                    <span class="caption">back</span>
                </v-btn>
            </section>
            <v-card class="mt-4" flat>
                <v-card-text>
                    <v-row>
                        <v-col cols="3" class="d-flex flex-column justify-center align-center">
                            <v-avatar size="120">
                                <v-img :src="getImage"/>
                            </v-avatar>
                            <h5 class="subtitle-1 font-weight-bold mt-2 " v-if="appointment">{{appointment.patient.title}} {{appointment.patient.firstname}} {{appointment.patient.lastname}}</h5>
                            <h5 class="subtitle-1 font-weight-bold">Status: {{getStatus}}</h5>
                        </v-col>
                        <v-col cols="9">
                            <p class="grey--text font-weight-light subtitle-2 mb-1">User Profile</p>
                            <v-divider />
                            <v-row>
                                <v-col cols="4">
                                    <h5 class="subtitle-2">Gender: <span class="font-weight-bold" v-if="appointment">{{appointment.patient.gender}}</span></h5>
                                </v-col>
                                <v-col cols="4">
                                    <h5 class="subtitle-2">Date of Birth: <span class="font-weight-bold" v-if="appointment">{{appointment.patient.dob | formatDob}}</span></h5>
                                </v-col>
                                <v-col cols="4">
                                    <h5 class="subtitle-2">Phone Number: <span class="font-weight-bold" v-if="appointment">{{formatPhone}}</span></h5>
                                </v-col>
                            </v-row>
                            <v-divider />
                            <v-row>
                                <v-col cols="4">
                                    <h5 class="subtitle-2">Email: <span class="font-weight-bold" v-if="appointment">{{appointment.patient.email}}</span></h5>
                                </v-col>
                                <v-col cols="4">
                                    <h5 class="subtitle-2">Job Title: <span class="font-weight-bold" v-if="appointment">{{appointment.patient.job_title}}</span></h5>
                                </v-col>
                                <v-col cols="4">
                                    <h5 class="subtitle-2">Address: <span class="font-weight-bold" v-if="appointment">{{appointment.patient.address}}</span></h5>
                                </v-col>
                            </v-row>
                            <v-divider />
                            <v-row class="mt-4">
                                <v-col cols="4">
                                    <v-btn rounded elevation="15" depressed dark class="success darken-2 px-7" @click="profile_details">
                                        <v-icon size="20" left>mdi-account-details</v-icon>
                                        <span class="caption">profile details</span>
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-row>
        <v-row class="px-5 d-flex flex-column mt-5">
            <span class="subtitle-1 font-weight-bold">User Appointment Information</span>
            <v-card class="mt-4" outlined>
                <v-card-title>
                    <v-btn rounded depressed class="info px-7" dark>
                        <span class="caption">Appointment Details</span>
                    </v-btn>
                </v-card-title>
                <v-card-text>
                     <v-simple-table>
                        <template v-slot:default>
                        <thead>
                            <tr>
                            <th class="text-left subtitle-2 font-weight-bold black--text">Specialist Name</th>
                            <th class="text-center subtitle-2 font-weight-bold black--text">Purpose</th>
                            <th class="text-center subtitle-2 font-weight-bold black--text">Date & Time</th>
                            <th class="text-center subtitle-2 font-weight-bold black--text">Status</th>
                            <th class="text-center subtitle-2 font-weight-bold black--text">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="d-flex">
                                    <v-avatar size="40">
                                        <v-img :src="getSpecialistImage" />
                                    </v-avatar>
                                    <span class="subtitle-2 font-weight-bold black--text mt-3 ml-3" v-if="appointment">{{appointment.user.title}} {{appointment.user.firstname}} {{appointment.user.lastname}}</span>
                                </td>
                                <td class="text-center"> 
                                    <span class="subtitle-2 font-weight-bold mt-3 ml-3" v-if="appointment">{{appointment.reason}}</span>
                                </td>
                                <td class="text-center"> 
                                    <span class="subtitle-2 font-weight-bold mt-3 ml-3" v-if="appointment">{{appointment.scheduled_date | formatDate}} {{appointment.scheduled_time | formatTime}}</span>
                                </td>
                                <td class="text-center"> 
                                    <span class="subtitle-2 font-weight-bold mt-3 ml-3">{{formatAppointmentStatus}}</span>
                                </td>
                                <td class="text-center"> 
                                    <v-tooltip top>
                                        <template v-slot:activator="{on}">
                                            <v-btn class="ma-2" v-on="on" fab dark color="red darken-2" x-small @click="cancel_appointment">
                                                <v-icon>mdi-close</v-icon>
                                            </v-btn>
                                        </template>
                                        <span class="caption">cancel</span>
                                    </v-tooltip>

                                    <v-tooltip top>
                                        <template v-slot:activator="{on}">
                                            <v-btn class="ma-2" v-on="on" fab dark color="warning darken-1" x-small @click="reschedule_appointment">
                                                <v-icon>mdi-swap-horizontal</v-icon>
                                            </v-btn>
                                        </template>
                                            <span class="caption">reschedule</span>
                                    </v-tooltip>
                                </td>
                            </tr>
                        </tbody>
                        </template>
                    </v-simple-table>
                </v-card-text>
            </v-card>
        </v-row>

    <v-dialog v-model="loading_dialog" hide-overlay persistent width="300">
        <v-card color="primary" dark>
            <v-card-text>
                <span class="caption font-italic">updating...</span>
                <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
            </v-card-text>
        </v-card>
    </v-dialog>

        <v-dialog v-model="reschedule_dialog" width="600" scrollable>
            <v-card>
                <v-card-title class="subtitle-1 font-weight-bold" primary-title> Reschedule Patient</v-card-title>
                <v-divider />
                <v-card-text style="height: 600px;">
                    <div>
                        <span class="subtitle-1 font-weight-bold d-block">Choose Type of Speciality</span>
                            <v-row>
                                <v-col cols="12">
                                    <v-chip-group v-model="speciality" active-class="white--text text--accent-4" row>
                                        <v-chip filter color="success darken-1" value="Doctor" class="ma-2" label>Doctor <v-icon size="18" right>mdi-stethoscope</v-icon></v-chip>
                                        <v-chip filter color="success darken-1" value="Lab" class="ma-2" label>Lab Technician <v-icon size="18" right>mdi-microscope</v-icon></v-chip>
                                    </v-chip-group>
                                </v-col>
                            </v-row>
                        </div>
                        <div>
                            <span class="subtitle-1 font-weight-bold d-block">Choose Speciality</span>
                            <v-row>
                                <v-col cols="12" v-if="doctors.length">
                                    <v-chip-group v-model="selection" active-class="success--text text--accent-4">
                                        <v-chip class="ma-2" v-for="doctor in doctors" :key="doctor.id" :value="doctor.id">
                                            <v-avatar left>
                                                <v-icon>mdi-account-circle</v-icon>
                                            </v-avatar>
                                            <span>{{doctor.title}} {{doctor.firstname}}</span>
                                            </v-chip>
                                    </v-chip-group>
                                </v-col>
                                <template v-else>
                                    <span class="ml-3"><i>Select Speciality type</i></span>
                                </template>   
                            </v-row>
                        </div>
                    <v-divider class="my-3"/>
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
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import {Toast} from '../../app';
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
        schedules:[],
        timings:[],
        appointment_day: null,
        appointment_time: null,
        selection:null,
        doctors:[],
        speciality: null,
    }),
    props:{
        id:[Number, String]
    },
    filters:{
        formatDate(value){
            return moment(value).format('YYYY-MMM-Do');
        },
        formatDob(value){
            return moment(value).format('YYYY MMM, Do');
        },
        formatTime(value){
            return moment(value).format('LT');
        }
    },
    watch:{
        appointment_day(){
            if(this.appointment_day !== null){
                this.getDoctorTime(this.appointment_day);
            }
        },
        speciality(){
            if(this.speciality === 'Doctor'){
                this.getDoctors();
            }else if(this.speciality === 'Lab'){
                this.getLabs();
            }
        },
        selection(){
            if(this.selection !== null){
                this.getDoctorSchedule(this.selection);
            }
        }
    },
    computed:{
        ...mapGetters(['manage_upcoming_appointments']),

        appointment(){
            return this.manage_upcoming_appointments.find(appointment => appointment.id == this.id);
        },
        getImage(){
            if(this.appointment){
                if(this.appointment.patient.image){
                    return '/patients/profiles/' + this.appointment.patient.image;
                }else{
                    if(this.appointment.patient.gender === 'Male'){
                        return '/app_asset/male_avatar.png'
                    }else{
                        return '/app_asset/undraw_female_avatar_l3ey.png'
                    }
                }
            }
        },
        getSpecialistImage(){
            if(this.appointment){
                if(this.appointment.user.image){
                    return '/staff/profiles/' + this.appointment.user.image;
                }else{
                    if(this.appointment.user.gender === 'Male'){
                        return '/app_asset/male-profile-2.jpg'
                    }else{
                        return '/app_asset/female-avatar.jpg'
                    }
                }
            }
        },
        getStatus(){
            if(this.appointment){
                if(this.appointment.patient.referred === 0){
                    return 'Active'
                }else{
                    return 'Referred'
                }
            }
        },
        formatPhone(){
            if(this.appointment){
                return '(+233)' + ' ' + this.appointment.patient.phone.slice(1, 10);
            }
        },
        formatAppointmentStatus(){
            if(this.appointment){
                if(this.appointment.completed === 0){
                    return 'pending';
                }else{
                    return 'completed';
                }
            }
        }
    },
    created () {
        
    },
    methods:{
        ...mapActions(['fetch_all_today', 'fetch_all_upcoming', 'fetch_all_canceled']),

        goback(){
            this.$router.go(-1);
        },
        profile_details(){
            this.$router.push({name: 'patient_details', params: {id: this.appointment.patient.id}});
        },
        getDoctors(){
            axios.get('/api/all_doctors').then(response => {
                this.doctors = response.data;
            });
        },
        getLabs(){
            axios.get('/api/all_labs').then(response => {
                this.doctors = response.data;
            });
        },
        
        getDoctorSchedule(id){
            axios.post('/api/doctor_schedule',{id:id}).then(response => {
                if(response.data.schedule){
                    this.schedules = [];
                    this.schedules = response.data.schedule;
                }
                if(response.data.no_schedules){
                    this.schedules = [];
                    Toast.fire({
                        icon: 'info',
                        title: 'No Available Schedules'
                    });
                }
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
            this.reschedule_dialog = true;
        },

        cancel_appointment(){
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
                    axios.patch('/api/cancel_appointment/' + this.appointment.id).then(response => {
                    if(response.data.success){
                        this.goback();
                        this.fetch_all_upcoming();
                        this.fetch_all_canceled();
                        this.$refs.topProgress.done();
                        this.loading_dialog = false;
                        var index = this.manage_today_appointments.indexOf(this.appointment);
                        this.manage_today_appointments.splice(index, 1);
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

        newBooked(){
            if(this.appointment_time === null && this.appointment_time === null && this.selection === null){
                Swal.fire(
                'Data Error',
                'No Time and Date Selected',
                'error'
                )
            }else{
                this.$refs.topProgress.start();
                this.loading_dialog = true;
                axios.patch('/api/manage_reschedule_appointment/'+ this.appointment.patient.id, {appointment_time: this.appointment_time, appointment_day: this.appointment_day, speciality: this.selection}).then(response => {
                    if(response.data.success){
                        this.goback();
                        this.$refs.topProgress.done();
                        this.loading_dialog = false;
                        this.fetch_all_today();
                        this.fetch_all_upcoming();
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
    mounted () {
        this.$refs.topProgress.start()
    
        // Use setTimeout for demo
        setTimeout(() => {
            this.$refs.topProgress.done()
        }, 1000)
    },
}
</script>
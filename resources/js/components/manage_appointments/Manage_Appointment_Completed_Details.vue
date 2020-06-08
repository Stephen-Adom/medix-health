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
                            <th class="text-center subtitle-2 font-weight-bold black--text">Completed</th>
                            <th class="text-center subtitle-2 font-weight-bold black--text">Completed At</th>
                            <th class="text-center subtitle-2 font-weight-bold black--text">Time Elapsed</th>
                            <th class="text-center subtitle-2 font-weight-bold black--text">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="d-flex">
                                    <v-avatar size="40">
                                        <v-img :src="getSpecialistImage" />
                                    </v-avatar>
                                    <span class="subtitle-2 font-weight-bold black--text ml-3" v-if="appointment">{{appointment.user.title}} {{appointment.user.firstname}} {{appointment.user.lastname}}</span>
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
                                    <span class="subtitle-2 font-weight-bold mt-3 ml-3">{{appointment.completed_time | formatTime}}</span>
                                </td>
                                <td class="text-center"> 
                                    <span class="subtitle-2 font-weight-bold mt-3 ml-3">{{timeElapsed}}</span>
                                </td>
                                <td class="text-center"> 
                                    <v-tooltip top>
                                        <template v-slot:activator="{on}">
                                            <v-btn class="ma-2" v-on="on" fab dark color="red darken-3" x-small @click="delete_appointment">
                                                <v-icon size="15">mdi-delete</v-icon>
                                            </v-btn>
                                        </template>
                                            <span class="caption">delete</span>
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
    }),
    props:{
        id:[Number, String]
    },
    filters:{
        formatDate(value){
            return moment(value).format('YY-MMM-Do');
        },
        formatDob(value){
            return moment(value).format('YYYY MMM, Do');
        },
        formatTime(value){
            return moment(value).format('LT');
        }
    },
    computed:{
        ...mapGetters(['manage_completed_appointments']),

        appointment(){
            return this.manage_completed_appointments.find(appointment => appointment.id == this.id);
        },
        getImage(){
            if(this.appointment){
                if(this.appointment.patient.image){
                    return '/storage/patients/profiles/' + this.appointment.patient.image;
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
                    return '/storage/profiles/' + this.appointment.user.image;
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
        },
        timeElapsed(){
            if(this.appointment){
                var a = moment(this.appointment.scheduled_time);
                var b = moment(this.appointment.completed_time);
                var hours = (b.diff(a, 'hours'));
                var minutes = (b.diff(a, 'minutes' ));
                var clearMinutes = minutes % 60;
                if(hours >= 1 ){
                    return hours + ' hours and ' + clearMinutes + ' minutes';
                }else{
                    return clearMinutes + 'minutes';
                }
                
            }
        }
    },
    methods:{
        ...mapActions(['fetch_all_completed']),

        goback(){
            this.$router.go(-1);
        },
        profile_details(){
            this.$router.push({name: 'patient_details', params: {id: this.appointment.patient.id}});
        },
        delete_appointment(){
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
                    axios.delete('/api/delete_appointment/' + this.appointment.id).then(response => {
                    if(response.data.success){
                        this.goback();
                        this.fetch_all_completed();
                        this.$refs.topProgress.done();
                        this.loading_dialog = false;
                        var index = this.manage_canceled_appointments.indexOf(this.appointment);
                        this.manage_canceled_appointments.splice(index, 1);
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
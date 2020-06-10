<template>
    <v-container>
        <vue-topprogress ref="topProgress" color="#00C851" colorShadow="#00C851" :height="5" errorColor="#CC0000"></vue-topprogress>
        <v-card class="pa-4" outlined>
            <v-card-title>
                <span class="subtitle-1 black--text font-weight-bold">Laboratory Examination</span> 
            </v-card-title>
            <v-divider />
            <v-card-text class="mt-2">
                <v-row>
                    <v-col cols="12">
                        <v-card flat>
                            <v-card-text class="pa-0">
                                <v-card class="pa-0">
                                    <v-card-title>
                                        <span class="subtitle-2 font-weight-bold">Appointment Lists</span>
                                    <v-spacer></v-spacer>
                                    <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
                                    </v-card-title>
                                    <v-data-table :headers="medical_headers" :items="all_Accepted_Appointment" :search="search" :loading="loadingData" v-if="all_Accepted_Appointment">
                                        <template v-slot:item.created_at = "{item}">
                                            <span>{{item.created_at | formatDate}}</span>    
                                        </template>
                                        <template v-slot:item.actions = "{item}">
                                            <v-tooltip top>
                                                <template v-slot:activator="{on}">
                                                    <v-btn class="ma-2" v-on="on" fab dark color="info darken-2" x-small @click="lab_access(item)" v-if="$gate.isLab()">
                                                        <v-icon size="18">mdi-account-search</v-icon>
                                                    </v-btn>
                                                </template>
                                                    <span class="caption">begin examination</span>
                                            </v-tooltip>

                                            <v-tooltip top>
                                                <template v-slot:activator="{on}">
                                                    <v-btn class="ma-2" v-on="on" fab dark color="success darken-2" x-small @click="complete_examination(item)" v-if="$gate.isLab()">
                                                        <v-icon size="18">mdi-check</v-icon>
                                                    </v-btn>
                                                </template>
                                                    <span class="caption">end appointment</span>
                                            </v-tooltip>
                                        </template>
                                        <template v-slot:item.name = "{item}">
                                            <div class="d-flex">
                                                <v-avatar size="50">
                                                    <v-img :src="getImage(item)" />
                                                </v-avatar>
                                                <div class="d-flex flex-column">
                                                    <span class="subtitle-2 font-weight-bold black--text mt-3 ml-3">{{item.patient.title}} {{item.patient.firstname}} {{item.patient.lastname}}</span>
                                                    <span class="caption font-weight-bold grey--text ml-3">{{item.patient.job_title}}</span>
                                                </div> 
                                            </div>  
                                        </template>
                                        <template v-slot:item.date = "{item}">
                                            <span class="subtitle-2 font-weight-regular black--text mt-3">{{item.scheduled_date | formatDate}}</span>  
                                        </template>
                                        <template v-slot:item.time= "{item}">
                                            <span class="subtitle-2 font-weight-regular black--text mt-3">{{item.scheduled_time | formatTime}}</span>  
                                        </template>
                                        <template v-slot:item.completed_on = "{item}">
                                            <span class="subtitle-2 font-weight-regular black--text mt-3">{{formatCompleteDate(item)}}</span>  
                                        </template>
                                        <template v-slot:item.completed = "{item}">
                                            <span class="subtitle-2 font-weight-regular black--text mt-3">{{formatComplete(item)}}</span>  
                                        </template>
                                        <template v-slot:item.reason = "{item}">
                                            <span class="subtitle-2 font-weight-regular black--text mt-3">{{item.reason}}</span>  
                                        </template>
                                    </v-data-table>
                                </v-card>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import {Toast} from '../app';
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

export default {
    data:() => ({
        report: null,
        report_dialog: false,
        loadingData: false,
        search: '',
        medical_headers: [
          {
            text: 'Patient Name',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'App Date', value: 'date' },
          { text: 'App Reason', value: 'reason' },
          { text: 'App Time', value: 'time' },
          { text: 'Completed On', value: 'completed_on' },
          { text: 'Status', value: 'completed' },
          { text: 'Actions', value: 'actions', align: 'center', },
        ],
        show_prescription_items: null,
    }),
    computed:{
        ...mapGetters(['all_Accepted_Appointment']),
        formatContact(){
            if(this.report !== null){
                let phone = this.report.patient.phone;
                let new_str = phone.slice(1);
                return '(+233)'+ ' '+ new_str;
            }
        }
    },
    created(){
        this.loadingData = true;
        this.fetch_Accepted_Appointment();
    },
    mounted(){
        this.$refs.topProgress.start()
 
    },
    watch:{
        all_Accepted_Appointment(){
            if(this.all_Accepted_Appointment.length){
                this.$refs.topProgress.done();
                this.loadingData = false;
            }else{
                this.$refs.topProgress.done();
                this.loadingData = false;
            }
        }
    },
    methods:{
        ...mapActions(['fetch_Accepted_Appointment', 'fetchCompletedAppointment']),

        lab_access(item){
            this.$router.push({name: 'lab-tests-result', params: {id: item.id}});
        },

        complete_examination(item){
            this.$refs.topProgress.start();
            swalWithBootstrapButtons.fire({
                title: 'Are you sure?',
                text: "The selected appointment will marked as Complete!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'End Session!',
                cancelButtonText: 'No, Continue!',
                reverseButtons: true
                }).then((result) => {
                if (result.value) {
                    this.loading_dialog = true;
                    axios.patch('/api/complete_appointment/' + item.id).then(response => {
                    if(response.data.success){
                        this.fetchCompletedAppointment();
                        this.$refs.topProgress.done();
                        this.loading_dialog = false;
                        var index = this.all_Accepted_Appointment.indexOf(item);
                        this.all_Accepted_Appointment.splice(index, 1);
                        swalWithBootstrapButtons.fire(
                            'Success!',
                            'Appointment has been Completed.',
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
                    'Canceled',
                    'The Appointment Process is Canceled :)',
                    'info'
                    )
                }
            }) 
        },
        view_prescription(item){
            this.prescription_dialog = true;
            this.map_prescriptions(item.prescriptions);
        },
        getImage(item){
            if(item.patient.image){
                return '/patients/profiles/' + item.patient.image;
            }else{
                if(item.patient.gender === 'Male'){
                    return '/app_asset/male_avatar.png'
                }else{
                    return '/app_asset/undraw_female_avatar_l3ey.png'
                }
            }
        },
        formatCompleteDate(item){
            if(item.completed_time){
                return moment(item.completed_time).format('LT')
            }else{
                return 'Not Set'
            }
        },
        formatComplete(item){
            if(item.completed === 0){
                return 'Pending'
            }else{
                return 'Completed'
            }
        },
        map_prescriptions(data){
            this.show_prescription_items = data.prescriptions.map(item => {
                return {
                    'afternoon_time': item.afternoon_time,
                    'dosage': item.dosage,
                    'end_course': item.end_course,
                    'start_course': item.start_course,
                    'evening_time': item.evening_time,
                    'morning_time': item.morning_time,
                    'drug_name': item.drug_name.split(" "),
                }
            });
        },
        generate_report(item){
            this.report = item;
            this.map_prescriptions(item);
            if(this.report){
                this.report_dialog = true;
            }
        }
    },
    filters:{
        formatDate(value){
            return moment(value).format('MMMM-Do-YYYY');
        },
        formatTime(value){
            return moment(value).format('LT');
        }
    },
}
</script>

<style scoped>
  #info {
    text-align: center !important;
  }
  .border-line {
    border-bottom: 2px solid rgba(0, 126, 46, 1);
  }
</style>
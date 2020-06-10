<template>
    <v-container fluid>
        <vue-topprogress ref="topProgress" color="#00C851" colorShadow="#00C851" :height="5" errorColor="#CC0000"></vue-topprogress>
        <v-card outlined>
            <v-card-title>
                <v-icon class="mr-2">mdi-exit-run</v-icon>
                <span class="subtitle-2 font-weight-bold text-uppercase">Referred Patients</span>
                <v-spacer />
                <v-btn rounded color="red darken-3" dark class="px-6" elevation="15" @click="referPatient" v-if="$gate.isDoctor()">
                    <span class="caption font-weight-bold">Refer patient</span>
                </v-btn>
            </v-card-title>
            <v-divider />
            <v-card-text>
                <v-data-table ref="referredData" :headers="headers" :items="allReferrals" sort-by="full_name" class="elevation-0" :search="search" :loading ="loadingData" loading-text="Loading... Please wait">
                    <template v-slot:top>
                    <v-toolbar flat color="white">
                        <v-toolbar-title>Referred Patients</v-toolbar-title>
                        <v-divider class="mx-4" inset vertical></v-divider>
                        <v-spacer></v-spacer>
                        <v-text-field color="success" v-model="search" label="Who are you looking for?" class="mx-4 mt-2" append-icon="mdi-magnify"/>
                    </v-toolbar>
                    </template>
                    <template v-slot:item.name="{ item }">
                        <div class="d-flex">
                            <div>
                                <v-avatar>
                                    <v-img :src="getImage(item)" />
                                </v-avatar>
                            </div>
                            <div class="mt-3">
                                <span class="font-weight-bold subtitle-2 ml-1">{{item.patient.title}} {{item.patient.firstname}} {{item.patient.lastname}}</span>
                            </div>
                        </div>
                    </template>
                    <template v-slot:item.email="{ item }">
                        <span>{{item.patient.email}}</span>
                    </template>
                    <template v-slot:item.referred_date="{ item }">
                        <span>{{item.referred_date | formatDate}}</span>
                    </template>
                    <template v-slot:item.actions="{ item }">
                        <v-tooltip top>
                        <template v-slot:activator="{ on }">
                            <v-btn icon color="info darken-1" v-on="on" @click="open_report(item)" small>
                                <v-icon >mdi-flash-circle</v-icon>
                            </v-btn>
                        </template>
                        <span class="caption">View Report</span>
                        </v-tooltip>

                        <v-tooltip top>
                            <template v-slot:activator="{on}">
                                <v-btn icon color="red darken-2" v-on="on" @click="deleteApplication(item)" v-if="!$gate.isNurse()" small>
                                    <v-icon> mdi-delete</v-icon>
                                </v-btn>
                            </template>
                            <span class="caption">Delete application</span>
                        </v-tooltip>
                        
                        <v-tooltip top>
                            <template v-slot:activator="{on}">
                                <v-btn icon color="success darken-2" v-on="on" @click="undoApplication(item)" v-if="!$gate.isNurse()" small>
                                    <v-icon> mdi-restore</v-icon>
                                </v-btn>
                            </template>
                            <span class="caption">undo application</span>
                        </v-tooltip>
                    </template>
                </v-data-table>
            </v-card-text>
        </v-card>

        <v-dialog v-model="report_dialog" fullscreen hide-overlay transition="dialog-bottom-transition" id="referal_report_dialog">
            <html id="print_body_form">
                <body>
                    <v-card>
                        <v-toolbar flat class="print_preview_toolbar">
                            <v-btn icon @click="report_dialog = false">
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                            <v-toolbar-title class="subtitle-2 font-weight-bold text-uppercase">Referral Report</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-toolbar-items>
                                <v-btn icon color="pink" @click="print_form">
                                    <v-icon color="success darken-2">mdi-printer</v-icon>
                                </v-btn>
                            </v-toolbar-items>
                        </v-toolbar>
                        <v-divider inset class="form-divider" />
                        <v-container>
                            <v-form ref="referralForm">
                                <v-row align="center" class="flex-column">
                                    <v-img src="/app_asset/medix_full.png" width="200" />
                                    <h3 class="title mt-2 text-uppercase font-weight-bold">Patient Referral Form</h3>
                                    <h3 class="subtitle-2 mt-0 text-uppercase font-weight-bold">Contact: +233 54 043 0893</h3>
                                </v-row>
                                    <!-- Patient Info -->
                                    <v-card class="mt-5" flat v-if="patient">
                                    <v-card-title class="subtitle-1 font-weight-bold success--text darken-2">Patient Information</v-card-title>
                                    <v-card-text>
                                        <v-row>
                                        <v-col cols="12">
                                            <v-text-field label="Patient's Full Name" color="success darken-2" :value="patient_full_name" outlined rounded readonly></v-text-field>
                                        </v-col>
                                        </v-row>

                                        <v-row>
                                        <v-col cols="6" lg="6">
                                            <v-text-field label="Patient's Contact" color="success darken-2" outlined rounded readonly :value="patient.patient.phone"></v-text-field>
                                        </v-col>
                                        <v-col cols="6" lg="6">
                                            <v-text-field label="Patient's Email" color="success darken-2" outlined rounded readonly :value="patient.patient.email"></v-text-field>
                                        </v-col>
                                        </v-row>

                                        <v-row>
                                        <v-col cols="6" lg="6">
                                            <v-text-field label="Patient's Age" color="success darken-2" outlined rounded readonly :value="patient.patient.age"></v-text-field>
                                        </v-col>
                                        <v-col cols="6" lg="6">
                                            <v-text-field label="Patient's Gender" color="success darken-2" outlined rounded readonly :value="patient.patient.gender"></v-text-field>
                                        </v-col>
                                        </v-row>

                                        <v-row>
                                        <v-col cols="4" lg="4">
                                            <v-text-field label="Patient's Job Title" color="success darken-2" outlined rounded readonly :value="patient.patient.job_title"></v-text-field>
                                        </v-col>
                                        <v-col cols="4" lg="4" v-if="patient.patient.department">
                                            <v-text-field label="Patient Department" color="success darken-2" outlined rounded readonly :value="patient.patient.department"></v-text-field>
                                        </v-col>
                                        <v-col cols="4" lg="4" v-if="patient.patient.employee_type">
                                            <v-text-field label="Type of Employee" color="success darken-2" outlined rounded readonly :value="patient.patient.employee_type"></v-text-field>
                                        </v-col>
                                        </v-row>
                                    </v-card-text>
                                    </v-card>
                                    
                                    <!-- Patient Medical Information -->
                                    <v-card flat v-if="patient">
                                        <v-card-title class="subtitle-1 font-weight-bold success--text darken-2">Patient Medical Information</v-card-title>
                                        <v-card-text>
                                            <v-row>
                                            <v-col cols="12" >
                                                <v-textarea label="Reason for Referral" readonly color="success darken-2" height="100" :value="patient.referred_reason"></v-textarea>
                                            </v-col>
                                            <v-col cols="12">
                                                <h5 class="pl-5">Undergone Surgery?
                                                    <span class="font-weight-bold ml-2" v-if="patient.surgery === 1">Yes</span>
                                                    <span class="font-weight-bold ml-2" v-if="patient.surgery === 0">No</span>    
                                                </h5>
                                                
                                            </v-col>
                                            </v-row>

                                            <v-row>
                                            <v-col cols="6" lg="6">
                                                <v-text-field label="Diagnosis" rounded outlined readonly color="success darken-2" :value="patient.diagnosis"></v-text-field>
                                            </v-col>
                                            <v-col cols="6" lg="6">
                                                <v-text-field label="Medication" rounded outlined readonly color="success darken-2" :value="patient.medication"></v-text-field>
                                            </v-col>
                                            </v-row>
                                        </v-card-text>
                                    </v-card>

                                        <v-divider inset />

                                        <!-- Patient Referral Information -->
                                    <v-card flat v-if="patient">
                                        <v-card-title class="subtitle-1 font-weight-bold success--text darken-2">Referred By</v-card-title>
                                        <v-card-text>
                                        <v-row>
                                            <v-col cols="6" lg="6">
                                                <v-text-field label="Referred By" outlined readonly rounded color="success darken-2" :value="user_full_name"></v-text-field>
                                            </v-col>
                                            <v-col cols="6" lg="6">
                                                <v-text-field label="Referral Contact" outlined readonly rounded color="success darken-2" :value="patient.user.phone"></v-text-field>
                                            </v-col>
                                        </v-row>

                                        <v-row>
                                            <v-col cols="6" lg="6">
                                                <v-text-field label="Hospital" outlined rounded readonly color="success darken-2" :value="patient.referred_from"></v-text-field>
                                            </v-col>
                                            <v-col cols="3" lg="3">
                                                <v-text-field label="Referral Date" outlined rounded readonly color="success darken-2" :value="getDate"></v-text-field>
                                            </v-col>
                                            <v-col cols="3" lg="3">
                                                <v-text-field label="Referral Time" outlined rounded readonly color="success darken-2" :value="getTime"></v-text-field>
                                            </v-col>
                                        </v-row>

                                        <v-row>
                                            <v-col cols="6" lg="6">
                                                <v-text-field label="Doctor Referred To" readonly outlined rounded color="success darken-2" :value="patient.referred_to"></v-text-field>
                                            </v-col>
                                            <v-col cols="6" lg="6">
                                                <v-text-field label="Hospital Referred To" readonly outlined rounded color="success darken-2" :value="patient.referred_hospital"></v-text-field>
                                            </v-col>
                                        </v-row>
                                        </v-card-text>
                                        <v-divider />
                                        <v-card-actions>
                                            <v-btn class="px-5 mx-2 print_btn" dark color="info darken-1" rounded elevation="15" @click="print_form">
                                            <v-icon left size="20">mdi-printer</v-icon>
                                            <span class="caption font-weight-bold">Print Report</span>
                                            </v-btn>
                                            <v-spacer />
                                        </v-card-actions>
                                </v-card>
                            </v-form>
                        </v-container>
                    </v-card>
                </body>
            </html>    
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
    data:() => ({
        report_dialog: false,
        patients: [],
        search:'',
        loadingData:false,
        headers: [
        {
          text: 'Patient Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Patient Email', value: 'email' },
        { text: 'Hospital Referred To', value: 'referred_hospital' },
        { text: 'Doctor Referred To', value: 'referred_to' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      patient:null,
      patient_full_name: null,
      user_full_name: null,
    }),
    watch:{
        allReferrals(){
            if(this.allReferrals.length){
                this.loadingData = false;
                this.$refs.topProgress.done();
            }else{
                this.loadingData = false;
                this.$refs.topProgress.done();
            }
        }
    },
    computed:{
        ...mapGetters(['allReferrals']),

        getDate(){
            if(this.patient){
                return moment(this.patient.referred_date).format('MMMM Do YYYY');
            }
        },
        getTime(){
            if(this.patient){
                return moment(this.patient.referred_date).format('LT');
            }
        }
    },
    mounted () {
        this.$refs.topProgress.start()
    
    },
    methods:{
        ...mapActions(['fetchReferrals']),

        print_form(){
            window.print();
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

        referPatient(){
            this.$router.push({name: 'patients'});
        },
        deleteApplication(item){
            swalWithBootstrapButtons.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel!',
          reverseButtons: true
        }).then((result) => {
          if (result.value) {
            var index = this.patients.indexOf(item);
            this.patients.splice(index, 1);

            axios.post('/api/delete_referral', {id: item.id}).then(response => {
              if(response.data.success){
                swalWithBootstrapButtons.fire(
                  'Deleted!',
                  'Referral Application deleted.',
                  'success'
                )
              }
            })
            
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              'Cancelled',
              'Your Message(s) are safe :)',
              'info'
            )
          }
        }) 
    },
    undoApplication(item){
        swalWithBootstrapButtons.fire({
          title: 'Are you sure?',
          text: "The Patient's Referral Status would be reverted",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, revert!',
          cancelButtonText: 'No, cancel!',
          reverseButtons: true
        }).then((result) => {
          if (result.value) {
            axios.post('/api/undo_referral', {id: item.patient.id}).then(response => {
              if(response.data.success){
                swalWithBootstrapButtons.fire(
                  'Updated!',
                  'Patient\'s Referred Status Changed.',
                  'success'
                );
              }
            });
            
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              'Cancelled',
              'Application process cancelled',
              'info'
            )
          }
        }) 
    },
    open_report(item){
        this.report_dialog = true;
        this.patient_full_name = item.patient.title + " " + item.patient.firstname + " " + item.patient.lastname;
        this.user_full_name = item.user.title + " " + item.user.firstname + " " + item.user.lastname;
        this.patient = item;
    }

    },
    created(){
        this.loadingData = true;
        this.fetchReferrals();
    },
    filters:{
        formatDate(value){
            return moment(value).format('MMMM Do YYYY');
        },
        formatVitalDate(value){
            return moment(value).format('MMMM Do, YYYY');
        },
        formatTime(value){
            return moment(value).format('LT');
        }
    },
}
</script>

<style scoped>

</style>
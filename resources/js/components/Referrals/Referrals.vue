<template>
  <v-app>
    <v-container>
      <v-form ref="referralForm">
      <v-toolbar flat>
        <v-spacer />
        <v-btn class="mx-2" fab dark color="success darken-2" @click="goback">
          <v-icon dark>mdi-chevron-double-left</v-icon>
        </v-btn>
      </v-toolbar>
      <v-row align="center" class="flex-column">
        <v-img src="/app_asset/medix_full.png" width="200" />
        <h3 class="subtitle-2 mt-2 text-uppercase font-weight-bold">Patient Referral Form</h3>
      </v-row>

      <v-card class="pa-3" outlined>
        <!-- Patient Info -->
        <v-card class="mt-5" flat v-if="patient" outlined>
          <v-card-title class="subtitle-1 font-weight-bold success--text darken-2">Patient Information</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Patient's Full Name" color="success darken-2" outlined rounded readonly :value="getFullName"></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" lg="6">
                <v-text-field label="Patient's Contact" color="success darken-2" v-model="patient.phone" outlined rounded readonly></v-text-field>
              </v-col>
              <v-col cols="12" lg="6">
                <v-text-field label="Patient's Email" color="success darken-2" v-model="patient.email" outlined rounded readonly></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" lg="6">
                <v-text-field label="Patient's Age" color="success darken-2" v-model="patient.age" outlined rounded readonly></v-text-field>
              </v-col>
              <v-col cols="12" lg="6">
                <v-text-field label="Patient's Gender" color="success darken-2" v-model="patient.gender" outlined rounded readonly></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" lg="4">
                <v-text-field label="Patient's Job Title" color="success darken-2" v-model="patient.job_title" outlined rounded readonly></v-text-field>
              </v-col>
              <v-col cols="12" lg="4" v-if="patient.department">
                <v-text-field label="Patient Department" color="success darken-2" v-model="patient.department" outlined rounded readonly></v-text-field>
              </v-col>
              <v-col cols="12" lg="4" v-if="patient.employee_type">
                <v-text-field label="Type of Employee" color="success darken-2" v-model="patient.employee_type" outlined rounded readonly></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <v-divider inset />

        
          <!-- Patient Medical Information -->
            <v-card flat>
              <v-card-title class="subtitle-1 font-weight-bold success--text darken-2">Patient Medical Information</v-card-title>
              <v-card-text>
                <v-row>
                  <v-col cols="12">
                    <v-textarea label="Reason for Referral" color="success darken-2" :rules="inputRules" outlined height="150" v-model="referral.reason"></v-textarea>
                  </v-col>
                  <v-col cols="12">
                    <h5 class="pl-5">Undergone Surgery?</h5>
                    <v-radio-group class="mt-0 pl-3" v-model="referral.surgery" row :rules="inputRules">
                      <v-radio label="Yes" value="1" color="success darken-2"></v-radio>
                      <v-radio label="No" value="0" colr="red"></v-radio>
                    </v-radio-group>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" lg="6">
                    <v-text-field label="Diagnosis" rounded outlined color="success darken-2" :rules="inputRules" v-model="referral.diagnosis"></v-text-field>
                  </v-col>
                  <v-col cols="12" lg="6">
                    <v-text-field label="Medication" v-model="referral.medication" :rules="inputRules" rounded outlined color="success darken-2"></v-text-field>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>

            <v-divider inset />

            <!-- Patient Referral Information -->
          <v-card flat v-if="getUser">
            <v-card-title class="subtitle-1 font-weight-bold success--text darken-2">Referred By</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" lg="6">
                    <v-text-field label="Referred By" outlined rounded v-model="specialist_name" color="success darken-2" readonly></v-text-field>
                </v-col>
                <v-col cols="12" lg="6">
                    <v-text-field label="Referral Contact" :value="getUser.phone" outlined rounded color="success darken-2"></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" lg="6">
                    <v-text-field label="Hospital" outlined rounded readonly v-model="hospital_name" color="success darken-2"></v-text-field>
                </v-col>
                <v-col cols="12" lg="3">
                    <v-text-field label="Referral Date" outlined rounded readonly v-model="referred_date" color="success darken-2"></v-text-field>
                </v-col>
                <v-col cols="12" lg="3">
                    <v-text-field label="Referral Time" outlined rounded readonly v-model="referred_time" color="success darken-2"></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" lg="6">
                    <v-text-field label="Doctor Referred To" :rules="inputRules"  outlined rounded color="success darken-2" v-model="referral.to_doctor" ></v-text-field>
                </v-col>
                <v-col cols="12" lg="6">
                    <v-text-field label="Hospital Referred To" :rules="inputRules" outlined rounded color="success darken-2" v-model="referral.to_hospital"></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
            <v-divider />
            <v-card-actions>
                <v-btn class="px-5 mx-2" dark color="info darken-1" rounded elevation="15" @click="view_report">
                  <v-icon left size="20">mdi-flash-circle</v-icon>
                  <span class="caption font-weight-bold">View Report</span>
                </v-btn>
                <v-btn class="px-5 mx-2" dark color="success darken-2" rounded elevation="15" @click="submitReport">
                  <span class="caption font-weight-bold">Submit Details</span>
                </v-btn>
                <v-spacer />
            </v-card-actions>
       </v-card>
      </v-card>
      </v-form>
    </v-container>

          <v-dialog v-model="report_dialog" fullscreen hide-overlay transition="dialog-bottom-transition" id="print_dialog">
              <v-card>
                  <v-toolbar flat class="print_preview_toolbar">
                      <v-btn icon @click="report_dialog = false">
                          <v-icon>mdi-close</v-icon>
                      </v-btn>
                      <v-toolbar-title class="subtitle-2 font-weight-bold text-uppercase">Referral Report</v-toolbar-title>
                      <v-spacer></v-spacer>
                      <v-toolbar-items>
                          <v-btn icon color="pink">
                              <v-icon color="success darken-2">mdi-printer</v-icon>
                          </v-btn>
                      </v-toolbar-items>
                  </v-toolbar>
                  <v-divider inset />
                  <v-container>
                      <v-form ref="referralForm">
                          <v-row align="center" class="flex-column">
                              <v-img src="/app_asset/medix_full.png" width="200" />
                              <h3 class="title mt-2 text-uppercase font-weight-bold">Patient Referral Form</h3>
                              <h3 class="subtitle-2 mt-0 text-uppercase font-weight-bold">Contact: +233 54 043 0893</h3>
                          </v-row>
                              <!-- Patient Info -->
                              <v-card class="mt-5" flat outlined v-if="patient">
                              <v-card-title class="subtitle-1 font-weight-bold success--text darken-2">Patient Information</v-card-title>
                              <v-card-text>
                                  <v-row>
                                  <v-col cols="12">
                                      <v-text-field label="Patient's Full Name" color="success darken-2" :value="patient_full_name" outlined rounded readonly></v-text-field>
                                  </v-col>
                                  </v-row>

                                  <v-row>
                                  <v-col cols="12" lg="6">
                                      <v-text-field label="Patient's Contact" color="success darken-2" outlined rounded readonly :value="patient.phone"></v-text-field>
                                  </v-col>
                                  <v-col cols="12" lg="6">
                                      <v-text-field label="Patient's Email" color="success darken-2" outlined rounded readonly :value="patient.email"></v-text-field>
                                  </v-col>
                                  </v-row>

                                  <v-row>
                                  <v-col cols="12" lg="6">
                                      <v-text-field label="Patient's Age" color="success darken-2" outlined rounded readonly :value="patient.age"></v-text-field>
                                  </v-col>
                                  <v-col cols="12" lg="6">
                                      <v-text-field label="Patient's Gender" color="success darken-2" outlined rounded readonly :value="patient.gender"></v-text-field>
                                  </v-col>
                                  </v-row>

                                  <v-row>
                                  <v-col cols="12" lg="4">
                                      <v-text-field label="Patient's Job Title" color="success darken-2" outlined rounded readonly :value="patient.job_title"></v-text-field>
                                  </v-col>
                                  <v-col cols="12" lg="4" v-if="patient">
                                      <v-text-field label="Patient Department" color="success darken-2" outlined rounded readonly :value="patient.department"></v-text-field>
                                  </v-col>
                                  <v-col cols="12" lg="4" v-if="patient">
                                      <v-text-field label="Type of Employee" color="success darken-2" outlined rounded readonly :value="patient.employee_type"></v-text-field>
                                  </v-col>
                                  </v-row>
                              </v-card-text>
                              </v-card>
                              
                              <!-- Patient Medical Information -->
                              <v-card flat v-if="report !== null">
                                  <v-card-title class="subtitle-1 font-weight-bold success--text darken-2">Patient Medical Information</v-card-title>
                                  <v-card-text>
                                      <v-row>
                                      <v-col cols="12" >
                                          <v-textarea label="Reason for Referral" readonly color="success darken-2" outlined height="150" :value="report.referred_reason"></v-textarea>
                                      </v-col>
                                      <v-col cols="12">
                                          <h5 class="pl-5">Undergone Surgery?
                                              <span class="font-weight-bold ml-2" v-if="report.surgery === 1">Yes</span>
                                              <span class="font-weight-bold ml-2" v-if="report.surgery === 0">No</span>    
                                          </h5>
                                          
                                      </v-col>
                                      </v-row>

                                      <v-row>
                                      <v-col cols="12" lg="6">
                                          <v-text-field label="Diagnosis" rounded outlined readonly color="success darken-2" :value="report.diagnosis"></v-text-field>
                                      </v-col>
                                      <v-col cols="12" lg="6">
                                          <v-text-field label="Medication" rounded outlined readonly color="success darken-2" :value="report.medication"></v-text-field>
                                      </v-col>
                                      </v-row>
                                  </v-card-text>
                              </v-card>

                                  <v-divider inset />

                                  <!-- Patient Referral Information -->
                              <v-card flat v-if="report !== null">
                                  <v-card-title class="subtitle-1 font-weight-bold success--text darken-2">Referred By</v-card-title>
                                  <v-card-text>
                                  <v-row>
                                      <v-col cols="12" lg="6">
                                          <v-text-field label="Referred By" outlined readonly rounded color="success darken-2" :value="referrer"></v-text-field>
                                      </v-col>
                                      <v-col cols="12" lg="6">
                                          <v-text-field label="Referral Contact" outlined readonly rounded color="success darken-2" :value="report.user.phone"></v-text-field>
                                      </v-col>
                                  </v-row>

                                  <v-row v-if="report !== null">
                                      <v-col cols="12" lg="6">
                                          <v-text-field label="Hospital" outlined rounded :value="report.referred_from" readonly color="success darken-2"></v-text-field>
                                      </v-col>
                                      <v-col cols="12" lg="3">
                                          <v-text-field label="Referral Date" outlined rounded readonly color="success darken-2" :value="getDate"></v-text-field>
                                      </v-col>
                                      <v-col cols="12" lg="3">
                                          <v-text-field label="Referral Time" outlined rounded readonly color="success darken-2" :value="getTime"></v-text-field>
                                      </v-col>
                                  </v-row>

                                  <v-row v-if="report !== null">
                                      <v-col cols="12" lg="6">
                                          <v-text-field label="Doctor Referred To" :value="report.referred_to" readonly outlined rounded color="success darken-2" ></v-text-field>
                                      </v-col>
                                      <v-col cols="12" lg="6">
                                          <v-text-field label="Hospital Referred To" :value="report.referred_hospital" readonly outlined rounded color="success darken-2"></v-text-field>
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
            </v-dialog>
          <v-dialog v-model="loading_dialog" hide-overlay persistent width="300">
            <v-card color="teal" dark>
              <v-card-text>
                <span class="subtitle-2 font-weight-light font-italic">submitting data. Please wait...</span>  
                <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
              </v-card-text>
            </v-card>
          </v-dialog>
  </v-app>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'App',
  data: () => ({
    loading_dialog: false,
      report_dialog: false,
      surgery: '',
      specialist_name:'',
      hospital_name: 'Medix Digital Hospital',
      referred_date: moment().format("MMMM Do, YYYY"),
      referred_time: moment().format("LT"),
      referral: {
        reason:'',
        surgery:'',
        diagnosis:'',
        medication:'',
        to_hospital:'',
        to_doctor:'',
      },
      inputRules: [
        (v) => !!v || 'Field is required',
      ],
      report: null,
  
  }),
  props:{
    id:[Number]
  },
  watch:{
    getUser(){
      if(this.getUser){
        this.specialist_name = this.getUser.title + " " + this.getUser.firstname + " " + this.getUser.lastname
      }
    }
  },
  computed:{
    ...mapGetters(['Patients', 'getUser']),
    patient(){
      return this.Patients.find(data => data.id == this.id);
    },
    getFullName(){
      if(this.getUser){
        return this.getUser.title + " " + this.getUser.firstname + " " + this.getUser.lastname;
      }
    },
    patient_full_name(){
      if(this.patient){
        return this.patient.title + " " + this.patient.firstname + " " + this.patient.lastname;
      }
    },
    referrer(){
      if(this.report !== null ){
        return this.report.user.title + " " + this.report.user.firstname + " " + this.report.user.lastname;
      }
    },
    getDate(){
        if(this.report !== null){
                return moment(this.report.referred_date).format('MMMM Do YYYY');
            }
        },
    getTime(){
            if(this.patient){
                return moment(this.report.referred_date).format('LT');
            }
        }

  },
  methods:{
    ...mapActions(['fetchPatients', 'fetchUser']),

      print_form(){
          window.print();
      },

    goback(){
      this.$router.go(-1);
    },
    submitReport(){
      if(this.$refs.referralForm.validate()){
        this.loading_dialog = true;
        axios.post('/submit_referral', {id: this.patient.id, data: this.referral, hospital: this.hospital_name}).then(response => {
          if(response.data.success){
            this.loading_dialog = false;
            this.report = response.data.data;
            Swal.fire(
              'Form Completed',
              'Referral Submission Form Completed',
              'success'
            )
          }
        });
      }else{
        Swal.fire(
					'Input Error',
					'Enter the remaining field before submission',
					'error'
				)
      }
    },
    view_report(){
      if(this.report !== null){
        this.report_dialog = true;
      }else{
        Swal.fire(
					'No Data Entry',
					'Enter the data before submission',
					'error'
				)
      }
    }
  },
  mounted(){
    this.fetchPatients();
    this.fetchUser();
  }

};
</script>

<style scoped>
  
</style>

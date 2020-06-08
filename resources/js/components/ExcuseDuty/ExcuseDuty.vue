<template>
  <v-app>
    <v-container>
      <v-toolbar flat>
        <v-spacer />
        <v-btn class="mx-2" fab dark color="success darken-2" elevation="15" @click="goback">
          <v-icon dark>mdi-chevron-double-left</v-icon>
        </v-btn>
      </v-toolbar>
      <v-row align="center" class="flex-column">
        <v-img src="/app_asset/medix_full.png" width="200" />
        <h6 class="title mt-5 text-uppercase">Staff Excuse Duty Form</h6>
      </v-row>
      <v-card>
        <!-- Staff Info -->
        <v-card class="mt-7" flat>
          <v-card-title class="title green--text darken-3">Staff Information</v-card-title>
          <v-card-text >
            <v-row>
              <v-col cols="12" lg="6">
                <v-text-field
                  label="Staff First Name" :value="patient.firstname" outlined rounded readonly></v-text-field>
              </v-col>
              <v-col cols="12" lg="6">
                <v-text-field label="Staff Last Name" :value="patient.lastname" outlined rounded readonly></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" lg="6">
                <v-text-field label="Patient's Contact" :value="patient.phone" outlined rounded readonly></v-text-field>
              </v-col>
              <v-col cols="12" lg="6">
                <v-text-field label="Patient's Email" outlined :value="patient.email" rounded readonly></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" lg="6">
                <v-text-field label="Gender" :value="patient.gender" outlined rounded readonly></v-text-field>
              </v-col>
              <v-col cols="12" lg="6">
                <v-text-field label="Staff Job Title" :value="patient.job_title" outlined rounded readonly></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <v-divider inset />

        <v-form ref="excuseForm">
          <!-- Staff Occupational Information -->
        <v-card flat>
          <v-card-title class="title green--text darken-3">Staff Occupational Information</v-card-title>
          <v-card-text>
            <v-row class="no-gutters">
              <v-col cols="12" lg="5" class="pl-5">
                <h5 class="pt-4">Department / Unit :</h5>
              </v-col>
              <v-col cols="12" lg="7">
                <v-text-field :value="patient.department" outlined rounded readonly></v-text-field>
              </v-col>
            </v-row>

            <v-row class="no-gutters">
              <v-col cols="12" lg="5" class="pl-5">
                <h5 class="pt-1">Have you already taken your annual leave?</h5>
              </v-col>
              <v-col cols="12" lg="7">
                <v-radio-group class="mt-0 pl-3" v-model="excuse.annual_leave" row :rules="inputRules">
                  <v-radio label="Have taken part" value="Part" color="success darken-2"></v-radio>
                  <v-radio label="Have taken all" value="Full" color="success darken-2"></v-radio>
                  <v-radio label="Have not taken any" value="None" color="success darken-2"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <v-divider inset />

        <!-- Type of Request -->
          <v-card flat>
            <v-card-title class="title green--text darken-3">Patient Request Information</v-card-title>
         <v-card-text>
          <v-row class="no-gutters">
            <v-col cols="12" lg="3" class="pl-5 pt-3">
                <h5 class="pt-1">Reason of Request</h5>
            </v-col>
            <v-col cols="12" lg="9">
                <v-text-field placeholder="Type here...." :rules="inputRules" outlined rounded label="Reason" v-model="excuse.reason"></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" lg="4">
              <v-dialog ref="start_date_dialog" v-model="start_modal" :return-value.sync="excuse.start_date" persistent width="290px">
                <template v-slot:activator="{ on }">
                  <v-text-field label="Start Date" :rules="dateRules" outlined rounded v-on="on" v-model="excuse.start_date"></v-text-field>
                </template>
                <v-date-picker v-model="excuse.start_date" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="start_modal = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.start_date_dialog.save(excuse.start_date)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>
            <v-col cols="12" lg="4">
              <v-dialog ref="end_date_dialog" v-model="end_modal" :return-value.sync="excuse.end_date" persistent width="290px">
                <template v-slot:activator="{ on }">
                  <v-text-field label="End Date" :rules="dateRules" outlined rounded v-on="on" v-model="excuse.end_date"></v-text-field>
                </template>
                <v-date-picker v-model="excuse.end_date" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="end_modal = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.end_date_dialog.save(excuse.end_date)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>
            <v-col cols="12" lg="4">
                <v-text-field label="Number of Days" outlined rounded :value="getDaysLeft"></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center" class="pa-8">
             <v-btn color="primary" style="width: 50% !important" rounded large @click="submit">
               <span class="caption">Submit</span>
             </v-btn>
           </v-row>
         </v-card-text>
       </v-card>
      </v-form>
      </v-card>
    </v-container>

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
    start_modal: false,
    end_modal: false,
    excuse: {
      start_date:'',
      end_date:'',
      reason:'',
      annual_leave:'',
    },
    row:'',
    inputRules: [
        (v) => !!v || 'Field is required',
    ],
    dateRules: [
        (v) => !!v || 'Date is required',
    ],
  }),
  props:{
    id:[Number],
  },
  computed:{
     ...mapGetters(['Patients']),
    patient(){
      return this.Patients.find(data => data.id == this.id);
    },
    getDaysLeft(){
          if(this.excuse.start_date && this.excuse.end_date){
              var a = moment(this.excuse.start_date);
              var b = moment(this.excuse.end_date);
              var result =  b.diff(a, 'days') +" "+ "days"// 1
              return result
          }
      }
  },
  methods:{
     ...mapActions(['fetchPatients']),
    goback(){
      this.$router.go(-1);
    },
    submit(){
      if(this.$refs.excuseForm.validate()){
        this.loading_dialog = true;
        axios.post('/api/excuse_duty', {id: this.patient.id, data:this.excuse}).then(response => {
          if(response.data.success){
            this.loading_dialog = false;
            this.goback();
            Swal.fire(
              'Success',
              'Form Data Submitted',
              'success'
            )
          }
        });
      }else{
        this.loading_dialog = false;
        Swal.fire(
            'Input Error',
            'Please enter data before submission',
            'error'
        )
      }
    }
  },
  created(){
  }

};
</script>

<style scoped>
  
</style>

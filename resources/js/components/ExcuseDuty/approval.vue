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
                <v-text-field v-model="excuse.patient.firstname" label="Staff First Name" outlined rounded readonly></v-text-field>
              </v-col>
              <v-col cols="12" lg="6">
                <v-text-field v-model="excuse.patient.lastname" label="Staff Last Name" outlined rounded readonly></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" lg="6">
                <v-text-field v-model="excuse.patient.phone" label="Patient's Contact" outlined rounded readonly></v-text-field>
              </v-col>
              <v-col cols="12" lg="6">
                <v-text-field v-model="excuse.patient.email" label="Patient's Email" outlined rounded readonly></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" lg="6">
                <v-text-field v-model="excuse.patient.gender" label="Gender" outlined rounded readonly></v-text-field>
              </v-col>
              <v-col cols="12" lg="6">
                <v-text-field v-model="excuse.patient.job_title" label="Staff Job Title" outlined rounded readonly></v-text-field>
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
                <v-text-field outlined rounded readonly v-model="excuse.patient.department"></v-text-field>
              </v-col>
            </v-row>

            <v-row class="no-gutters">
              <v-col cols="12" lg="5" class="pl-5">
                <h5 class="pt-1">Have you already taken your annual leave?</h5>
              </v-col>
              <v-col cols="12" lg="7">
                <v-radio-group class="mt-0 pl-3" v-model="excuse.annual_leave" row readonly>
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
                <v-text-field placeholder="Type here...." readonly outlined rounded label="Reason" v-model="excuse.reason"></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" lg="4">
                <v-text-field label="Start Date" readonly outlined rounded :value="formatStartDate"></v-text-field>
            </v-col>
            <v-col cols="12" lg="4">
                <v-text-field label="End Date" readonly outlined rounded :value="formatEndDate"></v-text-field>
            </v-col>
            <v-col cols="12" lg="4">
                <v-text-field label="Number of Days" outlined rounded :value="getDaysLeft" readonly></v-text-field>
            </v-col>
          </v-row>
         </v-card-text>
       </v-card>
      </v-form>
        <!-- Recommendation -->

        <v-form ref="approvedForm">
            <v-card flat>
                <v-card-title class="title green--text darken-3">Recommendation by Clinic Manager</v-card-title>
                <v-card-text>
                <v-textarea label="Comments" outlined placeholder="Include comments here...." v-model="approved.comment" />

                <v-row>
                    <v-col cols="12">
                    <v-text-field label="Manager's Full Name" :rules="inputRules" outlined rounded v-model="approved.manager"></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" lg="6">
                        <v-dialog ref="dialog" v-model="modal" :return-value.sync="approved.date" persistent width="290px">
                            <template v-slot:activator="{ on }">
                                <v-text-field label="Date" placeholder="26th, January 2030" :rules="dateRules" outlined rounded v-on="on" v-model="approved.date"></v-text-field>
                            </template>
                            <v-date-picker v-model="approved.date" scrollable>
                            <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                            <v-btn text color="primary" @click="$refs.dialog.save(approved.date)">OK</v-btn>
                            </v-date-picker>
                        </v-dialog>
                    </v-col>
                    <v-col cols="12" lg="6" align="center">
                    <h5>Application Recommended</h5>
                    <v-radio-group class="mt-0" style="margin-left: 195px !important;" :rules="inputRules" v-model="approved.recommendation" row>
                        <v-radio label="Yes" value="1"></v-radio>
                        <v-radio label="No" value="0" color="red"></v-radio>
                        </v-radio-group>
                    </v-col>
                </v-row>
                <v-row justify="center" class="pa-8">
                    <v-btn color="success darken-2" rounded large elevation="15" @click="approve">
                        <span class="subtitle-2">Approve</span>
                    </v-btn>
                    <v-btn class="ml-5" color="red darken-3" dark rounded large elevation="15" @click="disapprove">
                    <span class="subtitle-2">Disapprove</span>
                    </v-btn>
                </v-row>
                </v-card-text>
            </v-card> 
        </v-form>
      </v-card>

      <v-dialog v-model="authorize_dialog" persistent max-width="500">
        <v-card>
            <v-card-title class="subtitle-1 red--text darken-3 font-weight-bold">Authorize?</v-card-title>
            <v-divider />
            <v-card-text class="pa-3 px-8">
                <v-form ref="authorizeForm">
                    <v-text-field label="Password" color="success darken-2" dense type="password" v-model="password" :loading="verifying" outlined placeholder="Enter your password for authorization"></v-text-field>
                </v-form>
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="cancel_dialog">Cancel</v-btn>
            <v-btn color="green darken-1" text @click="authorize">Authorize</v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </v-container>
  </v-app>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'App',
  data: () => ({
    verifying: false,
    authorize_dialog:false,
    modal: false,
    row:'',
    inputRules: [
        (v) => !!v || 'Field is required',
    ],
    dateRules: [
        (v) => !!v || 'Date is required',
    ],
    password:'',
    approved: {
        date:'',
        recommendation:'',
        manager:'',
        comment:''
    }
  }),
  props:{
    id:[String, Number],
  },
  computed:{
     ...mapGetters(['Patients', 'allExcuses']),
     excuse(){
         return this.allExcuses.find(data => data.id == this.id);
     },
    getDaysLeft(){
          if(this.excuse.start_date && this.excuse.end_date){
              var a = moment(this.excuse.start_date);
              var b = moment(this.excuse.end_date);
              var result =  b.diff(a, 'days') +" "+ "days"// 1
              return result
          }
      },
      formatStartDate(){
          if(this.excuse.start_date){
              return moment(this.excuse.start_date).format('MMMM Do YYYY');
          }
      },
      formatEndDate(){
          if(this.excuse.end_date){
              return moment(this.excuse.end_date).format('MMMM Do YYYY');
          }
      },

  },
  methods:{
     ...mapActions(['fetchPatients']),
    goback(){
      this.$router.go(-1);
    },
    approve(){
        if(this.$refs.approvedForm.validate()){
            this.authorize_dialog = true;
        }else{
            Swal.fire(
                'Invalid Input',
                'Enter Data before submission.',
                'error'
            )
        }
    },
    disapprove(){
      if(this.$refs.approvedForm.validate()){
            this.authorize_dialog = true;
        }else{
            Swal.fire(
                'Invalid Input',
                'Enter Data before submission.',
                'error'
            )
        }
    },
    cancel_dialog(){
      this.$refs.authorizeForm.reset();
      this.$refs.authorizeForm.resetValidation();
      this.authorize_dialog = false;
    },
    authorize(){
        this.verifying = true;
        axios.post('/authorize', {password: this.password, data:this.approved, id: this.excuse.id}).then(response => {
          if(response.data.success){
            this.verifying = false;
            this.cancel_dialog();
            Swal.fire(
                'Authorized',
                'Excuse Form Processed',
                'success'
            )
          }

          if(response.data.error){
            this.verifying = false;
            this.cancel_dialog();
            Swal.fire(
                'Unauthorized',
                'Password entered does not match',
                'error'
            )
          }
        })
    }
 
  },
  created(){
  }

};
</script>

<style scoped>
  
</style>

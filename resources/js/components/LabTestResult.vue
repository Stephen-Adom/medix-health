<template>
  <v-app>
    <v-container fluid class="pa-0 ma-0" style="background-color: #f5f5f5;">
        <v-toolbar flat>
            <v-toolbar-title class="subtitle-2 font-weight-bold grey--text darken-5 text-uppercase">
                Clinical Tests
            </v-toolbar-title>
            <v-divider inset vertical class="mx-3"/>
            <v-spacer />
            <v-btn class="mx-2" fab dark color="success darken-1" elevation="15" @click="goback">
                <v-icon dark>mdi-chevron-double-left</v-icon>
            </v-btn>
        </v-toolbar>
        <v-divider />
      <v-card>
        <v-row>
          <v-col cols="12" lg="4">
            <v-list three-line>
              <v-list-item>
                <v-list-item-avatar size="120">
                  <v-img :src="getImage" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="title" v-if="appointment">{{appointment.patient.title}} {{appointment.patient.firstname}} {{appointment.patient.lastname}}</v-list-item-title>
                  <v-list-item-subtitle style="margin-top: -45px;">
                    <span v-if="appointment">Tel: (+233) {{formatContact}}</span>  
                    <span class="d-block mt-2" v-if="appointment">
                      <v-btn color="success darken-2" depressed tile class="px-5" small @click="visit_account">
                        <span class="caption font-weight-bold">Complete Info</span>
                      </v-btn>
                    </span>  
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" lg="8" class="pt-9">
            <div class="d-flex">
              <section id="info">
                <v-list three-line>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-subtitle>Info</v-list-item-subtitle>
                      <v-list-item-title class="subtitle-2">
                        <span v-if="appointment">
                          {{appointment.patient.age}}years
                          <v-icon color="success">{{formatGender}}</v-icon>
                        </span>
                        <span class="d-block" v-if="vitals !== null ">
                          H: <span> <span v-if="vitals.height">{{vitals.height}}cm</span> <span v-else>N/A</span> </span>  
                          W: <span><span v-if="vitals.weight">{{vitals.weight}}kg</span><span v-else>N/A</span></span>
                        </span>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </section>

            <v-divider
              inset
              vertical
            ></v-divider>
            
            <!-- Blood Pressure -->
            <section id="info">
              <v-list three-line>
                <v-list-item>
                  <v-list-item-content class="pt-1">
                    <v-list-item-subtitle>Blood Pressure</v-list-item-subtitle>
                    <v-list-item-title class="subtitle-2" v-if="vitals">
                      {{vitals.systolic}}/{{vitals.diastolic}} (mmHg)
                    </v-list-item-title>
                    <v-list-item-title class="subtitle-2" v-else>
                      N/A
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </section>

            <v-divider
              inset
              vertical
            ></v-divider>

            <!-- Allergies -->
            <section id="info">
              <v-list three-line>
                <v-list-item>
                  <v-list-item-content class="pt-1">
                    <v-list-item-subtitle>Allergies</v-list-item-subtitle>
                    <v-list-item-title class="subtitle-2" v-if="medical">
                      <v-icon color="red">mdi-shield-alert</v-icon>
                      {{medical.allergies}}
                    </v-list-item-title>
                    <v-list-item-title class="subtitle-2" v-else>
                      <v-icon color="red">mdi-shield-alert</v-icon>
                      N/A
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </section>

            <v-divider
              inset
              vertical
            ></v-divider>

            <!-- BMI -->
            <section id="info">
              <v-list three-line>
                <v-list-item>
                  <v-list-item-content class="pt-1">
                    <v-list-item-subtitle>Body Mass Index</v-list-item-subtitle>
                    <v-list-item-title class="subtitle-2">
                      {{calculateBMI()}} (BMI)
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </section>
            </div>
          </v-col>
          <v-col cols="8">
            <div class="d-flex justify-end">
                <!-- Active Issues -->
              <section id="info">
                <v-list three-line>
                  <v-list-item>
                    <v-list-item-content class="pt-1">
                      <v-list-item-subtitle>Active Issues</v-list-item-subtitle>
                      <v-list-item-title class="subtitle-2" v-if="medical">
                        {{medical.problem}}
                      </v-list-item-title>
                      <v-list-item-title class="subtitle-2" v-else>
                        N/A
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </section>
              <v-divider
                inset
                vertical
              ></v-divider>

              <!-- Active Issues Diagnosis -->
              <section id="info">
                <v-list three-line>
                  <v-list-item>
                    <v-list-item-content class="pt-1">
                      <v-list-item-subtitle>Active Issues Diagnosis</v-list-item-subtitle>
                      <v-list-item-title class="subtitle-2" v-if="medical">
                        {{medical.diagnosis}}
                      </v-list-item-title>
                      <v-list-item-title class="subtitle-2" v-else>
                        N/A
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </section>
            </div>
          </v-col>
        </v-row>
      </v-card>
      
      <v-container>
        <v-row>
          <v-col cols="12" lg="3">
            <!-- Blood Test -->
            <v-card shaped color="red darken-2" class="pa-2">
              <v-card shaped outlined>
                <!-- Image -->
                <div style="height: 165px;">
                  <v-img class="ml-7" width="200" src="/app_asset/blood_tests.png" />
                </div>
                <v-card-title class="subtitle-1 pt-0 d-flex justify-center text-uppercase">Blood Test</v-card-title>
                <v-card-text style="text-align: center;">
                  Input the blood test results of your patients here to keep records of individual tests
                </v-card-text>
                <v-card-actions class="pa-8">
                  <v-btn @click="open_blood_test" tile color="red darken-2" class="ml-7 px-5" dark depressed>
                    <span class="caption">Input Results</span>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-card>
          </v-col>
          <v-col cols="12" lg="3">
            <!-- Urine Test -->
            <v-card shaped color="success darken-2" class="pa-2">
              <v-card shaped outlined>
                <!-- Image -->
                <div style="height: 165px;">
                  <v-img class="ml-7" width="200" src="/app_asset/urine_tests.png" />
                </div>
                <v-card-title class="subtitle-1 pt-0 text-uppercase d-flex justify-center">Urinalysis Test</v-card-title>
                <v-card-text style="text-align: center;">
                  Input the urine test results of your patients here to keep records of individual tests
                </v-card-text>
                <v-card-actions class="pa-8">
                  <v-btn @click="open_urine_test" tile color="success darken-2" class="ml-7 px-5" dark depressed>
                    <span class="caption">Input Results</span>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-card>
          </v-col>
          <v-col cols="12" lg="3">
            <!-- Stool Test -->
            <v-card shaped color="#FF8800" class="pa-2">
              <v-card shaped outlined>
                <!-- Image -->
                <div style="height: 165px;">
                  <v-img class="ml-7" width="200" src="/app_asset/stool_tests.png" />
                </div>
                <v-card-title class="subtitle-1 pt-0 d-flex justify-center text-uppercase">Faecal Test</v-card-title>
                <v-card-text style="text-align: center;">
                  Input the stool test results of your patients here to keep records of individual tests
                </v-card-text>
                <v-card-actions class="pa-8">
                  <v-btn @click="open_stool_test" tile color="#FF8800" class="ml-7 px-5" depressed dark>
                    <span class="caption">Input Results</span>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-card>
          </v-col>
          <v-col cols="12" lg="3">
            <!-- Sperm Test -->
            <v-card shaped color="#6e40bd" class="pa-2">
              <v-card shaped outlined>
                <!-- Image -->
                <div style="height: 165px;">
                  <v-img class="ml-7" width="200" src="/app_asset/sperm_tests.png" />
                </div>
                <v-card-title class="subtitle-1 pt-0 d-flex justify-center text-uppercase">Saliva Test</v-card-title>
                <v-card-text style="text-align: center;">
                  Input the saliva test results of your patients here to keep records of individual tests
                </v-card-text>
                <v-card-actions class="pa-8">
                  <v-btn @click="open_saliva_test" tile color="#6e40bd" class="ml-7 px-5" dark depressed>
                    <span class="caption">Input Results</span>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- Individual Test Modals -->
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-card>
          <v-toolbar dark :color="pick_color" flat>
            <v-toolbar-title class="subtitle-1 font-weight-bold">{{pick_title}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text @click="dialog = false" class="caption">Close</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text v-if="appointment">
            <component :is="get_report" :appointment="appointment"> </component>
          </v-card-text>
        </v-card>
      </v-dialog>

    </v-container>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import {bus} from '../app';

import Blood from '../components/labtest/blood.vue';
import Urine from '../components/labtest/urine.vue';
import Faecal from '../components/labtest/faecal.vue';
import Saliva from '../components/labtest/saliva.vue';

export default {
  name: 'Lab_test',

  components:{
    Blood, Urine, Faecal, Saliva
  },
  data: () => ({
    dialog: false,
    vitals: null,
    index: null,
    medical: null,
  }),
  props: {
        id: [Number, String],
    },
    computed:{
        ...mapGetters(['all_Accepted_Appointment', 'allDrugs', 'allPrescribedDrugs']),

        appointment(){
            return this.all_Accepted_Appointment.find(data => data.id == this.id);
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

        formatContact(){
            if(this.appointment){
                var contact = this.appointment.patient.phone;
                return contact.slice(1);
            }
        },
        formatGender(){
            if(this.appointment){
                if(this.appointment.patient.gender == 'Male'){
                    return 'mdi-gender-male'
                }else{
                    return 'mdi-gender-female'
                }
            }    
        },
        pick_color(){
          if(this.index === 1) {
            return 'red darken-3'
          }else if(this.index === 2){
            return 'success darken-2'
          }else if(this.index === 3) {
            return '#FF8800'
          }else if(this.index === 4) {
            return '#6e40bd'
          }
        },
        pick_title(){
          if(this.index === 1) {
            return 'Blood Test Report'
          }else if(this.index === 2){
            return 'Urinalysis Test Report'
          }else if(this.index === 3) {
            return 'Faecal Test Report'
          }else if(this.index === 4) {
            return 'Saliva Test Report'
          }
        },
        get_report(){
          if(this.index === 1) {
            return 'blood'
          }else if(this.index === 2){
            return 'urine'
          }else if(this.index === 3) {
            return 'faecal'
          }else if(this.index === 4) {
            return 'saliva'
          }
        }

    },
    methods:{
        ...mapActions(['fetchCurrentAppointment']),

        goback(){
            this.$router.go(-1);
        },
        getMedical(id){
          axios.post('/api/latest_medical', {id: id}).then(response => {
            this.medical = response.data;
          });
        },
        getVital(id){
            axios.post('/api/medic_vital', {id:id}).then(response => {
                this.vitals = response.data;
                this.calculateBMI();
            });
        },
        calculateBMI(){
            if(this.vitals){
                if(this.vitals.weight && this.vitals.height){
                    let height_in_meters = parseFloat(this.vitals.height) / 100;
                    let height_squared = parseFloat(height_in_meters) * parseFloat(height_in_meters);
                    let bmi = this.vitals.weight / height_squared;
                    return bmi.toFixed(1);   
                }
            }
        },
        visit_account(){
            this.$router.push({name: 'patient_details', params: {id : this.appointment.patient.id}})
        },
        open_blood_test(){
          this.index = 1;
          this.dialog =  true;
        },
        open_urine_test(){
          this.index = 2;
          this.dialog =  true;
        },
        open_stool_test(){
          this.index = 3;
          this.dialog =  true;
        },
        open_saliva_test(){
          this.index = 4;
          this.dialog =  true;
        }
    },
    mounted(){
        if(this.appointment){
            this.getVital(this.appointment.patient.id);
            this.getMedical(this.appointment.patient.id);
        }else{
            this.appointment;
        }
    }

};
</script>

<style scoped>
  #info {
    text-align: center !important;
  }
</style>

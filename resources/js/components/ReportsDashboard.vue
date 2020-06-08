<template>
    <v-container>
        <v-card class="pa-4" outlined>
            <v-card-title class="pa-1 subtitle-2 font-weight-bold">
                <section class="d-flex flex-row">
                    <v-avatar size="70" v-if="getUser">
                        <v-img :src="getImage"></v-img>
                    </v-avatar>
                    <section class="ml-4 text-uppercase mt-2" v-if="getUser">
                        <p class="mb-1"> <span class="success--text darken-3">{{getUser.title}} {{getUser.firstname}}</span> <span class="grey--text darken-8">{{getUser.lastname}}</span></p>
                        <p class="mb-1"><span class="grey--text darken-8">Status:</span> <span class="success--text darken-3">{{formatStatus}}</span></p>
                    </section>
                </section>
                <v-spacer />
                <section>
                    <p class="mb-1 grey--text darken-8">Number of Active Staff : <span class="success--text darken-3">{{active}}</span></p>   
                    <p class="mb-1 grey--text darken-8">Total Number of Staff : <span class="success--text darken-3">{{total}}</span></p>   
                </section> 
            </v-card-title>
            <v-divider />
            <v-card-text class="pa-2">
                <section class="d-flex">
                    <v-btn tile color="success darken-2" class="px-5 ml-auto" dark depressed @click="goback">
                        <v-icon left>mdi-chevron-double-left</v-icon>
                        <span class="caption font-weight-bold text-uppercase">Exit Dashboard</span>
                    </v-btn>
                </section>
                <v-row>
                    <v-col cols="12" md="4" lg="4" sm="6">
                        <v-card class="teal pa-3" dark elevation="10" link :to="{name: 'reports_vitals'}">
                            <v-card-actions class="d-flex justify-center">
                                <v-btn icon color="white" large>
                                    <v-icon size="40">mdi-heart-pulse</v-icon>
                                </v-btn>
                            </v-card-actions>
                            <v-card-text class="d-flex justify-center pa-2">
                                <span class="subtitle-2 font-weight-bold text-uppercase">Vitals Reports</span>
                            </v-card-text>
                            <v-card-text class="d-flex justify-center pa-1">
                                <span class="caption font-weight-bold text-uppercase">Analysis of Patients vitals</span>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4" lg="4" sm="6">
                        <v-card class="red darken-3 pa-3" dark elevation="10" link :to="{name: 'reports_lab_tests'}">
                            <v-card-actions class="d-flex justify-center">
                                <v-btn icon color="white" large>
                                    <v-icon size="40">mdi-microscope</v-icon>
                                </v-btn>
                            </v-card-actions>
                            <v-card-text class="d-flex justify-center pa-2">
                                <span class="subtitle-2 font-weight-bold text-uppercase">Lab Reports</span>
                            </v-card-text>
                            <v-card-text class="d-flex justify-center pa-1">
                                <span class="caption font-weight-bold text-uppercase text-center">Clinical Laboratory Reports</span>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4" lg="4" sm="6">
                        <v-card class="warning darken-1 pa-3" dark elevation="10" link :to="{name: 'reports_medicals'}">
                            <v-card-actions class="d-flex justify-center">
                                <v-btn icon color="white" large>
                                    <v-icon size="40">mdi-account-group</v-icon>
                                </v-btn>
                            </v-card-actions>
                            <v-card-text class="d-flex justify-center pa-2">
                                <span class="subtitle-2 font-weight-bold text-uppercase">Patient's Medical Reports</span>
                            </v-card-text>
                            <v-card-text class="d-flex justify-center pa-1">
                                <span class="caption font-weight-bold text-uppercase text-center">Patients Health Reports</span>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-divider />
            <v-card-text>
                <v-row>
                    <v-col cols="12" md="5" lg="5" sm="4">
                        <v-card class="pa-2" outlined>
                            <v-card-title class="pa-2 caption font-weight-bold text-uppercase">Drugs Analysis</v-card-title>
                            <v-divider />
                            <v-card-text class="pa-2">
                                <line-chart :chart-data="datacollection" :height="300"></line-chart>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="7" lg="7" sm="7">
                        <v-card class="pa-2" outlined>
                            <v-card-title class="pa-2 caption font-weight-bold text-uppercase">
                                <span>Patient Appointment Analysis</span>
                                <v-spacer />
                                <span v-if="Patients">Total: {{Patients.length}}</span>
                            </v-card-title>
                            <v-divider />
                            <v-card-text class="pa-2" style="height: 300px !important; overflow-y: auto !important;">
                                  <v-list>
                                    <v-list-item
                                        v-for="(item, index) in items" :key="index">
                                        <v-list-item-avatar :color="getRandomColor(item)" size="40">
                                            <span class="caption white--text">{{item.appointment_count}}</span>
                                        </v-list-item-avatar>

                                        <v-list-item-content>
                                        <v-list-item-title class="subtitle-2 font-weight-bold" v-text="item.name"></v-list-item-title>
                                        <v-list-item-subtitle class="caption font-weight-regular grey--text darken-9">Job Title: {{item.job_title}}</v-list-item-subtitle>
                                        </v-list-item-content>

                                        <v-list-item-avatar size="60">
                                            <v-img :src="formatImage(item)"></v-img>
                                        </v-list-item-avatar>
                                    </v-list-item>
                                    </v-list>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import LineChart from '../DrugChart';
import { mapActions, mapGetters } from 'vuex';

export default {
    components: {
        LineChart
    },
    data:() => ({
        items: [],
        available:null,
        expired:null,
        all_out:null,
        datacollection:null,
    }),
    computed:{
        ...mapGetters(['active', 'total', 'getUser', 'Patients']),
        formatStatus(){
            if(this.getUser){
                if(this.getUser.status === 1){
                    return 'Active'
                }else{
                    return 'Inactive'
                }
            }
        },
        getImage(){
            if(this.getUser){
                if(this.getUser.image){
                    return '/storage/profiles/' + this.getUser.image;
                }else{
                        if(this.getUser.role_id === 1){
                        return '/app_asset/doctor.jpg'
                    }else if(this.getUser.role_id === 2){
                        return '/app_asset/nurse.jpg'
                    }else if(this.getUser.role_id === 3){
                        return '/app_asset/pharmacist.jpg'
                    }else if(this.getUser.role_id === 4){
                        return '/app_asset/lab tech.jpg'
                    }else if(this.getUser.role_id === 5){
                        return '/app_asset/manager.png'
                    }
                }
            }
        },
    },
    watch:{
        Patients(){
            if(this.Patients){
                this.formatPatientData();
            }
        }
    },
    methods: {
        ...mapActions(['fetchActive', 'fetchPatients']),
        formatPatientData(){
            if(this.Patients){
                this.items = this.Patients.map(data => {
                    return {
                        name: data.title + " " + data.firstname + " " + data.lastname,
                        job_title: data.job_title,
                        appointment_count: data.appointments.length,
                        gender:data.gender,
                        image: data.image
                    }
                });
            }
             
        },
    fillData (){
        axios.get('/api/drug_analysis').then(response => {
            this.expired = response.data.expired;
            this.available = response.data.available;
            this.all_out = response.data.out;

            this.datacollection = {
            labels: ['Available','Expired', 'Out of Stock'],
            datasets: [
                {
                label: 'Patient Data',
                backgroundColor: ['#0CB33D', '#DC0509', '#DCB105'],
                data: [ this.available, this.expired, this.all_out]
                },
            ]
            }
        });
      },
      reports_dashboard(){
          this.$router.push({name: 'reports_dashboard'});
      },
      goback(){
          this.$router.go(-1);
      },
      getRandomColor(appointment){
        if(appointment){
          var colors = ['red darken-2', 'success darken-2', 'warning darken-1', 'primary']
          var item =  colors[ Math.floor( Math.random(0,1) * colors.length ) ];
          return item
        }
      },
      formatImage(item){
          if(item.image){
              return '/storage/patients/profiles/' + item.image;
          }else{
            if(item.gender === 'Male'){
                return '/app_asset/male_avatar.png'
            }else{
                return '/app_asset/undraw_female_avatar_l3ey.png'
            }
          }
      }
    },
    created(){
        this.fetchPatients();
        this.fetchActive();
        this.fillData();
    }
}
</script>

<style scoped>

</style>
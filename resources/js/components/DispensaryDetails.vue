<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="3" md="3" lg="4">
                <v-card class="pa-3 d-flex justify-center flex-column" elevation="6" >
                    <v-card-title class="d-flex mx-auto pa-1">
                        <span class="subtitle-2 font-weight-bold success--text darken-5 text-uppercase">PROFILE</span>
                    </v-card-title>
                    <v-divider />
                    <section class="mx-auto">
                        <v-avatar size="100">
                            <v-img :src="getImage"></v-img>
                        </v-avatar>
                    </section>
                    <v-divider />
                    <section class="mx-auto">
                        <h6 class="subtitle-2 text-uppercase success--text darken-3 font-weight-bold">{{medicInfo.patient.title}} {{medicInfo.patient.firstname}} <span class="font-weight-light grey--text darken-5">{{medicInfo.patient.lastname}}</span></h6>
                        <v-chip class="ma-2" color="success darken-2" label @click="goToProfile">
                            <v-icon left>mdi-account-circle-outline</v-icon>
                            <span class="caption">view profile</span>
                        </v-chip>
                    </section>
                </v-card>
                <v-card class="pa-3 d-flex justify-center flex-column mt-6" elevation="6" >
                    <v-card-title class="d-flex mx-auto pa-1">
                        <span class="subtitle-2 font-weight-bold success--text darken-5 text-uppercase">BIO DATA</span>
                    </v-card-title>
                    <v-divider />
                    <v-row>
                        <v-col cols="4" md="4" class="text-center">
                            <p class="caption text-uppercase grey--text font-weight-bold darken-5 mb-1">Gender</p>
                            <p class="caption text-uppercase success--text darken-3 mb-1">{{medicInfo.patient.gender}}</p>
                        </v-col>
                        <v-col cols="4" md="4" class="text-center">
                            <p class="caption text-uppercase grey--text font-weight-bold darken-5 mb-1">Email</p>
                            <p class="caption text-uppercase success--text darken-3 mb-1">{{medicInfo.patient.email}}</p>
                        </v-col>
                        <v-col cols="4" md="4" class="text-center">
                            <p class="caption text-uppercase grey--text font-weight-bold darken-5 mb-1">Contact</p>
                            <p class="caption text-uppercase success--text darken-3 mb-1">{{medicInfo.patient.phone}}</p>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4" md="4" class="text-center">
                            <p class="caption text-uppercase grey--text font-weight-bold darken-5 mb-1">Job Title</p>
                            <p class="caption text-uppercase success--text darken-3 mb-1">{{medicInfo.patient.job_title}}</p>
                        </v-col>
                        <v-col cols="4" md="4" class="text-center">
                            <p class="caption text-uppercase grey--text font-weight-bold darken-5 mb-1">Age</p>
                            <p class="caption text-uppercase success--text darken-3 mb-1">{{medicInfo.patient.age}}</p>
                        </v-col>
                        <v-col cols="4" md="4" class="text-center">
                            <p class="caption text-uppercase grey--text font-weight-bold darken-5 mb-1">Department</p>
                            <p class="caption text-uppercase success--text darken-3 mb-1" v-if="medicInfo.patient.department">{{medicInfo.patient.department}}</p>
                            <p class="caption text-uppercase success--text darken-3 mb-1" v-else>N/A</p>
                        </v-col>
                        <v-col cols="6" md="6" class="text-center">
                            <p class="caption text-uppercase grey--text font-weight-bold darken-5 mb-1">Type of Employee</p>
                            <p class="caption text-uppercase success--text darken-3 mb-1" v-if="medicInfo.patient.employee_type">{{medicInfo.patient.employee_type}}</p>
                            <p class="caption text-uppercase success--text darken-3 mb-1" v-else>N/A</p>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-col cols="12" sm="9" md="9" lg="8">
                <v-toolbar>
                    <v-btn rounded class="red darken-3 px-6 ml-auto" elevation="15" dark @click="medical_history_dialog = true">
                        <span class="font-weight-bold text-uppercase caption">Medical History</span>
                    </v-btn>
                    <v-spacer />
                    <v-btn rounded class="success darken-2 px-6 ml-auto" elevation="15" dark @click="goback">
                        <span class="font-weight-bold text-uppercase caption">back</span>
                    </v-btn>
                </v-toolbar>
                <v-card class="pa-3 d-flex justify-center flex-column mt-6" elevation="6" >
                     <v-card-title class="d-flex mx-auto pa-1">
                        <span class="subtitle-2 font-weight-bold success--text darken-5 text-uppercase">Medical Data</span>
                    </v-card-title>
                    <v-divider />
                    <v-row class="px-8">
                        <v-col cols="12">
                            <p class="caption text-uppercase grey--text font-weight-bold darken-5 mb-1">Patient Problem</p>
                            <p class="caption success--text darken-3 mb-1">{{medicInfo.medical.problem}}</p>
                        </v-col>
                        <v-col cols="12">
                            <p class="caption text-uppercase grey--text font-weight-bold darken-5 mb-1">Medical Diagnosis</p>
                            <p class="caption success--text darken-3 mb-1">{{medicInfo.medical.diagnosis}}</p>
                        </v-col>
                        <v-col cols="12">
                            <p class="caption text-uppercase grey--text font-weight-bold darken-5 mb-1">Additional Info</p>
                            <p class="caption success--text darken-3 mb-1">{{medicInfo.medical.notes}}</p>
                        </v-col>
                    </v-row>
                </v-card>
                <v-card class="pa-3 d-flex justify-center flex-column mt-6" elevation="6" >
                     <v-card-title class="d-flex mx-auto pa-1">
                        <span class="subtitle-2 font-weight-bold success--text darken-5 text-uppercase">Patient Prescription</span>
                    </v-card-title>
                    <v-divider />
                   <v-card-text>
                    <template v-if="prescription_items">
                            <v-row>
                                <v-col v-for="(drug, index) in prescription_items" :key="index">
                                    <v-card class="success darken-2 text-center pa-2" dark outlined>
                                        <v-card-actions class="d-flex justify-content-center">
                                            <v-icon color="white">mdi-pill</v-icon>
                                        </v-card-actions>
                                        <v-card-text class="pa-0">
                                            <span class="subtitle-2 font-weight-bold text-uppercase">{{drug}}</span>
                                        </v-card-text>
                                    </v-card> 
                                </v-col>
                            </v-row> 
                            <v-divider />
                            <span class="d-block ml-5 grey--text font-weight-bold text-uppercase caption darken-5"><i>Dosage: <span class="black--text">{{medicInfo.dosage}}</span> </i></span>
                            <span class="d-block ml-5 grey--text font-weight-bold text-uppercase caption darken-5"><i>Starting Course: <span class="black--text">{{medicInfo.start_course | formatDate}}</span></i></span>
                            <span class="d-block ml-5 grey--text font-weight-bold text-uppercase caption darken-5"><i>Ending Course: <span class="black--text">{{medicInfo.end_course | formatDate}}</span></i></span>
                            <v-divider />
                            <div class="ml-5">
                                <i>
                                    <p class="ml-5 black--text font-weight-bold text-uppercase caption">Drug Intake Interval</p>
                                    <p class="ml-7" v-if="medicInfo.morning_time">
                                        <span class="ml-5 grey--text font-weight-bold text-uppercase caption darken-5">Morning<v-icon class="ml-1" color="warning">mdi-brightness-7</v-icon> </span>:
                                        <span class="black--text font-weight-bold text-uppercase caption">{{medicInfo.morning_time | formatTime}}</span>    
                                    </p>
                                    <p class="ml-7" v-if="medicInfo.afternoon_time">
                                        <span class="ml-5 grey--text font-weight-bold text-uppercase caption darken-5">Afternoon<v-icon class="ml-1" color="warning darken-2">mdi-brightness-5</v-icon> </span>:
                                        <span class="black--text font-weight-bold text-uppercase caption">{{medicInfo.afternoon_time | formatTime}}</span>    
                                    </p>
                                    <p class="ml-7" v-if="medicInfo.evening_time">
                                        <span class="ml-5 grey--text font-weight-bold text-uppercase caption darken-5">Evening<v-icon class="ml-1" color="success darken-2">mdi-brightness-2</v-icon> </span>:
                                        <span class="black--text font-weight-bold text-uppercase caption">{{medicInfo.evening_time | formatTime}}</span>    
                                    </p>
                                </i>   
                            </div>
                    </template>
                </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-divider />
        <v-row>
            <v-toolbar flat class="d-flex justify-center">
                <v-btn rounded class="success darken-2 px-6 ml-auto" elevation="15" dark @click="completeMedication">
                        <span class="font-weight-bold text-uppercase caption">Medication Complete</span>
                        <v-icon right>mdi-check-all</v-icon>
                    </v-btn>
            </v-toolbar>
        </v-row>

        <v-dialog v-model="medical_history_dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-card>
                <v-toolbar dark color="success darken-2" flat>
                    <v-btn icon dark @click="medical_history_dialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title class="subtitle-1 font-weight-bold">Medical History</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn dark text @click="medical_history_dialog = false">Close</v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-card-text class="mb-0">
                    <v-row>
                        <v-col cols="12">
                            <v-responsive>
                                <v-img src="/app_asset/medix_full.png" width="15%" class="mx-auto"></v-img>
                            </v-responsive>
                            <h6 class="subtitle-1 font-weight-bold text-center text-uppercase">Medical History Information</h6>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-divider class="mt-0" />
                <v-card-text>
                    <v-card outlined class="pa-3">
                        <v-card-title>
                            <span class="subtitle-2 font-weight-bold">{{medicInfo.patient.firstname}} {{medicInfo.patient.lastname}}</span>
                        <v-spacer></v-spacer>
                        <v-text-field v-model="medical_search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
                        </v-card-title>
                        <v-data-table :headers="headers" :items="medicaHistory" :search="medical_search">
                            <template v-slot:item.created_at = "{item}">
                                <span>{{item.created_at | formatDate}}</span>    
                            </template>
                            <template v-slot:item.actions = "{item}">
                                <v-btn rounded elevation="15" class="px-5" color="info darken-2" @click="view_prescription(item)">
                                    <v-icon left>mdi-format-list-text</v-icon>
                                    <span class="caption">Prescriptions</span>
                                </v-btn>
                            </template>
                        </v-data-table>
                    </v-card>
                </v-card-text>
            </v-card>
        </v-dialog>

        <v-dialog v-model="prescription_dialog" max-width="600">
            <v-card>
                <v-card-title class="subtitle-1 font-weight-bold grey--text darken-5">Medical Prescriptions</v-card-title>
                <v-divider />
                <v-card-text>
                    <template v-if="show_prescription_items">
                        <div v-for="(data, index) in show_prescription_items" :key="index">
                            <v-row>
                                <v-col v-for="(drug, index) in data.drug_name" :key="index">
                                    <v-card class="success darken-2 text-center pa-2" dark outlined>
                                        <v-card-actions class="d-flex justify-content-center">
                                            <v-icon color="white">mdi-pill</v-icon>
                                        </v-card-actions>
                                        <v-card-text class="pa-0">
                                            <span class="subtitle-2 font-weight-bold text-uppercase">{{drug}}</span>
                                        </v-card-text>
                                    </v-card> 
                                </v-col>
                            </v-row> 
                            <v-divider />
                            <span class="d-block ml-5 grey--text font-weight-bold text-uppercase caption darken-5"><i>Dosage: <span class="black--text">{{data.dosage}}</span> </i></span>
                            <span class="d-block ml-5 grey--text font-weight-bold text-uppercase caption darken-5"><i>Starting Course: <span class="black--text">{{data.start_course | formatDate}}</span></i></span>
                            <span class="d-block ml-5 grey--text font-weight-bold text-uppercase caption darken-5"><i>Ending Course: <span class="black--text">{{data.end_course | formatDate}}</span></i></span>
                            <v-divider />
                            <div class="ml-5">
                                <i>
                                    <p class="ml-5 black--text font-weight-bold text-uppercase caption">Drug Intake Interval</p>
                                    <p class="ml-7" v-if="data.morning_time">
                                        <span class="ml-5 grey--text font-weight-bold text-uppercase caption darken-5">Morning<v-icon class="ml-1" color="warning">mdi-brightness-7</v-icon> </span>:
                                        <span class="black--text font-weight-bold text-uppercase caption">{{data.morning_time | formatTime}}</span>    
                                    </p>
                                    <p class="ml-7" v-if="data.afternoon_time">
                                        <span class="ml-5 grey--text font-weight-bold text-uppercase caption darken-5">Afternoon<v-icon class="ml-1" color="warning darken-2">mdi-brightness-5</v-icon> </span>:
                                        <span class="black--text font-weight-bold text-uppercase caption">{{data.afternoon_time | formatTime}}</span>    
                                    </p>
                                    <p class="ml-7" v-if="data.evening_time">
                                        <span class="ml-5 grey--text font-weight-bold text-uppercase caption darken-5">Evening<v-icon class="ml-1" color="success darken-2">mdi-brightness-2</v-icon> </span>:
                                        <span class="black--text font-weight-bold text-uppercase caption">{{data.evening_time | formatTime}}</span>    
                                    </p>
                                </i>   
                            </div>
                        </div>
                    </template>
                </v-card-text>
                <v-divider />
                <v-card-actions class="d-flex justify-center">
                <v-btn color="green darken-2" dark rounded elevation="15" class="px-5" @click="prescription_dialog = false">
                    <span class="caption">close</span>
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
    data:() => ({
        prescription_dialog: false,
        medicaHistory: null,
        headers: [
          {
            text: 'Patient Problem',
            align: 'start',
            sortable: false,
            value: 'problem',
          },
          { text: 'Medical Diagnosis', value: 'diagnosis' },
          { text: 'Additional Notes', value: 'notes' },
          { text: 'Assessed On', value: 'created_at' },
          { text: 'Actions', value: 'actions', align: 'center', },
        ],
        medical_search: '',
        medical_history_dialog: false,
        prescription_items: null,
        show_prescription_items: null
    }),
    props:{
        id:[String, Number]
    },
    computed:{
        ...mapGetters(['allData']),
        medicInfo(){
            return this.allData.find(item => item.id == this.id);
        },
        getImage(){
            if(this.medicInfo.patient.gender === 'Male'){
                return '/app_asset/male_avatar.png'
            }else{
                return '/app_asset/undraw_female_avatar_l3ey.png'
            }
        },
        
    },
    filters:{
        formatDate(value){
            return moment(value).format('MMMM Do YYYY');
        },
        formatTime(value){
            return moment(value).format('LT');
        }
    },
    methods:{
        ...mapActions(['fetchDispensary']),
        formatPrescription(){
            this.prescription_items = this.medicInfo.drug_name.split(" ");
        },
        goback(){
            this.$router.go(-1);
        },
        getMedicalHistory(){
            axios.post('/api/patient_medical_history', {id: this.medicInfo.patient.id }).then(response => {
                this.medicaHistory = response.data;
            })
        },
        view_prescription(item){
            this.prescription_dialog = true;
            this.map_prescriptions(item.prescriptions);
        },
        map_prescriptions(data){
            this.show_prescription_items = data.map(item => {
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
        goToProfile(){
            this.$router.push({name: 'patient_details', params:{id: this.medicInfo.patient.id}});
        },
        completeMedication(){
            axios.patch('/api/update_prescription/' + this.medicInfo.id).then(response => {
                if(response.data.success){
                    Swal.fire(
                        'Success',
                        'Medical Prescription Completed',
                        'success'
                    )
                }
            })
        }
        
    },
    created(){
        if(this.medicInfo){
            this.formatPrescription();
        }
    },
    mounted(){
        this.getMedicalHistory();
    }
}
</script>

<style scoped>

</style>
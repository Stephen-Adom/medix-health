<template>
    <v-container class="mx-auto" style="width: 95%" id="main_content">
        <v-card class="pa-4" outlined>
            <v-card-title>
                <span class="subtitle-1 text-uppercase font-weight-bold grey--text darken-9">Vital Records And Analysis</span>
                <v-spacer />
                <v-btn color="success darken-2" class="px-5 py-2" dark depressed tile @click="goback">
                    <v-icon left>mdi-chevron-double-left</v-icon>
                    <span class="caption font-weight-bold text-uppercase">back</span>
                </v-btn>
            </v-card-title>
            <v-divider />
            <v-card-text class="pa-2">
                <v-row>
                    <v-col cols="12" md="7">
                        <v-responsive>
                            <v-img src="/app_asset/undraw_detailed_analysis_xn7y.svg" width="35%" class="mr-auto"></v-img>
                        </v-responsive>
                    </v-col>
                    <v-col cols="12" md="5" class="d-flex ml-auto mt-10">
                        <v-text-field rounded outlined color="success darken-2" label="Search" placeholder="Looking for a patient..." v-model="search_patient"></v-text-field>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-divider />
            <v-card-text >
                <v-row v-if="patients">
                    <v-col cols="12" v-for="(item, index) in filteredPatients" :key="index">
                        <v-card class="pa-3 d-flex flex-row" outlined style="border-left: 4px solid green;">
                            <v-card-actions>
                                <v-avatar :color="getRandomColor(item)" elevation="10">
                                    <span class="white--text">{{getInitials(item)}}</span>
                                </v-avatar>
                            </v-card-actions>
                            <v-card-text class="d-flex flex-column">
                                <span class="subtitle-2 grey--text darken-10 font-weight-bold text-uppercase" v-if="item">{{item.title}} {{item.firstname}} {{item.lastname}}</span>
                                <span class="caption font-weight-bold" v-if="item.job_title">Job Title: {{item.job_title}}</span>
                                <span class="caption font-weight-bold" v-if="item">Status: <v-icon :color="formatStatusColor(item)" size="20">{{formatStatus(item)}}</v-icon></span>
                            </v-card-text>
                            <v-card-actions class="ml-auto flex-row d-flex">
                                <v-btn color="success darken-2" class="px-5 py-2 mx-2" dark depressed tile @click="openRecords(item)">
                                    <v-icon left size="20">mdi-format-align-right</v-icon>
                                    <span class="caption font-weight-bold text-uppercase">Reports</span>
                                </v-btn>
                                <v-btn color="red darken-3" class="px-5 py-2 mx-2" dark depressed tile @click="openChart(item)">
                                    <v-icon left size="20">mdi-chart-areaspline</v-icon>
                                    <span class="caption font-weight-bold text-uppercase">Analysis</span>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>

        <v-dialog v-model="chart_dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-card>
            <v-toolbar dark color="teal darken-1" flat>
            <v-toolbar-title class="subtitle-2 font-weight-bold text-uppercase">
                Vital Chart Analysis
                <v-icon class="ml-3">mdi-chart-areaspline</v-icon>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn dark text @click="chart_dialog = false">Close</v-btn>
            </v-toolbar-items>
            </v-toolbar>
            <v-row>
                <v-col cols="12" md="5" class="pa-5 d-flex flex-column">
                    <v-img src="/app_asset/medix_full.png" width="30%" class="mx-auto" />
                    <h3 class="subtitle-2 mt-2 text-uppercase font-weight-bold text-center mx-auto">Vitals Chart Analysis</h3>
                </v-col>
                <v-col cols="12" md="7">
                    <v-form ref="daterange_form">
                        <v-row>
                            <v-col cols="6" md="4" class="mt-10">
                                <v-dialog ref="dialog" v-model="start_date_modal" :return-value.sync="start_date" persistent width="290px">
                                    <template v-slot:activator="{ on }">
                                    <v-text-field v-model="start_date" :rules="inputRules" label="Picker in dialog" prepend-icon="mdi-calendar" readonly v-on="on"></v-text-field>
                                    </template>
                                    <v-date-picker v-model="start_date" scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn text color="primary" @click="start_date_modal = false">Cancel</v-btn>
                                    <v-btn text color="primary" @click="$refs.dialog.save(start_date)">OK</v-btn>
                                    </v-date-picker>
                                </v-dialog>
                            </v-col>
                            <v-col cols="6" md="4" class="mt-10">
                                <v-dialog ref="start_dialog" v-model="end_date_modal" :return-value.sync="end_date" persistent width="290px">
                                    <template v-slot:activator="{ on }">
                                    <v-text-field v-model="end_date" :rules="inputRules"  label="Picker in dialog" prepend-icon="mdi-calendar" readonly v-on="on"></v-text-field>
                                    </template>
                                    <v-date-picker v-model="end_date" scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn text color="primary" @click="end_date_modal = false">Cancel</v-btn>
                                    <v-btn text color="primary" @click="$refs.start_dialog.save(end_date)">OK</v-btn>
                                    </v-date-picker>
                                </v-dialog>
                            </v-col>
                            <v-col cols="6" md="4" style="margin-top: 60px;">
                                <v-btn color="info darken-2" class="px-5 py-2" dark elevation="15" rounded @click="date_range">
                                    <v-icon left>mdi-flash-circle</v-icon>
                                    <span class="caption font-weight-bold text-uppercase">Genderate Report</span>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-col>
            </v-row>
            <v-divider />
            <v-card-text>
                <v-card class="pa-2" outlined>
                    <line-chart :chart-data="datacollection" :height="120"></line-chart>
                </v-card>
            </v-card-text>
        </v-card>
    </v-dialog>

    <v-dialog v-model="medical_dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-card>
            <v-toolbar dark color="info darken-1" flat>
            <v-toolbar-title class="subtitle-2 font-weight-bold text-uppercase">
                Vitals Records Analysis
                <v-icon class="ml-3">mdi-medical-bag</v-icon>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                
                <v-btn dark text @click="medical_dialog = false">Close</v-btn>
            </v-toolbar-items>
            </v-toolbar>
            <v-row align="center" class="flex-column">
                <v-img src="/app_asset/medix_full.png" width="200" />
                <h3 class="subtitle-2 mt-2 text-uppercase font-weight-bold">All Vitals Records</h3>
            </v-row>
            <v-divider />
            <v-card-text>
                <v-card flat>
                    <v-card-text class="pa-0">
                        <v-card outlined class="pa-0">
                            <v-card-title>
                                <span class="subtitle-2 font-weight-bold">Vital Report List</span>
                            <v-spacer></v-spacer>
                            <v-text-field v-model="medical_search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
                            </v-card-title>
                            <v-data-table :headers="medical_headers" :items="vitalHistory" :search="medical_search">
                                <template v-slot:item.created_at = "{item}">
                                    <span>{{item.created_at | formatDate}}</span>    
                                </template>
                                <template v-slot:item.user = "{item}">
                                    <span>{{item.user.title}} {{item.user.firstname}} {{item.user.lastname}}</span>    
                                </template>
                                <template v-slot:item.pressure = "{item}">
                                    <span>{{item.systolic}} / {{item.diastolic}} mmHg</span>    
                                </template>
                                <template v-slot:item.temperature = "{item}">
                                    <span>{{item.temperature}} &#8451;</span>    
                                </template>
                                <template v-slot:item.respiratory_rate = "{item}">
                                    <span>{{item.temperature}} BPM</span>    
                                </template>
                                <template v-slot:item.pulse_rate = "{item}">
                                    <span>{{item.pulse_rate}} BPM</span>    
                                </template>
                                <template v-slot:item.weight = "{item}">
                                    <span v-if="item.weight">{{item.weight}} KG</span> 
                                    <span v-else>N/A</span>    
                                </template>
                                <template v-slot:item.height = "{item}">
                                    <span v-if="item.height">{{item.height}} cm</span>    
                                    <span v-else>N/A</span>    
                                </template>
                                <template v-slot:item.actions = "{item}">
                                    <v-btn rounded color="info darken-1" elevation="10" @click="open_report(item)">
                                        <v-icon left size="18">mdi-flash-circle</v-icon>
                                        <span class="caption">generate report</span>
                                    </v-btn>
                                </template>
                            </v-data-table>
                        </v-card>
                    </v-card-text>
                </v-card>
            </v-card-text>
        </v-card>
    </v-dialog>

    <v-dialog v-model="vital_report_dialog" id="vital_report_form" fullscreen hide-overlay transition="dialog-bottom-transition">
        <html id="form_html" style="width: 100%; margin: 0 auto">
            <body>
                <v-card>
            <v-container>
                <v-card outlined class="pa-4">
                    <section class="d-flex">
                        <v-img src="/app_asset/medix_full.png" max-width="200"></v-img>
                        <h3 style="padding-top: 63px;" class="ml-10 subtitle-1 font-weight-bold text-uppercase">Vitals Record Report</h3>
                        <v-spacer />
                        <div id="print_preview_toolbar">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-btn color="success darken-2" class="px-5 caption d-print-none" tile dark depressed style="margin-top: 60px;" @click="print_form" v-on="on">
                                        <v-icon left>mdi-download</v-icon>
                                        <span class="caption">pdf</span>
                                    </v-btn>
                                </template>
                            <span class="caption">Download form as pdf</span>
                            </v-tooltip>
                            <v-btn color="red darken-2" class="px-5 ml-5 caption d-print-none" dark tile depressed style="margin-top: 60px;" @click="vital_report_dialog = false">Close</v-btn>
                        </div>
                    </section>
                    <div style="width: 100%; height: 5px; margin: 10px auto; background-color: grey;"></div>
                    <v-row>
                        <v-col cols="12" align="center" justify="center">
                            <v-avatar size="120">
                                <v-img :src="getImage"></v-img>
                            </v-avatar>
                            <div class="d-flex flex-column">
                                <span class="subtitle-2 font-weight-bold" v-if="patient_report !== null">
                                    <v-icon class="mr-1" color="success darken-1">mdi-account</v-icon>
                                    {{patient_report.title}} {{patient_report.firstname}} {{patient_report.lastname}}
                                </span>
                                <span class="subtitle-2 font-weight-bold" v-if="patient_report !== null">
                                    <v-icon class="mr-1" color="success darken-1">mdi-account-tie</v-icon>
                                    {{patient_report.job_title}}
                                </span>    
                            </div>
                        </v-col>
                    </v-row>
                    <v-divider />
                    <section style="width: 70%; margin: 0 auto;">
                        <v-row>
                            <v-col cols="3">
                                <div class="d-flex flex-column justify-center align-center" v-if="patient_report !== null">
                                    <span class="title font-weight-bold">{{patient_report.age}} <span class="caption font-weight-bold">years</span></span>
                                    <span class="subtitle-2 font-weight-regular text-uppercase">Age</span>   
                                </div>
                            </v-col>
                            <v-col cols="3">
                                <div class="d-flex flex-column justify-center align-center" v-if="report !== null">
                                    <span class="title font-weight-bold">{{calculateBMI}} <span class="caption font-weight-bold">bmi</span></span>
                                    <span class="subtitle-2 font-weight-regular text-uppercase">BMI</span>   
                                </div>
                            </v-col>
                            <v-col cols="3">
                                <div class="d-flex flex-column justify-center align-center" v-if="report !== null">
                                    <span class="title font-weight-bold">{{report.height}} <span class="caption font-weight-bold">cm</span></span>
                                    <span class="subtitle-2 font-weight-regular text-uppercase">Height</span>   
                                </div>
                            </v-col>
                            <v-col cols="3">
                                <div class="d-flex flex-column justify-center align-center" v-if="report !== null">
                                    <span class="title font-weight-bold">{{report.weight}} <span class="caption font-weight-bold">kg</span></span>
                                    <span class="subtitle-2 font-weight-regular text-uppercase">Weight</span>   
                                </div>
                            </v-col>
                        </v-row>
                    </section>
                        <v-card>
                            <v-card-title class="grey darken-3" dark>
                                <span class="subtitle-2 font-weight-bold white--text">Blood Pressure</span>
                                <v-icon class="mx-2" color="white">mdi-heart-flash</v-icon>
                            </v-card-title>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="4">
                                        <div class="d-flex flex-column" v-if="report !== null">
                                            <span class="headline font-weight-bold"> {{report.systolic}} / {{report.diastolic}} <span class="caption font-weight-bold">mmHg</span></span>
                                            <span class="subtitle-2 my-3">
                                                <v-icon size="18">mdi-clock</v-icon>
                                                {{report.created_at | formatDate}}
                                            </span>
                                        </div>
                                    </v-col>
                                    <v-col cols="8">
                                        <section class="d-flex flex-column" v-if="report !== null">
                                            <div class="d-flex">
                                                <span class="font-weight-bold subtitle-2">Systolic Value (mmHg) :</span>
                                                <span class="font-weight-bold mx-3">{{report.systolic}}</span>
                                            </div>
                                            <div class="d-flex mt-3">
                                                <span class="font-weight-bold subtitle-2">Diastolic Value (mmHg) :</span>
                                                <span class="font-weight-bold mx-3">{{report.diastolic}}</span>
                                            </div>
                                            <div class="d-flex mt-3">
                                                <span class="font-weight-bold subtitle-2">Blood Pressure Category</span>
                                                <v-chip pill class="primary ml-auto px-5" dark>{{pressure_analyze}}</v-chip>
                                            </div>
                                        </section>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                         <v-card>
                            <v-card-title class="grey darken-3" dark>
                                <span class="subtitle-2 font-weight-bold white--text">Heart Rate Pulse</span>
                                <v-icon class="mx-2" color="white">mdi-heart-pulse</v-icon>
                            </v-card-title>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="4">
                                        <div class="d-flex flex-column" v-if="report !== null">
                                            <span class="headline font-weight-bold"> {{report.pulse_rate}} <span class="caption font-weight-bold">bpm</span></span>
                                            <span class="subtitle-2 my-3">
                                                <v-icon size="18">mdi-clock</v-icon>
                                                {{report.created_at | formatDate}}
                                            </span>
                                        </div>
                                    </v-col>
                                    <v-col cols="8">
                                        <section class="d-flex flex-column">
                                            <div class="d-flex">
                                                <span class="font-weight-bold subtitle-2">Measurement indicate the  heart rhythm and the strength of the pulse </span>
                                            </div>
                
                                        </section>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                         <v-card>
                            <v-card-title class="grey darken-3" dark>
                                <span class="subtitle-2 font-weight-bold white--text">Respiratory Rate</span>
                                <v-icon class="mx-2" color="white">mdi-head-flash</v-icon>
                            </v-card-title>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="4">
                                        <div class="d-flex flex-column" v-if="report !== null">
                                            <span class="headline font-weight-bold"> {{report.respiratory_rate}} <span class="caption font-weight-bold">bpm</span></span>
                                            <span class="subtitle-2 my-3">
                                                <v-icon size="18">mdi-clock</v-icon>
                                                {{report.created_at | formatDate}}
                                            </span>
                                        </div>
                                    </v-col>
                                    <v-col cols="8">
                                        <section class="d-flex flex-column">
                                            <div class="d-flex">
                                                <span class="font-weight-bold subtitle-2">Measurement indicate the number of breaths per minute </span>
                                            </div>
                
                                        </section>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                        <v-card>
                            <v-card-title class="grey darken-3" dark>
                                <span class="subtitle-2 font-weight-bold white--text">Body Temperature</span>
                                <v-icon class="mx-2" color="white">mdi-thermometer</v-icon>
                            </v-card-title>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="4">
                                        <div class="d-flex flex-column"  v-if="report !== null">
                                            <span class="headline font-weight-bold"> {{report.temperature}} <span class="caption font-weight-bold"> &#8451;</span></span>
                                            <span class="subtitle-2 my-3">
                                                <v-icon size="18">mdi-clock</v-icon>
                                                {{report.created_at | formatDate}}
                                            </span>
                                        </div>
                                    </v-col>
                                    <v-col cols="4">
                                        <section class="d-flex flex-column">
                                            <div class="d-flex">
                                                <span class="font-weight-bold subtitle-2">Measurement of body heat </span>
                                            </div>
                                            <div class="d-flex mt-3">
                                                <span class="font-weight-bold subtitle-2 mr-2">Body Temperature in Degrees Fahrenheit: </span>
                                                <span class="font-weight-bold">{{temperature_F}} &#8457</span>
                                            </div>
                                            <div class="d-flex mt-3">
                                                <span class="font-weight-bold subtitle-2">Temperature Analysis </span>
                                                <v-chip pill class="primary mx-2 px-5" dark>{{temperature_analysis}}</v-chip>
                                            </div>
                                        </section>
                                    </v-col>
                                    <v-col cols="4" class="d-flex" v-if="report !== null">
                                        <v-progress-circular class="ml-auto" :rotate="180" :size="100" :width="15" :value="report.temperature" color="pink">{{report.temperature}}</v-progress-circular>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                </v-card>
            </v-container>
        </v-card>
            </body>
        </html>
    </v-dialog>

    <v-dialog v-model="loading_dialog" hide-overlay persistent width="300">
      <v-card color="teal" dark>
        <v-card-text>
          <span class="subtitle-2 font-weight-bold font-italic">Loading data. Please wait...</span>  
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="pdf_loading_dialog" hide-overlay persistent width="300">
        <v-card color="teal" dark outlined flat>
            <v-card-text>
            <span class="subtitle-2 font-weight-light font-italic">preparing pdf, please wait...</span>  
            <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
            </v-card-text>
        </v-card>
    </v-dialog>
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import LineChart from '../VitalLineChart';
import jspdf from 'jspdf';
import domtoimage from "dom-to-image";

export default {
    components: {
        LineChart
    },
    data: () => ({
        pdf_loading_dialog: false,
        vital_report_dialog: false,
        patient_id:null,
        loading_dialog: false,
        search_patient:'',
        hideBackground: true,
        indeterminate: true,
        progress: true,
        start_date: null,
        end_date: null,
        end_date_modal: false,
        start_date_modal: false,
        chart_dialog: false,
        medical_dialog: false,
        medical_headers: [
        {
          text: 'Date Checked',
          align: 'start',
          sortable: false,
          value: 'created_at',
        },
        { text: 'Examined By', value: 'user' },
        { text: 'Blood Pressure', value: 'pressure' },
        { text: 'Temperature', value: 'temperature' },
        { text: 'Respiration Rate', value: 'respiratory_rate', align: 'center' },
        { text: 'Heart Pulse Rate', value: 'pulse_rate', align: 'center' },
        { text: 'Weight', value: 'weight' },
        { text: 'Height', value: 'height', align: 'center'},
        { text: 'Actions', value: 'actions', sortable: false },
        ],
        medical_search: '',
        vitalHistory: [],
        patients:null,
        datacollection:null,
        dateCategory:null,
        colors :['red darken-2', 'success darken-2', 'warning darken-1', 'primary'],
        inputRules: [
        (v) => !!v || 'Date is required',
        ],
        backgroundColors: ['#FF0066', '#08900A', '#9933CC', '#FF8800', '#00695c'],
        report: null,
        patient_report: null,
    }),
    watch:{
        patient_vitals(){
            if(this.patient_vitals){
                this.patients = this.patient_vitals;
            }
        }
    },
    computed:{
        ...mapGetters(['patient_vitals']),

        filteredPatients(){
            return this.patients.filter(data => {
                return data.firstname.toLowerCase().match(this.search_patient.toLowerCase()) || data.lastname.toLowerCase().match(this.search_patient.toLowerCase()) ;
            });
        },
        getImage(){
            if(this.patient_report !== null){
                if(this.patient_report.image){
                    return '/storage/patients/profiles/' + this.patient_report.image;
                }else{
                    if(this.patient_report.gender === 'Male'){
                        return '/app_asset/male_avatar.png'
                    }else{
                        return '/app_asset/undraw_female_avatar_l3ey.png'
                    }
                }
            }
        },
        calculateBMI(){
            if(this.report !== null){
                if(this.report.weight && this.report.height){
                    let height_in_meters = this.report.height / 100;
                    let height_squared = height_in_meters * height_in_meters;
                    let bmi = this.report.weight / height_squared;
                    return bmi.toFixed(1);
                    
                }
            }
        },
        pressure_analyze(){
            if(this.report !== null){
                if(this.report.systolic < 120 && this.report.diastolic < 80){
                    return 'Normal'
                }else if((this.report.systolic <= 129 && this.report.systolic >= 120) && this.report.diastolic < 80){
                    return 'Elevated'
                }else if((this.report.systolic <= 139 && this.report.systolic >= 130) || (this.report.diastolic <= 89 && this.report.diastolic >= 80)){
                    return 'Hypertension Stage 1'
                }else if(this.report.systolic >= 140 || this.report.diastolic >= 90){
                    return 'Hypertension Stage 2'
                }else if(this.report.systolic > 180 && this.report.diastolic > 120 ){
                    return 'Hypertension Crises'
                }else if (this.report.systolic > 180 || this.report.diastolic > 120 ){
                    return 'Hypertension Crises'
                }
            }
        },
        temperature_analysis(){
            if(this.report !== null){
                if(this.report.temperature <= 37.2 && this.report.temperature >= 36.5){
                    return 'Normal'
                }else if(this.report.temperature < 36.5){
                    return 'Hypothermia'
                }else if(this.report.temperature > 37.2){
                    return 'Fever'
                }
            }
        },
        temperature_F(){
            if(this.report !== null){
                let fahren =  (this.report.temperature * 1.8) + 32;
                return fahren;
            }
        }
    },
    methods:{
        ...mapActions(['fetchPatientVitals']),

        print_form(){
            this.pdf_loading_dialog = true;
            document.getElementById('print_preview_toolbar').style.display = "none";
            var ele = document.getElementById('form_html')
                        /** WITH CSS */
            domtoimage.toJpeg(ele).then((dataUrl) => {
            var img = new Image();
            img.src = dataUrl;
            const doc = new jspdf({
                orientation: "portrait",
                // unit: "pt",
                format: [1000, 1400]
            });
            doc.addImage(img, "JPEG", 10, 5);
            const filename ="Vital Record.pdf";
            doc.save(filename);
            this.pdf_loading_dialog = false;
            document.getElementById('print_preview_toolbar').style.display = "block";
            })
            .catch(function(error) {
                console.error("oops, something went wrong!", error);
                this.pdf_loading_dialog = false;
                document.getElementById('print_preview_toolbar').style.display = "block";
            });
        },

        fillData (){
        this.datacollection = {
            labels: ['Systolic', 'Diastolic', 'Heart Rate', 'Respiratory Rate', 'Temperature'],
            datasets: this.dateCategory,
            }
      },

        openChart(item){
            this.patient_id = item.id,
            this.loading_dialog = true;
                axios.post('/api/patient_vitals', {id:item.id}).then(response => {
                    this.vitalHistory = response.data;
                    this.dateCategory = this.vitalHistory.map(item => {
                        return {
                            label: moment(item.created_at).format('MMMM Do, YYYY'),
                            backgroundColor: this.backgroundColors[ Math.floor( Math.random(0,1) * this.backgroundColors.length ) ],
                            data: [item.systolic, item.diastolic, item.pulse_rate, item.respiratory_rate, item.temperature]
                        }
                    });
                    if(this.dateCategory){
                        this.fillData();
                        this.loading_dialog = false;
                        this.chart_dialog = true;
                    }
                });
            // this.chart_dialog = true;
        },
        openRecords(item){
            this.patient_report = item;
            this.loading_dialog = true;
            axios.post('/api/patient_vitals', {id:item.id}).then(response => {
                this.vitalHistory = response.data
            });
            if(this.vitalHistory){
                this.loading_dialog = false;
                this.medical_dialog = true;
            }
        },
        goback(){
            this.$router.go(-1);
        },
        getInitials(item){
        var first = item.firstname.slice(0, 1).toUpperCase();
        var last = item.lastname.slice(0, 1).toUpperCase();
        var ini = first + '' + last;
        return ini;
      },
      getRandomColor(item){
        if(item){
          var item =  this.colors[ Math.floor( Math.random(0,1) * this.colors.length ) ];
          return item
        }
      },
      formatStatus(item){
          if(item.referred === 0){
              return 'mdi-star'
          }else{
              return 'mdi-cached'
          }
      },
      formatStatusColor(item){
          if(item.referred === 0){
              return 'warning darken-1'
          }else{
              return 'red darken-3'
          }
      },
      date_range(){
          this.loading_dialog = true;
          if(this.$refs.daterange_form.validate()){
              axios.post('/api/vitals_date_range', {id: this.patient_id, start: this.start_date, end: this.end_date}).then(response => {
                  this.vitalHistory = response.data;
                  this.dateCategory = this.vitalHistory.map(item => {
                        return {
                            label: moment(item.created_at).format('MMM Do, YYYY'),
                            backgroundColor: ['#FF0066', '#08900A', '#9933CC', '#FF8800', '#00695c'],
                            data: [item.systolic, item.diastolic, item.pulse_rate, item.respiratory_rate, item.temperature]
                        }
                    });
                    if(this.dateCategory){
                        this.fillData();
                        this.loading_dialog = false;
                    }
              });
          }
      },
      open_report(item){
          this.report = item;
          if(this.report !== null){
              this.vital_report_dialog = true;
          }
      }
    },
    filters:{
        formatDate(value){
            return moment(value).format('MMMM Do, YYYY');
        },
        Completed(value){
            if(value === 0){
                return 'not completed'
            }else if(value === 1){
                return 'completed'
            }
        },
        formatTime(value){
            return moment(value).format('LT');
        }
    },
    created(){
        this.fetchPatientVitals();
        
    }
}
</script>

<style scoped>

</style>
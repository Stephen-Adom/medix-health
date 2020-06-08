<template>
    <div>
        <v-container>
            <v-card outlined class="pa-2">
                <v-toolbar flat>
                    <v-toolbar-title>
                        <span class="font-weight-bold subtitle-2 text-uppercase grey--text darken-3">Patient Vitals</span>
                    </v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer />
                    <div>
                        <v-btn tile class="px-5 mr-2 red darken-2" depressed @click="goback" dark>
                            <span class="caption">back</span>
                        </v-btn>
                        <v-btn tile color="success darken-3" :disabled="submmited" class="px-5 mr-2" depressed @click="saveVitals">
                            <span class="caption">Save</span>
                        </v-btn>
                    </div>
                </v-toolbar>
                <v-divider  class="my-4"/>
                <v-card-text>
                    <v-card class="pa-3" elevation="15" style="border-top: 4px solid green;">
                        <v-row>
                            <v-col cols="12" md="8" lg="8">
                                <v-row class="mx-4" v-if="patient">
                                    <v-col cols="12" md="3" lg="3" class="text-center">
                                        <div class="subtitle-2 text-uppercase">
                                            First Name
                                        </div>
                                        <span class="subtitle-2 font-weight-bold">{{patient.firstname}}</span>
                                    </v-col>
                                    <v-col cols="12" md="3" lg="3" class="text-center">
                                        <div class="subtitle-2 text-uppercase">
                                            Last Name
                                        </div>
                                        <span class="subtitle-2 font-weight-bold">{{patient.lastname}}</span>
                                    </v-col>
                                    <v-col cols="12" md="3" lg="3" class="text-center">
                                        <div class="subtitle-2 text-uppercase">
                                            Sex
                                        </div>
                                        <span class="subtitle-2 font-weight-bold">{{patient.gender}}</span>
                                    </v-col>
                                    <v-col cols="12" md="3" lg="3" class="text-center">
                                        <div class="subtitle-2 text-uppercase">
                                            DOB
                                        </div>
                                        <span class="font-weight-bold subtitle-2">{{patient.dob | formatDob}}</span>
                                    </v-col>
                                </v-row>
                                <v-divider />
                                <v-row class="mx-4" v-if="patient">
                                    <v-col cols="12" md="4" lg="4" class="text-center">
                                        <div class="subtitle-2 text-uppercase">
                                            Email
                                        </div>
                                        <span class="subtitle-2 font-weight-bold">{{patient.email}}</span>
                                    </v-col>
                                    <v-col cols="12" md="4" lg="4" class="text-center">
                                        <div class="subtitle-2 text-uppercase">Contact</div>
                                        <span class="subtitle-2 font-weight-bold">{{patient.phone}}</span>
                                    </v-col>
                                    <v-col cols="12" md="4" lg="4" class="text-center">
                                        <div class="subtitle-2 text-uppercase">Job Title</div>
                                        <span class="subtitle-2 font-weight-bold">{{patient.job_title}}</span>
                                    </v-col>
                                </v-row>
                                <v-divider />
                                <v-row class="mx-4" v-if="patient">
                                    <v-col cols="12" md="3" lg="3" class="text-center">
                                        <div class="subtitle-2 text-uppercase">
                                            Age
                                        </div>
                                        <span class="subtitle-2 font-weight-bold">{{patient.age}} years</span>
                                    </v-col>
                                    <v-col cols="12" md="3" lg="3" class="text-center">
                                        <div class="subtitle-2 text-uppercase">
                                            Weight
                                        </div>
                                        <span class="subtitle-2 font-weight-bold">{{vitals.weight}} Kg</span>
                                    </v-col>
                                    <v-col cols="12" md="3" lg="3" class="text-center">
                                        <div class="subtitle-2 text-uppercase">
                                            Height
                                        </div>
                                        <span class="subtitle-2 font-weight-bold">{{vitals.height}} cm</span>
                                    </v-col>
                                    <v-col cols="12" md="3" lg="3" class="text-center">
                                        <div class="subtitle-2 text-uppercase">Body Mass Index (BMI)</div>
                                        <span class="font-weight-bold subtitle-2">{{ calculateBMI }} Kg/m2</span>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="12" md="4" lg="4" class="mt-4" v-if="patient">
                                <v-responsive>
                                    <v-img :src="getImage" width="60%" class="mx-auto"></v-img>
                                </v-responsive>
                                <h5 class="subtitle-2 font-weight-bold grey--text text-center mt-3">Status: {{getActive}}</h5>
                                <v-btn tile color="info darken-1" dark class="px-5 d-flex mx-auto" depressed @click="appointmentdialog = true">
                                    <span class="caption">Book appointment</span>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-card-text>

                <v-dialog v-model="appointmentdialog" scrollable max-width="600px" persistent>
                        <v-card>
                            <v-card-title class="success darken-1" dark>
                                <span class="white--text">Book Appointment</span>    
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-card-text>
                                    <div>
                                        <span class="subtitle-1 font-weight-bold d-block">Choose Type of Speciality</span>
                                            <v-row>
                                                <v-col cols="12">
                                                    <v-chip-group v-model="speciality" active-class="white--text text--accent-4" row>
                                                        <v-chip filter color="success darken-1" value="Doctor" class="ma-2" label>Doctor <v-icon size="18" right>mdi-stethoscope</v-icon></v-chip>
                                                        <v-chip filter color="success darken-1" value="Lab" class="ma-2" label>Lab Technician <v-icon size="18" right>mdi-microscope</v-icon></v-chip>
                                                    </v-chip-group>
                                                </v-col>
                                            </v-row>
                                        </div>
                                        <div>
                                            <span class="subtitle-1 font-weight-bold d-block">Choose Speciality</span>
                                            <v-row>
                                                <v-col cols="12" v-if="doctors.length">
                                                    <v-chip-group v-model="selection" active-class="success--text text--accent-4">
                                                        <v-chip class="ma-2" v-for="doctor in doctors" :key="doctor.id" :value="doctor.id">
                                                            <v-avatar left>
                                                                <v-img :src="getStaffImage(doctor)" />
                                                            </v-avatar>
                                                            <span>{{doctor.title}} {{doctor.firstname}}</span>
                                                            </v-chip>
                                                    </v-chip-group>
                                                </v-col>
                                                <template v-else>
                                                    <span class="ml-3"><i>Select Speciality type</i></span>
                                                </template>   
                                            </v-row>
                                        </div>
                                <v-divider class="my-3"/>
                                <div>
                                    <span class="subtitle-1 font-weight-bold d-block">Available Dates:</span>
                                    <v-row>
                                        <v-col cols="12" v-if="schedules">
                                            <v-chip-group v-model="appointment_day" active-class="success--text text--accent-4 darken-2" row>
                                                <template v-if="schedules.length">
                                                    <v-chip filter outlined class="ma-2" :value="schedule.id" v-for="schedule in schedules" :key="schedule.id">{{schedule.schedule_date | formatDate}}</v-chip>
                                                </template>
                                                <template v-else>
                                                    <span><i>Select appointment type to display available dates</i></span>
                                                </template>
                                            </v-chip-group>
                                        </v-col>
                                    </v-row>
                                </div>
                                <v-divider class="my-3"/>
                                <div>
                                    <span class="subtitle-1 font-weight-bold d-block">Available Times:</span>
                                    <v-row>
                                        <v-col cols="12" v-if="timings">
                                            <v-chip-group v-model="appointment_time" active-class="white--text text--accent-4 darken-2" row>
                                                <template v-if="timings.length">
                                                    <v-chip filter color="success darken-1" v-for="timing in timings" :key="timing.id" :value="timing.id" label class="ma-2">{{timing.start_time | formatTime}} - {{timing.end_time | formatTime}}</v-chip>
                                                </template>
                                                <template v-else>
                                                    <span><i>Select appointment day to display available timings</i></span>
                                                </template>
                                            </v-chip-group>
                                        </v-col>
                                    </v-row>
                                </div>
                                <v-divider class="my-3"/>
                                <div>
                                    <span class="subtitle-1 font-weight-bold d-block">Reason for Appointment</span>
                                    <v-form ref="appointmentform">
                                        <v-row>
                                            <v-col cols="12">
                                                <v-text-field label="Reason" color="success" large v-model="appointment_reason" :rules="reasonRules"></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-form>
                                </div>
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions class="d-flex justify-content-end">
                            <v-btn color="red darken-2" tile depressed dark class="px-4" @click="appointmentdialog = false">
                                <span class="caption">Close</span>
                            </v-btn>
                            <v-btn class="success darken-2 px-4" tile depressed dark @click="book_appointment">
                                <span class="caption">book</span>
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>

                <v-card-text>
                    <v-row>
                        <v-row class="mx-4">
                            <v-col cols="12" md="3" lg="3">
                                <v-card class="pa-3" outlined style="border-top: 4px solid green;">
                                    <v-card-title>
                                        <span class="font-weight-bold grey--text text-uppercase caption darken-5">Blood Pressure</span>
                                        <v-spacer />
                                        <v-icon size="20" color="teal darken-3">mdi-heart-flash</v-icon>
                                    </v-card-title>
                                    <v-divider />
                                    <v-card-text class="d-flex jutify-content-center">
                                        <v-progress-circular :rotate="360" :size="130" :width="20" :value="100" :color="pressure_analyze" class="mx-auto">
                                            <span class="mx-1"> {{vitals.systolic_value}} </span> / <span class="mx-1"> {{vitals.diastolic_value}} </span>
                                        </v-progress-circular>
                                    </v-card-text>
                                    <v-divider />
                                    <v-card-actions>
                                        <v-dialog v-model="blood_pressure_dialog" persistent max-width="350">
                                        <template v-slot:activator="{ on }">
                                            <v-btn block color="teal darken-2" dark elevation="15" v-on="on">
                                                <span class="caption">input value</span>
                                            </v-btn>
                                        </template>
                                        <v-card>
                                            <v-card-title class="headline">Blood Pressure</v-card-title>
                                            <v-divider />
                                            <v-card-text>
                                                <v-form v-model="pressure">
                                                    <v-text-field :rules="vitalsRules" outlined label="Systolic" placeholder="enter systolic value" color="success" v-model="vitals.systolic_value"></v-text-field>
                                                    <v-text-field :rules="vitalsRules" outlined label="Diastolic" placeholder="enter diastolic value" color="success" v-model="vitals.diastolic_value"></v-text-field>
                                                </v-form>
                                            </v-card-text>
                                            <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="green darken-1" text @click="blood_pressure_dialog = false">Done</v-btn>
                                            </v-card-actions>
                                        </v-card>
                                        </v-dialog>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="3" lg="3">
                                <v-card class="pa-3" outlined style="border-top: 4px solid red;">
                                    <v-card-title>
                                        <span class="font-weight-bold grey--text text-uppercase caption darken-5">Heart Rate Pulse</span>
                                        <v-spacer />
                                        <v-icon size="20" color="red darken-3">mdi-heart-pulse</v-icon>
                                    </v-card-title>
                                    <v-divider />
                                    <v-card-text class="d-flex jutify-content-center">
                                        <v-progress-circular :rotate="360" :size="130" :width="20" :value="100" color="red darken-3" class="mx-auto">
                                            <span> {{vitals.pulse_rate}} BPM</span>
                                        </v-progress-circular>
                                    </v-card-text>
                                    <v-divider />
                                    <v-card-actions>
                                        <v-dialog v-model="pulse_dialog" persistent max-width="350">
                                        <template v-slot:activator="{ on }">
                                            <v-btn block color="teal darken-2" dark elevation="15" v-on="on">
                                                <span class="caption">input value</span>
                                            </v-btn>
                                        </template>
                                        <v-card>
                                            <v-card-title class="headline">Pulse Rate</v-card-title>
                                            <v-divider />
                                            <v-card-text>
                                                <v-form v-model="pulse">
                                                    <v-text-field :rules="vitalsRules" outlined label="Heart Rate" v-model="vitals.pulse_rate" placeholder="enter pulse value" color="success"></v-text-field>
                                                </v-form>
                                            </v-card-text>
                                            <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="green darken-1" text @click="pulse_dialog = false">Done</v-btn>
                                            </v-card-actions>
                                        </v-card>
                                        </v-dialog>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="3" lg="3">
                                <v-card class="pa-3" outlined style="border-top: 4px solid orange;">
                                    <v-card-title>
                                        <span class="font-weight-bold grey--text text-uppercase caption darken-5">Respiration</span>
                                        <v-spacer />
                                        <v-icon size="20" color="warning darken-1">mdi-head-flash</v-icon>
                                    </v-card-title>
                                    <v-divider />
                                    <v-card-text class="d-flex jutify-content-center">
                                        <v-progress-circular :rotate="360" :size="130" :width="20" :value="100" color="warning darken-1" class="mx-auto">
                                            <span> {{vitals.respiration_rate}} BPM</span>
                                        </v-progress-circular>
                                    </v-card-text>
                                    <v-divider />
                                    <v-card-actions>
                                        <v-dialog v-model="respiration_dialog" persistent max-width="350">
                                        <template v-slot:activator="{ on }">
                                             <v-btn block color="teal darken-2" dark elevation="15" v-on="on">
                                                <span class="caption">input value</span>
                                            </v-btn>
                                        </template>
                                        <v-card>
                                            <v-card-title class="headline">Respiration Rate</v-card-title>
                                            <v-divider />
                                            <v-card-text>
                                                <v-form v-model="respiration">
                                                    <v-text-field :rules="vitalsRules" outlined label="Respiration Rate" v-model="vitals.respiration_rate" placeholder="enter rate value" color="success"></v-text-field>
                                                </v-form>
                                            </v-card-text>
                                            <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="green darken-1" text @click="respiration_dialog = false">Done</v-btn>
                                            </v-card-actions>
                                        </v-card>
                                        </v-dialog>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="3" lg="3">
                                <v-card class="pa-3" outlined style="border-top: 4px solid blue;">
                                    <v-card-title>
                                        <span class="font-weight-bold grey--text text-uppercase caption darken-5">Body Temperature</span>
                                        <v-spacer />
                                        <v-icon size="20" color="info darken-3">mdi-thermometer</v-icon>
                                    </v-card-title>
                                    <v-divider />
                                    <v-card-text class="d-flex jutify-content-center">
                                        <v-progress-circular :rotate="360" :size="130" :width="20" :value="100" :color="analyze_temperature" class="mx-auto">
                                            <span> {{vitals.temperature}} &#8451;</span>
                                        </v-progress-circular>
                                    </v-card-text>
                                    <v-divider />
                                    <v-card-actions>
                                        <v-dialog v-model="temperature_dialog" persistent max-width="350">
                                        <template v-slot:activator="{ on }">
                                             <v-btn block color="teal darken-2" dark elevation="15" v-on="on">
                                                <span class="caption">input value</span>
                                            </v-btn>
                                        </template>
                                        <v-card>
                                            <v-card-title class="headline">Body Temperature</v-card-title>
                                            <v-divider />
                                            <v-card-text>
                                                <v-form v-model="temperature">
                                                    <v-text-field outlined :rules="vitalsRules" label="Temperature" placeholder="enter temperature value" color="success" v-model="vitals.temperature"></v-text-field>
                                                    <div>
                                                        <span class="font-weight-bold grey--text darken-3">Input Weight and Height Value</span>
                                                        <v-divider></v-divider>
                                                        <v-text-field outlined label="Weight" placeholder="enter weight value" color="success" v-model="vitals.weight" hint="Weight measurements are in Kg"></v-text-field>
                                                        <v-text-field outlined label="Height" placeholder="enter Height value" color="success" v-model="vitals.height" hint="Height measurements are in Centimeters"></v-text-field>
                                                    </div> 
                                                </v-form>
                                            </v-card-text>
                                            <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="green darken-1" text @click="temperature_dialog = false">Done</v-btn>
                                            </v-card-actions>
                                        </v-card>
                                        </v-dialog>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-container>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import {Toast} from '../../app';

export default {
    data: () =>({
        appointmentdialog:false,
        appointment_time: null,
        appointment_day: null,
        speciality: null,
        schedules:[],
        timings:[],
        appointment_reason: '',
        reasonRules: [
            (v) => !!v || 'Appointment reason is required',
            (v) => (v && v.length > 5) || 'Appointment reason must be more than 5 characters',
        ],
        submmited: false,
        pressure: false,
        pulse:false,
        temperature:false,
        respiration:false,
        blood_pressure_dialog: false,
        pulse_dialog: false,
        respiration_dialog: false,
        temperature_dialog: false,
        vitals: {
            systolic_value: 0,
            diastolic_value: 0,
            pulse_rate: 0,
            respiration_rate: 0,
            temperature: 0,
            weight: 0,
            height: 0,
        },
        vitalsRules: [
            v => !!v || 'Field is required'
        ],
        doctors:[],
        selection:null,
    }),
    watch:{
        speciality(){
            if(this.speciality === 'Doctor'){
                this.getDoctors();
            }else if(this.speciality === 'Lab'){
                this.getLabs();
            }
        },
        appointment_day(){
            if(this.appointment_day !== null){
                this.getDoctorTime(this.appointment_day);
            }
        },
        selection(){
            if(this.selection !== null){
                this.getDoctorSchedule(this.selection);
            }
        }
    },
    props:{
        id: [Number]
    },
    created(){
        if(this.Patients.length <= 0){
            this.fetchPatients();
        }
    },
    computed:{
        ...mapGetters(['Patients']),
        patient(){
            return this.Patients.find(data => data.id == this.id);
        },
        getImage(){
            if(this.patient.image){
                return '/storage/patients/profiles/' + this.patient.image;
            }else{
                if(this.patient.gender === 'Male'){
                    return '/app_asset/male_avatar.png'
                }else{
                    return '/app_asset/undraw_female_avatar_l3ey.png'
                }
            }
        },
        analyze_temperature(){
            if(this.vitals.temperature <= 37.2 && this.vitals.temperature >= 36.5){
                return 'success darken-1'
            }else if(this.vitals.temperature < 36.5){
                return 'info darken-2'
            }else if(this.vitals.temperature > 37.2){
                return 'red darken-2'
            }
        },
        pressure_analyze(){
            if(this.vitals.systolic_value < 120 && this.vitals.diastolic_value < 80){
                return 'success darken-1'
            }else if((this.vitals.systolic_value <= 129 && this.vitals.systolic_value >= 120) && this.vitals.diastolic_value < 80){
                return 'warning'
            }else if((this.vitals.systolic_value <= 139 && this.vitals.systolic_value >= 130) || (this.vitals.diastolic_value <= 89 && this.vitals.diastolic_value >= 80)){
                return 'warning darken-1'
            }else if(this.vitals.systolic_value >= 140 || this.vitals.diastolic_value >= 90){
                return 'red darken-2'
            }else if(this.vitals.systolic_value > 180 && this.vitals.diastolic_value > 120 ){
                return 'red darken-3'
            }else if (this.vitals.systolic_value > 180 || this.vitals.diastolic_value > 120 ){
                    return 'red darken-3'
                }
        },
        calculateBMI(){
            if(this.vitals.weight && this.vitals.height){
                let height_in_meters = this.vitals.height / 100;
                let height_squared = height_in_meters * height_in_meters;
                let bmi = this.vitals.weight / height_squared;
                return bmi.toFixed(1);
                
            }
        },
        getActive(){
            if(this.patient){
                if(this.patient.referred === 1){
                    return 'Referred';
                }else{
                    return 'Active';
                }
            }
        },
    },
    filters:{
        formatDate(value){
            return moment(value).format('dddd, MMMM Do YYYY');
        },
        formatTime(value){
            return moment(value).format('LT');
        },
        formatDob(value){
            return moment(value).format('MMMM Do, YYYY');
        }
    },
    methods:{
        ...mapActions(['fetchPatients']),

        getDoctors(){
            axios.get('/api/all_doctors').then(response => {
                this.doctors = response.data;
            });
        },
        getLabs(){
            axios.get('/api/all_labs').then(response => {
                this.doctors = response.data;
            });
        },

        goback(){
            this.$router.go(-1);
        },
        saveVitals(){
            if(this.pressure && this.pulse && this.respiration && this.temperature){
                axios.post('/store_vitals', {vitals: this.vitals, id: this.id}).then(response => {
                    if(response.data.success){
                        this.submmited = true;
                        Toast.fire({
                            icon: 'success',
                            title: 'Patient vitals saved'
					    });
                    }
                })
            }else{
                this.submmited =  false;
                Swal.fire(
                    'Data Error',
                    'Input data before submission',
                    'error'
                )
            }
        },
        book_appointment(){
        if(this.$refs.appointmentform.validate()){
            axios.post('/book_appointment', 
                {id: this.id, speciality: this.selection, appointment_time: this.appointment_time, 
                appointment_day: this.appointment_day, reason:this.appointment_reason}).then(response => {
                    if(response.data.success){
                        this.appointmentdialog = false;
                        Swal.fire({
                            title: 'Appointment Booked',
                            icon: 'success',
                            showClass: {
                                popup: 'animated fadeInDown faster'
                            },
                            hideClass: {
                                popup: 'animated fadeOutUp faster'
                            }
                        });
                    }
                })
            }
        },
        getDoctorTime(id){
            axios.post('/api/doctor_time', {id: id}).then(response => {
                if(response.data.no_timings){
                    Toast.fire({
                        icon: 'info',
                        title: 'No Available time'
                    });
                }
                if(response.data.timing){
                    this.timings = response.data.timing;
                }
            });
        },
        getDoctorSchedule(id){
            axios.post('/api/doctor_schedule',{id:id}).then(response => {
                if(response.data.schedule){
                    this.schedules = [];
                    this.schedules = response.data.schedule;
                }
                if(response.data.no_schedules){
                    this.schedules = [];
                    Toast.fire({
                        icon: 'info',
                        title: 'No Available Schedules'
                    });
                }
            });
        },
        getStaffImage(item){
		  if(item.image){
			  return '/storage/profiles/' + item.image;
		  }else{
			if(item.gender === "Male"){
				return '/app_asset/male-profile-2.jpg'
			}else{
				return '/app_asset/female-avatar.jpg'
			}
		  }
	  },
        // getLabSchedule(){
        //     axios.get('/api/lab_schedule').then(response => {
        //         this.schedules = response.data.schedule;
        //     })
        // } 
    },

}
</script>

<style scoped>

</style>
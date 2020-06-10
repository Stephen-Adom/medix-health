<template>
    <div class="mt-3">
        <v-container>
            <v-card class="pa-4">
                <v-toolbar class="success darken-2" elevation="20" dark>
                    <v-icon class="mr-2">mdi-circle-edit-outline</v-icon>
                    <v-toolbar-title class="subtitle-1 font-weight-bold">New Appointment</v-toolbar-title>
                    <v-spacer/>
                    <v-btn tile depressed class="white px-5" dark @click="goback">
                        <span class="caption black--text">back</span>
                    </v-btn>
                </v-toolbar>
                <v-row class="mt-3">
                    <v-col cols="12" md="7">
                        <v-card-title class="subtitle-1 font-weight-bold justify-space-between"><span>{{ currentTitle }}</span>
                            <v-avatar color="success darken-2" class="caption white--text" size="20">
                                <span class="overline">{{step}}</span>
                            </v-avatar>
                        </v-card-title>
                        <v-window v-model="step">
                        <v-window-item :value="1">
                            <v-card-text>
                                <v-form v-model="valid" ref="patientform">
                                    <v-card class="pa-4" outlined>
                                        <v-row class="mb-0">
                                            <v-col cols="12" sm="6" md="6">
                                                <v-select :attach="attach" color="success darken-2" v-model="appointment.title" :rules="titleRules" :items="titleOptions" label="Title" outlined />
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field outlined label="First Name" color="success darken-2" :rules="namedRules" v-model="appointment.firstname"></v-text-field>
                                            </v-col>
                
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field outlined label="Last Name" color="success darken-2" :rules="namedRules" v-model="appointment.lastname"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-dialog ref="dob_dialog" v-model="dob_modal" :return-value.sync="appointment.dob" persistent width="290px">
                                                    <template v-slot:activator="{ on }">
                                                        <v-text-field outlined label="DOB" color="success darken-2" :rules="dobRules" v-model="appointment.dob" v-on="on"></v-text-field>
                                                    </template>
                                                    <v-date-picker v-model="appointment.dob" scrollable>
                                                    <v-spacer></v-spacer>
                                                    <v-btn text color="primary" @click="dob_modal = false">Cancel</v-btn>
                                                    <v-btn text color="primary" @click="$refs.dob_dialog.save(appointment.dob)">OK</v-btn>
                                                    </v-date-picker>
                                                </v-dialog>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                 <v-select :attach="attach" color="success darken-2" :rules="genderRules" v-model="appointment.gender" :items="genderOptions" label="Sex" outlined />
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field outlined label="Email" color="success darken-2" :rules="emailRules" v-model="appointment.email"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field outlined label="Phone/Contact" color="success darken-2" :rules="phoneRules" :counter="10" v-model="appointment.phone"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6" class="d-flex">
                                                <v-text-field outlined label="Job Title" color="success darken-2" :rules="jobRules" v-model="appointment.job_title"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6" class="d-flex">
                                                <v-text-field outlined label="Address" color="success darken-2" :rules="addressRules" v-model="appointment.address"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field outlined label="Age" color="success darken-2" :rules="ageRules" v-model="appointment.age"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-combobox :attach="attach" :items="departmentOptions" label="Department" :rules="departmentRules" color="success darken-2" v-model="appointment.department" chips></v-combobox>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6" class="d-flex">
                                                <v-combobox :attach="attach" :items="employee_typeOptions" label="Employee Type" :rules="employee_typeRules" color="success darken-2" v-model="appointment.employee_type" chips></v-combobox>
                                            </v-col>
                                        </v-row>
                                    </v-card>
                                </v-form>
                            </v-card-text>
                        </v-window-item>
                        <v-window-item :value="2">
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
                                                    <v-chip class="ma-2" v-for="doctor in doctors" :key="doctor.id" :value="doctor.id" pill>
                                                        <v-avatar left>
                                                            <v-img :src="getImage(doctor)" />
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
                                        <v-col cols="12">
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
                                        <v-col cols="12">
                                            <v-chip-group v-model="appointment_time" active-class="white--text text--accent-4 darken-2" row>
                                                <template v-if="timings.length">
                                                    <v-chip filter color="success darken-1" v-for="(timing, index) in timings" :key="index" :value="timing.id" label class="ma-2">{{timing.start_time | formatTime}} - {{timing.end_time | formatTime}}</v-chip>
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
                                                <v-text-field label="Reason" color="success" large v-model="appointment.appointment_reason" :rules="reasonRules"></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-form>
                                </div>
                            </v-card-text>
                        </v-window-item>

                        <v-window-item :value="3">
                            <div class="pa-4 text-center body-1">
                                 <h3 class="title font-weight-light mb-2">
                                     <v-responsive>
                                         <v-img :src="patientImage" width="20%" class="mx-auto"></v-img>
                                     </v-responsive>
                                 </h3>
                                <p>New Appointment Booked for <span class="font-weight-bold">{{appointment.firstname}} {{appointment.lastname}}</span>, scheduled on 
                                <span class="font-weight-bold">{{getAppointmentDate | formatBookedDate }},</span> from <span class="font-weight-bold">{{getAppointmentStartTime | formatTime}}-</span><span class="font-weight-bold">{{getAppointmentEndTime | formatTime}}</span></p>
                            <span class="caption grey--text">
                                <v-btn class="ma-2" tile outlined color="success" @click="submitBooked" :loading="loading" :disabled="loading">Submit</v-btn>
                            </span>
                            </div>
                        </v-window-item>
                        </v-window>
                        <v-card-actions>
                            <v-btn :disabled="step === 1 || loading === true" text @click="step--"> Back</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn v-if="step !== 3" color="info darken-2" tile class="px-5" depressed @click="nextStep">
                                <span class="caption">Next</span>
                            </v-btn>
                        </v-card-actions>
                    </v-col>
                    <v-col cols="12" md="5" class="fill-height" style="margin-top: 100px;">
                        <div>
                            <v-responsive>
                                <v-img src="/app_asset/undraw_annotation_7das.svg" width="90%" class="mx-auto hidden-xs-only" v-if="step === 1"></v-img>
                                <v-img src="app_asset/undraw_booking_33fn.svg" width="90%" class="mx-auto hidden-xs-only" v-if="step === 2"></v-img>
                                <v-img src="app_asset/undraw_order_confirmed_aaw7.svg" width="90%" class="mx-auto hidden-xs-only" v-if="step === 3"></v-img>
                            </v-responsive>
                        </div>
                    </v-col>
                </v-row>
            </v-card>
        </v-container>
    </div>
</template>

<script>
import Swal from 'sweetalert2';
window.Swal = Swal;

export default {
    data: () => ({
        dob_modal: false,
        attach:true,
        loading:false,
        appointment:{
            title: null,
            firstname: null,
            lastname: null,
            phone: null,
            age: null,
            dob: null,
            email: null,
            appointment_reason: null,
            job_title: null,
            gender: null,
            department:null,
            employee_type:null,
            address:null,
        },
        valid: false,
        appointment_time: null,
        appointment_day: null,
        speciality: null,
        step: 1,
        schedules:[],
        timings:[],
        titleOptions: [
			'Mr',
			'Mrs',
			'Miss',
			'Dr'
        ],
        genderOptions: [
			'Male',
			'Female',
        ],
        employee_typeOptions: [
			'Senior Staff',
			'Junior Staff',
			'Casual',
			'Contract Workers'
        ],
        departmentOptions: [
			'Docks',
			'FSIC',
			'Human Resource',
            'Finance/IT',
            'Operations',
            'QHSE',
            'Supply Chain',
            'Engineering',
            'Fish Meal Plant'
		],
        namedRules: [
            (v) => !!v || 'Name is required',
        ],
        titleRules: [
            (v) => !!v || 'Title is required',
        ],
        dobRules: [
            (v) => !!v || 'DoB is required',
        ],
        addressRules: [
            (v) => !!v || 'Address is required',
        ],
        departmentRules: [
            (v) => !!v || 'Department is required',
        ],
        employee_typeRules: [
            (v) => !!v || 'Type of Employee Field is required',
        ],
        reasonRules: [
            (v) => !!v || 'Appointment reason is required',
            (v) => (v && v.length > 5) || 'Appointment reason must be more than 5 characters',
        ],
        phoneRules: [
            (v) => !!v || 'Phone number is required',
            (v) => (v && v.length == 10) || 'Phone number must be 10 characters',
        ],
        ageRules: [
            (v) => !!v || 'Age is required',
        ],
        genderRules: [
            (v) => !!v || 'Gender is required',
        ],
        jobRules: [
            (v) => !!v || 'Job title is required',
            (v) => (v && v.length > 1) || 'Job title must be more than 1 characters',
        ],
        emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      doctors:[],
      selection:null,
        
    }),
    filters:{
        formatDate(value){
            return moment(value).format('LL');
        },
        formatBookedDate(value){
            return moment(value).format('dddd, MMMM Do YYYY');
        },
        formatTime(value){
            return moment(value).format('LT');
        }
    },
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
    computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return 'Patient Information'
          case 2: return 'Book Appointment'
          default: return 'Appointment Created'
        }
      },
      getAppointmentDate(){
          let bookdate = this.schedules.find(schedule => schedule.id === this.appointment_day);
          if(bookdate){
              return bookdate.schedule_date;
          };
      },
      getAppointmentStartTime(){
          let time = this.timings.find(time => time.id === this.appointment_time);
          if(time){
              return time.start_time;
          }
      },
      getAppointmentEndTime(){
          let time = this.timings.find(time => time.id === this.appointment_time);
          if(time){
              return time.end_time;
          }
      },
      patientImage(){
          if(this.appointment.gender === 'Female'){
              return `app_asset/undraw_female_avatar_l3ey.png`
          }else{
              return `app_asset/male_avatar.png`
          }
      }
    },
    methods:{
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

        getImage(item){
		  if(item.image){
			  return '/staff/profiles/' + item.image;
		  }else{
			if(item.gender === "Male"){
				return '/app_asset/male-profile-2.jpg'
			}else{
				return '/app_asset/female-avatar.jpg'
			}
		  }
	  },

        getDoctorTime(id){
            axios.post('/api/doctor_time', {id: id}).then(response => {
                if(response.data.timing){
                    this.timings = response.data.timing;
                }
            });
        },
        nextStep(){
            if(this.step === 1){
                if(this.$refs.patientform.validate()){
                    this.step++
                }
            }else if(this.step === 2){
                if(this.$refs.appointmentform.validate()){
                    this.step++
                }
            }
        },
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
        submitBooked(){
            this.loading = true;
            axios.post('/store_appointment', 
            {appointment: this.appointment, speciality: this.selection, appointment_time: this.appointment_time, 
            appointment_day: this.appointment_day}).then(response => {
                if(response.data.email_error){
                    this.loading = false
                    Swal.fire(
                        'Patient Account Error',
                        response.data.email_error,
                        'error'
                    )
                }
                if(response.data.contact_error){
                    this.loading = false
                    Swal.fire(
                        'Patient Account Error',
                        response.data.contact_error,
                        'error'
                    )
                }
                if(response.data.success){
                    this.loading = false;
                    this.resetForm();
                    this.speciality = null,
                    this.schedules = [];
                    this.timings = [];
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
                    this.step = 1;
                }
            })
        },
        resetForm(){
            this.$refs.patientform.reset();
            this.$refs.appointmentform.reset();
        },
        goback(){
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>

</style>


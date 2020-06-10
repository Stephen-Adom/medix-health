<template>
    <v-container class="mt-5 ma-3">
        <vue-topprogress ref="topProgress" color="#00C851" colorShadow="#00C851" :height="5" errorColor="#CC0000"></vue-topprogress>
        <v-row class="px-5">
            <div class="d-flex flex-column">
                <h5 class="title font-weight-bold">All Patient Info</h5>
                <span class="subtitle-2 font-weight-regular grey--text">Compiled list of All Patient Records available at one place</span>
            </div>
            <div class="ml-auto d-flex flex-column justify-end">
                <span class="subtitle-2" v-if="Patients"><v-icon color="success darken-2">mdi-account-group</v-icon> Number of Patient: <span class="font-weight-bold black--text">{{Patients.length}}</span></span>
                <v-menu transition="slide-x-transition" bottom right>
                    <template v-slot:activator="{ on }">
                        <v-btn class="ma-2 px-5" small outlined color="success darken-2" dark v-on="on">
                            <span class="caption text-center">sort by</span>
                            <v-icon right size="15">mdi-chevron-down</v-icon>
                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item @click="fetchPatients">
                            <v-list-item-title class="caption">All</v-list-item-title>
                            <v-list-item-icon>
                                <v-icon size="19">mdi-gender-male-female</v-icon>
                            </v-list-item-icon>
                        </v-list-item>
                        <v-list-item @click="fetchMalePatients">
                            <v-list-item-title class="caption">Male</v-list-item-title>
                            <v-list-item-icon>
                                <v-icon size="19">mdi-gender-male</v-icon>
                            </v-list-item-icon>
                        </v-list-item>
                        <v-list-item @click="fetchFemalePatients">
                            <v-list-item-title class="caption">Female</v-list-item-title>
                            <v-list-item-icon>
                                <v-icon size="19">mdi-gender-female</v-icon>
                            </v-list-item-icon>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div> 
       
        </v-row>
        <v-row class="mt-10 px-5">
            <v-btn tile depressed class="success darken-2 px-7" dark @click="patient_form_dialog = true">
                <span class="caption">Add Patient</span>
                <v-icon right size="20">mdi-account-multiple-plus</v-icon>
            </v-btn>
            <v-spacer />
            <v-text-field class="subtitle-2" color="success darken-2" v-model="search" placeholder="Search by Name..." label="Patient Info" outlined dense style="width: 5% !important;"></v-text-field>
        </v-row>
        <v-divider inset />
        <v-row class="mt-3" v-if="Patients.length">
            <v-col cols="6" md="3" sm="4" v-for="patient in filteredPatients" :key="patient.id">
                <v-card outlined hover>
                    <v-card-text class="pa-3">
                        <v-row>
                            <v-col cols="4">
                                <v-avatar size="50">
                                    <v-img :src="getImage(patient)" />
                                </v-avatar>

                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <v-icon color="primary" dark v-on="on" class="ml-4 mt-3" v-if="patient.referred">mdi-arrange-send-backward</v-icon>
                                    </template>
                                <span class="caption">referred</span>
                                </v-tooltip>
                            </v-col>
                            <v-col cols="8" class="d-flex flex-column">
                                <span class="subtitle-2 font-weight-bold black--text d-inline-block text-truncate">{{patient.title}} {{patient.firstname}} {{patient.lastname}}</span>
                                <span class="caption font-weight-bold grey--text">{{patient.employee_type}}</span>
                                <div class="mt-1">
                                    <v-chip color="pink" dark label small>
                                        <span>{{format_phone(patient)}}</span>
                                    </v-chip>
                                </div>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-divider class="my-0" />
                    <v-card-text class="py-1 px-5">
                        <v-row>
                            <v-col cols="7">
                                <span class="subtitle-2 font-weight-light black--text">{{patient.job_title}}</span>
                            </v-col>
                            <v-col cols="5">
                                <span class="caption font-weight-bold grey--text">{{patient.gender}}</span>
                                <v-icon color="pink">{{formatGender(patient.gender)}}</v-icon>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-divider class="my-0" />
                    <v-card-text class="d-flex justify-center">
                        <v-tooltip top>
                            <template v-slot:activator="{ on }">
                                <v-btn color="info" class="mr-2" v-on="on" depressed fab x-small dark width="30" height="30" :to="{name: 'patient_details', params: {id: patient.id}}">
                                    <v-icon size="14">mdi-account-details</v-icon>
                                </v-btn>
                            </template>
                            <span class="caption">profile details</span>
                            </v-tooltip>

                            <v-tooltip top>
                                <template v-slot:activator="{ on }">
                                    <v-btn color="warning darken-1" v-on="on" :to="{name: 'first_aid', params: {id: patient.id}}" class="mr-2" depressed fab x-small dark width="30" height="30">
                                        <v-icon size="14">mdi-hospital-box</v-icon>
                                    </v-btn>
                                </template>
                            <span class="caption">first aid</span>
                            </v-tooltip>

                            <v-tooltip top>
                                <template v-slot:activator="{ on }">
                                    <v-btn color="primary" class="mr-2" v-on="on" @click="viewInfo(patient)" depressed fab x-small dark width="30" height="30">
                                        <v-icon size="14">mdi-heart-flash</v-icon>
                                    </v-btn>
                                </template>
                            <span class="caption">vitals</span>
                        </v-tooltip>
                        
                        <v-tooltip top>
                            <template v-slot:activator="{ on }">
                                <v-btn color="red darken-3" v-on="on" class="mr-2" depressed fab x-small dark width="30" height="30" @click="delete_account(patient)">
                                    <v-icon size="14">mdi-delete</v-icon>
                                </v-btn>
                            </template>
                        <span class="caption">delete account</span>
                        </v-tooltip>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <v-row v-else>
			<v-col cols="12">
				<v-card style="border-top: 4px solid green;">
					<v-card-text class="d-flex">
						<v-responsive max-width="30%">
							<v-img src="/app_asset/undraw_void_3ggu.svg" width="60%" class="mx-auto" />
						</v-responsive>
						<span class="text-center grey--text font-weight-bold subtitle-1 font-italic mx-5" style="margin-top: 80px;">No Patient(s) Data Available !!!</span>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>

        <v-dialog v-model="patient_form_dialog" persistent max-width="630px" scrollable>
        <v-card>
            <v-card-title>
                <span class="subtitle-1 text-uppercase font-weight-bold">Patient Profile</span>
            </v-card-title>
            <v-divider />
            <v-card-text style="height: 500px;">
            <v-container>
                <v-form v-model="valid" ref="patientform">
                    <v-card class="pa-4" flat>
                        <v-row class="mb-0">
                            <v-col cols="12" sm="6" md="6">
                                <v-select :attach="attach" dense color="success darken-2" v-model="patient.title" :rules="titleRules" :items="titleOptions" label="Title" outlined />
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field dense outlined label="First Name" color="success darken-2" :rules="namedRules" v-model="patient.firstname"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field dense outlined label="Last Name" color="success darken-2" :rules="namedRules" v-model="patient.lastname"></v-text-field>
                            </v-col>
                            <v-col sm="6" md="6">
                                    <v-select :attach="attach" dense color="success darken-2":rules="genderRules" v-model="patient.sex" :items="genderOptions" label="Sex" outlined />
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field dense outlined label="Email" color="success darken-2" :rules="emailRules" v-model="patient.email"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field dense outlined label="Phone/Contact" color="success darken-2" type="number" :rules="phoneRules" :counter="10" v-model="patient.contact"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-dialog ref="dob_dialog" v-model="dob_modal" :return-value.sync="patient.dob" persistent width="290px">
                                    <template v-slot:activator="{ on }">
                                        <v-text-field dense outlined label="DOB" color="success darken-2" :rules="dobRules" v-model="patient.dob" v-on="on"></v-text-field>
                                    </template>
                                    <v-date-picker v-model="patient.dob" scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn text color="primary" @click="dob_modal = false">Cancel</v-btn>
                                    <v-btn text color="primary" @click="$refs.dob_dialog.save(patient.dob)">OK</v-btn>
                                    </v-date-picker>
                                </v-dialog>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field dense outlined label="Age" color="success darken-2" type="number" :rules="ageRules" v-model="patient.age"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6" class="d-flex">
                                <v-text-field dense outlined label="Job Title" color="success darken-2" :rules="jobRules" v-model="patient.job_title"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6" class="d-flex">
                                <v-text-field dense outlined label="Address" color="success darken-2" :rules="addressRules" v-model="patient.address"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-combobox :attach="attach" :items="departmentOptions" label="Department" :rules="departmentRules" color="success darken-2" v-model="patient.department" chips></v-combobox>
                            </v-col>
                            <v-col cols="12" sm="6" md="6" class="d-flex">
                                <v-combobox :attach="attach" :items="employee_typeOptions" label="Employee Type" :rules="employee_typeRules" color="success darken-2" v-model="patient.employee_type" chips></v-combobox>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-form>
            </v-container>
            </v-card-text>
            <v-divider />
            <v-card-actions>
            <v-spacer></v-spacer>
                <v-btn color="red darken-3" tile depressed dark class="px-4" @click="close_form">
                    <span class="caption">Close</span>
                </v-btn>
                <v-btn color="success darken-1" tile depressed dark class="px-4" @click="new_patient">
                    <span class="caption">Save</span>
                </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>

        <v-dialog v-model="loading_dialog" hide-overlay persistent width="300">
			<v-card color="success darken-2" dark flat>
				<v-card-text>
				<span class="subtitle-2 font-weight-bold font-italic white--text">Add New Patient...</span>  
				<v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
				</v-card-text>
			</v-card>
		</v-dialog>
    </v-container>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import {Toast} from '../../app';
import Swal from 'sweetalert2';
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

export default {
    data:() => ({
        loading_dialog: false,
        attach:true,
        dob_modal: false,
        patient:{
            title: null,
            firstname: null,
            lastname: null,
            contact: null,
            age: null,
            email: null,
            job_title: null,
            sex: null,
            address:null,
            department:null,
            employee_type:null,
            dob:null,
        },
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
            (v) => !!v || 'DOB is required',
        ],
        departmentRules: [
            (v) => !!v || 'Department is required',
        ],
        employee_typeRules: [
            (v) => !!v || 'Type of Employee Field is required',
        ],
        addressRules: [
            (v) => !!v || 'Address is required',
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
        valid: false,
        patient_form_dialog: false,
        loadingData:false,
        search: '',
        headers: [
        { text: 'Image', align: 'start', value: 'image'},
        { text: 'Name of Patient', align: 'start', sortable: false, value: 'firstname'},
        { text: 'Sex', value: 'gender' },
        { text: 'Phone Number', value: 'phone' },
        { text: 'Email', value: 'email' },
        { text: 'Job Title', value: 'job_title' },
        { text: 'Status', value: 'referred' },
        { text: 'Actions', value: 'actions', sortable: false, align: 'center', },
      ],
      patients:[],
    }),
    created () {
        this.loadingData = true;
        this.fetchPatients();
    },
    watch:{
        Patients(){
            if(this.Patients.length){
                this.loadingData = false;
                this.$refs.topProgress.done();
            }else{
                this.$refs.topProgress.done();
            }
        }
    },
    computed:{
        ...mapGetters(['Patients']),
        filteredPatients(){
            return this.Patients.filter(patient => {
                return patient.firstname.toLowerCase().match(this.search.toLowerCase()) || patient.lastname.toLowerCase().match(this.search.toLowerCase());
            });
        }
    },
    mounted(){
        this.$refs.topProgress.start();
    },
    methods:{
        ...mapActions(['fetchPatients', 'fetchMalePatients', 'fetchFemalePatients']),
    formatGender(gender){
      	    if(gender == 'Male'){
                return 'mdi-gender-male'
            }else{
                return 'mdi-gender-female'
            }
      },
    viewInfo(item){
            this.$router.push({name: 'newvitals',  params: {id: item.id}})
    },
    delete_account(patient){
        swalWithBootstrapButtons.fire({
          title: 'Are you sure?',
          text: "The Patient Account will be deleted",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete Account!',
          cancelButtonText: 'No, cancel!',
          reverseButtons: true
        }).then((result) => {
          if (result.value) {
            axios.delete('/api/remove_patient_account/'+ patient.id).then(response => {
                if(response.data.success){
                    var index = this.Patients.indexOf(patient);
                    this.Patients.splice(index, 1);
                    swalWithBootstrapButtons.fire(
                    'Deleted',
                    response.data.success,
                    'success'
                    )
                }

                if(response.data.error){
                    swalWithBootstrapButtons.fire(
                    'Not Found',
                    response.data.error,
                    'error'
                    )
                }
            });
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              'Cancelled',
              'The Application process cancelled :)',
              'info'
            )
          }
        })
    },
    getGenderColor(gender){
      	if(gender === 'Male'){
      		return 'primary'
      	}else{
      		return 'success'
      	}
      },
    getImage(item){
        if(item.image){
            return '/patients/profiles/' + item.image;
        }else{
            if(item.gender === 'Male'){
                return '/app_asset/male_avatar.png'
            }else{
                return '/app_asset/undraw_female_avatar_l3ey.png'
            }
        }
    },
    format_phone(item){
        return '(+233)' + ' ' + item.phone.slice(1, 9);
    },
    formatStatusText(item){
          if(item === 0){
              return 'Active'
          }else{
              return 'Referred'
          }
      },
      formatStatus(item){
          if(item === 0){
              return 'mdi-account-arrow-left'
          }else{
              return 'mdi-account-arrow-right'
          }
      },
      getStatusColor(item){
          if(item === 0){
              return 'info darken-1'
          }else{
              return 'red darken-3'
          }
      },
      refer(item){
          this.$router.push({name: 'patient_referrals_form', params: {id: item.id}});
      },
      new_patient(){
          if(this.$refs.patientform.validate()){
              this.$refs.topProgress.start();
              this.loading_dialog = true;
              axios.post('/api/new_patient', {patient: this.patient}).then(response => {
                  if(response.data.success){
                      this.$refs.topProgress.done();
                      this.loading_dialog = false;
                      this.fetchPatients();
                      this.$refs.patientform.reset();
                        this.$refs.patientform.resetValidation();
                        this.patient_form_dialog = false;
                      Toast.fire({
                        icon: 'success',
                        title: 'Account Created'
                    })
                  }
                  if(response.data.error){
                      this.$refs.topProgress.fail();
                      this.loading_dialog = false;
                      Swal.fire(
                        'Error',
                        response.data.error,
                        'error'
                    )
                  }
                  if(response.data.contact_error){
                      this.$refs.topProgress.fail();
                      this.loading_dialog = false;
                      Swal.fire(
                        'Error',
                        response.data.contact_error,
                        'error'
                    )
                  }
              })
          }
      },
      close_form(){
          this.$refs.patientform.reset();
          this.$refs.patientform.resetValidation();
          this.patient_form_dialog = false;
      }
    }
}
</script>

<style scoped>

</style>



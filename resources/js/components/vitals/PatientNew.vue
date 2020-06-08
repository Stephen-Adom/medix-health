<template>
    <v-container>
        <v-card class="pa-2" outlined>
            <v-toolbar flat>
                <v-toolbar-title>
                    <span class="subtitle-1">New Patient Information</span>    
                </v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer/>
                <v-btn rounded class="px-6 success darken-2" elevation="15" @click="goback" dark>
                    <span class="font-weight-thin caption">back</span>
                </v-btn>
            </v-toolbar>
            <v-divider />
            <v-card-text class="mt-2">
                <v-row>
                    <v-col cols="12" md="8" lg="8">
                        <v-form ref="patientForm">
                            <v-row>
                                <v-col cols="12" sm="6" md="6">
                                    <v-select :attach="attach" color="success darken-2" v-model="patient.title" :rules="namedRules" :items="titleOptions" label="Title" outlined />
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field label="First Name" :rules="namedRules" v-model="patient.firstname" color="success" outlined placeholder="First name"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field label="Last Name" :rules="namedRules" v-model="patient.lastname" color="success" outlined placeholder="Last name"></v-text-field>
                                </v-col>
                                <v-col sm="6" md="6">
                                    <v-select :attach="attach" color="success darken-2" :rules="genderRules" v-model="patient.sex" :items="genderOptions" label="Sex" outlined />
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field label="Contact" :rules="contactRules" type="number" v-model="patient.contact" color="success" outlined placeholder="Contact"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field label="Email" :rules="emailRules" type="email" v-model="patient.email" color="success" outlined placeholder="Email Address"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="8" lg="8">
                                    <v-text-field label="Job title" :rules="jobRules" v-model="patient.job_title" color="success" outlined placeholder="Job title"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="4" lg="4">
                                    <v-text-field label="Age" type="number" v-model="patient.age" min="0" :rules="ageRules" color="success" outlined placeholder="Age"></v-text-field>
                                </v-col>
                                <v-col cols="12" >
                                    <v-switch v-model="patient.employee">
                                        <template v-slot:label>
                                            <span class="grey--text font-weight-bold darken-5 mt-3">Are you an Employee?</span>    
                                        </template>
                                    </v-switch>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                    <v-combobox :attach="attach" :disabled="!patient.employee" :items="departmentOptions" label="Department" color="success darken-2" v-model="patient.department" chips></v-combobox>
                                </v-col>
                                <v-col cols="12" sm="6" md="6" class="d-flex">
                                    <v-combobox :attach="attach" :disabled="!patient.employee" :items="employee_typeOptions" label="Employee Type" color="success darken-2" v-model="patient.employee_type" chips></v-combobox>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-responsive>
                            <v-img src="/app_asset/undraw_account_490v.svg" width="90%" class="mx-auto"></v-img>
                        </v-responsive>
                        <v-divider class="mt-3"/>
                        <div class="mt-10 d-flex justify-content-center">
                            <v-btn tile class="primary px-5 ma-2" dark depressed @click="submitPatientInfo">
                                <span class="text-lowercase caption">Add Info</span>
                            </v-btn>
                            <v-btn tile class="success darken-1 ma-2 px-5" dark depressed @click="checkvitals">
                                <span class="text-lowercase caption">Check vitals</span>
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import {Toast} from '../../app';

    export default({
        data:() => ({
            attach:true,
            patientInfo: null,
            submitted: false,
            genderOptions: ['Male', 'Female'],
            namedRules: [(v) => !!v || 'Name is required'],
            emailRules: [
                (v) => !!v || 'E-mail is required',
                (v) => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
            titleOptions: [
			'Mr',
			'Mrs',
			'Miss',
			'Dr'
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
            genderOptions: [
                'Male',
                'Female',
            ],
            ageRules: [
                (v) => !!v || 'Age is required',
            ],
            contactRules: [
                (v) => !!v || 'Contact is required',
                (v) => (v && v.length == 10) || 'Contact must be 10 characters',
            ],
            genderRules: [
                (v) => !!v || 'Gender is required',
            ],
            jobRules: [
                (v) => !!v || 'Job Title is required',
            ],
            patient:{
                title:'',
                employee: false,
                department:'',
                employee_type:'',
                firstname: '',
                lastname: '',
                age: '',
                email:'',
                contact:'',
                job_title:'',
                sex:''
            }
        }),
        methods:{
            goback(){
                this.$router.go(-1);
            },
            submitPatientInfo(){
                if(this.$refs.patientForm.validate()){
                    axios.post('/api/new_patient', {patient: this.patient}).then(response => {
                        if(response.data.error){
                            Swal.fire(
								'Data Error',
								'The Email entered already exist',
								'error'
							)
                        }
                        if(response.data.success){
                            this.submitted = true;
                            this.patientInfo = response.data.patient;
                            this.$refs.patientForm.reset();
                            this.$refs.patientForm.resetValidation();
                            Toast.fire({
                                icon: 'success',
                                title: 'New Patient Information added'
							});
                        }
                    })
                }
            },
            checkvitals(){
                if(this.patientInfo){
                    this.$router.push({name: 'newvitals', params: {id: this.patientInfo.id}})
                }else{
                    Swal.fire(
                        'No Account Found',
                        'The Patient Account has not been created',
                        'error'
                    )
                }
            }
        }
    })
</script>

<style scoped>
</style>
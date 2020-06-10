<template>
    <div class="mt-5">
        <vue-topprogress ref="topProgress" color="#00C851" colorShadow="#00C851" :height="5" errorColor="#CC0000"></vue-topprogress>
        <v-container>
            <v-row class="px-5 d-flex flex-column mt-3">
                <section class="d-flex justify-space-between">
                    <span class="subtitle-1 font-weight-bold mt-4">User Profile</span>

                    <div>
                        <v-btn tile depressed dark class="red darken-2 px-5 ml-auto ma-2" @click="goback">
                            <span class="caption">back</span>
                        </v-btn>
                        <v-btn tile depressed dark class="success darken-2 px-5 ml-auto ma-2" @click="appointmentdialog = true">
                            <span class="caption">new appointment</span>
                        </v-btn>
                    </div>
                </section>
                <v-card class="mt-4" flat>
                    <v-card-text>
                        <v-row>
                            <v-col cols="3" class="d-flex flex-column justify-center align-center">
                                <v-btn rounded small class="red darken-3 px-4 mb-2" depressed dark @click="delete_profile">
                                    <span class="overline">remove image</span>
                                </v-btn>
                                <v-avatar size="120">
                                    <v-img :src="getPatientImage"/>
                                </v-avatar>
                                <h5 class="subtitle-1 font-weight-bold mt-2 " v-if="patientInfo">{{patientInfo.title}} {{patientInfo.firstname}} {{patientInfo.lastname}}</h5>
                                <h5 class="subtitle-2 font-weight-bold grey--text">Status: {{getActive}}</h5>
                                <v-chip class="ma-2" close color="teal" text-color="white" close-icon="mdi-pencil" @click="upload_image_dialog">
                                    <v-avatar left>
                                        <v-icon>mdi-account-circle</v-icon>
                                    </v-avatar>
                                    <span>Edit Profile Pic</span>
                                </v-chip>
                            </v-col>
                            <v-col cols="9">
                                <div class="d-flex justify-space-between mb-3">
                                    <p class="grey--text darken-5 font-weight-light subtitle-2 mb-1 mt-2">User Profile</p>
                                    <v-btn rounded elevation="10" class="success darken-2 px-7" dark small @click="edit_account">
                                        <span class="overline">edit account</span>
                                    </v-btn>
                                </div>
                                <v-divider />
                                <v-row class="mt-4">
                                    <v-col cols="4">
                                        <h5 class="subtitle-2">Gender: <span class="font-weight-bold" v-if="patientInfo">{{patientInfo.gender}}</span></h5>
                                    </v-col>
                                    <v-col cols="4">
                                        <h5 class="subtitle-2">Date of Birth: <span class="font-weight-bold" v-if="patientInfo">{{patientInfo.dob | formateDob}}</span></h5>
                                    </v-col>
                                    <v-col cols="4">
                                        <h5 class="subtitle-2">Phone Number: <span class="font-weight-bold" v-if="patientInfo">{{formatPhone}}</span></h5>
                                    </v-col>
                                </v-row>
                                <v-divider />
                                <v-row class="mt-4">
                                    <v-col cols="4">
                                        <h5 class="subtitle-2">Email: <span class="font-weight-bold" v-if="patientInfo">{{patientInfo.email}}</span></h5>
                                    </v-col>
                                    <v-col cols="4">
                                        <h5 class="subtitle-2">Job Title: <span class="font-weight-bold" v-if="patientInfo">{{patientInfo.job_title}}</span></h5>
                                    </v-col>
                                    <v-col cols="4">
                                        <h5 class="subtitle-2">No of Visitation: <span class="font-weight-bold" v-if="appointment_history">{{appointment_history.length}}</span></h5>
                                    </v-col>
                                </v-row>
                                <v-divider />
                                <v-row class="mt-4">
                                    <v-col cols="4">
                                        <h5 class="subtitle-2">Department: <span class="font-weight-bold" v-if="patientInfo">{{patientInfo.department}}</span></h5>
                                    </v-col>
                                    <v-col cols="4">
                                        <h5 class="subtitle-2">Type of Employee: <span class="font-weight-bold" v-if="patientInfo">{{patientInfo.employee_type}}</span></h5>
                                    </v-col>
                                    <v-col cols="4">
                                        <h5 class="subtitle-2">Age: <span class="font-weight-bold" v-if="patientInfo">{{patientInfo.age}} years</span></h5>
                                    </v-col>
                                </v-row>
                                <v-row class="mt-4">
                                    <v-col cols="12" class="d-flex justify-end" v-if="patientInfo">
                                        <v-btn dark depressed tile class="red darken-3 px-6 ma-2" @click="refer(patientInfo)" v-if="$gate.isDoctor()" v-show="patientInfo.referred === 0">
                                            <span class="caption">Refer Patient</span>
                                        </v-btn>
                                        <v-btn dark depressed tile class="warning darken-1 px-6 ma-2" @click="start_excuse_duty(patientInfo)" v-if="$gate.isDoctor()">
                                            <span class="caption">Excuse Duty</span>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-divider inset />
                    <v-card-text>
                        <v-row class="px-5 d-flex flex-column mt-5">
                            <span class="subtitle-1 font-weight-bold mt-4 black--text">Additional Details</span>
                        </v-row>
                    </v-card-text>
                    <v-card-text>
                        <v-sheet>
                            <template>
                                <v-tabs left slider-color="info darken-2" color="info darken-2" v-model="patient_tab">
                                    <v-tab class="caption font-weight-light" color="red darken-1"><v-icon class="mr-1">mdi-clipboard-pulse</v-icon>Medical Reports </v-tab>
                                    <v-tab class="caption font-weight-light"><v-icon class="mr-1">mdi-layers-triple</v-icon> Appointment History</v-tab>
                                    <v-tab class="caption font-weight-light"><v-icon class="mr-1">mdi-heart-pulse</v-icon>Vitals</v-tab>
                                    <v-tab class="caption font-weight-light"><v-icon class="mr-1">mdi-medical-bag</v-icon>First Aid Reports</v-tab>
                                </v-tabs>
                            </template>
                            <v-tabs-items v-model="patient_tab">
                                <v-tab-item>
                                    <v-card flat>
                                        <v-card-text>
                                            <v-card outlined class="pa-3">
                                                <v-card-title>
                                                    <span class="subtitle-2 font-weight-bold grey--text darken-5">Medical History List</span>
                                                <v-spacer></v-spacer>
                                                <v-text-field v-model="medical_search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
                                                </v-card-title>
                                                <v-data-table :headers="medical_headers" :items="medicaHistory" :search="medical_search">
                                                    <template v-slot:item.created_at = "{item}">
                                                        <span>{{item.created_at | formatDate}}</span>    
                                                    </template>
                                                    <template v-slot:item.actions = "{item}">
                                                        <v-btn icon color="info darken-2" @click="view_prescription(item)">
                                                            <v-icon>mdi-format-list-text</v-icon>
                                                        </v-btn>
                                                    </template>
                                                </v-data-table>
                                            </v-card>
                                        </v-card-text>
                                    </v-card>
                                </v-tab-item>
                                <v-tab-item>
                                    <v-card flat>
                                        <v-card-text>
                                            <v-card outlined class="pa-3">
                                                <v-data-table
                                                :headers="headers"
                                                sort-by="full_name"
                                                class="elevation-1"
                                                :items="appointment_history"
                                                :search="search"
                                                :loading ="loadingData"
                                                loading-text="Loading... Please wait"
                                                >
                                                <template v-slot:top>
                                                    <v-toolbar flat color="white">
                                                    <v-toolbar-title class="subtitle-2 font-weight-bold grey--text darken-5">Appointment History</v-toolbar-title>
                                                    <v-divider class="mx-4" inset vertical></v-divider>
                                                    </v-toolbar>
                                                    <v-text-field color="success" v-model="search" label="search" class="mx-4" append-icon="mdi-magnify"/>
                                                </template>
                                                <template v-slot:item.user = "{item}">
                                                    <span>{{item.user.firstname}} {{item.user.lastname}}</span>    
                                                </template>
                                                <template v-slot:item.timing = "{item}">
                                                    <span>{{item.timing.start_time | formatTime}}-{{item.timing.end_time | formatTime}}</span>    
                                                </template>
                                                <template v-slot:item.completed = "{item}">
                                                    <span>{{item.completed | Completed}}</span>    
                                                </template>
                                                <template v-slot:item.schedule="{item}">
                                                    <span>{{item.schedule.schedule_date | formatDate}}</span>    
                                                </template>
                                                <template v-slot:item.actions="{ item }">
                                                    <v-btn icon color="red darken-2" @click="deleteItem(item)">
                                                        <v-icon> mdi-delete</v-icon>
                                                    </v-btn>
                                                </template>
                                            </v-data-table>
                                            </v-card>
                                        </v-card-text>
                                    </v-card>
                                </v-tab-item>
                                <v-tab-item>
                                    <v-card flat>
                                        <v-card-text>
                                            <v-card outlined class="pa-3">
                                                <v-data-table
                                                :headers="vital_headers"
                                                sort-by="full_name"
                                                class="elevation-1"
                                                :items="vitals"
                                                :search="searchVitals"
                                                :loading ="loadingData"
                                                loading-text="Loading... Please wait"
                                                >
                                                <template v-slot:top>
                                                    <v-toolbar flat color="white">
                                                    <v-toolbar-title class="subtitle-2 font-weight-bold grey--text darken-5">Vitals History</v-toolbar-title>
                                                        <v-divider class="mx-4" inset vertical></v-divider>
                                                    </v-toolbar>
                                                    <v-text-field color="success" v-model="searchVitals" label="search" class="mx-4" append-icon="mdi-magnify"/>
                                                </template>
                                                <template v-slot:item.created_at = "{item}">
                                                    <span>{{item.created_at | formatVitalDate}}</span>    
                                                </template>
                                                <template v-slot:item.user = "{item}">
                                                    <span>{{item.user.firstname}} {{item.user.lastname}}</span>    
                                                </template>
                                                <template v-slot:item.pressure = "{item}">
                                                    <span>{{item.systolic}} / {{item.diastolic}} mmHg</span>    
                                                </template>
                                                <template v-slot:item.temperature="{item}">
                                                    <span>{{item.temperature}} &#8451;</span>    
                                                </template>
                                                <template v-slot:item.respiratory_rate="{item}">
                                                    <span>{{item.respiratory_rate}} BPM</span>    
                                                </template>
                                                <template v-slot:item.pulse_rate="{item}">
                                                    <span>{{item.pulse_rate}} BPM</span>    
                                                </template>
                                                <template v-slot:item.weight="{item}">
                                                    <span>{{item.weight}} Kg</span>    
                                                </template>
                                                <template v-slot:item.height="{item}">
                                                    <span>{{calculateBMI(item.weight, item.height)}} BMI</span>    
                                                </template>
                                                <template v-slot:item.actions="{ item }">
                                                    <v-btn icon color="red darken-2" @click="deleteItem(item)" v-if="$gate.isManager()">
                                                        <v-icon> mdi-delete</v-icon>
                                                    </v-btn>
                                                    <v-btn class="teal darken-1 px-5" rounded small elevation="15" dark>
                                                        <v-icon left size="20">mdi-flash-circle</v-icon>
                                                        <span class="caption">view</span>
                                                    </v-btn>
                                                </template>
                                            </v-data-table>
                                            </v-card>
                                        </v-card-text>
                                    </v-card>
                                </v-tab-item>
                                <v-tab-item>
                                    <v-card flat outlined class="pa-3">
                                        <v-card-title>
                                            <span class="subtitle-2 font-weight-bold grey--text darken-5">Report List</span>
                                            <v-spacer></v-spacer>
                                            <v-text-field v-model="first_aid_search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
                                            </v-card-title>
                                            <v-data-table :headers="first_aid_headers" :items="firstAids" :search="first_aid_search">
                                            <template v-slot:item.injury_date="{item}">
                                                <span>{{item.injury_date | formatDate}}</span>    
                                            </template>
                                            <template v-slot:item.injury_time="{item}">
                                                <span>{{item.injury_date | formatTime}}</span>    
                                            </template>
                                            <template v-slot:item.actions="{ item }">
                                                <v-btn icon color="red darken-2" @click="deleteItem(item)">
                                                    <v-icon> mdi-delete</v-icon>
                                                </v-btn>
                                                <v-btn class="teal darken-1 px-5" rounded small elevation="15" dark>
                                                    <v-icon left size="20">mdi-flash-circle</v-icon>
                                                    <span class="caption">view</span>
                                                </v-btn>
                                            </template>
                                            </v-data-table>
                                    </v-card>
                                </v-tab-item>
                            </v-tabs-items>
                        </v-sheet>
                    </v-card-text>
                </v-card>
            </v-row>
        </v-container>

        <v-dialog v-model="appointmentdialog" scrollable max-width="600px" persistent>
            <v-card>
                <v-card-title class="transparent">
                    <span class="subtitle-1 font-weight-bold text-uppercase">Book Appointment</span>    
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
                                        <span><i>No available dates</i></span>
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
                                        <v-chip filter color="success darken-1" v-for="timing in timings" :key="timing.id" :value="timing.id" label class="ma-2">{{timing.start_time | formatTime}} - {{timing.end_time | formatTime}}</v-chip>
                                    </template>
                                    <template v-else>
                                        <span><i>No available times</i></span>
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
                <v-btn color="red darken-3" dark depressed tile class="px-4" @click="close_dialog">
                    <span class="caption">Close</span>
                </v-btn>
                <v-btn class="success darken-2 px-4" dark depressed tile @click="book_appointment">
                    <span class="caption">book</span>
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

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
                                    <v-select :attach="attach" dense color="success darken-2" :rules="genderRules" v-model="patient.sex" :items="genderOptions" label="Sex" outlined />
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field dense outlined label="Email" color="success darken-2" :rules="emailRules" v-model="patient.email"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field dense outlined label="Phone/Contact" color="success darken-2" type="number" :rules="phoneRules" :counter="10" v-model="patient.contact"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6" class="d-flex">
                                <v-text-field dense outlined label="Job Title" color="success darken-2" :rules="jobRules" v-model="patient.job_title"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field dense outlined label="Age" color="success darken-2" type="number" :rules="ageRules" v-model="patient.age"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-dialog ref="dob_dialog" v-model="dob_modal" :return-value.sync="patient.dob" persistent width="290px">
                                    <template v-slot:activator="{ on }">
                                        <v-text-field dense outlined label="DOB" color="success darken-2" :rules="dobRules" v-model="patient.dob" v-on="on" ></v-text-field>
                                    </template>
                                    <v-date-picker v-model="patient.dob" scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn text color="primary" @click="dob_modal = false">Cancel</v-btn>
                                    <v-btn text color="primary" @click="$refs.dob_dialog.save(patient.dob)">OK</v-btn>
                                    </v-date-picker>
                                </v-dialog>
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
                    </v-card>
                </v-form>
            </v-container>
            </v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-3" dark depressed tile class="px-4" @click="patient_form_dialog = false">
                <span class="caption">Close</span>
            </v-btn>
            <v-btn color="success darken-2" dark depressed tile class="px-4" @click="update_patient">
                <span class="caption">Save</span>
            </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

    <v-dialog v-model="loading_dialog" hide-overlay persistent width="300">
        <v-card color="primary" dark>
            <v-card-text>
                <span class="caption font-italic">booking appointment...</span>
                <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
            </v-card-text>
        </v-card>
    </v-dialog>

    <v-dialog v-model="loading_patient_dialog" hide-overlay persistent width="300">
        <v-card color="primary" dark>
            <v-card-text>
                <span class="caption font-italic">updating profile...</span>
                <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
            </v-card-text>
        </v-card>
    </v-dialog>

<v-dialog v-model="upload_dialog" persistent max-width="600" scrollable>
    <v-card>
        <v-card-title class="subtitle-2 font-weight-bold">Upload User Profile Image</v-card-title>
        <v-divider />
        <v-card-text>
            <v-row class="d-flex justify-center">
                <v-col cols="6">
                    <croppa v-model="croppa"
                            class="mx-auto"
                            :width="200"
                            :height="200"
                            placeholder="Choose an image"
                            placeholder-color="#000"
                            :placeholder-font-size="16"
                            canvas-color="transparent"
                            :show-remove-button="true"
                            remove-button-color="black"
                            :remove-button-size="30"
                            :prevent-white-space="true"
                            initial-size="contain"
                            initial-position="center"
                            :show-loading="true"
                            :loading-size="50"
                            @new-image-drawn="onNewImage"
                            @image-remove="handleImageRemove" 
                            @zoom="onZoom"
                            accept="image/*"
                            :file-size-limit="2000000"
                            @file-type-mismatch="onFileTypeMismatch"
                            @file-size-exceed="onFileSizeExceed"
                            loading-color="#606060"
                            >
                            <img slot="placeholder" src="/app_asset/upload_image.png" width="100%" class="mx-auto" />
                    </croppa>
                </v-col>
                <v-col cols="6" class="d-flex justify-center align-center">
                    <v-slider v-model="profile_zoom_value" :min="min" :max="max" step=".001" @input="onSliderChange" thumb-label thumb-color="pink" vertical label="Slide to Resize" class="caption grey--text font-italic font-weight-bold"></v-slider>
                </v-col>
            </v-row>
        </v-card-text>
        <v-divider />
        <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" class="subtitle-2" text @click="cancel_upload">Cancel</v-btn>
        <v-btn color="green darken-1" class="subtitle-2 font-weight-bold" text @click="save_image" v-if="user_avatar == null">Save Changes</v-btn>
        <v-btn color="green darken-1" class="subtitle-2 font-weight-bold" text @click="upload_image" v-else>Upload</v-btn>
        </v-card-actions>
    </v-card>
    </v-dialog>

    <v-dialog v-model="upload_loading_dialog" hide-overlay persistent width="300">
        <v-card color="success darken-2" dark flat>
            <v-card-text>
            <span class="subtitle-2 font-weight-regular font-italic white--text">Updating Profile...</span>  
            <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
            </v-card-text>
        </v-card>
    </v-dialog>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
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
        upload_loading_dialog: false,
        user_avatar: null,
        max: 100,
        min: 0,
        profile_zoom_value: 0,
        croppa: {},
        upload_dialog: false,
        dob_modal: false,
        loading_patient_dialog: false,
        loading_dialog: false,
        attach:true,
        patient:{
            title: null,
            firstname: null,
            lastname: null,
            contact: null,
            age: null,
            email: null,
            job_title: null,
            sex: null,
            employee:false,
            department:null,
            employee_type:null,
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
        selection:null,
        prescription_dialog: false,
        medicaHistory: [],
        first_aid_search:'',
        appointmentdialog: false,
        search: '',
        searchVitals: '',
        loadingData:false,
        medical_headers: [
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
        headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'reason',
        },
        { text: 'Scheduled Day', value: 'schedule' },
        { text: 'Time Duration', value: 'timing' },
        { text: 'Appointment to', value: 'user' },
        { text: 'Completed Status', value: 'completed' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
        vital_headers: [
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
        { text: 'Body Mass Index', value: 'height', align: 'center'},
        { text: 'Actions', value: 'actions', sortable: false },
      ],
        patient_tab:null,
        appointment_history:[],
        vitals: null,
        appointment_time: null,
        appointment_day: null,
        speciality: null,
        schedules:[],
        timings:[],
        appointment_reason: '',
        reasonRules: [
            (v) => !!v || 'Appointment reason is required',
        ],
        first_aid_headers: [
          {
            text: 'Cause of Injury',
            align: 'start',
            sortable: false,
            value: 'cause',
          },
          { text: 'Injury Details', value: 'details', align: 'center', },
          { text: 'Time of Injury', value: 'injury_time', align: 'center', },
          { text: 'Date Occured', value: 'injury_date', align: 'center', },
          { text: 'Treatment', value: 'treatment', align: 'center', },
          { text: 'Actions', value: 'actions' },
        ],
        firstAids: [],
        show_prescription_items: null,
        doctors:[],
    }),
    props:{
        id:[Number, String]
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
        },
         avatar(){
            if(this.avatar === null){
                this.getImage;
            }
        }
    },
    filters:{
        formatDate(value){
            return moment(value).format('dddd, MMMM Do YYYY');
        },
        formatVitalDate(value){
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
        },
        formateDob(value){
             return moment(value).format('MMMM Do, YYYY');
        }
    },
    created(){
        this.getHistory();
        this.getVitals();
        this.getFirstAids();
        this.fetchPatients();
        this.getMedicalHistory();
    },
    computed:{
        ...mapGetters(['Patients']),
        patientInfo(){
            return this.Patients.find(patient => patient.id == this.id);
        },
        getPatientImage(){
            if(this.patientInfo){
                if(this.patientInfo.image){
                    return '/patients/profiles/' + this.patientInfo.image;
                }else{
                    if(this.patientInfo.gender === 'Male'){
                        return `/app_asset/male_avatar.png`
                    }else{
                        return `/app_asset/undraw_female_avatar_l3ey.png`
                    }
                }
            }
        },
        getActive(){
            if(this.patientInfo){
                if(this.patientInfo.referred === 1){
                    return 'Referred';
                }else{
                    return 'Active';
                }
            }
        },
        formatPhone(){
           if(this.patientInfo){
                return '(+233)' + ' ' + this.patientInfo.phone.slice(1, 10); 
            } 
        }
    

    },
    mounted () {
        this.$refs.topProgress.start()
    
        // Use setTimeout for demo
        setTimeout(() => {
            this.$refs.topProgress.done()
        }, 2000)
    },
    methods:{
         ...mapActions(['fetchPatients']),

        refer(item){
          this.$router.push({name: 'patient_referrals_form', params: {id: item.id}});
        },

        start_excuse_duty(item){
            this.$router.push({name: 'excuse_duty_form', params: {id: item.id}});
        },

        goback(){
            this.$router.go(-1);
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
        getHistory(){
            if(this.patientInfo){
                axios.post('/api/patient_appointment', {id: this.patientInfo.id }).then(response => {
                    this.appointment_history = response.data;
                })
            }
        },
        deleteItem(item){
            swalWithBootstrapButtons.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
                }).then((result) => {
                if (result.value) {
                    var index = this.appointment_history.indexOf(item);
                    this.appointment_history.splice(index, 1);
                    axios.delete('/api/delete_appointment/'+item.id).then(response => {
                    if(response.data.success){
                        swalWithBootstrapButtons.fire(
                            'Deleted!',
                            'Appointment Deleted.',
                            'success'
                        )
                    }
                    })
                    
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'The Application Process is reverted :)',
                    'info'
                    )
                }
                }) 
        },
        getVitals(){
            if(this.patientInfo){
                axios.post('/api/patient_vitals', {id: this.patientInfo.id }).then(response => {
                    this.vitals = response.data;
                })
            }
        },
        getFirstAids(){
            if(this.patientInfo){
                axios.post('/api/patient_first_aids', {id: this.patientInfo.id }).then(response => {
                    this.firstAids = response.data;
                })
            }
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
        getDoctorTime(id){
            axios.post('/api/doctor_time', {id: id}).then(response => {
                if(response.data.timing){
                    this.timings = [];
                    this.timings = response.data.timing;
                }

                if(response.data.no_timings){
                    this.timings = [];
                    Toast.fire({
                        icon: 'info',
                        title: 'No Available Timings'
                    });
                }
            });
        },
        book_appointment(){
            if(this.$refs.appointmentform.validate()){
                this.loading_dialog = true;
                axios.post('/book_appointment', 
                    {id: this.id, speciality: this.selection, appointment_time: this.appointment_time, 
                    appointment_day: this.appointment_day, reason:this.appointment_reason}).then(response => {
                        if(response.data.success){
                            this.loading_dialog = false;
                            this.getHistory();
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
        calculateBMI(weight, height){
            if(weight && height){
                let height_in_meters = height / 100;
                let height_squared = height_in_meters * height_in_meters;
                let bmi = weight / height_squared;
                return bmi.toFixed(1);
            }else{
                return 'N/A';
            }
        },
        getMedicalHistory(){
            if(this.patientInfo){
                axios.post('/api/patient_medical_history', {id: this.patientInfo.id }).then(response => {
                    this.medicaHistory = response.data;
                })
            }
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
        close_dialog(){
            this.selection = null;
            this.speciality = null;
            this.appointment_time = null;
            this.appointment_day = null;
            this.doctors = [];
            this.schedules = [];
            this.timings = [];
            this.appointmentdialog = false;
            this.$refs.appointmentform.reset();
            this.$refs.appointmentform.resetValidation();
        },
        formatGender(gender){
      	    if(gender == 'Male'){
                return 'mdi-gender-male'
            }else{
                return 'mdi-gender-female'
            }
        },
        edit_account(){
            this.patient.title = this.patientInfo.title;
            this.patient.firstname = this.patientInfo.firstname;
            this.patient.lastname = this.patientInfo.lastname;
            this.patient.contact = this.patientInfo.phone;
            this.patient.age = this.patientInfo.age;
            this.patient.job_title = this.patientInfo.job_title;
            this.patient.sex = this.patientInfo.gender;
            this.patient.email = this.patientInfo.email;
            this.patient.employee = this.patientInfo.employee;
            this.patient.department = this.patientInfo.department;
            this.patient.employee_type = this.patientInfo.employee_type;
            this.patient.dob = moment(this.patientInfo.dob).format('YYYY-MM-DD');
            this.patient_form_dialog = true;
        },
        update_patient(){
            if(this.$refs.patientform.validate()){
                this.loading_patient_dialog = true;
                axios.patch('/api/update_patient/' + this.patientInfo.id, this.patient).then(response => {
                    if(response.data.success){
                        this.loading_patient_dialog = false;
                        this.fetchPatients();
                        this.patient_form_dialog = false;
                        swalWithBootstrapButtons.fire(
                            'Success',
                            'Patient Information Updated',
                            'success'
                        )
                    }
                    if(response.data.error){
                        this.loading_patient_dialog = false;
                        swalWithBootstrapButtons.fire(
                            'Error!',
                            'There is an error',
                            'error'
                        )
                    }
                })
            }
        },

        upload_image_dialog(){
            this.upload_dialog = true;
        },
        onSliderChange(e) {
            var increment = e;
            this.croppa.scaleRatio = +increment;
        },
        onNewImage() {
            this.profile_zoom_value = this.croppa.scaleRatio
            this.min = this.croppa.scaleRatio / 2
            this.max = this.croppa.scaleRatio * 2
        },
        onZoom() {
            this.profile_zoom_value = this.croppa.scaleRatio;
        },
        onFileTypeMismatch (file) {
            Toast.fire({
                icon: 'error',
                title: 'Invalid file type. Please choose a jpeg or png file.'
            });
        },
        onFileSizeExceed (file) {
            Toast.fire({
                icon: 'error',
                title: 'File size exceeds. Please choose a file smaller than 2mb.'
            });
        },
        handleImageRemove(){
            this.user_avatar = null;
        },
        save_image(){
            this.$refs.topProgress.start();
             this.croppa.generateBlob((blob) => {
            this.read(blob);
            }, 'image/*', 0.8) // 80% compressed image file
        },
        upload_image(){
            this.$refs.topProgress.start();
            this.upload_loading_dialog = true;
            axios.patch('/api/upload_patient_profile/' + this.patientInfo.id, {image: this.user_avatar}).then(response => {
                if(response.data.success){
                    this.upload_dialog = false;
                    this.$refs.topProgress.done();
                    this.upload_loading_dialog = false;
                    this.fetchPatients();
                    swalWithBootstrapButtons.fire(
                        'Profile Uploaded',
                        'Your Profile image has been updated :)',
                        'success'
                    )
                }
            })
        },

        read(image){
            let reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = (e) => {
                this.user_avatar = e.target.result;
                this.$refs.topProgress.done();
            }
        },

        delete_profile(){
            this.$refs.topProgress.start();
            swalWithBootstrapButtons.fire({
                title: 'Are you sure?',
                text: "Your Profile image will be removed",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
                }).then((result) => {
                if (result.value) {
                    axios.delete('/api/delete_patient_profile/' + this.patientInfo.id).then(response => {
                    if(response.data.success){
                        this.fetchPatients();
                        this.$refs.topProgress.done();
                        swalWithBootstrapButtons.fire(
                            'Deleted!',
                            'Profile Image Deleted.',
                            'success'
                        )
                    }

                    if(response.data.info){
                        this.fetchUser();
                        this.$refs.topProgress.fail();
                        swalWithBootstrapButtons.fire(
                            'Deleted!',
                            response.data.info,
                            'success'
                        )
                    }
                    })
                    
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    this.$refs.topProgress.fail();
                    this.loading_dialog = false;
                    swalWithBootstrapButtons.fire(
                    'Reverted',
                    'Your Profile image is saved :)',
                    'info'
                    )
                }
            }) 
        },

        cancel_upload(){
            this.user_avatar = null;
            this.upload_dialog = false;
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
    }
}
</script>

<style scoped>

</style>



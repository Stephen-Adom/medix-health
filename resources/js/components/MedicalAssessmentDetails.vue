<template>
    <div>
         <vue-topprogress ref="topProgress" color="#00C851" colorShadow="#00C851" :height="5" errorColor="#CC0000"></vue-topprogress>
        <v-container>
            <v-card outlined class="px-3">
                <v-card-title>
                    <v-btn class="success darken-2 mr-2" dark fab elevation="15" small @click="goback">
                        <v-icon size="16">mdi-chevron-double-left</v-icon>
                    </v-btn>
                    <span class="title font-weight-bold grey--text darken-3">Medical Examination</span>
                    <v-spacer />
                    <div>
                        <span class="subtitle-2 font-weight-bold grey--text darken-4">
                            <v-icon size="18" class="mr-1">mdi-calendar-month</v-icon>
                            {{getTodayDate}}
                        </span>
                    </div>
                </v-card-title>
                <v-divider />
                <v-card-text>
                    <v-card class="pa-3" elevation="20" v-if="appointment" style="border-top: 4px solid green;">
                        <v-row>
                            <v-col cols="12" md="9" lg="9">
                                <v-row class="px-3 text-center">
                                    <v-col cols="12" md="3" lg="3">
                                        <span class="subtitle-2 black--text darken-4 font-weight-bold text-uppercase">Full Name</span>
                                        <span class="text-uppercase font-weight-bold grey--text darken-4 d-block caption">{{appointment.patient.title}} {{appointment.patient.firstname}} {{appointment.patient.lastname}}</span>
                                    </v-col>
                                    <v-col cols="12" md="3" lg="3">
                                        <span class="subtitle-2 black--text darken-4 font-weight-bold text-uppercase">Sex</span>
                                        <span class="text-uppercase font-weight-bold grey--text darken-4 d-block caption">{{appointment.patient.gender}}</span>
                                    </v-col>
                                    <v-col cols="12" md="3" lg="3">
                                        <span class="subtitle-2 black--text darken-4 font-weight-bold text-uppercase">Email</span>
                                        <span class="text-uppercase font-weight-bold grey--text darken-4 d-block caption">{{appointment.patient.email}}</span>
                                    </v-col>
                                    <v-col cols="12" md="3" lg="3">
                                        <span class="subtitle-2 black--text darken-4 font-weight-bold text-uppercase">Contact Number</span>
                                        <span class="text-uppercase font-weight-bold grey--text darken-4 d-block caption">{{appointment.patient.phone}}</span>
                                    </v-col>
                                    <v-col cols="12" md="3" lg="3">
                                        <span class="subtitle-2 black--text darken-4 font-weight-bold text-uppercase">Job Title</span>
                                        <span class="text-uppercase font-weight-bold grey--text darken-4 d-block caption">{{appointment.patient.job_title}}</span>
                                    </v-col>
                                    <v-col cols="12" md="3" lg="3" v-if="appointment.patient.department">
                                        <span class="subtitle-2 black--text darken-4 font-weight-bold text-uppercase">Department</span>
                                        <span class="text-uppercase font-weight-bold grey--text darken-4 d-block caption">{{appointment.patient.department}}</span>
                                    </v-col>
                                    <v-col cols="12" md="3" lg="3" v-if="appointment.patient.employee_type">
                                        <span class="subtitle-2 black--text darken-4 font-weight-bold text-uppercase">Type of Employee</span>
                                        <span class="text-uppercase font-weight-bold grey--text darken-4 d-block caption">{{appointment.patient.employee_type}}</span>
                                    </v-col>
                                    <v-col cols="12" md="3" lg="3">
                                        <span class="subtitle-2 black--text darken-4 font-weight-bold text-uppercase">Weight</span>
                                        <span class="text-uppercase font-weight-bold grey--text darken-4 d-block caption" v-if="vitals">{{vitals.weight}}kg</span>
                                        <span class="text-uppercase font-weight-bold grey--text darken-4 d-block caption" v-else>N/A</span>
                                    </v-col>
                                    <v-col cols="12" md="3" lg="3">
                                        <span class="subtitle-2 black--text darken-4 font-weight-bold text-uppercase">Body Mass Index</span>
                                        <span class="text-uppercase font-weight-bold grey--text darken-4 d-block caption" v-if="vitals">{{calculateBMI}} BMI</span>
                                        <span class="text-uppercase font-weight-bold grey--text darken-4 d-block caption" v-else>N/A</span>
                                    </v-col>
                                    <v-col cols="12" md="3" lg="3">
                                        <span class="subtitle-2 black--text darken-4 font-weight-bold text-uppercase">Age</span>
                                        <span class="text-uppercase font-weight-bold grey--text darken-4 d-block caption" >{{appointment.patient.age}} years</span>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="12" md="3" lg="3">
                                <v-responsive>
                                    <v-img :src="getPatientImage" width="70%" class="mx-auto"></v-img>
                                </v-responsive>
                            </v-col>
                        </v-row>
                        <div class="mt-3 mx-6">
                            <div class="d-flex">
                                <span class="subtitle-2 grey--text font-weight-bold darken-3 text-uppercase">Latest Vital Summary</span>
                                <v-btn class="ml-auto px-5 success darken-2" small tile depressed @click.stop ="vital_history_dialog = true ">
                                    <span class="caption">vital history</span>
                                </v-btn>
                            </div>
                            <v-divider class="my-3" />
                            <v-row>
                                <v-col cols="12" md="3" sm="6" lg="3">
                                    <v-card dark outlined class="teal">
                                        <v-card-title class="subtitle-2 text-uppercase d-flex mx-auto font-weight-bold">
                                            <span class="text-center">Body Temperature</span>
                                        </v-card-title>
                                        <v-card-actions class="text-center">
                                            <v-icon size="40" class="mx-auto">mdi-thermometer</v-icon>
                                        </v-card-actions>
                                        <v-card-text class="text-center">
                                            <span class="display-1" v-if="vitals">{{vitals.temperature}} &#8451</span>
                                            <span class="display-1" v-else>0</span>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                                <v-col cols="12" md="3" sm="6" lg="3">
                                    <v-card dark outlined class="teal">
                                        <v-card-title class="subtitle-2 text-uppercase d-flex mx-auto font-weight-bold">
                                            <span class="text-center">Blood Pressure </span>
                                        </v-card-title>
                                        <v-card-actions class="text-center">
                                            <v-icon size="40" class="mx-auto">mdi-heart-flash</v-icon>
                                        </v-card-actions>
                                        <v-card-text class="text-center display-1">
                                            <span class="mx-1" v-if="vitals"> {{vitals.systolic}} /</span> <span class="mx-1" v-if="vitals"> {{vitals.diastolic}} </span>
                                            <span class="mx-1" v-else>0</span>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                                <v-col cols="12" md="3" sm="6" lg="3">
                                    <v-card dark outlined class="teal">
                                        <v-card-title class="subtitle-2 text-uppercase d-flex mx-auto font-weight-bold">
                                            <span class="text-center">Heart Rate Pulse</span>
                                        </v-card-title>
                                        <v-card-actions class="text-center">
                                            <v-icon size="40" class="mx-auto">mdi-heart-pulse</v-icon>
                                        </v-card-actions>
                                        <v-card-text class="text-center">
                                            <span class="display-1" v-if="vitals"> {{vitals.pulse_rate}} BPM</span>
                                            <span class="display-1" v-else>0</span>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                                <v-col cols="12" md="3" sm="6" lg="3">
                                    <v-card dark outlined class="teal">
                                        <v-card-title class="subtitle-2 text-uppercase d-flex mx-auto font-weight-bold">
                                            <span class="text-center">Respiration</span>
                                        </v-card-title>
                                        <v-card-actions class="text-center">
                                            <v-icon size="40" class="mx-auto">mdi-head-flash</v-icon>
                                        </v-card-actions>
                                        <v-card-text class="text-center">
                                            <span class="display-1" v-if="vitals">{{vitals.respiratory_rate}} BPM</span>
                                            <span class="display-1" v-else>0</span>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </div>
                    </v-card>
                </v-card-text>
                <v-toolbar flat>
                    <v-spacer />
                    <v-dialog v-model="appointmentdialog" scrollable max-width="600px" persistent>
                        <template v-slot:activator="{ on }">
                            <v-btn tile color="info darken-2" dark class="px-8 mx-2" depressed v-on="on">
                                <span class="caption font-weight-bold">Book for Lab Test</span>
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title class="transparent">
                                <v-icon class="mr-2">mdi-briefcase-clock</v-icon>
                                <span>Book Appointment</span>    
                            </v-card-title>
                            <v-card-text>
                                <div>
                                    <span class="subtitle-1 font-weight-bold d-block text-center">Clinical Laboratory Test</span>
                                    <v-row justify="center" align="center">
                                        <v-col cols="12" class="d-flex justify-center">
                                            <v-avatar size="80">
                                                <v-img src="/app_asset/lab tech.jpg" class="mx-auto"></v-img>
                                            </v-avatar>
                                        </v-col>
                                    </v-row>
                                </div>
                                <v-divider class="my-3"/>
                                <div>
                                    <span class="subtitle-1 font-weight-bold d-block">Choose Speciality</span>
                                    <v-row>
                                        <v-col cols="12" v-if="doctors.length">
                                            <v-chip-group v-model="selection" active-class="success--text text--accent-4">
                                                <v-chip pill class="ma-2" v-for="doctor in doctors" :key="doctor.id" :value="doctor.id">
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
                            <v-card-actions class="d-flex justify-content-center">
                            <v-btn color="info darken-1 px-6 mr-2" dark depressed rounded @click="close_appointment_dialog">
                                <span class="caption">cancel</span>
                            </v-btn>
                            <v-btn class="success darken-2 px-6" rounded dark elevation="15" @click="book_appointment">
                                <span class="caption font-weight-light">book</span>
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                
                    <v-btn tile color="red darken-2" dark class="px-7" depressed @click="refer_patient">
                        <span class="caption font-weight-bold">Refer patient</span>
                    </v-btn>
                    <v-btn tile color="success darken-2" dark class="px-7 mx-2" depressed @click.stop = "medical_history_dialog = true">
                        <span class="caption font-weight-bold">Medical History</span>
                    </v-btn>
                </v-toolbar>
                <v-card-text class="mt-4">
                    <span class="subtitle-2 grey--text font-weight-bold darken-3 text-uppercase">
                        <v-icon class="mr-1" size="25">mdi-library</v-icon>
                        Specialist Assessment
                    </span>
                    <v-divider class="my-2"/>
                    <v-container>
                        <v-card class="mx-7 pa-4 mt-4" outlined>
                            <v-form ref="medicForm">
                                <div>
                                    <div class="d-flex justify-centent-space-between">
                                        <span class="subtitle-2 font-weight-bold text-center">Problem Description</span>
                                        <v-spacer/>
                                        <span class="ml-auto"><v-icon>mdi-checkbook</v-icon></span>
                                    </div> 
                                    <v-divider />
                                    <v-text-field color="success" :rules="medicRules" v-model="medical.problem"></v-text-field>
                                </div>
                                <div>
                                    <div class="d-flex justify-centent-space-between">
                                        <span class="subtitle-2 font-weight-bold text-center">Allergies</span>
                                        <v-spacer/>
                                        <span class="ml-auto"><v-icon>mdi-account-alert</v-icon></span>
                                    </div> 
                                    <v-divider />
                                    <v-text-field color="success" :rules="medicRules" v-model="medical.allergies"></v-text-field>
                                </div>
                                <div>
                                    <div class="d-flex justify-centent-space-between">
                                        <span class="subtitle-2 font-weight-bold text-center">Diagnosis</span>
                                        <v-spacer/>
                                        <span class="ml-auto"><v-icon>mdi-telescope</v-icon></span>
                                    </div> 
                                    <v-divider />
                                    <v-textarea color="success" height="100" :rules="medicRules" v-model="medical.Diagnosis"></v-textarea>
                                </div> 
                                <div class="mt-5">
                                    <div class="d-flex justify-centent-space-between">
                                        <span class="subtitle-2 font-weight-bold text-center">Medication</span>
                                        <v-spacer/>
                                        <span class="ml-auto">
                                            <v-btn class="red darken-2" dark rounded elevation="15" @click.stop="drug_dialog = true">
                                                <v-icon size="17" left>mdi-pill</v-icon>
                                                <span class="caption">Drug Prescription</span>
                                            </v-btn>
                                            <v-btn class="mx-2" fab dark small color="teal" @click="clearPrescriptions">
                                                <v-icon dark size="18">mdi-close</v-icon>
                                            </v-btn>
                                        </span>
                                    </div> 
                                    <v-divider />
                                        <template v-if="allPrescribedDrugs">
                                            <v-row>
                                                <v-col cols="6" md="3" v-for="(data, index) in allPrescribedDrugs.drugs" :key="index">
                                                    <v-card class="success darken-2 text-center pa-2" dark outlined>
                                                        <v-card-actions class="d-flex justify-content-center">
                                                            <v-icon color="white">mdi-pill</v-icon>
                                                        </v-card-actions>
                                                        <v-card-text class="pa-0">
                                                            <span class="subtitle-2 font-weight-bold text-uppercase">{{data}}</span>
                                                        </v-card-text>
                                                    </v-card> 
                                                </v-col>
                                            </v-row>
                                            <v-divider />
                                            <span class="d-block ml-5 grey--text font-weight-bold text-uppercase caption darken-5"><i>Dosage: <span class="black--text">{{allPrescribedDrugs.dosage}}</span> </i></span>
                                            <span class="d-block ml-5 grey--text font-weight-bold text-uppercase caption darken-5"><i>Starting Course: <span class="black--text">{{allPrescribedDrugs.start_course | formatDate}}</span></i></span>
                                            <span class="d-block ml-5 grey--text font-weight-bold text-uppercase caption darken-5"><i>Ending Course: <span class="black--text">{{allPrescribedDrugs.end_course | formatDate}}</span></i></span>
                                            <v-divider />
                                            <div class="ml-5">
                                                <i>
                                                    <p class="ml-5 black--text font-weight-bold text-uppercase caption">Drug Intake Interval</p>
                                                    <p class="ml-7" v-if="allPrescribedDrugs.morning_time">
                                                        <span class="ml-5 grey--text font-weight-bold text-uppercase caption darken-5">Morning<v-icon class="ml-1" color="warning">mdi-brightness-7</v-icon> </span>:
                                                        <span class="black--text font-weight-bold text-uppercase caption">{{allPrescribedDrugs.morning_time}}</span>    
                                                    </p>
                                                    <p class="ml-7" v-if="allPrescribedDrugs.afternoon_time">
                                                        <span class="ml-5 grey--text font-weight-bold text-uppercase caption darken-5">Afternoon<v-icon class="ml-1" color="warning darken-2">mdi-brightness-5</v-icon> </span>:
                                                        <span class="black--text font-weight-bold text-uppercase caption">{{allPrescribedDrugs.afternoon_time}}</span>    
                                                    </p>
                                                    <p class="ml-7" v-if="allPrescribedDrugs.evening_time">
                                                        <span class="ml-5 grey--text font-weight-bold text-uppercase caption darken-5">Evening<v-icon class="ml-1" color="success darken-2">mdi-brightness-2</v-icon> </span>:
                                                        <span class="black--text font-weight-bold text-uppercase caption">{{allPrescribedDrugs.evening_time}}</span>    
                                                    </p>
                                                </i>   
                                            </div>
                                        </template>
                                        <template v-else>
                                            <span class="ml-5 grey--text font-weight-bold text-uppercase darken-5"><i>No Drug(s) Prescribed</i></span>
                                        </template>
                                </div>
                                <div class="mt-8">
                                    <div class="d-flex justify-centent-space-between">
                                        <span class="subtitle-2 font-weight-bold text-center">Specialist Note</span>
                                        <v-spacer/>
                                        <span class="ml-auto"><v-icon>mdi-note-text</v-icon></span>
                                    </div> 
                                    <v-divider />
                                    <v-textarea color="success" height="100" v-model="medical.notes"></v-textarea>
                                </div>
                                <v-card-actions class="d-flex justify-content-center">
                                    <v-btn elevation="20" rounded class="success darken-2 px-5" dark large @click="submit">
                                        <span class="caption font-weight-bold">Submit</span> 
                                    </v-btn>
                                </v-card-actions>
                            </v-form> 
                        </v-card>
                    </v-container>

                    <v-dialog v-model="drug_dialog" persistent max-width="500" scrollable>
                    <v-card>
                        <v-card-title class="subtitle-2 font-weight-bold">
                            <span class="subtitle-2 font-weight-bold text-uppercase">Drug Prescription</span>
                            <v-spacer/>
                            <v-btn icon color="success darken-2">
                                <v-icon>mdi-hospital-box</v-icon>
                            </v-btn>
                        </v-card-title>
                        <v-card-text class="px-10" style="height: 500px;">
                            <v-form ref="prescriptionForm">
                                <section>
                                    <p class="font-weight-bold caption text-uppercase text-center">Drug <v-icon class="ml-2" color="success darken-2">mdi-pill</v-icon></p>
                                    <v-combobox v-model="data.drugs" :items="items" label="Drugs Prescribed" multiple chips :rules="pillRules" attach>
                                        <template v-slot:selection="data">
                                            <v-chip :key="JSON.stringify(data.item)" v-bind="data.attrs" :input-value="data.selected" :disabled="data.disabled" @click:close="data.parent.selectItem(data.item)">
                                            <v-avatar class="accent white--text" left v-text="data.item.slice(0, 1).toUpperCase()"></v-avatar>
                                            {{ data.item }}
                                            </v-chip>
                                        </template>
                                    </v-combobox>
                                </section>
                                <v-divider />
                                <section>
                                    <p class="font-weight-bold caption text-uppercase text-center">Drug Dosage <v-icon class="ml-2" color="success darken-2">mdi-briefcase-plus</v-icon></p>
                                    <v-text-field :rules="pillRules" v-model="data.dosage"></v-text-field>   
                                </section>
                                <section>
                                    <p class="font-weight-bold caption text-uppercase text-center">Course Duration
                                        <v-icon class="ml-2" color="success darken-2">mdi-calendar</v-icon>
                                    </p>
                                    <v-row>
                                        <v-col cols="12" md="4">
                                            <v-menu ref="start_course_dialog" v-model="start_course_dialog" :close-on-content-click="false" transition="scale-transition" offset-y max-width="290px" min-width="290px">
                                                 <template v-slot:activator="{ on }">
                                                    <v-text-field :rules="pillRules" v-model="data.start_course" v-on="on"></v-text-field>
                                                </template>
                                            <v-date-picker v-model="data.start_course" no-title @input="start_course_dialog = false"></v-date-picker>
                                            </v-menu>
                                        </v-col>
                                        <v-col cols="12" md="4">
                                            <v-menu ref="end_course_dialog" v-model="end_course_dialog" :close-on-content-click="false" transition="scale-transition" offset-y max-width="290px" min-width="290px">
                                                 <template v-slot:activator="{ on }">
                                                    <v-text-field :rules="pillRules" v-model="data.end_course" v-on="on"></v-text-field>
                                                 </template>
                                            <v-date-picker v-model="data.end_course" no-title @input="end_course_dialog = false"></v-date-picker>
                                            </v-menu>
                                        </v-col>
                                        <v-col cols="12" md="3" class="mt-7">
                                            <span class="grey--text darken-5 text-uppercase subtitle-2">{{getDaysLeft}}</span>
                                        </v-col>
                                    </v-row>
                                </section>
                                <div>
                                    <div class="d-flex justify-content-space-between">
                                        <p class="font-weight-bold caption text-uppercase">Time Details</p>
                                        <span class="mb-2 ml-auto"><v-icon color="success darken-2">mdi-clock-alert</v-icon></span>
                                    </div> 
                                    <v-divider />
                                    <v-row>
                                        <v-col cols="12" md="4" class="mt-3">
                                            <span>Morning</span>
                                            <v-icon class="ml-1" color="warning darken-2">mdi-brightness-7</v-icon>    
                                        </v-col>
                                        <v-col cols="12" md="8">
                                            <v-menu ref="morning_time_menu" v-model="morning_menu" :close-on-content-click="false" :nudge-right="40" :return-value.sync="data.morning_time" transition="scale-transition" offset-y max-width="290px" min-width="290px">
                                                <template v-slot:activator="{ on }">
                                                    <v-text-field dense v-on="on" label="Time to be taken" :rules="pillRules" v-model="data.morning_time"></v-text-field>
                                                </template>
                                            <v-time-picker v-if="morning_menu" v-model="data.morning_time" full-width @click:minute="$refs.morning_time_menu.save(data.morning_time)"></v-time-picker>
                                        </v-menu>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12" md="4" class="mt-3">
                                            <span>Afternoon</span>
                                            <v-icon class="ml-1" color="warning">mdi-brightness-5</v-icon>    
                                        </v-col>
                                        <v-col cols="12" md="8">
                                            <v-menu ref="afternoon_time_menu" v-model="afternoon_menu" :close-on-content-click="false" :nudge-right="40" :return-value.sync="data.afternoon_time" transition="scale-transition" offset-y max-width="290px" min-width="290px">
                                                <template v-slot:activator="{ on }">
                                                    <v-text-field dense v-on="on" label="Time to be taken" :rules="pillRules" v-model="data.afternoon_time"></v-text-field>
                                                </template>
                                            <v-time-picker v-if="afternoon_menu" v-model="data.afternoon_time" full-width @click:minute="$refs.afternoon_time_menu.save(data.afternoon_time)"></v-time-picker>
                                        </v-menu>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12" md="4" class="mt-3">
                                            <span>Evening</span>
                                            <v-icon class="ml-1" color="success darken-3">mdi-brightness-2</v-icon>    
                                        </v-col>
                                        <v-col cols="12" md="8">
                                            <v-menu ref="evening_time_menu" v-model="evening_menu" :close-on-content-click="false" :nudge-right="40" :return-value.sync="data.evening_time" transition="scale-transition" offset-y max-width="290px" min-width="290px">
                                                <template v-slot:activator="{ on }">
                                                    <v-text-field dense v-on="on" label="Time to be taken" :rules="pillRules" v-model="data.evening_time"></v-text-field>
                                                </template>
                                            <v-time-picker v-if="evening_menu" v-model="data.evening_time" full-width @click:minute="$refs.evening_time_menu.save(data.evening_time)"></v-time-picker>
                                        </v-menu>
                                        </v-col>
                                    </v-row>
                                </div> 
                            </v-form>
                            <v-divider />
                        </v-card-text>
                        <v-card-actions class="d-flex justify-content-center">
                            <v-btn class="success darken-2" rounded dark @click="prescribe" elevation="15">
                                <span class="caption font-weight-bold">save</span>
                            </v-btn>
                            <v-btn color="green darken-1" text @click="drug_dialog = false">Close</v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
                </v-card-text>
            </v-card>
        </v-container>

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
                            <span class="subtitle-2 font-weight-bold">{{appointment.patient.firstname}} {{appointment.patient.lastname}}</span>
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

        <v-dialog v-model="vital_history_dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-card>
                <v-toolbar dark color="success darken-2" flat>
                    <v-btn icon dark @click="vital_history_dialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title class="subtitle-1 font-weight-bold">Vitals History</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn dark text @click="vital_history_dialog = false">Close</v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-card-text class="mb-0">
                    <v-row>
                        <v-col cols="12">
                            <v-responsive>
                                <v-img src="/app_asset/medix_full.png" width="15%" class="mx-auto"></v-img>
                            </v-responsive>
                            <h6 class="subtitle-1 font-weight-bold text-center text-uppercase">Vitals History Information</h6>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-divider class="mt-0" />
                <v-card-text>
                    <v-card outlined class="pa-3">
                        <v-card-title>
                            <span class="subtitle-2 font-weight-bold">{{appointment.patient.firstname}} {{appointment.patient.lastname}}</span>
                        <v-spacer></v-spacer>
                        <v-text-field v-model="vital_search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
                        </v-card-title>
                        <v-data-table :headers="vital_headers" :items="vitalsHistory" :search="vital_search">
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
                            <span>{{calculateVitalsBMI(item.weight, item.height)}} BMI</span>    
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
                    <template v-if="prescription_items">
                        <div v-for="(data, index) in prescription_items" :key="index">
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

    <v-dialog v-model="loading_dialog" hide-overlay persistent width="300">
        <v-card color="sucess darken-1" dark>
            <v-card-text>
                <span class="caption font-italic">updating data...</span>
                <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
            </v-card-text>
        </v-card>
    </v-dialog>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
    data: () => ({
        loading_dialog: false,
        prescription_dialog: false,
        vital_history_dialog: false,
        vital_search: '',
        medical_search: '',
        evening_menu: false,
        afternoon_menu: false,
        morning_menu: false,
        end_course_dialog: false,
        start_course_dialog: false,
        drugselect: [],
        items: [],
        drug_dialog: false,
        vitalsHistory: null,
        medical: {
            allergies:'',
            problem: '',
            notes: '',
            diagnosis: '',
        },
        medicRules: [
            (v) => !!v || 'Field is required'
        ],
        pillRules: [
            (v) => !!v || 'Field is required'
        ],
        data:{
            drugs:'',
            dosage: '',
            start_course: '',
            end_course: '',
            morning_time:'',
            afternoon_time:'',
            evening_time:'',
        },
        prescription: [],
        appointment_time: null,
        appointment_day: null,
        appointment_reason: '',
        reasonRules: [
            (v) => !!v || 'Appointment reason is required',
            (v) => (v && v.length > 5) || 'Appointment reason must be more than 5 characters',
        ],
        schedules:[],
        timings:[],
        appointmentdialog: false,
        medical_history_dialog: false,
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
        vitals: null,
        medicaHistory: null,
        prescription_items: null,
        doctors:[],
        selection: null,
    }),
    props: {
        id: [Number],
    },

    filters:{
        formatDate(value){
            return moment(value).format('MMMM Do YYYY');
        },
        formatVitalDate(value){
            return moment(value).format('MMMM Do, YYYY');
        },
        formatTime(value){
            return moment(value).format('LT');
        }
    },
    computed:{
        ...mapGetters(['all_Accepted_Appointment', 'allDrugs', 'allPrescribedDrugs']),
        appointment(){
            return this.all_Accepted_Appointment.find(data => data.id == this.id);
        },

        getPatientImage(){
            if(this.appointment){
                if(this.appointment.patient.image){
                    return '/patients/profiles/' + this.appointment.patient.image
                }else{
                    if(this.appointment.patient.gender === 'Male'){
                        return '/app_asset/male_avatar.png'
                    }else{
                        return '/app_asset/undraw_female_avatar_l3ey.png'
                    }
                }
            }
        },
        getTodayDate(){
            return moment().format('dddd, Do MMMM YYYY');
        },
        calculateBMI(){
            if(this.vitals.weight && this.vitals.height){
                let height_in_meters = parseFloat(this.vitals.height) / 100;
                let height_squared = parseFloat(height_in_meters) * parseFloat(height_in_meters);
                let bmi = this.vitals.weight / height_squared;
                return bmi.toFixed(1);   
            }
        },
        formattedDrugs(){
            if(this.allDrugs.length){
               var drugs = this.allDrugs.map(item => {
                   return item.name
               })
               return drugs;
            }
        },
        getDaysLeft(){
            if(this.data.start_course && this.data.end_course){
                var a = moment(this.data.start_course);
                var b = moment(this.data.end_course);
                var result =  b.diff(a, 'days') +" "+ "days"// 1
                return result;
            }
        }
    },
    created(){
        this.formattedDrugs;
        this.appointment;
    },
    watch:{
        formattedDrugs(){
            if(this.formattedDrugs.length){
                this.items = this.formattedDrugs
            }
        },
        appointment_day(){
            if(this.appointment_day !== null){
                this.getDoctorTime(this.appointment_day);
            }
        },
        selection(){
            if(this.selection !== null){
                this.getLabSchedule(this.selection);
            }
        }

    },
    mounted(){
        if(this.appointment){
            this.getVital(this.appointment.patient.id);
        }else{
            this.appointment;
        }
        this.fetchDrugs();
        this.getVitals();
        this.getMedicalHistory();
        this.getLabDoctors();

        this.$refs.topProgress.start()
    
        // Use setTimeout for demo
        setTimeout(() => {
            this.$refs.topProgress.done()
        }, 1000)
        
    },
    methods:{
        ...mapActions(['fetchDrugs', 'newDrug', 'clearDrug']),

        close_appointment_dialog(){
            this.$refs.appointmentform.reset();
            this.$refs.appointmentform.resetValidation();
            this.timings = [];
            this.appointment_time = null;
            this.appointment_day = null;
            this.appointmentdialog = false;
        },

        clearPrescriptions(){
            this.clearDrug();
        },
        getVital(id){
            axios.post('/api/medic_vital', {id:id}).then(response => {
                this.vitals = response.data
            });
        },
        goback(){
            this.$router.go(-1);
        },
        getLabDoctors(){
            axios.get('/api/lab_doctors').then(response => {
                this.doctors = response.data;
            });
        },
        submit(){
            if(this.$refs.medicForm.validate()){
                this.loading_dialog = true;
                axios.post("/new_assessment",{patient_id: this.appointment.patient.id, prescription: this.allPrescribedDrugs, medical: this.medical}).then(response => {
                    if(response.data.success){
                        this.loading_dialog = false;
                        this.getMedicalHistory();
                        Swal.fire(
                            'Success',
                            'Medical Record Saved',
                            'success'
                        )
                    }
                })
            }else{
                Swal.fire(
                    'Invalid Input',
                    'Please enter data before submission',
                    'error'
                )
            }
        },
        prescribe(){            
            if(this.$refs.prescriptionForm.validate()){
                this.loading_dialog = true;
                this.newDrug(this.data);
                this.loading_dialog = false;
                
            }else{
                Swal.fire(
                    'Invalid Input',
                    'Please enter data before submission',
                    'error'
                )
            }
        },
        book_appointment(){
            if(this.$refs.appointmentform.validate()){
                this.loading_dialog = true;
                axios.post('/api/post_medic_appointment', {id: this.appointment.patient.id, appointment_time: this.appointment_time, 
                    appointment_day: this.appointment_day, reason:this.appointment_reason, speciality: this.selection}).then(response => {
                        if(response.data.error){
                            this.loading_dialog = false;
                            this.appointmentdialog = true;
                            Swal.fire(
                                'Unavailable time or date',
                                'Time or date selected is not available',
                                'info'
                            )
                        }
                        if(response.data.success){
                            this.loading_dialog = false;
                            this.appointmentdialog = false;
                            this.appointment_time = null;
                            this.appointment_day = null;
                            this.$refs.appointmentform.reset();
                            this.$refs.appointmentform.resetValidation();
                            this.timings = [];
                            Swal.fire(
                                'success',
                                'Lab test booked',
                                'success'
                            )
                        }
                });
            }
        },
        getLabSchedule(id){
            axios.post('/api/doctor_schedule', {id: id}).then(response => {
                if(response.data.schedule){
                    this.schedules = response.data.schedule;
                }
                if(response.data.no_schedules){
                    Toast.fire({
                        icon: 'info',
                        title: 'No Available Schedules'
                    });
                }
            });
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
        getVitals(){
            axios.post('/api/patient_vitals', {id: this.appointment.patient.id }).then(response => {
                this.vitalsHistory = response.data;
            })
        },
        getMedicalHistory(){
            axios.post('/api/patient_medical_history', {id: this.appointment.patient.id }).then(response => {
                this.medicaHistory = response.data;
            })
        },
        calculateVitalsBMI(weight, height){
            if(weight && height){
                let height_in_meters = height / 100;
                let height_squared = height_in_meters * height_in_meters;
                let bmi = weight / height_squared;
                return bmi.toFixed(1);   
            }else{
                return 'N/A'
            }
        },
        view_prescription(item){
            this.prescription_dialog = true;
            this.map_prescriptions(item.prescriptions);
        },
        map_prescriptions(data){
            this.prescription_items = data.map(item => {
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
        refer_patient(){
            this.$router.push({name: 'patient_referrals_form', params: {id: this.appointment.patient.id}})
        },
        getStaffImage(item){
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

<style lang="stylus" scoped>

</style>
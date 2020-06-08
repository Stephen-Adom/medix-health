<template>
    <v-container class="mx-auto" style="width: 95%">
        <v-card class="pa-4" outlined>
            <v-card-title>
                <span class="subtitle-1 text-uppercase font-weight-bold grey--text darken-9">Patient Medical Records</span>
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
                <v-row v-if="patient_medicals">
                    <v-col cols="12" v-for="(item, index) in filteredPatients" :key="index">
                        <v-card class="pa-3 d-flex flex-row" outlined style="border-left: 4px solid green;">
                            <v-card-actions>
                                <v-avatar :color="getRandomColor(item)" elevation="10">
                                    <span class="white--text">{{getInitials(item)}}</span>
                                </v-avatar>
                            </v-card-actions>
                            <v-card-text class="d-flex flex-column">
                                <span class="subtitle-2 grey--text darken-10 font-weight-bold text-uppercase">{{item.title}} {{item.firstname}} {{item.lastname}}</span>
                                <span class="caption font-weight-bold">Job Title: {{item.job_title}}</span>
                                <span class="caption font-weight-bold" v-if="item">Status: <v-icon :color="formatStatusColor(item)" size="20">{{formatStatus(item)}}</v-icon></span>
                            </v-card-text>
                            <v-card-actions class="ml-auto flex-row d-flex">
                                <v-btn color="success darken-2" class="px-5 py-2 mx-2" dark depressed tile @click="openRecords(item)">
                                    <v-icon left size="20">mdi-format-align-right</v-icon>
                                    <span class="caption font-weight-bold text-uppercase">Reports</span>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>

    <v-dialog v-model="medical_dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-card>
            <v-toolbar dark color="info darken-1" flat>
            <v-toolbar-title class="subtitle-2 font-weight-bold text-uppercase">
                Medical Records Analysis
                <v-icon class="ml-3">mdi-medical-bag</v-icon>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn dark text @click="medical_dialog = false">Close</v-btn>
            </v-toolbar-items>
            </v-toolbar>
            <v-row align="center" class="flex-column">
                <v-img src="/app_asset/medix_full.png" width="200" />
                <h3 class="subtitle-2 mt-2 text-uppercase font-weight-bold">All Medical Records</h3>
            </v-row>
            <v-divider />
            <v-card-text>
                <v-card flat>
                    <v-card-text>
                        <v-card outlined class="pa-3">
                            <v-card-title>
                                <span class="subtitle-2 font-weight-bold">Medical Report List</span>
                            <v-spacer></v-spacer>
                            <v-text-field v-model="medical_search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
                            </v-card-title>
                            <v-data-table :headers="medical_headers" :items="medicaHistory" :search="medical_search">
                                <template v-slot:item.created_at = "{item}">
                                    <span>{{item.created_at | formatDate}}</span>    
                                </template>
                                <template v-slot:item.actions = "{item}">
                                    <v-btn class="px-5" dark color="info darken-1" tile @click="generate_report(item)">
                                        <span class="caption">generate</span>
                                        <v-icon right size="20">mdi-flash-circle</v-icon>
                                    </v-btn>
                                </template>
                            </v-data-table>
                        </v-card>
                    </v-card-text>
                </v-card>
            </v-card-text>
        </v-card>
    </v-dialog>

    <v-dialog v-model="loading_dialog" hide-overlay persistent width="300">
      <v-card color="teal" dark>
        <v-card-text>
          <span class="subtitle-2 font-weight-light font-italic">Loading data. Please wait...</span>  
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>

        <v-dialog v-model="report_dialog" fullscreen hide-overlay transition="dialog-bottom-transition" id="print_dialog">
            <html id="form_html" style="width: 100%; margin: 0 auto">
                <body>
                    <v-card>
                        <v-toolbar dark color="info darken-1" flat id="print_preview_toolbar">
                        <v-btn icon dark @click="report_dialog = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title class="subtitle-2 font-weight-bold text-uppercase">Medical Assessment Reports</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-toolbar-items>
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-btn icon @click="print_form" v-on="on">
                                        <v-icon>mdi-download</v-icon>
                                    </v-btn>
                                </template>
                            <span class="caption">Download form as pdf</span>
                            </v-tooltip>
                
                        </v-toolbar-items>
                        </v-toolbar>
                            <v-container>
                                <v-row align="center" class="flex-column">
                                    <v-img src="/app_asset/medix_full.png" width="200" />
                                    <h3 class="headline mt-5 text-uppercase">Medical Report</h3>
                                </v-row>
                                <v-card outlined>
                                    <v-card-title class="pa-3 overline font-weight-bold" style="background-color: #a4a4a4b8; font-size: 15px !important;">Patient Information</v-card-title>
                                    <v-card-text class="pa-7">
                                    <v-row v-if="report">
                                        <v-col cols="4" lg="4">
                                        <div class="text-no-wrap border-line text-uppercase mb-3" style="width: 20px;">
                                            First Name
                                        </div>
                                        <v-text-field :value="report.patient.firstname" outlined readonly dense color="success" class="mt-0" />
                                        </v-col>
                                        <v-col cols="4" lg="4">
                                        <div class="text-no-wrap border-line text-uppercase mb-3" style="width: 20px;">
                                            Last Name
                                        </div>
                                        <v-text-field :value="report.patient.lastname" outlined readonly dense color="success" class="mt-0" />
                                        </v-col>
                                        <v-col cols="4" lg="4">
                                        <div class="text-no-wrap border-line text-uppercase mb-3" style="width: 20px;">
                                            Gender
                                        </div>
                                        <v-text-field :value="report.patient.gender" outlined readonly dense color="success" class="mt-0" />
                                        </v-col>
                                    </v-row>

                                    <v-row v-if="report">
                                        <v-col cols="4" lg="4">
                                        <div class="text-no-wrap border-line text-uppercase mb-3" style="width: 20px;">
                                            Email
                                        </div>
                                        <v-text-field :value="report.patient.email" outlined readonly dense color="success" class="mt-0" />
                                        </v-col>
                                        <v-col cols="4" lg="4">
                                        <div class="text-no-wrap border-line text-uppercase mb-3" style="width: 20px;">
                                            Contact
                                        </div>
                                        <v-text-field :value="formatContact" outlined readonly dense color="success" class="mt-0" />
                                        </v-col>
                                        <v-col cols="4" lg="4">
                                        <div class="text-no-wrap border-line text-uppercase mb-3" style="width: 20px;">
                                            Age
                                        </div>
                                        <v-text-field :value="report.patient.age" outlined readonly dense color="success" class="mt-0" />
                                        </v-col>
                                    </v-row>

                                    <v-row v-if="report">
                                        <v-col cols="4" lg="4">
                                        <div class="text-no-wrap border-line text-uppercase mb-3" style="width: 20px;">
                                            Job Title
                                        </div>
                                        <v-text-field :value="report.patient.job_title" outlined readonly dense color="success" class="mt-0" />
                                        </v-col>
                                        <v-col cols="4" lg="4">
                                        <div class="text-no-wrap border-line text-uppercase mb-3" style="width: 20px;">
                                            Department
                                        </div>
                                        <v-text-field :value="report.patient.department" outlined readonly dense color="success" class="mt-0" />
                                        </v-col>
                                        <v-col cols="4" lg="4">
                                        <div class="text-no-wrap border-line text-uppercase mb-3" style="width: 20px;">
                                            Type of Employee
                                        </div>
                                        <v-text-field :value="report.patient.employee_type" outlined readonly dense color="success" class="mt-0" />
                                        </v-col>
                                    </v-row>

                                    <v-row class="d-block pl-5">
                                        <v-spacer />
                                        <div class="text-no-wrap border-line text-uppercase mb-3" style="width: 20px; margin-right: 80px;">
                                        Referred?
                                        </div>
                                        <div v-if="report">
                                            <span v-if="report.patient.referred === 1" class="subtitle-1 font-weight-bold text-uppercase">yes</span>
                                            <span v-if="report.patient.referred === 0" class="subtitle-1 font-weight-bold text-uppercase">no</span>
                                        </div>
                                    </v-row>
                                    
                                    </v-card-text>
                                </v-card>

                                <v-card outlined>
                                    <v-card-title class="pa-3 overline font-weight-bold" style="background-color: #a4a4a4b8; font-size: 15px !important;">Doctor's Report</v-card-title>
                                    <v-card-text class="pa-7">
                                        <v-form v-if="report">
                                            <div>
                                                <div class="d-flex justify-centent-space-between">
                                                    <span class="subtitle-2 font-weight-bold text-center">Problem Description</span>
                                                    <v-spacer/>
                                                    <span class="ml-auto"><v-icon>mdi-checkbook</v-icon></span>
                                                </div> 
                                                <v-divider />
                                                <v-text-field color="success" readonly :value="report.problem"></v-text-field>
                                            </div>
                                            <div>
                                                <div class="d-flex justify-centent-space-between">
                                                    <span class="subtitle-2 font-weight-bold text-center">Allergies</span>
                                                    <v-spacer/>
                                                    <span class="ml-auto"><v-icon>mdi-account-alert</v-icon></span>
                                                </div> 
                                                <v-divider />
                                                <v-text-field color="success"  readonly :value="report.allergies"></v-text-field>
                                            </div>
                                            <div>
                                                <div class="d-flex justify-centent-space-between">
                                                    <span class="subtitle-2 font-weight-bold text-center">Diagnosis</span>
                                                    <v-spacer/>
                                                    <span class="ml-auto"><v-icon>mdi-telescope</v-icon></span>
                                                </div> 
                                                <v-divider />
                                                <v-textarea color="success" height="100"  readonly :value="report.diagnosis"></v-textarea>
                                            </div> 
                                            <div class="mt-5">
                                                <div class="d-flex justify-centent-space-between">
                                                    <span class="subtitle-2 font-weight-bold text-center">Medication</span>
                                                    <v-spacer/>
                                                </div> 
                                                <v-divider />
                                                    <template v-if="show_prescription_items">
                                                        <div v-for="(data, index) in show_prescription_items" :key="index">
                                                            <v-row>
                                                                <v-col v-for="(drug, index) in data.drug_name" :key="index" cols="3">
                                                                    <v-card class="grey lighten-2 text-center pa-2" outlined>
                                                                        <v-card-text class="pa-2">
                                                                            <span class="subtitle-2 font-weight-bold text-uppercase">{{drug}}</span>
                                                                        </v-card-text>
                                                                        <v-card-text>
                                                                            <span class="d-block text-center grey--text font-weight-bold text-uppercase caption darken-5"><i>Dosage: <span class="black--text">{{data.dosage}}</span> </i></span>
                                                                        </v-card-text>
                                                                    </v-card> 
                                                                </v-col>
                                                            </v-row> 
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
                                                <v-textarea color="success" height="100" readonly :value="report.notes"></v-textarea>
                                            </div>
                                        </v-form>
                                    </v-card-text>
                                </v-card>
                            </v-container>
                        </v-card>
                </body>
            </html>
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
import jspdf from 'jspdf';
import domtoimage from "dom-to-image";

export default {
    data: () => ({
        pdf_loading_dialog: false,
        loading_dialog: false,
        search_patient:'',
        medical_dialog: false,
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
        medicaHistory: [],
        colors :['red darken-2', 'success darken-2', 'warning darken-1', 'primary'],
        report: null,
        show_prescription_items: null,
        report_dialog: false,
    }),
    computed:{
        ...mapGetters(['patient_medicals']),

        filteredPatients(){
            return this.patient_medicals.filter(data => {
                return data.firstname.toLowerCase().match(this.search_patient.toLowerCase()) || data.lastname.toLowerCase().match(this.search_patient.toLowerCase()) ;
            });
        },
        formatContact(){
            if(this.report !== null){
                let phone = this.report.patient.phone;
                let new_str = phone.slice(1);
                return '(+233)'+ ' '+ new_str;
            }
        }
    },
    methods:{
        ...mapActions(['fetchPatientMedicals']),
        openRecords(){
            this.medical_dialog = true;
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
      openRecords(item){
        this.loading_dialog = true;
        axios.post('/api/patient_medical_history', {id:item.id}).then(response => {
            this.medicaHistory = response.data
        });
        if(this.medicaHistory){
            this.loading_dialog = false;
            this.medical_dialog = true;
        }
      },
      map_prescriptions(data){
            this.show_prescription_items = data.prescriptions.map(item => {
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
      generate_report(item){
          this.report = item;
        this.map_prescriptions(item);
        if(this.report){
            this.report_dialog = true;
        }
      },
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
            const filename ="Medical Record.pdf";
            doc.save(filename);
            this.pdf_loading_dialog = false;
            document.getElementById('print_preview_toolbar').style.display = "block";
            }).catch(function(error) {
                console.error("oops, something went wrong!", error);
                this.pdf_loading_dialog = false;
                document.getElementById('print_preview_toolbar').style.display = "block";
            });
        },
    },
    created(){
        this.fetchPatientMedicals();
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
}
</script>

<style scoped>
  #info {
    text-align: center !important;
  }
  .border-line {
    border-bottom: 2px solid rgba(0, 126, 46, 1);
  }
</style>
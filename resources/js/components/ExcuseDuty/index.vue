<template>
    <v-container>
        <vue-topprogress ref="topProgress" color="#00C851" colorShadow="#00C851" :height="5" errorColor="#CC0000"></vue-topprogress>
        <v-card outlined>
            <v-card-title>
                <v-btn dark depressed tile class="success darken-3 px-6" @click="patients_dashboard">
                    <span class="caption">Apply Now</span>
                </v-btn>
                <v-spacer />
                <v-btn dark depressed tile class="red darken-3 px-6" @click="goback">
                    <span class="caption">Back</span>
                </v-btn>
            </v-card-title>
            <v-divider />
            <v-card-text>
                <v-row>
                    <v-col cols="12" md="7">
                        <v-responsive>
                            <v-img src="/app_asset/undraw_upload_87y9.svg" width="80%" class="mx-auto" />
                        </v-responsive>
                    </v-col>
                    <v-col cols="12" md="5" class="d-flex flex-column align-center justify-center">
                        <h2 class="display-1 font-weight-bold black--text">Welcome to <span class="success--text darken-10">Excuse Duty</span> Application Dashboard</h2>
                        <v-divider inset class="my-2" color="success darken-5" width="100%" height="15px" />
                        <div class="mt-7">
                            <v-badge bordered color="info darken-1" :content="ExcusesLength" :value="ExcusesLength" overlap left v-if="$gate.isManager()">
                                <v-btn rounded elevation="15" class="success ma-2 px-5" dark @click="view_applicants" v-if="$gate.isManager()">
                                    <span class="caption">view applicants</span>
                                </v-btn>
                            </v-badge>
                            <v-btn rounded elevation="15" class="info ma-2 px-5" dark @click.stop="excuse_history_dialog = true">
                                <span class="caption">Application History</span>
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-divider />
            <v-card-text class="text-right">
                <span class="subtitle-2 font-weight-bold grey--text">{{getYear}} &copy; Medix Digital Application</span>
            </v-card-text>
        </v-card>

        <v-dialog v-model="excuse_history_dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-card>
                <v-toolbar dark color="success darken-2" flat>
                <v-btn icon dark @click="excuse_history_dialog = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title class="subtitle-2 font-weight-bold text-uppercase">Excuse Duty Forms</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn dark text @click="excuse_history_dialog = false">Close</v-btn>
                </v-toolbar-items>
                </v-toolbar>
                <v-card-text class="mb-0 pa-0">
                    <v-row>
                        <v-col cols="12">
                            <v-responsive>
                                <v-img src="/app_asset/medix_full.png" width="15%" class="mx-auto"></v-img>
                            </v-responsive>
                            <h6 class="subtitle-1 font-weight-bold text-center text-uppercase">Excuse Forms List</h6>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-divider class="mt-0" />
                <v-card-text>
                    <v-card-title>
                        <span class="subtitle-2 font-weight-bold grey--text darken-8">All List</span>
                        <v-spacer></v-spacer>
                        <v-text-field v-model="excuse_duty_search" append-icon="mdi-magnify" label="Search" hide-details></v-text-field>
                        </v-card-title>
                        <v-data-table :headers="headers" :items="patients" :search="excuse_duty_search">
                            <template v-slot:item.name="{item}">
                                <span>{{item.patient.title}} {{item.patient.firstname}} {{item.patient.lastname}}</span>    
                            </template>
                            <template v-slot:item.department="{item}">
                                <span>{{item.patient.department}}</span>    
                            </template>
                            <template v-slot:item.job_title="{item}">
                                <span>{{item.patient.job_title}}</span>    
                            </template>
                            <template v-slot:item.start_date="{item}">
                                <span>{{item.start_date | formatDate}}</span>    
                            </template>
                            <template v-slot:item.end_date="{item}">
                                <span>{{item.end_date | formatDate}}</span>    
                            </template>
                            <template v-slot:item.recommendation="{item}">
                                <span>{{processed_recommendation(item)}}</span>    
                            </template>
                            <template v-slot:item.actions="{item}">
                                <v-btn icon color="info darken-1" @click="display(item)">
                                    <v-icon>mdi-flash-circle</v-icon>
                                </v-btn>
                                <v-btn icon color="red darken-2" @click="remove(item)">
                                    <v-icon>mdi-delete</v-icon>
                                </v-btn> 
                            </template>
                        </v-data-table>
                </v-card-text>
            </v-card>
            </v-dialog>

            <v-dialog v-model="display_dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                <html id="print_body_form">
                    <body>
                        <v-card>
                            <v-toolbar flat class="print_preview_toolbar">
                            <v-btn icon @click="display_dialog = false">
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                            <v-toolbar-title class="subtitle-1 font-weight-bold grey--text darken-5">Excuse Duty Form</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-toolbar-items>
                                <v-btn icon color="success darken-2" @click="print_form">
                                    <v-icon>mdi-printer</v-icon>
                                </v-btn>
                            </v-toolbar-items>
                            </v-toolbar>
                            <v-card style="width: 80%;" class="mx-auto pa-3" outlined>
                                <v-card-text class="pa-2 px-8" v-if="display_data">
                                        <v-row align="center" class="flex-column">
                                            <v-img src="/app_asset/medix_full.png" width="200" />
                                            <h6 class="subtitle-2 mt-2 text-uppercase font-weight-bold">Staff Excuse Duty Form</h6>
                                        </v-row>
                                <!-- Staff Info -->
                                        <v-card class="mt-3" flat>
                                            <v-card-title class="subtitle-1 font-weight-bold success--text darken-2">Staff Information</v-card-title>
                                            <v-card-text v-if="display_data">
                                                <v-row>
                                                    <v-col cols="6" lg="6">
                                                        <v-text-field :value="display_data.patient.firstname" label="Staff First Name" outlined rounded readonly></v-text-field>
                                                    </v-col>
                                                    <v-col cols="6" lg="6">
                                                        <v-text-field :value="display_data.patient.lastname" label="Staff Last Name" outlined rounded readonly></v-text-field>
                                                    </v-col>
                                                </v-row>

                                                <v-row>
                                                    <v-col cols="6" lg="6">
                                                        <v-text-field :value="display_data.patient.phone" label="Patient's Contact" outlined rounded readonly></v-text-field>
                                                    </v-col>
                                                    <v-col cols="6" lg="6">
                                                        <v-text-field :value="display_data.patient.email" label="Patient's Email" outlined rounded readonly></v-text-field>
                                                    </v-col>
                                                </v-row>

                                                <v-row>
                                                    <v-col cols="6" lg="6">
                                                        <v-text-field :value="display_data.patient.gender" label="Gender" outlined rounded readonly></v-text-field>
                                                    </v-col>
                                                    <v-col cols="6" lg="6">
                                                        <v-text-field :value="display_data.patient.job_title" label="Staff Job Title" outlined rounded readonly></v-text-field>
                                                    </v-col>
                                                </v-row>
                                            </v-card-text>
                                        </v-card>

                                <v-divider inset />
                                <!-- Staff Occupational Information -->
                                    <v-card flat>
                                        <v-card-title class="subtitle-1 font-weight-bold success--text darken-2">Staff Occupational Information</v-card-title>
                                        <v-card-text>
                                            <v-row class="no-gutters">
                                            <v-col cols="5" lg="5" class="pl-5">
                                                <h5 class="pt-4">Department / Unit :</h5>
                                            </v-col>
                                            <v-col cols="7" lg="7">
                                                <v-text-field outlined rounded readonly :value="display_data.patient.department"></v-text-field>
                                            </v-col>
                                            </v-row>

                                            <v-row class="no-gutters">
                                            <v-col cols="5" lg="5" class="pl-5">
                                                <h5 class="pt-1">Have you already taken your annual leave?</h5>
                                            </v-col>
                                            <v-col cols="7" lg="7">
                                                <v-radio-group class="mt-0 pl-3" row readonly :value="display_data.annual_leave">
                                                <v-radio label="Have taken part" value="Part" color="success darken-2"></v-radio>
                                                <v-radio label="Have taken all" value="Full" color="success darken-2"></v-radio>
                                                <v-radio label="Have not taken any" value="None" color="success darken-2"></v-radio>
                                                </v-radio-group>
                                            </v-col>
                                            </v-row>
                                        </v-card-text>
                                    </v-card>

                                    <v-divider inset />

                                <!-- Type of Request -->
                                    <v-card flat>
                                        <v-card-title class="subtitle-1 font-weight-bold success--text darken-2">Patient Request Information</v-card-title>
                                        <v-card-text>
                                        <v-row class="no-gutters">
                                            <v-col cols="3" lg="3" class="pl-5 pt-3">
                                                <h5 class="pt-1">Reason of Request</h5>
                                            </v-col>
                                            <v-col cols="9" lg="9">
                                                <v-text-field placeholder="Type here...." readonly outlined rounded label="Reason" :value="display_data.reason"></v-text-field>
                                            </v-col>
                                        </v-row>

                                        <v-row>
                                            <v-col cols="4" lg="4">
                                                <v-text-field label="Start Date" readonly outlined rounded :value="formatStartDate"></v-text-field>
                                            </v-col>
                                            <v-col cols="4" lg="4">
                                                <v-text-field label="End Date" readonly outlined rounded :value="formatEndDate"></v-text-field>
                                            </v-col>
                                            <v-col cols="4" lg="4">
                                                <v-text-field label="Number of Days" outlined rounded :value="getDaysLeft" readonly></v-text-field>
                                            </v-col>
                                        </v-row>
                                        </v-card-text>
                                    </v-card>
                                <!-- Recommendation -->
                                    <v-card flat>
                                        <v-card-title class="subtitle-1 font-weight-bold success--text darken-2">Recommendation by Clinic Manager</v-card-title>
                                        <v-card-text>
                                            <v-textarea label="Comments" outlined placeholder="Include comments here...." readonly v-model="comment"></v-textarea>

                                            <v-row>
                                                <v-col cols="12">
                                                <v-text-field label="Manager's Full Name" outlined rounded readonly v-model="display_data.approved_by"></v-text-field>
                                                </v-col>
                                            </v-row>

                                            <v-row>
                                                <v-col cols="6" lg="6">
                                                    <v-text-field label="Date" placeholder="26th, January 2030" outlined rounded :value="formatApprovedDate" readonly></v-text-field>
                                                </v-col>
                                                <v-col cols="6" lg="6" align="center">
                                                <h5 v-if="display_data.recommendation === 1" class="mt-5 font-weight-bold">
                                                    <v-icon size="20" color="success darken-3">mdi-check</v-icon>
                                                    <span class="success--text darken-3 subtitle-2">Application Approved by the Hospital</span>
                                                </h5>
                                                <h5 v-if="display_data.recommendation === 0" class="mt-5 font-weight-bold">
                                                    <v-icon size="20" color="red darken-3">mdi-alert-rhombus</v-icon>
                                                    <span class="red--text darken-3 subtitle-2">Application Disapproved by the Hospital</span>
                                                </h5>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col cols="6" md="6">
                                                    <v-textarea label="Supervisor Signature" readonly height="50"></v-textarea>
                                                </v-col>
                                            <v-col cols="6" md="6">
                                                    <v-textarea label="Date" readonly height="50"></v-textarea>
                                                </v-col>
                                            </v-row>
                                        </v-card-text>
                                    </v-card>
                                </v-card-text>
                            </v-card>
                        </v-card>
                    </body>
                </html>
            </v-dialog>
    </v-container>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import Swal from 'sweetalert2';
import moment from 'moment';
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

export default {
    data: () => ({
        getYear: moment().format('YYYY'),
        display_dialog: false,
        excuse_duty_search: "",
        excuse_history_dialog: false,
        items: [],
        search_patient:'',
        comment:'',
        recommendation:'',
        headers: [
          {
            text: 'Patient Name',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Job Title', value: 'job_title' },
          { text: 'Reason', value: 'reason' },
          { text: 'Start Date', value: 'start_date' },
          { text: 'End Date', value: 'end_date'},
          { text: 'Processed By', value: 'approved_by' },
          { text: 'Status', value: 'recommendation' },
          { text: 'Action', value: 'actions' },
        ],
        patients: [],
        display_data: null,
        colors: ['red darken-2', 'success darken-2', 'warning darken-1', 'primary'],
    }),
    filters:{
        formatDate(value){
            return moment(value).format('MMMM Do YYYY');
        },
        formatTime(value){
            return moment(value).format('LT');
        }
    },
    computed:{
        ...mapGetters(['allExcuses', 'ExcusesLength', 'allPrevious']),
        filteredPatients(){
            return this.items.filter(data => {
                return data.firstname.toLowerCase().match(this.search_patient.toLowerCase()) || data.lastname.toLowerCase().match(this.search_patient.toLowerCase()) ;
            });
        },
        formatApprovedDate(){
            if(this.display_data.approved_date){
              return moment(this.display_data.approved_date).format('MMMM Do YYYY');
          }
        },
        formatStartDate(){
          if(this.display_data.start_date){
              return moment(this.display_data.start_date).format('MMMM Do YYYY');
          }
        },
        formatEndDate(){
            if(this.display_data.end_date){
                return moment(this.display_data.end_date).format('MMMM Do YYYY');
            }
        },
        getDaysLeft(){
          if(this.display_data.start_date && this.display_data.end_date){
              var a = moment(this.display_data.start_date);
              var b = moment(this.display_data.end_date);
              var result =  b.diff(a, 'days') +" "+ "days"// 1
              return result
          }
      },
    },
    watch:{
        allPrevious(){
            if(this.allPrevious){
                this.patients = this.allPrevious;
            }
        }
    
    },
    methods:{
        ...mapActions(['fetchPatients', 'fetchExcuses', 'fetchPrevious']),

        print_form(){
            window.print();
        },

        goback(){
            this.$router.go(-1);
        },

        patients_dashboard(){
            this.$router.push({name: 'patients'});
        },

        applyNow(){
            this.$router.push({name: 'excuse_duty_form'});
        },
        
        getInitials(data){
        var first = data.firstname.slice(0, 1).toUpperCase();
        var last = data.lastname.slice(0, 1).toUpperCase();
        var ini = first + '' + last;
        return ini;
      },
      getRandomColor(data){
        return this.colors[ Math.floor( Math.random(0,1) * this.colors.length ) ];
      },
      goToLink(item){
          this.$router.push({name: 'excuse_duty_form', params: {id: item.id}});
      },
      view_applicants(){
          this.$router.push({name: 'excuse_duty_applicants'});
      },
      display(item){
          this.display_data = this.allPrevious.find(data => data.id === item.id);
          if(this.display_data){
              this.comment = this.display_data.additional_comment;
              this.recommendation = this.display_data.recommendation;
              this.display_dialog = true;
          }
      },
      processed_recommendation(item){
          if(item.recommendation === 0){
              return 'Disapproved';
          }else{
              return 'Approved'
          }
      },
      remove(item){
        swalWithBootstrapButtons.fire({
          title: 'Are you sure?',
          text: "This Application will be deleted!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel!',
          reverseButtons: true
        }).then((result) => {
          if (result.value) {
            axios.post('/api/delete_excuseduty_application', {id:item.id}).then(response => {
              if(response.data.success){
                swalWithBootstrapButtons.fire(
                  'Deleted!',
                  'The Application have been deleted.',
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
              'The Application is safe',
              'info'
            )
          }
        })
      },
      print(){
          
      }
    },
    created(){
        this.fetchExcuses();
        this.fetchPrevious();
    },
     mounted () {
        this.$refs.topProgress.start();
    
        // Use setTimeout for demo
        setTimeout(() => {
        this.$refs.topProgress.done();
        }, 2000);
    },
}
</script>

<style scoped>

</style>
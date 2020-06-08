<template>
    <v-container>
        <v-card outlined>
            <v-card-title>
                <span class="subtitle-1 font-weight-bold text-uppercase">First Aid Information</span>
            </v-card-title>
            <v-divider />
            <v-card-text>
                <v-data-table ref="firstAidData" :headers="headers" :items="patients" sort-by="full_name" class="elevation-0" :search="search" :loading ="loadingData" loading-text="Loading... Please wait">
                    <template v-slot:top>
                    <v-toolbar flat color="white">
                        <v-toolbar-title class="subtitle-2 font-weight-bold text-uppercase">Patients</v-toolbar-title>
                        <v-divider class="mx-4" inset vertical></v-divider>
                        <v-spacer></v-spacer>
                        <v-text-field color="success" v-model="search" label="Who are you looking for?" class="mx-4 mt-2" append-icon="mdi-magnify"/>
                    </v-toolbar>
                    </template>
                    <template v-slot:item.name="{ item }">
                        <span>{{item.patient.title}} {{item.patient.firstname}} {{item.patient.lastname}}</span>
                    </template>
                    <template v-slot:item.injury_time="{ item }">
                        <span>{{item.injury_time | formatTime}}</span>
                    </template>
                    <template v-slot:item.injury_date="{ item }">
                        <span>{{item.injury_date | formatDate}}</span>
                    </template>
                    <template v-slot:item.initial_report_date="{ item }">
                        <span>{{item.initial_report_date | formatDate}}</span>
                    </template>
                    <template v-slot:item.initial_report_time="{ item }">
                        <span>{{item.initial_report_time | formatTime}}</span>
                    </template>
                    <template v-slot:item.actions="{ item }">
                        <v-btn icon color="info darken-1" @click="view_report(item)">
                            <v-icon>mdi-flash-circle</v-icon>   
                        </v-btn>
                        <v-btn icon color="red darken-3" @click="delete_application(item)">
                            <v-icon >mdi-delete</v-icon>   
                        </v-btn>
                    </template>
                </v-data-table>
            </v-card-text>
        </v-card>

            <v-dialog v-model="display_dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-card id="report">
                <v-toolbar flat>
                <v-btn icon @click="display_dialog = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title class="subtitle-1 font-weight-bold grey--text darken-5">First Aid Form</v-toolbar-title>
                <v-spacer></v-spacer>
                </v-toolbar>
                    <v-container id="top_section">
                        <section class="d-flex">
                            <v-img src="/app_asset/medix_full.png" max-width="200"></v-img>
                            <h3 style="padding-top: 63px;" class="ml-10 headline">First Aid Record Report</h3>
                            <v-spacer />
                            <v-btn color="success darken-2" class="px-5" tile depressed style="margin-top: 60px;" @click="print">Print</v-btn>
                        </section>

                        <!-- Personal Details -->
                        <v-card flat class="mt-5">
                            <v-container fluid class="py-0">
                            <v-row>
                                <v-col cols="12" lg="6" class="pb-0" style="border: thin solid rgba(0, 0, 0, 0.12)">
                                <h3 class="subtitle-1">Name</h3>
                                <v-text-field class="pt-0" :value="full_name" readonly></v-text-field>
                                </v-col>
                                <v-col cols="12" lg="6" class="pb-0" style="border: thin solid rgba(0, 0, 0, 0.12)">
                                <h3 class="subtitle-1">Occupation</h3>
                                <v-text-field class="pt-0" v-if="report" :value="report.patient.job_title" readonly></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row v-if="report != null">
                                <v-col cols="12" lg="6" class="pb-0" style="border: thin solid rgba(0, 0, 0, 0.12)">
                                <h3 class="subtitle-1">Date of injury or illness</h3>
                                    <v-text-field prepend-icon="mdi-calendar" readonly :value="format_injury_date"></v-text-field>
                                </v-col>
                                <v-col cols="12" lg="6" class="pb-0" style="border: thin solid rgba(0, 0, 0, 0.12)">
                                <h3 class="subtitle-1">Time of injury or illness</h3>
                                    <v-text-field prepend-icon="mdi-clock" readonly :value="format_injury_time"></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row v-if="report != null">
                                <v-col cols="12" lg="6" class="pb-0" style="border: thin solid rgba(0, 0, 0, 0.12)">
                                <h3 class="subtitle-1">Initial reporting date and time</h3>
                                
                                <v-row>
                                    <v-col cols="12" lg="6" class="pb-0" style="border-right: thin solid rgba(0, 0, 0, 0.12)">
                                        <v-text-field prepend-icon="mdi-calendar" readonly :value="format_initial_date"></v-text-field>
                                    </v-col>

                                    <v-col cols="12" lg="6" class="pb-0">
                                        <v-text-field prepend-icon="mdi-clock" readonly :value="format_initial_time" ></v-text-field>
                                    </v-col>
                                </v-row>
                                </v-col>
                                <v-col cols="12" lg="6" class="pb-0" style="border: thin solid rgba(0, 0, 0, 0.12)">
                                <h3 class="subtitle-1">Follow-up report date and time</h3>
                                
                                <v-row v-if="report != null">
                                    <v-col cols="12" lg="6" class="pb-0" style="border-right: thin solid rgba(0, 0, 0, 0.12)">
                                        <v-text-field prepend-icon="mdi-calendar" readonly :value="format_follow_date" ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" lg="6" class="pb-0">
                                        <v-text-field prepend-icon="mdi-clock" readonly :value="format_follow_time" ></v-text-field>
                                    </v-col>
                                </v-row>
                                </v-col>
                            </v-row>
                            </v-container>
                        </v-card>

                        <!-- Descriptions -->
                        <section class="mt-3" v-if="report != null">
                            <v-card flat>
                            <h3 class="success--text darken-4 subtitle-1">Description of how injury, exposure or illness occurred <small>( What happened?)</small></h3>

                            <v-textarea outlined name="input-7-4" readonly :value="report.cause"></v-textarea>
                            </v-card>

                            <v-card flat>
                            <h3 class="success--text darken-4 subtitle-1">Description of the nature of the injury, exposure or illness occurred <small>( What you see -- signs and symptoms?)</small></h3>

                            <v-textarea outlined name="input-7-4" readonly :value="report.details"></v-textarea>
                            </v-card>

                            <v-card flat>
                            <h3 class="success--text darken-4 subtitle-1">Description of the treatment given <small>( What did you do?)</small></h3>

                            <v-textarea outlined name="input-7-4" readonly :value="report.treatment"></v-textarea>
                            </v-card>
                        </section>

                        <!-- Name of witnesses -->
                        <section v-if="report != null">
                            <v-container>
                            <h3 class="success--text darken-4 subtitle-1">Name of witnesses</h3>
                            <v-row>
                                <v-col cols="12" lg="6" class="pb-0" style="border: thin solid rgba(0, 0, 0, 0.12)">
                                <h3 class="subtitle-1">Name of first witness</h3>
                                <v-text-field class="pt-0" readonly :value="report.first_witness"></v-text-field>
                                </v-col>
                                <v-col cols="12" lg="6" class="pb-0" style="border: thin solid rgba(0, 0, 0, 0.12)">
                                <h3 class="subtitle-1">Name of second witness</h3>
                                <v-text-field class="pt-0" readonly :value="report.second_witness"></v-text-field>
                                </v-col>
                            </v-row>
                            </v-container>
                        </section>

                        <!-- Arrangement made -->
                        <section v-if="report != null">
                            <v-card flat>
                            <h3 class="success--text darken-4 subtitle-1">Arrangement made relating to the worker <small>( return to work/ medical aid/ ambulance/ follow-up )</small></h3>

                            <v-textarea outlined name="input-7-4" readonly :value="report.arrangement" ></v-textarea>
                            </v-card>
                        </section>

                        <!-- First Aid attendant details -->
                        <section v-if="report != null">
                            <v-container>
                            <v-row>
                                <v-col cols="12" lg="6" class="pb-0" style="border: thin solid rgba(0, 0, 0, 0.12)">
                                <h3 class="subtitle-1">Name of first aid attendant</h3>
                                <v-text-field class="pt-0" readonly :value="report.attendant"></v-text-field>
                                </v-col>
                                <v-col cols="12" lg="6" class="pb-0" style="border: thin solid rgba(0, 0, 0, 0.12)">
                                <h3 class="subtitle-1">First aid attendant's signature</h3>
                                <v-text-field class="pt-0"></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12" lg="12" class="pb-0" style="border: thin solid rgba(0, 0, 0, 0.12)">
                                <h3 class="subtitle-1">Patient's signature</h3>
                                <v-text-field class="pt-0"></v-text-field>
                                </v-col>
                            </v-row>
                            </v-container>
                        </section>
                    </v-container>
            </v-card>
        </v-dialog>
    </v-container>
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

    data: () => ({
        date: moment().format('Do MMMM, YYYY'),
        display_dialog: false,
        patients: [],
        search:'',
        loadingData:false,
        headers: [
        {
          text: 'Patient Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Date of Problem', value: 'injury_date' },
        { text: 'Time of Problem', value: 'injury_time' },
        { text: 'Report Date', value: 'initial_report_date' },
        { text: 'Report Time', value: 'initial_report_time' },
        { text: 'Attendant', value: 'attendant' },
        { text: 'Actions', value: 'actions', sortable: false },
        ],
        report: null,
        print_func: null,
    }),
    watch:{
        allAids(){
            if(this.allAids.length){
                this.patients = this.allAids;
                this.loadingData = false;
            }else{
                this.loadingData = false;
            }
        }
    },
    filters:{
        formatDate(value){
            return moment(value).format('MMMM Do YYYY');
        },
        formatTime(value){
            return moment(value).format('LT');
        }
    },
    computed:{
        ...mapGetters(['allAids']),

        getDate(){
            if(this.report !== null){
                return moment(this.report.injury_date).format('MMM Do, YYYY');
            }
        },
        getTime(){
            if(this.report !== null){
                return moment(this.report.injury_time).format('LT');
            }
        },
        full_name(){
            if(this.report !== null){
                return this.report.patient.title + " " + this.report.patient.firstname + " " + this.report.patient.lastname; 
            }
        },
        format_injury_date(){
            if(this.report != null){
                return moment(this.report.injury_date).format('dddd, MMMM Do YYYY');
            }
        },
        format_injury_time(){
            if(this.report != null){
                return moment(this.report.injury_time).format('LT');
            }
        },
        format_follow_date(){
            if(this.report != null){
                return moment(this.report.follow_up_date).format('dddd, MMMM Do YYYY');
            }
        },
        format_follow_time(){
            if(this.report != null){
                return moment(this.report.follow_up_time).format('LT');
            }
        },
        format_initial_date(){
            if(this.report != null){
                return moment(this.report.initial_report_date).format('dddd, MMMM Do YYYY');
            }
        },
        format_initial_time(){
            if(this.report != null){
                return moment(this.report.initial_report_time).format('LT');
            }
        },
        
    },
    methods:{
        ...mapActions(['fetchAids']),

        view_report(item){
            this.report = item;
            if(this.report != null){
                this.display_dialog = true;
            }
        },

        getImage(){
            if(this.report !== null){
                if(this.report.patient.gender === "Male"){
                    return '/app_asset/male_avatar.png'
                }else{
                    return '/app_asset/undraw_female_avatar_l3ey.png'
                }
            }
        },

    delete_application(item){
        swalWithBootstrapButtons.fire({
          title: 'Are you sure?',
          text: "The Report will be deleted",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel!',
          reverseButtons: true
        }).then((result) => {
          if (result.value) {
            var index = this.patients.indexOf(item);
            this.patients.splice(index, 1);
            axios.post('/api/delete_aid', {id: item.id}).then(response => {
              if(response.data.success){
                swalWithBootstrapButtons.fire(
                  'Deleted!',
                  'Your Message(s) have been deleted.',
                  'success'
                )
              }
              if(response.data.error){
                swalWithBootstrapButtons.fire(
                  'Error',
                  'An error has occured',
                  'error'
                )
              }
            })
            
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
        print(){
            window.print();
        }
    },
    mounted(){
        this.fetchAids();
        this.loadingData = true;

    }
}
</script>
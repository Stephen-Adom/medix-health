<template>
    <v-container>
        <v-card outlined>
            <v-card-title>
                <v-row>
                    <v-col cols="4" class="d-flex flex-column">
                        <v-responsive>
                            <v-img src="/images/medix_full.png" width="40%" class="mx-auto" />
                        </v-responsive>
                        <p class="text-center subtitle-2 font-weight-bold">Medix Digital Application</p>
                    </v-col>
                    <v-col cols="6" class="mt-10 text-center">
                        <h5 class="title font-weight-thin text-uppercase">Medix Faecal Test Report</h5>
                        <p class="subtitle-1">{{current_date}}</p>
                    </v-col>
                </v-row>
            </v-card-title>
            <v-divider />
            <v-card-text>
                <v-card outlined>
                    <v-card-title class="success darken-2 subtitle-2">
                        <span class="subtitle-2 font-weight-bold text-uppercase white--text">Basic Information</span>
                    </v-card-title>
                    <v-card-text class="mt-2">
                        <v-form ref="basic_info">
                            <v-row v-if="appointment">
                                <v-col cols="4">
                                    <v-text-field dense label="Patient Name" class="subtitle-1 font-weight-bold" readonly :value="patient_name"></v-text-field>
                                </v-col>
                                <v-col cols="2">
                                    <v-text-field dense label="Age" class="subtitle-1 font-weight-bold" readonly :value="appointment.patient.age"></v-text-field>
                                </v-col>
                                <v-col cols="3">
                                    <v-text-field dense label="Sex" class="subtitle-1 font-weight-bold" readonly :value="appointment.patient.gender"></v-text-field>
                                </v-col>
                                <v-col cols="3">
                                    <v-text-field dense label="DOB" class="subtitle-1 font-weight-bold" readonly :value="formateDob"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="5">
                                    <v-text-field dense label="Ordering Dr." class="subtitle-1 font-weight-bold" :rules="inputRules" v-model="info.ordering_dr"></v-text-field>
                                </v-col>
                                <v-col cols="2">
                                    <v-text-field dense label="Status" class="subtitle-1 font-weight-bold" :rules="inputRules" v-model="info.status"></v-text-field>
                                </v-col>
                                <v-col cols="5">
                                    <v-text-field dense label="Physician Copy for" class="subtitle-1 font-weight-bold" :rules="inputRules" v-model="info.physician_copy"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="3">
                                    <v-text-field dense label="SPEC #" class="subtitle-1 font-weight-bold" :rules="inputRules" v-model="info.spec"></v-text-field>
                                </v-col>
                                <v-col cols="3">
                                    <v-dialog ref="collection_date_dialog" v-model="collection_date_modal" :return-value.sync="info.collection_date" persistent width="290px">
                                        <template v-slot:activator="{ on }">
                                            <v-text-field v-on="on" dense label="Collection Date" class="subtitle-1 font-weight-bold" v-model="info.collection_date" :rules="inputRules"></v-text-field>
                                        </template>
                                         <v-date-picker v-model="info.collection_date" scrollable>
                                        <v-spacer></v-spacer>
                                        <v-btn text color="primary" @click="collection_date_modal = false">Cancel</v-btn>
                                        <v-btn text color="primary" @click="$refs.collection_date_dialog.save(info.collection_date)">OK</v-btn>
                                        </v-date-picker>
                                    </v-dialog>
                                </v-col>
                                <v-col cols="3">
                                    
                                    <v-dialog ref="collection_time_dialog" v-model="collection_time_modal" :return-value.sync="info.collection_time" persistent width="290px">
                                        <template v-slot:activator="{ on }">
                                        <v-text-field dense label="Collection Time" class="subtitle-1 font-weight-bold" v-on="on" :rules="inputRules" v-model="info.collection_time"></v-text-field>
                                        </template>
                                        <v-time-picker v-if="collection_time_modal" v-model="info.collection_time" full-width>
                                        <v-spacer></v-spacer>
                                        <v-btn text color="primary" @click="collection_time_modal = false">Cancel</v-btn>
                                        <v-btn text color="primary" @click="$refs.collection_time_dialog.save(info.collection_time)">OK</v-btn>
                                        </v-time-picker>
                                    </v-dialog>
                                </v-col>
                                <v-col cols="3">
                                    <v-text-field dense label="SPECIMEN" class="subtitle-2 font-weight-bold" :rules="inputRules" v-model="info.specimen"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="6">
                                    <v-dialog ref="received_date_dialog" v-model="received_date_modal" :return-value.sync="info.received_date" persistent width="290px">
                                        <template v-slot:activator="{ on }">
                                            <v-text-field v-on="on" dense label="Received Date" class="subtitle-1 font-weight-bold" v-model="info.received_date" :rules="inputRules"></v-text-field>
                                        </template>
                                         <v-date-picker v-model="info.received_date" scrollable>
                                        <v-spacer></v-spacer>
                                        <v-btn text color="primary" @click="received_date_modal = false">Cancel</v-btn>
                                        <v-btn text color="primary" @click="$refs.received_date_dialog.save(info.received_date)">OK</v-btn>
                                        </v-date-picker>
                                    </v-dialog>
                                </v-col>
                                <v-col cols="6">
                                         <v-dialog ref="received_time_dialog" v-model="received_time_modal" :return-value.sync="info.received_time" persistent width="290px">
                                            <template v-slot:activator="{ on }">
                                            <v-text-field v-on="on" dense label="Received Time" class="subtitle-1 font-weight-bold" v-model="info.received_time" :rules="inputRules"></v-text-field>
                                            </template>
                                            <v-time-picker v-if="received_time_modal" v-model="info.received_time" full-width>
                                            <v-spacer></v-spacer>
                                            <v-btn text color="primary" @click="received_time_modal = false">Cancel</v-btn>
                                            <v-btn text color="primary" @click="$refs.received_time_dialog.save(info.received_time)">OK</v-btn>
                                            </v-time-picker>
                                        </v-dialog>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                </v-card>
                  <v-card outlined>
                    <v-card-title class="grey darken-2 subtitle-2">
                        <span class="subtitle-2 font-weight-bold text-uppercase white--text">Infection Examination</span>
                    </v-card-title>
                    <v-card-text>
                        <v-form ref="infection">
                            <v-simple-table>
                                <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left">Analysis</th>
                                        <th class="text-left">Result</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="subtitle-2 font-weight-bold">Infections [parasite, virus, bacteria etc]</td>
                                        <td>
                                            <v-text-field dense class="subtitle-2 font-weight-bold" v-model="faecal.infection" :rules="inputRules"></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="subtitle-2 font-weight-bold">Occult Blood</td>
                                        <td>
                                            <v-text-field dense class="subtitle-2 font-weight-bold" v-model="faecal.occult_blood" :rules="inputRules"></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="subtitle-2 font-weight-bold">Bile</td>
                                        <td>
                                            <v-text-field dense class="subtitle-2 font-weight-bold" v-model="faecal.bile" :rules="inputRules"></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="subtitle-2 font-weight-bold">White Blood Cells</td>
                                        <td>
                                            <v-text-field dense class="subtitle-2 font-weight-bold" v-model="faecal.wbc" :rules="inputRules"></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="subtitle-2 font-weight-bold">Red Blood Cells</td>
                                        <td>
                                            <v-text-field dense class="subtitle-2 font-weight-bold" v-model="faecal.rbc" :rules="inputRules"></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="subtitle-2 font-weight-bold">Sugar</td>
                                        <td>
                                            <v-text-field dense class="subtitle-2 font-weight-bold" v-model="faecal.sugar" :rules="inputRules"></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="subtitle-2 font-weight-bold">Mucus</td>
                                        <td>
                                            <v-text-field dense class="subtitle-2 font-weight-bold" v-model="faecal.mucus" :rules="inputRules"></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="subtitle-2 font-weight-bold">pH</td>
                                        <td>
                                            <v-text-field dense class="subtitle-2 font-weight-bold" v-model="faecal.ph" :rules="inputRules"></v-text-field>
                                        </td>
                                    </tr>
                                </tbody>
                                </template>
                            </v-simple-table>
                        </v-form>
                    </v-card-text>
                    <v-divider />
                    <v-card-actions>
                        <v-btn tile depressed class="red darken-3 px-5" dark @click="cancel_infection">
                            <span class="caption font-weight-bold">Cancel</span>
                        </v-btn>
                        <v-btn tile depressed class="success darken-2 px-5 mx-3" dark @click="save_infection">
                            <span class="caption font-weight-bold">Save Result</span>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-card-text>
        </v-card>

    <v-dialog v-model="loading_dialog" hide-overlay persistent width="300">
        <v-card color="success darken-2" dark>
            <v-card-text>
            <span class="subtitle-2 font-weight-light font-italic">saving data...</span>  
            <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
            </v-card-text>
        </v-card>
    </v-dialog>
    </v-container>
</template>

<script>
import {Toast} from '../../app';

export default {
        name:"Faecal",
      props:[
            'appointment',
        ],
    data: () => ({
        loading_dialog: false,
        collection_time_modal: false,
        received_date_modal: false,
        collection_date_modal: false,
        received_time_modal: false,
        inputRules: [
            (v) => !!v || 'Field is required',
        ],
        
      info:{
          spec: "",
          collection_date:null,
          collection_time:null,
          received_date:null,
          received_time:null,
          ordering_dr:"",
          status:"",
          physician_copy:"",
          specimen:""
      },
      faecal:{
          infection:"",
          occult_blood:"",
          bile:"",
          wbc:"",
          rbc:"",
          sugar:"",
          mucus:"",
          ph:""
      }

    }),
    computed: {
      patient_name(){
          if(this.appointment){
              return this.appointment.patient.firstname + " " + this.appointment.patient.lastname;
          }
      },
    current_date(){
          return moment().format('MMMM, Do YYYY');
      },
    formateDob(){
          if(this.appointment){
              return moment(this.appointment.patient.dob).format('YYYY-MM-DD');
          }
      }
    },
    methods:{
        save_infection(){
            if(this.$refs.basic_info.validate() && this.$refs.infection.validate()){
                this.loading_dialog = true;
                axios.post('/store_faecal', {patient: this.appointment, info: this.info, faecal: this.faecal}).then(response => {
                    if(response.data.success){
                        this.loading_dialog = false;
                        this.$refs.infection.resetValidation();
                        this.$refs.infection.reset();
                        Toast.fire({
                            icon: 'success',
                            title: response.data.success
                        });
                    }

                    if(response.data.error){
                        this.loading_dialog = false;
                        Swal.fire(
                            'Error',
                            response.data.error,
                            'error'
                        )
                    }
                });
            }else{
                Swal.fire(
                    'No Data',
                    'Input Data before Submission',
                    'info'
                )
            }
        },
        cancel_infection(){
            this.$refs.infection.reset();
            this.$refs.infection.resetValidation();
        },
    }
}
</script>
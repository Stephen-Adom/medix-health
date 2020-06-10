<template>
    <v-container>
            <v-container id="top_section">
                 <v-form ref="first_aid_form">
                <section class="d-flex">
                    <v-img src="/app_asset/medix_full.png" max-width="200"></v-img>
                    <h3 style="padding-top: 63px;" class="ml-10 headline">First Aid Record Report</h3>
                    <v-spacer />
                    <v-btn color="success darken-2" depressed tile style="margin-top: 60px;" class="caption" @click="display_report">Print report</v-btn>
                    <v-btn class="mx-2" tile dark color="red darken-3" depressed @click="goback" style="margin-top: 60px;">
                        <span class="caption">back</span>
                    </v-btn>
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
                            <v-text-field class="pt-0" v-if="patient" :value="patient.job_title" readonly></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" lg="6" class="pb-0" style="border: thin solid rgba(0, 0, 0, 0.12)">
                            <h3 class="subtitle-1">Date of injury or illness</h3>
                            
                            <v-menu ref="injury_menu" v-model="menu1" :close-on-content-click="false" :return-value.sync="aid.injury_date" transition="scale-transition" offset-y min-width="290px">
                                <template v-slot:activator="{ on }">
                                    <v-text-field :rules="dateRules" v-model="aid.injury_date" prepend-icon="mdi-calendar" readonly v-on="on"></v-text-field>
                                </template>
                                <v-date-picker v-model="aid.injury_date" no-title scrollable>
                                <v-spacer></v-spacer>
                                <v-btn text color="primary" @click="menu1 = false">Cancel</v-btn>
                                <v-btn text color="primary" @click="$refs.injury_menu.save(aid.injury_date)">OK</v-btn>
                                </v-date-picker>
                            </v-menu>
                            </v-col>
                            <v-col cols="12" lg="6" class="pb-0" style="border: thin solid rgba(0, 0, 0, 0.12)">
                            <h3 class="subtitle-1">Time of injury or illness</h3>
                            
                            <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false" :nudge-right="40" :return-value.sync="aid.injury_time" transition="scale-transition" offset-y max-width="290px" min-width="290px">
                                <template v-slot:activator="{ on }">
                                <v-text-field :rules="timeRules" v-model="aid.injury_time" prepend-icon="mdi-clock" readonly v-on="on" ></v-text-field>
                                </template>
                                <v-time-picker v-if="menu2" v-model="aid.injury_time" full-width @click:minute="$refs.menu2.save(aid.injury_time)"></v-time-picker>
                            </v-menu>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" lg="6" class="pb-0" style="border: thin solid rgba(0, 0, 0, 0.12)">
                            <h3 class="subtitle-1">Initial reporting date and time</h3>
                            
                            <v-row>
                                <v-col cols="12" lg="6" class="pb-0" style="border-right: thin solid rgba(0, 0, 0, 0.12)">
                                <v-menu ref="menu3" v-model="menu3" :close-on-content-click="false" :return-value.sync="aid.initial_date" transition="scale-transition" offset-y min-width="290px">
                                    <template v-slot:activator="{ on }">
                                    <v-text-field :rules="dateRules" v-model="aid.initial_date" prepend-icon="mdi-calendar" readonly v-on="on" ></v-text-field>
                                    </template>
                                    <v-date-picker v-model="aid.initial_date" no-title scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn text color="primary" @click="menu3 = false">Cancel</v-btn>
                                    <v-btn text color="primary" @click="$refs.menu3.save(aid.initial_date)">OK</v-btn>
                                    </v-date-picker>
                                </v-menu>
                                </v-col>

                                <v-col cols="12" lg="6" class="pb-0">
                                <v-menu ref="menu4" v-model="menu4" :close-on-content-click="false" :nudge-right="40" :return-value.sync="aid.initial_time" transition="scale-transition" offset-y max-width="290px" min-width="290px">
                                    <template v-slot:activator="{ on }">
                                    <v-text-field :rules="timeRules" v-model="aid.initial_time" prepend-icon="mdi-clock" readonly v-on="on" ></v-text-field>
                                    </template>
                                    <v-time-picker v-if="menu4" v-model="aid.initial_time" full-width @click:minute="$refs.menu4.save(aid.initial_time)" ></v-time-picker>
                                </v-menu>
                                </v-col>
                            </v-row>
                            </v-col>
                            <v-col cols="12" lg="6" class="pb-0" style="border: thin solid rgba(0, 0, 0, 0.12)">
                            <h3 class="subtitle-1">Follow-up report date and time</h3>
                            
                            <v-row>
                                <v-col cols="12" lg="6" class="pb-0" style="border-right: thin solid rgba(0, 0, 0, 0.12)">
                                <v-menu ref="menu5" v-model="menu5" :close-on-content-click="false" :return-value.sync="aid.follow_up_date" transition="scale-transition" offset-y min-width="290px">
                                    <template v-slot:activator="{ on }">
                                    <v-text-field :rules="dateRules" v-model="aid.follow_up_date" prepend-icon="mdi-calendar" readonly v-on="on"></v-text-field>
                                    </template>
                                    <v-date-picker v-model="aid.follow_up_date" no-title scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn text color="primary" @click="menu5 = false">Cancel</v-btn>
                                    <v-btn text color="primary" @click="$refs.menu5.save(aid.follow_up_date)">OK</v-btn>
                                    </v-date-picker>
                                </v-menu>
                                </v-col>

                                <v-col cols="12" lg="6" class="pb-0">
                                <v-menu ref="menu6" v-model="menu6" :close-on-content-click="false" :nudge-right="40" :return-value.sync="aid.follow_up_time" transition="scale-transition" offset-y max-width="290px" min-width="290px">
                                    <template v-slot:activator="{ on }">
                                    <v-text-field :rules="timeRules" v-model="aid.follow_up_time" prepend-icon="mdi-clock" readonly v-on="on"></v-text-field>
                                    </template>
                                    <v-time-picker v-if="menu6" v-model="aid.follow_up_time" full-width @click:minute="$refs.menu6.save(aid.follow_up_time)" ></v-time-picker>
                                </v-menu>
                                </v-col>
                            </v-row>
                            </v-col>
                        </v-row>
                        </v-container>
                </v-card>

                <!-- Descriptions -->
                <section class="mt-3">
                    <v-card flat>
                    <h3 class="success--text darken-4 subtitle-1">Description of how injury, exposure or illness occurred <small>( What happened?)</small></h3>

                    <v-textarea outlined name="input-7-4" v-model="aid.cause" :rules="dataRules"></v-textarea>
                    </v-card>

                    <v-card flat>
                    <h3 class="success--text darken-4 subtitle-1">Description of the nature of the injury, exposure or illness occurred <small>( What you see -- signs and symptoms?)</small></h3>

                    <v-textarea outlined name="input-7-4" v-model="aid.details" :rules="dataRules"></v-textarea>
                    </v-card>

                    <v-card flat>
                    <h3 class="success--text darken-4 subtitle-1">Description of the treatment given <small>( What did you do?)</small></h3>

                    <v-textarea outlined name="input-7-4" v-model="aid.treatment" :rules="dataRules"></v-textarea>
                    </v-card>
                </section>

                <!-- Name of witnesses -->
                <section>
                    <v-container>
                    <h3 class="success--text darken-4 subtitle-1">Name of witnesses</h3>
                    <v-row>
                        <v-col cols="12" lg="6" class="pb-0" style="border: thin solid rgba(0, 0, 0, 0.12)">
                        <h3 class="subtitle-1">Name of first witness</h3>
                        <v-text-field class="pt-0" v-model="aid.first_witness" :rules="dataRules"></v-text-field>
                        </v-col>
                        <v-col cols="12" lg="6" class="pb-0" style="border: thin solid rgba(0, 0, 0, 0.12)">
                        <h3 class="subtitle-1">Name of second witness</h3>
                        <v-text-field class="pt-0" v-model="aid.second_witness" :rules="dataRules"></v-text-field>
                        </v-col>
                    </v-row>
                    </v-container>
                </section>

                <!-- Arrangement made -->
                <section>
                    <v-card flat>
                    <h3 class="success--text darken-4 subtitle-1">Arrangement made relating to the worker <small>( return to work/ medical aid/ ambulance/ follow-up )</small></h3>

                    <v-textarea outlined name="input-7-4" v-model="aid.arrangement" :rules="dataRules"></v-textarea>
                    </v-card>
                </section>

                <!-- First Aid attendant details -->
                <section>
                    <v-container>
                    <v-row>
                        <v-col cols="12" lg="12" class="pb-0" style="border: thin solid rgba(0, 0, 0, 0.12)">
                            <h3 class="subtitle-1">Name of first aid attendant</h3>
                            <v-text-field class="pt-0" v-model="aid.attendant" :rules="dataRules"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" justify="center" align="center">
                            <v-btn color="success darken-2" :disabled="submitted" depressed tile style="margin-top: 60px;" @click="submit">Submit</v-btn>
                        </v-col>
                    </v-row>
                    </v-container>
                </section>
                </v-form>
            </v-container>

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
                                <v-text-field class="pt-0" v-if="patient" :value="patient.job_title" readonly></v-text-field>
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

export default {

    data:() => ({
        display_dialog: false,
        submitted: false,
        menu1: false,
        menu2: false,
        menu3: false,
        menu4: false,
        menu5: false,
        menu6: false,
        timemodal: false,
        datemodal: false,
        reasonRules: [
            (v) => !!v || 'Appointment reason is required',
            (v) => (v && v.length > 5) || 'Appointment reason must be more than 5 characters',
        ],
        dateRules: [
            (v) => !!v || 'Date of injury is required',
        ],
        timeRules: [
            (v) => !!v || 'Time of injury is required',
        ],
        dataRules: [
            (v) => !!v || 'Field Information is required',
        ],
        date: moment().format('Do MMMM, YYYY'),
        aid:{
            injury_date:'',
            injury_time:'',
            initial_date:'',
            initial_time:'',
            follow_up_date:'',
            follow_up_time:'',
            first_witness:'',
            second_witness:'',
            arrangement:'',
            attendant:'',
            cause:'',
            details: '',
            treatment: ''
        },
        report: null,
    }),
    filters:{
        formatTime(value){
            return moment(value).format('LT');
        },
        formatDate(value){
            return moment(value).format('dddd, MMMM Do YYYY');
        },
    },
    methods:{
        goback(){
            this.$router.go(-1);
        },
        getDoctorSchedule(){
            axios.get('/api/doctor_schedule').then(response => {
                this.schedules = response.data.schedule;
            });
        },
        getLabSchedule(){
            axios.get('/api/lab_schedule').then(response => {
                this.schedules = response.data.schedule;
            })
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
        submit(){
            if(this.$refs.first_aid_form.validate()){
                axios.post('/api/first_aid_report', {id: this.id, aid:this.aid}).then(response => {
                    if(response.data.success){
                        this.report = response.data.aid;
                        this.$refs.first_aid_form.reset();
                        this.$refs.first_aid_form.resetValidation();
                        Swal.fire(
                            'Success',
                            'First Aid Record Saved',
                            'success'
                        )
                    }
                });
            }else{
                 Swal.fire(
                    'Error Input',
                    'Form Data Entry Incomplete',
                    'error'
                )
            }
        },
        display_report(){
            if(this.report != null){
                this.display_dialog = true;
            }else{
                Swal.fire(
                    'No Data',
                    'Enter Report before submission',
                    'info'
                )
            }
        }
    },
    watch:{

    },
    props:{
        id:[String, Number]
    },
    computed:{
        ...mapGetters(['Patients']),
        patient(){
            return this.Patients.find(patient => patient.id == this.id);
        },
        full_name(){
            if(this.patient){
                return this.patient.title + " " + this.patient.firstname + " " + this.patient.lastname; 
            }
        },
        getImage(){
            if(this.patient.image){
                return '/patient/profiles/' + this.patient.image;
            }else{
                if(this.patient.gender === 'Male'){
                    return `/app_asset/male_avatar.png`
                }else{
                    return `/app_asset/undraw_female_avatar_l3ey.png`
                }
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
    }
}
</script>

<style scoped>

</style>
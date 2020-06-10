<template>
  <v-container fluid>
    <vue-topprogress ref="topProgress" color="#00C851" colorShadow="#00C851" :height="5" errorColor="#CC0000"></vue-topprogress>
        <v-row>
          <v-col cols="12" lg="3" md="3" sm="6">
              <v-container class="pa-0">
                <v-row class="pa-0">
                  <v-col cols="12" v-for="(item, i) in items" :key="i">
                    <v-card :color="item.color" dark link :to="item.link" flat>
                      <div class="d-flex flex-no-wrap justify-space-between">
                        <div class="pt-4">
                          <v-card-title class="subtitle-1 font-weight-bold text-uppercase" v-text="item.title" />
                          <v-card-subtitle v-text="item.subtitle" class="caption"></v-card-subtitle>
                        </div>

                        <v-avatar size="70">
                          <v-icon size="30" v-text="item.icon" />
                        </v-avatar>
                      </div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
          </v-col>
          <v-col cols="12" lg="4" md="4" sm="6">
            <v-container class="pa-0">
              <v-row class="pa-0">
                <v-col cols="12">
                  <v-card style="position: relative;" v-if="$gate.isDoctorORlab()">
                    <v-toolbar color="success darken-2" dark flat>
                      <v-toolbar-title align="" class="subtitle-2 font-weight-light">Pending Appointments</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text class="pa-0">
                      <template v-if="allLimited.length">
                          <v-list two-line dense>
                            <v-list-item v-for="(appointment, i) in allLimited" :key="i">
                              <v-list-item-avatar>
                                <v-avatar :color="getRandomColor(appointment)">
                                  <span class="caption white--text">{{getInitials(appointment)}}</span>
                                </v-avatar>
                              </v-list-item-avatar>
                              <v-list-item-content class="d-flex flex-no-wrap justify-space-between">
                                <div>
                                  <v-list-item-title>{{appointment.patient.firstname}} {{appointment.patient.lastname}}</v-list-item-title>
                                  <v-list-item-subtitle style="font-size: smaller;" class="text-uppercase" v-text="appointment.reason" />
                                </div>
                              </v-list-item-content>
                              <v-list-item-action>
                                <span class="caption pt-2">{{appointment.schedule.schedule_date | formatDate}}</span>
                                <span class="overline" style="letter-spacing: 0 !important;">{{appointment.timing.start_time | formatTime}} - {{appointment.timing.end_time | formatTime}}</span>
                              </v-list-item-action>
                            </v-list-item>
                          </v-list>
                      </template>
                      <template v-else>
                        <div class="pa-4 text-center">
                          <v-responsive>
                            <v-img src="/app_asset/undraw_empty_xct9.svg" width="80%" class="mx-auto"></v-img>
                          </v-responsive>
                          <span class="mt-3 teal--text darken-2 font-weight-bold"><i>No appointment information available</i></span>
                        </div>
                        
                      </template>
                    </v-card-text>
                    <v-card-actions v-if="appointments.length" v-show="$gate.isDoctorORlab()">
                    	<v-btn color="success darken-2" class="ml-auto px-6" depressed small tile @click="goToAppointment">
		                    <span class="subtitle-2 text-lowercase">View All</span>
		                </v-btn>
                    </v-card-actions>
                  </v-card>

                  <v-card style="position: relative;" v-else>
                    <v-toolbar color="success darken-2" dark flat>
                      <v-toolbar-title align="" class="subtitle-2 font-weight-light">Available Appointments</v-toolbar-title>
                      <v-spacer />
                      <v-tooltip top>
                        <template v-slot:activator="{on}">
                          <v-btn icon color="white" @click="open_appointment_dialog" v-on="on" v-if="!allLimitedCreatedAppointment.length < 4">
                            <v-icon>mdi-collapse-all</v-icon>
                          </v-btn>
                        </template>
                        <span class="caption font-weight-regular">view all</span>
                      </v-tooltip>
                      
                    </v-toolbar>
                    <v-card-text class="pa-0">
                      <template v-if="allLimitedCreatedAppointment.length">
                          <v-list two-line dense v-for="appointment in allLimitedCreatedAppointment" :key="appointment.id">
                            <v-list-item>
                              <v-list-item-avatar>
                                <v-avatar>
                                  <v-img :src="getAppointmentImg(appointment)"></v-img>
                                </v-avatar>
                              </v-list-item-avatar>
                              <v-list-item-content class="d-flex flex-no-wrap justify-space-between">
                                <div>
                                  <v-list-item-title class="subtitle-2 font-weight-bold">{{appointment.user.title}} {{appointment.user.firstname}} {{appointment.user.lastname}}</v-list-item-title>
                                  <v-list-item-subtitle style="caption mt-1">Patient: {{appointment.patient.title}} {{appointment.patient.lastname}}</v-list-item-subtitle>
                                </div>
                              </v-list-item-content>
                              <v-list-item-action>
                                <span class="caption pt-2">{{appointment.schedule.schedule_date | formatDate}}</span>
                                <span class="overline" style="letter-spacing: 0 !important;">{{appointment.timing.start_time | formatTime}}</span>
                              </v-list-item-action>
                            </v-list-item>
                          </v-list>
                      </template>
                      <template v-else>
                        <div class="pa-4 text-center">
                          <v-responsive>
                            <v-img src="/app_asset/undraw_empty_xct9.svg" width="80%" class="mx-auto"></v-img>
                          </v-responsive>
                          <span class="mt-3 teal--text darken-2 font-weight-bold"><i>No appointment information available</i></span>
                        </div>
                      </template>
                    </v-card-text>
                  </v-card>

                </v-col>
              </v-row>
            </v-container>
          </v-col>
          <v-col cols="12" lg="5" md="5" sm="10">
            <v-card class="pa-3" outlined>
              <v-card-title class="info darken-2" dark elevation="10">
                <span class="font-weight-light subtitle-2 white--text">All Appointments Analysis</span>  
              </v-card-title>
              <v-card-text>
                <section v-if="appointment_accepted === 0 && appointment_pending === 0 && appointment_complete === 0" class="pa-3 d-flex justify-center ma-3">
                  <span class="subtitle-2 font-weight-bold font-italic">No Dataset Available</span>  
                </section>
                <section v-else>
                  <line-chart :chart-data="datacollection" :height="300"></line-chart>
                </section>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <template>
            <v-col cols="12" md="12" class="hidden-sm-and-down">
              <v-card class="pa-4">
                <v-toolbar class="teal darken-1" dark elevation="15">
                  <v-toolbar-title>
                    <span class="font-weight-bold subtitle-2">Your Schedules</span>  
                  </v-toolbar-title>
                  <v-spacer />
                  <span>
                    <v-icon>mdi-calendar-week</v-icon>
                  </span>  
                </v-toolbar>
                <v-card-text>
                    <v-sheet height="64">
                      <v-toolbar flat color="white">
                        <v-btn class="mr-4" outlined depressed tile color="success darken-2" @click="setToday">
                          <span class="subtitle-2">Today</span>  
                        </v-btn>
                        <v-btn fab text small color="grey darken-2" @click="prev">
                          <v-icon small>mdi-chevron-left</v-icon>
                        </v-btn>
                        <v-btn fab text small color="grey darken-2" @click="next">
                          <v-icon small>mdi-chevron-right</v-icon>
                        </v-btn>
                        <v-toolbar-title>{{ title }}</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-menu bottom right>
                          <template v-slot:activator="{ on }">
                            <v-btn color="success darken-2" dark v-on="on" outlined depressed tile>
                              <span class="subtitle-2">{{ typeToLabel[type] }}</span>
                              <v-icon right>mdi-menu-down</v-icon>
                            </v-btn>
                          </template>
                          <v-list>
                            <v-list-item @click="type = 'day'">
                              <v-list-item-title>Day</v-list-item-title>
                            </v-list-item>
                            <v-list-item @click="type = 'week'">
                              <v-list-item-title>Week</v-list-item-title>
                            </v-list-item>
                            <v-list-item @click="type = 'month'">
                              <v-list-item-title>Month</v-list-item-title>
                            </v-list-item>
                            <v-list-item @click="type = '4day'">
                              <v-list-item-title>4 days</v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </v-menu>
                      </v-toolbar>
                    </v-sheet>
                    <v-sheet height="600">
                      <v-calendar
                        ref="calendar"
                        v-model="focus"
                        color="success darken-1"
                        :event-height="20"
                        :event-margin-bottom="5"
                        :events="events"
                        :event-color="getEventColor"
                        :now="today"
                        :type="type"
                        @click:event="showEvent"
                        @click:more="viewDay"
                        @click:date="viewDay"
                        @change="updateRange"
                      ></v-calendar>
                      <v-menu v-model="selectedOpen" :close-on-content-click="false" :activator="selectedElement" offset-x>
                        <v-card color="grey lighten-4" min-width="350px" flat>
                          <v-toolbar :color="selectedEvent.color" dark flat>
                            <v-btn icon>
                              <v-icon size="18">mdi-pencil</v-icon>
                            </v-btn>
                            <v-toolbar-title class="subtitle-1 font-weight-bold" v-html="selectedEvent.name"></v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-btn icon>
                              <v-icon size="18">mdi-dots-vertical</v-icon>
                            </v-btn>
                          </v-toolbar>
                          <v-card-text>
                            <v-row>
                              <v-col cols="3">
                                <v-avatar>
                                  <v-img src="/app_asset/image placeholder.png" /> 
                                </v-avatar>
                              </v-col>
                              <v-col cols="9" class="d-flex flex-column">
                                <span class="subtitle-2 font-italic font-weight-bold black--text">{{selectedEvent.details}}</span>
                                <span class="caption font-weight-regular grey--text">Job Title: {{selectedEvent.job}}</span>
                                <span class="caption font-weight-bold font-weight-bold black--text">Specialist : {{selectedEvent.specialist}}</span>
                              </v-col>
                            </v-row>
                          </v-card-text>
                          <v-divider />
                          <v-card-actions class="pa-1">
                            <v-btn text color="secondary" @click="selectedOpen = false">
                              <span class="caption">Cancel</span>  
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-menu>
                    </v-sheet>
                </v-card-text>
              </v-card>
            </v-col>
          </template>
        </v-row>

        <v-dialog v-model="loading_dialog" hide-overlay persistent width="300">
        <v-card color="success darken-2" dark>
          <v-card-text>
            <span class="subtitle-2 font-weight-light white--text">Loading data. Please wait...</span>
            <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>

        <v-dialog v-model="all_appointment_dialog" scrollable max-width="500px">
          <v-card>
            <v-card-title>All Appointments</v-card-title>
            <v-divider></v-divider>
            <v-card-text style="height: 300px;">
              <template v-if="allCreatedAppointment.length">
                  <v-list two-line dense v-for="appointment in allCreatedAppointment" :key="appointment.id">
                    <v-list-item>
                      <v-list-item-avatar>
                        <v-avatar>
                          <v-img :src="getAppointmentImg(appointment)"></v-img>
                        </v-avatar>
                      </v-list-item-avatar>
                      <v-list-item-content class="d-flex flex-no-wrap justify-space-between">
                        <div>
                          <v-list-item-title class="caption font-weight-bold">{{appointment.user.title}} {{appointment.user.firstname}} {{appointment.user.lastname}}</v-list-item-title>
                          <v-list-item-subtitle style="font-size: smaller;" class="text-uppercase">{{appointment.reason}}</v-list-item-subtitle>
                          <v-list-item-subtitle style="font-size: smaller;" class="text-lowercase teal--text darken-1">Status: {{formatAppointmentStatus(appointment)}}</v-list-item-subtitle>
                        </div>
                      </v-list-item-content>
                      <v-list-item-action>
                        <span class="caption pt-2">{{appointment.schedule.schedule_date | formatDate}}</span>
                        <span class="overline" style="letter-spacing: 0 !important;">{{appointment.timing.start_time | formatTime}}</span>
                      </v-list-item-action>
                    </v-list-item>
                  </v-list>
              </template>
              <template v-else>
                  <div class="pa-4 text-center">
                    <v-responsive>
                      <v-img src="/app_asset/undraw_empty_xct9.svg" width="80%" class="mx-auto"></v-img>
                    </v-responsive>
                    <span class="mt-3 teal--text darken-2 font-weight-bold"><i>No appointment information available</i></span>
                  </div>
                  
                </template>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn color="info darken-2" dark depressed tile class="px-4" @click="all_appointment_dialog = false">
                <span class="caption">Close</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
</template>

<script>
// @ is an alias to /src
import {mapGetters, mapActions} from 'vuex';
import LineChart from '../LineChart';
import store from '../store';
import moment from 'moment';

export default {
  name: 'Home',
  components: {
    LineChart,
  },
  data: () => ({
      today: moment().format('YYYY-MM-DD'),
      focus: '',
      type: 'month',
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days',
      },
      start: null,
      end: null,
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [],
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],


    appointment_pending:null,
    appointment_complete: null,
    appointment_accepted: null,
    appointment_canceled: null,
    notifications:[],
    date: new Date().toISOString().substr(0, 10),
    loading_dialog: false,
    all_appointment_dialog: false,
    datacollection: null,
    header: true,
  	items: [
      { color: 'red darken-2', icon: 'mdi-heart-pulse', title: 'Vitals', subtitle: 'Calculate the body\'s most basic functions', link: '/vitals' },
      { color: 'info darken-2', icon: 'mdi-file-table-outline', title: 'Reports', subtitle: 'Record\'s of Patient\'s Medical Information', link:'/reports' },
      { color: 'warning darken-1', icon: 'mdi-account-group', title: 'Patients', subtitle: 'Management of Patient\'s Information ', link: '/patients' },
    ],
    appointments: [],
  }),
  watch:{
      allCreatedAppointment(){
        if(this.allCreatedAppointment.length > 0){
          this.loading_dialog = false;
          this.all_appointment_dialog = true;
        }
      },
  },
  computed: {
    title () {
        const { start, end } = this
        if (!start || !end) {
          return ''
        }

        const startMonth = this.monthFormatter(start)
        const endMonth = this.monthFormatter(end)
        const suffixMonth = startMonth === endMonth ? '' : endMonth

        const startYear = start.year
        const endYear = end.year
        const suffixYear = startYear === endYear ? '' : endYear

        const startDay = start.day + this.nth(start.day)
        const endDay = end.day + this.nth(end.day)

        switch (this.type) {
          case 'month':
            return `${startMonth} ${startYear}`
          case 'week':
          case '4day':
            return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`
          case 'day':
            return `${startMonth} ${startDay} ${startYear}`
        }
        return ''
      },
      monthFormatter () {
        return this.$refs.calendar.getFormatter({
          timeZone: 'UTC', month: 'long',
        })
      },

    ...mapGetters(['allLimited', 'all_Accepted_Appointment', 'allLimitedCreatedAppointment', 'allCreatedAppointment']),

      
    },
    filters:{
        formatDate(value){
            return moment(value).format('ddd, MMMM Do');
        },
        formatTime(value){
            return moment(value).format('LT');
        }
    },
    mounted () {
      this.$refs.calendar.checkChange();
        this.fillData();
        this.fetchAllLimitedCreatedAppointment();

        this.$refs.topProgress.start();
      // Use setTimeout for demo
        setTimeout(() => {
          this.$refs.topProgress.done();
        }, 2000);
    },
    created(){
      this.fetchLimitedAppointment();
      this.fetch_Accepted_Appointment();
      
    },
    methods: {

       viewDay ({ date }) {
        this.focus = date
        this.type = 'day'
      },
      getEventColor (event) {
        return event.color
      },
      setToday () {
        this.focus = this.today
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
      showEvent ({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event
          this.selectedElement = nativeEvent.target
          setTimeout(() => this.selectedOpen = true, 10)
        }

        if (this.selectedOpen) {
          this.selectedOpen = false
          setTimeout(open, 10)
        } else {
          open()
        }

        nativeEvent.stopPropagation()
      },
      updateRange ({ start, end }) {
        var events = [];
        axios.get('/api/all_created_appointments').then(response => {
              events = response.data.success;
              if(events.length){
                this.events = events.map(event => {
                  return {
                    specialist: event.user.title + ' ' + event.user.firstname + ' ' + event.user.lastname,
                    name: event.reason,
                    details: 'Appointment for ' + ' ' + event.patient.title + ' ' + event.patient.firstname + ' ' + event.patient.lastname,
                    job: event.patient.job_title,
                    start: moment(event.scheduled_date).format('YYYY-MM-DD') + ' ' + moment(event.scheduled_time).format('HH:mm'),
                    end: moment(event.scheduled_date).format('YYYY-MM-DD') + ' ' + moment(event.timing.end_time).format('HH:mm'),
                    color: this.colors[this.rnd(0, this.colors.length - 1)],
                  }
                })
              }
          })
        const min = new Date(`${start.date}T00:00:00`)
        const max = new Date(`${end.date}T23:59:59`)
        const days = (max.getTime() - min.getTime()) / 86400000
        const eventCount = this.rnd(days, days + 20)

        this.start = start;
        this.end = end;
      },
      nth (d) {
        return d > 3 && d < 21
          ? 'th'
          : ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][d % 10]
      },
      rnd (a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a
      },
      formatDate (a, withTime) {
        return withTime
          ? `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()} ${a.getHours()}:${a.getMinutes()}`
          : `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()}`
      },

      ...mapActions(['fetch_Accepted_Appointment','fetchLimitedAppointment', 'fetch_Accepted_Appointment', 'fetchAllLimitedCreatedAppointment', 'fetchAllCreatedAppointment']),

      fillData (){
        axios.get('/api/all_appointments_analysis').then(response => {
            this.appointment_pending = response.data.pending;
            this.appointment_complete = response.data.completed;
            this.appointment_accepted = response.data.accepted;
            this.appointment_canceled = response.data.canceled;

            this.datacollection = {
              labels: ['Accepted','Pending', 'Complete', 'canceled'],
              datasets: [
                {
                  label: ['#0099CC', '#FF8800', '#007E33', '#CC0000'],
                  backgroundColor: ['#0099CC', '#FF8800', '#007E33', '#CC0000'],
                  data: [ this.appointment_accepted, this.appointment_pending, this.appointment_complete, this.appointment_canceled]
                }
              ]
            }
        });
      },

      goToAppointment(){
        this.$router.push({name: 'appointment'})
      },
      getInitials(appointment){
        var first = appointment.patient.firstname.slice(0, 1).toUpperCase();
        var last = appointment.patient.lastname.slice(0, 1).toUpperCase();
        var ini = first + '' + last;
        return ini;
      },
      getRandomColor(appointment){
        if(appointment){
          var colors = ['red darken-2', 'success darken-2', 'warning darken-1', 'primary']
          var item =  colors[ Math.floor( Math.random(0,1) * colors.length ) ];
          return item
        }
      },
      getAppointmentImg(appointment){
        if(appointment.user.role_id === 1){
          return '/app_asset/doctor.jpg'
        }else if(appointment.user.role_id === 4){
          return '/app_asset/lab tech.jpg'
        }
      },
      open_appointment_dialog(){
        this.loading_dialog = true;
        this.fetchAllCreatedAppointment();
        if(this.allCreatedAppointment.length){
          this.loading_dialog = false;
          this.all_appointment_dialog = true;
        }else{
          this.loading_dialog = false;
            Toast.fire({
                icon: 'info',
                title: 'No Available Appointment(s)'
            });
        }
        
      },
      formatAppointmentStatus(appointment){
        if(appointment.completed === 1){
          return 'Completed';
        }else{
          return 'pending';
        }
      }
     
    }
}
</script>

<style scoped>

</style>

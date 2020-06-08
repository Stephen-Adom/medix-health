<template>
    <v-container class="mt-4">
        <vue-topprogress ref="topProgress" color="#00C851" colorShadow="#00C851" height="5" errorColor="#CC0000"></vue-topprogress>
        <v-card class="pa-3" outlined>
            <v-container>
                <v-toolbar flat>
                    <v-toolbar-title class="subtitle-1">Hello, <span class="font-weight-bold" v-if="getUser">{{getUser.title}} {{getUser.firstname}} {{getUser.lastname}}</span></v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn rounded elevation="15" class="ma-2 success darken-2 px-5" depressed @click.stop="dialog = true">
                        <v-icon size="18" left>mdi-calendar-month</v-icon>
                        <span class="caption">Scheduled Events</span>
                    </v-btn>
                </v-toolbar>
                <v-divider />
                <v-row class="mt-3">
                    <v-col cols="12" md="5"> 
                        <div>
                            <span class="subtitle-1 font-weight-bold">Your Available Day:</span>
                            <v-date-picker v-model="date" elevation="10" full-width class="mt-4" show-current:true color="info darken-2"></v-date-picker>
                        </div>
                        <div class="mt-6">
                            <span class="subtitle-1 font-weight-bold">Available Timings:</span>
                        <v-form ref="scheduleform" v-model="valid">
                            <v-row >
                                <v-col cols="12" md="6">
                                    <v-dialog ref="starttimedialog" v-model="startTimeModal" :return-value.sync="starttime" persistent width="290px">
                                        <template v-slot:activator="{ on }">
                                            <v-text-field label="Start Time" outlined v-on="on" v-model="starttime" :rules="timedRules"></v-text-field>
                                        </template>
                                        <v-time-picker v-if="startTimeModal" v-model="starttime" full-width>
                                        <v-spacer></v-spacer>
                                        <v-btn text color="primary" @click="startTimeModal = false">Cancel</v-btn>
                                        <v-btn text color="primary" @click="$refs.starttimedialog.save(starttime)">OK</v-btn>
                                        </v-time-picker>
                                    </v-dialog>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-dialog ref="endtimedialog" v-model="endTimeModal" :return-value.sync="endtime" persistent width="290px">
                                        <template v-slot:activator="{ on }">
                                            <v-text-field label="End Time" outlined v-on="on" v-model="endtime" :rules="timedRules"></v-text-field>
                                        </template>
                                        <v-time-picker v-if="endTimeModal" v-model="endtime" full-width>
                                        <v-spacer></v-spacer>
                                        <v-btn text color="primary" @click="endTimeModal = false">Cancel</v-btn>
                                        <v-btn text color="primary" @click="$refs.endtimedialog.save(endtime)">OK</v-btn>
                                        </v-time-picker>
                                    </v-dialog>
                                </v-col>
                            </v-row>
                        </v-form>
                        </div>
                        <div>
                            <v-btn class="success darken-2 px-7" large outlined elevation="15"  dark block @click="submitSchedule" rounded>
                                <span class="caption">Add Schedule</span>
                            </v-btn>
                        </div>
                    </v-col>
                    <v-col cols="12" md="7">
                        <section>
                            <v-card outlined style="height: 100vh;" id="schedule_card" class="pa-4">
                                <v-toolbar class="success darken-2" dark elevation="15" id="schedule_bar">
                                    <v-tooltip top>
                                        <template v-slot:activator="{on}">
                                            <v-btn icon color="white" @click="open_schedules" v-on="on">
                                                <v-icon>mdi-history</v-icon>
                                            </v-btn>
                                        </template>
                                        <span class="caption">Previous Schedules</span>
                                    </v-tooltip>
                                    
                                    <v-spacer/>
                                    <v-toolbar-title>
                                        <span class="font-weight-thin subtitle-2">Your Available Schedules</span>
                                    </v-toolbar-title>
                                </v-toolbar>
                                <v-card-text class="mt-2">
                                    <template v-if="allSchedules.length">
                                        <v-row v-for="schedule in allSchedules" :key="schedule.id">
                                            <v-col cols="12" >
                                                <div class="d-flex justify-space-between">
                                                    <span class="font-weight-bold subtitle-2 grey--text">
                                                        <v-icon class="mr-1" color="success darken-2">mdi-calendar-today</v-icon> 
                                                        {{schedule.schedule_date | formatDate}}
                                                    </span>

                                                    <span style="position: relative !important; bottom: 10px !important;">
                                                        <v-btn icon color="red darken-3" @click="delete_schedule(schedule)">
                                                            <v-icon size="20">mdi-close</v-icon>
                                                        </v-btn>
                                                    </span>
                                                </div>
                                                
                                                <v-divider />
                                                <div>
                                                    <template v-for="(time, index) in schedule.timings">
                                                        <v-chip class="ma-1" :color="getTimeColor(time)" :key="time.id" rounded pill close dark @click:close="deleteTime(time.id, schedule.id, index)">
                                                            <span class="caption">{{time.start_time | formatTime}} - {{time.end_time | formatTime}}</span>           
                                                        </v-chip>
                                                    </template>    
                                                </div>
                                            </v-col>
                                        </v-row>
                                    </template>
                                    <template v-else>
                                        <v-responsive>
                                            <v-img src="/app_asset/undraw_time_management_30iu.svg" width="70%" class="mx-auto"></v-img>
                                        </v-responsive>
                                        <v-card class="pa-4 primary darken-1 text center mt-6" dark flat>
                                            <span class="text-center"><i>You have no schedule(s) available</i></span>    
                                        </v-card>
                                    </template>
                                </v-card-text>
                            </v-card>
                        </section>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>

        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-card>
                <v-toolbar dark color="success darken-2">
                    <v-btn icon dark @click="dialog = false">
                        <v-icon size="18">mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>
                        <span class="subtitle-2 font-weight-light">Your Calendar Schedule Overview</span>
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn dark text @click="dialog = false">Close</v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-card-text class="px-5">
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
            </v-dialog>

            <v-dialog v-model="shedules_dialog" width="600px">
                <v-card>
                    <v-card-title>
                    <span class="subtitle-1 font-weight-bold">Your Previous Schedules</span>
                    </v-card-title>
                    <v-divider />
                    <v-card-text>
                         <template v-if="previous_schedules.length">
                            <v-row v-for="schedule in previous_schedules" :key="schedule.id">
                                <v-col cols="12" >
                                    <div class="d-flex justify-space-between">
                                        <span class="font-weight-bold subtitle-2 grey--text">
                                            <v-icon class="mr-1" color="success darken-2">mdi-calendar-today</v-icon> 
                                            {{schedule.schedule_date | formatDate}}
                                        </span>

                                        <span style="position: relative !important; bottom: 10px !important;">
                                            <v-btn icon color="red darken-3" @click="delete_previous_schedule(schedule)">
                                                <v-icon size="20">mdi-close</v-icon>
                                            </v-btn>
                                        </span>
                                    </div>
                                    
                                    <v-divider />
                                    <div>
                                        <template v-for="(time, index) in schedule.timings">
                                            <v-chip class="ma-1" color="info darken-1" v-if="time.available === true" :key="time.id" rounded pill close @click:close="deleteTime(time.id, schedule.id, index)">
                                                <span class="caption">{{time.start_time | formatTime}} - {{time.end_time | formatTime}}</span>           
                                            </v-chip>
                                            <v-chip class="ma-1" color="info darken-1" v-else :key="time.id" rounded pill close @click:close="deleteTime(time.id, schedule.id, index)">
                                                <span class="caption">{{time.start_time | formatTime}} - {{time.end_time | formatTime}}</span>           
                                            </v-chip>
                                        </template>    
                                    </div>
                                </v-col>
                            </v-row>
                        </template>
                        <template v-else>
                            <v-responsive>
                                <v-img src="app_asset/undraw_no_data_qbuo.svg" width="70%" class="mx-auto"></v-img>
                            </v-responsive>
                            <v-card class="pa-4 primary darken-1 text center" dark oulined>
                                <span class="text-center"><i>You have no schedule(s) available</i></span>    
                            </v-card>
                        </template>
                    </v-card-text>
                    <v-divider />
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="warning darken-1" class="px-4" dark depressed tile @click="shedules_dialog = false">
                        <span class="caption">Close</span>
                    </v-btn>
                    <v-btn color="red darken-3" class="px-4" dark depressed tile @click="clear_all">
                        <span class="caption">Clear all</span>
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>

                <v-dialog v-model="loading_dialog" hide-overlay persistent width="300">
                    <v-card color="primary" dark>
                        <v-card-text>
                            <span class="caption font-italic">Loading schedules...</span>
                            <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
                        </v-card-text>
                    </v-card>
                </v-dialog>
    </v-container>
</template>

<script>

import {Toast} from '../app';
import { mapGetters, mapActions } from 'vuex';


export default {
    data:() => ({
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

        loading_dialog: false,
        shedules_dialog: false,
        dialog:false,
        valid: false,
        starttime: null,
        endtime: null,
        endTimeModal: false,
        startTimeModal: false,
        date: new Date().toISOString().substr(0, 10),
        timedRules: [
            (v) => !!v || 'Date is required',
        ],
        previous_schedules:[],
    }),
      watch:{

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
        ...mapGetters(['allSchedules', 'allAcceptedAppointment', 'getUser']),

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

    },
    updated(){
        this.$refs.calendar.checkChange();
    },
    methods:{
        ...mapActions(['fetchScdedules', 'fetchUser']),
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
            axios.get('/all_created_appointments_staff').then(response => {
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
        resetForm(){
            this.fetchScdedules();
            this.starttime = null;
            this.endtime = null;
            this.$refs.scheduleform.reset();
            this.$refs.scheduleform.resetValidation();
        },
        submitSchedule(){
            if(this.$refs.scheduleform.validate()){
                this.loading_dialog = true;
                axios.post('/add_schedule', {date:this.date, start:this.starttime, end:this.endtime}).then(response =>{
                    if(response.data.error){
                        this.loading_dialog = false;
                        Swal.fire(
                            'Date Required',
                            'Schedule date required.',
                            'Error'
                        )
                    }
                    if(response.data.time_error){
                        this.loading_dialog = false;
                        Swal.fire(
                            'Time Exist',
                            'Time entered already exist for the date selected.',
                            'Error'
                        )
                    }
                    if(response.data.success_time){
                        this.loading_dialog = false;
                        this.resetForm();
                        Toast.fire({
                            icon: 'success',
                            title: 'New time add to the date scheduled'
                        });
                    }
                    if(response.data.success){
                        this.loading_dialog = false;
                        this.resetForm();
                        Toast.fire({
                            icon: 'success',
                            title: 'New Schedule created'
                        });
                    }
                })
            }
        },
        deleteTime(id, schedule, index){
            this.allSchedules.forEach(schedule => {
                schedule.timings.splice(index, 1);
            });
            axios.post('/delete_time', {schedule:schedule, id:id}).then(response => {
                if(response.data.success){
                    this.fetchScdedules();
                }
            })
        },
        open_schedules(){
            this.loading_dialog = true;
            axios.get('/fetch_previous_schedules').then(response => {
                this.previous_schedules = response.data;
                this.loading_dialog = false;
                this.shedules_dialog = true;
            });
        },
        clear_all(){
            this.previous_schedules = [];
            axios.post('/clear_all_previous_schedules').then(response => {
                if(response.data.success){
                    Toast.fire({
                        icon: 'success',
                        title: 'ALL Previous Schedules Removed'
                    });
                }
                if(response.data.no_schedules){
                    Toast.fire({
                        icon: 'info',
                        title: 'No Schedule(s) Available'
                    });
                }
            })
        },
        delete_schedule(schedule){
            var index = this.allSchedules.indexOf(schedule);
            this.allSchedules.splice(index, 1);
            axios.post('/delete_schedule', {id: schedule.id}).then(response => {
                if(responde.data.success){
                    Toast.fire({
                        icon: 'success',
                        title: 'Schedule Removed'
                    });
                }
            })

        },
        delete_previous_schedule(schedule){
            var index = this.previous_schedules.indexOf(schedule);
            this.previous_schedules.splice(index, 1);
            axios.post('/delete_schedule', {id: schedule.id}).then(response => {
                if(responde.data.success){
                    Toast.fire({
                        icon: 'success',
                        title: 'Schedule Removed'
                    });
                }
            })
        },
        getTimeColor(time){
            if(time.available === 1){
                return 'info darken-2'
            }else{
                return 'red darken-3'
            }
        }
    },
    created(){
        this.fetchScdedules();
        this.fetchUser();
    },
    mounted(){
        this.$refs.topProgress.start();
        setInterval(() => {
            this.$refs.topProgress.done();
        }, 1000);
    }

}
</script>

<style scoped>
#schedule_card{
    position: relative !important;
    overflow-y: auto;
}
</style>



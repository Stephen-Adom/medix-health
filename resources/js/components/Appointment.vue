<template>
    <v-container>
        <v-snackbar top right v-model="snackbar" :timeout="timeout" color="success darken-2">{{ text }}</v-snackbar>
        <v-row class="px-5">
            <section>
                <span class="subtitle-1 black--text font-weight-bold ma-3 mt-2">Appointments</span>
                <v-chip class="ma-2 px-3 py-2" small color="success darken-2" dark outlined>
                    <v-icon left>mdi-server-plus</v-icon>
                    <span class="caption">Medix Application</span>
                </v-chip>
                <v-chip class="ma-2 px-3 py-2" small color="warning darken-1" dark outlined @click="my_account">
                    <v-icon left size="18">mdi-account</v-icon>
                    <span class="caption" v-if="getUser">{{getUser.title}} {{getUser.firstname}} {{getUser.lastname}}</span>
                </v-chip>
                <v-btn rounded small depressed class="info darken-2 ma-2 px-5" :to="{name: 'new_appointment'}">
                    <v-icon left size="18">mdi-account-plus</v-icon>
                    <span class="caption">new appointment</span>
                </v-btn>
            </section>
            <v-spacer />

            <v-menu transition="slide-x-transition" bottom right>
                <template v-slot:activator="{ on }">
                    <v-chip class="ma-2 px-5 py-2" small outlined color="success darken-2" dark v-on="on">
                        <span class="caption">sort by</span>
                        <v-icon right size="15">mdi-chevron-down</v-icon>
                    </v-chip>
                </template>

                <v-list>
                    <v-list-item @click="TodayAppointment">
                        <v-list-item-title class="caption">Today</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="UpcomingAppointment">
                        <v-list-item-title class="caption">Upcoming</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="CanceledAppointment">
                        <v-list-item-title class="caption">Canceled</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="CompletedAppointment">
                        <v-list-item-title class="caption">Completed</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-row>
        <v-container>
            <v-card class="pa-3" flat>
                <v-row>
                <v-col cols="6" md="3">
                    <v-card flat link>
                        <v-row>
                            <v-col cols="4">
                                 <v-progress-circular :rotate="270" :size="70" value="70" :width="10" color="info darken-2">
                                     <span class="subtitle-2 font-weight-bold">{{count_today_appointments}}</span>
                                </v-progress-circular>
                            </v-col>
                            <v-col cols="8" class="d-flex flex-column">
                                <v-badge color="info darken-2" content="+25%" value="+25%" inline tile>
                                    <span class="subtitle-2 font-weight-bold"><a @click="TodayAppointment">Appointments</a></span>
                                </v-badge>
                                <div class="d-flex mt-1">
                                    <span class="title font-weight-bold">{{count_today_appointments}}</span>
                                    <span class="subtitle-2 font-weight-bold grey--text mt-1 ml-1">today</span>
                                </div>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col cols="6" md="3">
                    <v-card flat>
                        <v-row>
                            <v-col cols="4">
                                 <v-progress-circular :rotate="180" :size="70" value="70" :width="10" color="warning darken-1">
                                     <span class="subtitle-2 font-weight-bold">{{count_upcoming_appointments}}</span>
                                </v-progress-circular>
                            </v-col>
                            <v-col cols="8" class="d-flex flex-column">
                                <v-badge color="warning darken-1" content="+25%" value="+25%" tile inline>
                                    <span class="subtitle-2 font-weight-bold"><a @click="UpcomingAppointment">Upcoming</a> </span>
                                </v-badge>
                                <div class="d-flex mt-1">
                                    <span class="title font-weight-bold">{{count_upcoming_appointments}}</span>
                                    <span class="subtitle-2 font-weight-bold grey--text mt-1 ml-1">upcoming</span>
                                </div>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col cols="6" md="3">
                    <v-card flat>
                        <v-row>
                            <v-col cols="4">
                                 <v-progress-circular :rotate="90" :size="70" value="80" :width="10" color="red darken-3">
                                     <v-icon color="red darken-3">mdi-shield-alert</v-icon>
                                </v-progress-circular>
                            </v-col>
                            <v-col cols="8" class="d-flex flex-column">
                                <v-badge color="red darken-3" content="+25%" value="+25%" tile inline>
                                    <span class="subtitle-2 font-weight-bold"><a @click="CanceledAppointment">Canceled</a></span>
                                </v-badge>
                                <div class="d-flex mt-1">
                                    <span class="title font-weight-bold">{{count_canceled_appointments}}</span>
                                    <span class="subtitle-2 font-weight-bold grey--text mt-1 ml-1">canceled</span>
                                </div>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col cols="6" md="3">
                    <v-card flat>
                        <v-row>
                            <v-col cols="4">
                                 <v-progress-circular :rotate="0" :size="70" value="70" :width="10" color="success darken-2">
                                     <v-icon color="success darken-2">mdi-check-all</v-icon>
                                </v-progress-circular>
                            </v-col>
                            <v-col cols="8" class="d-flex flex-column">
                                <v-badge color="success darken-2" content="+25%" value="+25%" tile inline>
                                    <span class="subtitle-2 font-weight-bold"><a @click="CompletedAppointment">Completed</a></span>
                                </v-badge>
                                <div class="d-flex mt-1">
                                    <span class="title font-weight-bold">{{count_completed_appointments}}</span>
                                    <span class="subtitle-2 font-weight-bold grey--text mt-1 ml-1">completed</span>
                                </div>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
            </v-card>
        </v-container>

        <v-container class="mt-3">
            <router-view :key="$router.path" />
        </v-container>
    </v-container>
</template>

<script>

import {bus} from '../app';
import {mapGetters, mapActions} from 'vuex';

export default {
    data: () => ({
        title:'Today',
        snackbar: false,
        text: 'Appointment accepted',
        timeout: 2000,
    }),
    created(){
        this.fetchTodayAppointment();
        this.fetchUpcomingAppointment();
        this.fetchCanceledAppointment();
        this.fetchCompletedAppointment();
    },
    updated(){
        this.fetchTodayAppointment();
        this.fetchUpcomingAppointment();
        this.fetchCanceledAppointment();
        this.fetchCompletedAppointment();
    },
    filters:{
        formatDate(value){
            return moment(value).format('YY-MMM-Do');
        },
        formatTime(value){
            return moment(value).format('LT');
        }
    },
    methods:{
        ...mapActions(['fetchAppointment', 'fetchCompletedAppointment', 'fetchCurrentAppointment', 'fetchTodayAppointment', 'fetchUpcomingAppointment', 'fetchCanceledAppointment', 'fetchCompletedAppointment']),

        my_account(){
            this.$router.push({name: 'settings'});
        },

        UpcomingAppointment(){
            this.$router.push({name: 'upcoming_appointment'});
        },

        TodayAppointment(){
            this.$router.push({name: 'today_appointment'});
        },

        CanceledAppointment(){
            this.$router.push({name: 'canceled_appointment'});
        },

        CompletedAppointment(){
            this.$router.push({name: 'completed_appointment'});
        }
    },
    computed:{
        ...mapGetters(['totalAppointment', 'totalCompletedAppointment', 'totalCurrent', 'getUser', 'today_appointments', 'upcoming_appointments', 'count_today_appointments', 'count_upcoming_appointments', 'count_canceled_appointments', 'count_completed_appointments']),
    },
}
</script>

<style scoped>
.v-card.router-link-exact-active{
    background-color: teal !important;
}

</style>





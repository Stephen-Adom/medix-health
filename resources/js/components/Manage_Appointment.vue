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
                    <v-list-item @click="manageTodayAppointment">
                        <v-list-item-title class="caption">Today</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="manageUpcomingAppointment">
                        <v-list-item-title class="caption">Upcoming</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="manageCanceledAppointment">
                        <v-list-item-title class="caption">Canceled</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="manageCompletedAppointment">
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
                                     <span class="subtitle-2 font-weight-bold">{{today_appointments_total}}</span>
                                </v-progress-circular>
                            </v-col>
                            <v-col cols="8" class="d-flex flex-column">
                                <v-badge color="info darken-2" content="+25%" value="+25%" inline tile>
                                    <span class="subtitle-2 font-weight-bold"><a @click="manageTodayAppointment">Appointments</a></span>
                                </v-badge>
                                <div class="d-flex mt-1">
                                    <span class="title font-weight-bold">{{today_appointments_total}}</span>
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
                                     <span class="subtitle-2 font-weight-bold">{{upcoming_appointments_total}}</span>
                                </v-progress-circular>
                            </v-col>
                            <v-col cols="8" class="d-flex flex-column">
                                <v-badge color="warning darken-1" content="-25%" value="-25%" tile inline>
                                    <span class="subtitle-2 font-weight-bold"><a @click="manageUpcomingAppointment">Upcoming</a> </span>
                                </v-badge>
                                <div class="d-flex mt-1">
                                    <span class="title font-weight-bold">{{upcoming_appointments_total}}</span>
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
                                <v-badge color="red darken-3" content="-10%" value="-10%" tile inline>
                                    <span class="subtitle-2 font-weight-bold"><a @click="manageCanceledAppointment">Canceled</a></span>
                                </v-badge>
                                <div class="d-flex mt-1">
                                    <span class="title font-weight-bold">{{canceled_appointments_total}}</span>
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
                                <v-badge color="success darken-2" content="+10%" value="+10%" tile inline>
                                    <span class="subtitle-2 font-weight-bold"><a @click="manageCompletedAppointment">Completed</a></span>
                                </v-badge>
                                <div class="d-flex mt-1">
                                    <span class="title font-weight-bold">{{completed_appointments_total}}</span>
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
        this.fetch_all_today();
        this.fetch_all_upcoming();
        this.fetch_all_canceled();
        this.fetch_all_completed();
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
        ...mapActions(['fetch_all_today', 'fetch_all_upcoming', 'fetch_all_canceled', 'fetch_all_completed']),

        my_account(){
            this.$router.push({name: 'settings'});
        },

        manageUpcomingAppointment(){
            this.$router.push({name: 'manage_upcoming_appointment'});
        },

        manageTodayAppointment(){
            this.$router.push({name: 'manage_today_appointment'});
        },

        manageCanceledAppointment(){
            this.$router.push({name: 'manage_canceled_appointment'});
        },

        manageCompletedAppointment(){
            this.$router.push({name: 'manage_completed_appointment'});
        }
    },
    computed:{
        ...mapGetters(['today_appointments_total', 'upcoming_appointments_total', 'canceled_appointments_total', 'completed_appointments_total', 'getUser',]),
    },
}
</script>

<style scoped>
.v-card.router-link-exact-active{
    background-color: teal !important;
}

</style>





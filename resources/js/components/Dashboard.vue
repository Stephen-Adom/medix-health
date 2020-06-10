<template>
  <div >
    <v-container fluid class="pa-0">
        <v-navigation-drawer v-model="drawer" app clipped color="success darken-2" id="main_sidebar">
          <v-list dense>
            <v-list-item class="hidden-lg-and-up">
              <v-list-item-content align="center" justify="center">
                <v-list-item-title class="title text-uppercase font-weight-bold white--text darken-4">
                  <div>Medix <span class="font-weight-light white--text">Application</span></div>
                </v-list-item-title>
                <v-list-item-subtitle class="white--text">
                  The hospital on the internet
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider class="hidden-lg-and-up" color="white" />

          <v-list shaped id="logo_title">
            <v-list-item-group color="white" dark>
              <v-list-item to="/home">
                <v-list-item-icon>
                  <v-icon>mdi-speedometer</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="subtitle-2 font-weight-light">Dashboard</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item to="/appointments" v-if="$gate.isDoctorORlab()">
                <v-list-item-icon>
                  <v-icon>mdi-calendar-text-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="subtitle-2 font-weight-light">My Appointments</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item v-if="!$gate.isDoctorORlab()" to="/manage_appointments">
                <v-list-item-icon>
                  <v-icon>mdi-calendar-text-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="subtitle-2 font-weight-light">Manage Appointments</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item to="/patients">
                <v-list-item-icon>
                  <v-icon>mdi-account-group</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="subtitle-2 font-weight-light">Patients</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item to="/vitals" v-if="$gate.isNurse()">
                <v-list-item-icon>
                  <v-icon>mdi-heart-pulse</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="subtitle-2 font-weight-light">Vitals</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item to="/first_aid" v-if="$gate.isNurse()">
                <v-list-item-icon>
                  <v-icon>mdi-sticker-plus</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="subtitle-2 font-weight-light">First Aid</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item to="/medical_assessment" v-if="$gate.isDoctor()">
                <v-list-item-icon>
                  <v-icon>mdi-medical-bag</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="subtitle-2 font-weight-light">Medical Examination</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item to="/lab_assessment" v-if="$gate.isLab()">
                <v-list-item-icon>
                  <v-icon>mdi-microscope</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="subtitle-2 font-weight-light">Lab Examination</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item to="/schedules" v-if="$gate.isDoctorORlab()">
                <v-list-item-icon>
                  <v-icon>mdi-calendar-clock</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="subtitle-2 font-weight-light">Schedules</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item to="/dispensary" v-if="$gate.isPharmacy()">
                <v-list-item-icon>
                  <v-icon>mdi-hospital-box-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="subtitle-2 font-weight-light">Dispensary</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item to="/referral">
                <v-list-item-icon>
                  <v-icon>mdi-rotate-right-variant</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="subtitle-2 font-weight-light">Referrals</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item to="/excuse_duty">
                <v-list-item-icon>
                  <v-icon>mdi-exit-run</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="subtitle-2 font-weight-light">Excuse Duty</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item to="/drug_inventory" v-if="$gate.isPharmacy()">
                <v-list-item-icon>
                  <v-icon>mdi-pill</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="subtitle-2 font-weight-light">Drug Inventory</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item to="/manage_account" v-if="$gate.isManager()">
                <v-list-item-icon>
                  <v-icon>mdi-account-cog</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="subtitle-2 font-weight-light">Manage Accounts</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item to="/roles" v-if="$gate.isManager()">
                <v-list-item-icon>
                  <v-icon>mdi-account-tie</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="subtitle-2 font-weight-light">Manage Staff Roles</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item to="/reports">
                <v-list-item-icon>
                  <v-icon>mdi-book-open-page-variant</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="subtitle-2 font-weight-light">Reports Analysis</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>

          <template v-slot:append>
            <div class="pa-2 success darken-3 white--text font-weight-light overline" align="center" justify="center">
              &copy {{date}} | All Right Reserved.
            </div>
          </template>
        </v-navigation-drawer>
      <v-app-bar app clipped-left color="white">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-lg-and-up" />

        <v-toolbar-title id="app_logo" class="title text-uppercase font-weight-bold success--text darken-4">
          <div class="d-flex"><v-img src="/app_asset/medix_1.png" width="120" class=" hidden-xs-only mx-auto"></v-img> <span class="font-weight-light success--text darken-8 mt-1 ml-1 hidden-sm-and-down">Application</span></div>
          <div class="hidden-sm-and-up">
            <v-img src="/app_asset/medix_1.png" width="200"></v-img>
          </div>
        </v-toolbar-title>

        <v-divider class="mx-6" inset vertical />
        <v-btn class="success darken-2 hidden-sm-and-down" rounded elevation="15" dark :to="{name: 'new_appointment'}" v-if="$gate.isNurse()">
          <v-icon left size="18">mdi-circle-edit-outline</v-icon>
          <span class="caption hidden-sm-only">create appointment</span>
        </v-btn>

        <v-btn class="info darken-2 ml-5 px-5 hidden-sm-and-down" rounded elevation="15" dark v-if="!$gate.isDoctorORlab()" @click="open_schedules">
          <span class="caption hidden-xs-only">schedules</span>
          <v-icon right size="18">mdi-account-clock</v-icon>
        </v-btn>
        <v-spacer />
\
        <v-menu offset-y origin="center center" transition="scale-transition" nudge-bottom="5" :close-on-content-click="close_on_content" max-width="400">
          <template v-slot:activator="{ on }">
            <v-badge color="success darken-2" inline :content="unreadnotificationsCount" :value="unreadnotificationsCount" v-if="allUnreadNotifications">
              <v-icon v-on="on" color="black">mdi-email</v-icon>
            </v-badge>
          </template>
          <v-card>
            <v-list two-line subheader>
            <v-subheader inset>
              Messages
              <v-spacer />
              <v-tooltip top>
                <template v-slot:activator="{on}">
                  <v-btn icon color="grey darken-5" @click="view_notifications" v-on="on">
                      <v-icon size="18">mdi-collapse-all</v-icon>
                  </v-btn>
                </template>
                <span>view messages</span>
              </v-tooltip>
              
            </v-subheader>
            <v-divider inset class="my-0"></v-divider>
            <v-card-text>
              <template v-if="unreadnotificationsCount">
                <v-list-item v-for="(notification, index) in allUnreadNotifications" :key="index" >
                  <v-list-item-avatar dark>
                    <v-icon class="success darken-2" color="white"  v-if="notification.data['message']">mdi-calendar-clock</v-icon>
                    <v-icon class="red darken-2" color="white"  v-if="notification.data['excuse_message']">mdi-message-text-clock</v-icon>
                    <v-icon class="info darken-2" color="white"  v-if="notification.data['accepted']">mdi-account-check</v-icon>
                    <v-icon class="purple darken-2" color="white"  v-if="notification.data['canceled']">mdi-close</v-icon>
                  </v-list-item-avatar>
                  <template v-if="notification.data['message']">
                    <v-list-item-content>
                      <v-list-item-title class="subtitle-2 font-weight-bold">{{ notification.data['message'] }}</v-list-item-title>
                      <v-list-item-subtitle class="caption font-weight-regular">{{ notification.data['data'] }} at {{ notification.data['date'] | formatDate }}, {{ notification.data['time'] | formatTime}}</v-list-item-subtitle>
                    </v-list-item-content>
                  </template>
                  <template v-if="notification.data['accepted']">
                    <v-list-item-content>
                      <v-list-item-title class="subtitle-2 font-weight-bold">{{ notification.data['accepted'] }}</v-list-item-title>
                      <v-list-item-subtitle class="caption font-weight-regular">{{ notification.data['patient'] }} Appointment accepted by {{ notification.data['doctor'] }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </template>
                  <template v-if="notification.data['canceled']">
                    <v-list-item-content>
                      <v-list-item-title class="subtitle-2 font-weight-bold">{{ notification.data['canceled'] }}</v-list-item-title>
                      <v-list-item-subtitle class="caption font-weight-regular">{{ notification.data['patient'] }} Appointment canceled by {{ notification.data['doctor'] }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </template>
                  <template v-if="notification.data['excuse_message']">
                    <v-list-item-content>
                      <v-list-item-title class="subtitle-2 font-weight-bold">{{ notification.data['excuse_message'] }}</v-list-item-title>
                      <v-list-item-subtitle class="caption font-weight-regular">New Application for {{ notification.data['patient'] }}</v-list-item-subtitle>
                      <v-list-item-subtitle class="caption font-weight-regular">Job Title: {{ notification.data['job'] }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </template>
                  <v-list-item-action>
                    <v-tooltip top>
                      <template v-slot:activator="{on}">
                        <v-btn icon color="red darken-3"  @click="removeNotification(notification)" v-on="on">
                          <v-icon size="18">mdi-close</v-icon>
                        </v-btn>
                      </template>
                      <span>mark as read</span>
                    </v-tooltip>
                  </v-list-item-action>
                </v-list-item>
            </template>
            <template v-else>
              <section class="pa-3 mx-3">
                <span class="font-weight-bold font-italic caption text-uppercase">No Notification(s) available</span>
              </section>
            </template>
            </v-card-text>
          </v-list>
          <v-divider inset class="my-0"></v-divider>
          <v-card-actions>
            <v-spacer />
            <v-tooltip bottom>
              <template v-slot:activator="{on}">
                  <v-btn icon color="grey darken-5" v-on="on" @click="clear_notifications">
                    <v-icon>mdi-notification-clear-all</v-icon>
                </v-btn>
              </template>
              <span class="caption">mark all</span>
            </v-tooltip>
          </v-card-actions>
          </v-card>
        </v-menu>

        <v-divider class="mx-6 hidden-sm-and-down" inset vertical />

        <v-menu bottom origin="center center" transition="slide-x-reverse-transition" nudge-bottom="5" offset-y>
          <template v-slot:activator="{ on }">
            <v-list class="py-0">
              <v-list-item v-on="on">
                <v-list-item-avatar class="mr-0">
                  <v-img :src='getImage' />
                </v-list-item-avatar>
                <v-list-item-icon>
                  <v-icon class="hidden-md-and-up">mdi-menu-down</v-icon>
                </v-list-item-icon>

                <v-list-item-content class="hidden-sm-and-down">
                  <v-list-item-title v-if="getUser" class="subtitle-2 font-weight-bold text-uppercase">{{getUser.title}} {{getUser.firstname}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </template>
          <v-list>
            <v-list-item @click="goToSettings">
              <v-list-item-icon>
                <v-icon>mdi-account-edit-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Account Settngs</v-list-item-title>
            </v-list-item>
            <v-list-item @click="sign_out_dialog = true">
              <v-list-item-icon>
                <v-icon>mdi-logout</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
    </v-container>
    <v-content>
      <transition name="fade" mode="out-in">
        <router-view :key="$route.path"/>
      </transition>
    </v-content>
    <v-speed-dial v-model="fab" bottom id="access_link" right direction="top" transition="slide-y-reverse-transition">
      <template v-slot:activator>
        <v-btn v-model="fab" color="success darken-2" dark fab>
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-cogs</v-icon>
        </v-btn>
      </template>
      <v-tooltip left>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" color="blue darken-3" @click="goToSettings" dark small fab><v-icon size="20">mdi-account-cog-outline</v-icon></v-btn>
        </template>
        <span>Account Settings</span>
      </v-tooltip>
      <v-tooltip left>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" color="pink darken-3" dark small fab @click="goToAppointment" v-if="$gate.isDoctorORlab()"><v-icon size="20">mdi-calendar-text-outline</v-icon></v-btn>
        </template>
        <span>Appointments</span>
      </v-tooltip>
      <v-tooltip left>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" color="pink darken-3" dark small fab @click="manage_Appointment" v-if="!$gate.isDoctorORlab()"><v-icon size="20">mdi-calendar-text-outline</v-icon></v-btn>
        </template>
        <span>Manage Appointments</span>
      </v-tooltip>
      <v-tooltip left>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" color="amber darken-3" dark small fab @click="goToReport"><v-icon size="20">mdi-file-table-outline</v-icon></v-btn>
        </template>
        <span>Reports</span>
      </v-tooltip>
    </v-speed-dial>

    <v-alert v-model="notification_alert" dismissible color="success darken-2" style="position: absolute !important; top: 10px !important; right: 5px !important; z-index: 999999 !important;" border="left" elevation="10" transition="scale-transition" colored-border icon="mdi-calendar-clock">
      You've got a <strong>new</strong> appointment on your schedule!.
    </v-alert>

    <v-dialog v-model="messages_dialog" width="600px" scrollable>
      <v-card>
        <v-card-title>
          <span class="title font-weight-bold text-uppercase">
            <v-icon color="success darken-2">mdi-email-multiple</v-icon>
            My Messages
          </span>
        </v-card-title>
        <v-divider />
        <v-card-text style="height: 600px;">
          <v-list two-line subheader>
            <template v-if="messages.length">
                <v-list-item v-for="(notification, index) in messages" :key="index" >
                  <v-list-item-avatar dark>
                    <v-icon class="success darken-2" color="white"  v-if="notification.data['message']">mdi-calendar-clock</v-icon>
                    <v-icon class="red darken-2" color="white"  v-if="notification.data['excuse_message']">mdi-message-text-clock</v-icon>
                    <v-icon class="info darken-1" color="white"  v-if="notification.data['accepted']">mdi-account-check</v-icon>
                  </v-list-item-avatar>
                  <template v-if="notification.data['message']">
                    <v-list-item-content>
                      <v-list-item-title class="subtitle-2 font-weight-bold">{{ notification.data['message'] }}</v-list-item-title>
                      <v-list-item-subtitle class="caption font-weight-regular">{{ notification.data['data'] }} at {{ notification.data['date'] | formatDate }}, {{ notification.data['time'] | formatTime}}</v-list-item-subtitle>
                    </v-list-item-content>
                  </template>
                  <template v-if="notification.data['accepted']">
                    <v-list-item-content>
                      <v-list-item-title class="subtitle-2 font-weight-bold">{{ notification.data['accepted'] }}</v-list-item-title>
                      <v-list-item-subtitle class="caption font-weight-regular">{{ notification.data['patient'] }} Appointment accepted by {{ notification.data['doctor'] }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </template>
                  <template v-if="notification.data['excuse_message']">
                    <v-list-item-content>
                      <v-list-item-title class="subtitle-2 font-weight-bold">{{ notification.data['excuse_message'] }}</v-list-item-title>
                      <v-list-item-subtitle class="caption font-weight-regular">Application for {{ notification.data['patient'] }}</v-list-item-subtitle>
                      <v-list-item-subtitle class="caption font-weight-regular">Job Title: {{ notification.data['job'] }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </template>
                  <v-list-item-action>
                    <span v-if="notification.read_at !== null" class="d-block text-uppercase font-weight-bold caption font-italic">Read at:</span>
                    <span v-if="notification.read_at !== null" class="caption font-weight-light font-italic teal--text">{{notification.read_at | formatDate}}</span>
                  </v-list-item-action>
                </v-list-item>
            </template>
            <template v-else>
              <section class="pa-3 mx-3">
                <span class="font-weight-bold font-italic caption text-uppercase">No Notification(s) available</span>
              </section>
            </template>
          </v-list>
        </v-card-text>
          <v-divider />
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="messages_dialog = false">Close</v-btn>
          <v-btn color="green darken-1" text @click="delete_all_messages">Clear All</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="loading_dialog" hide-overlay persistent width="300">
      <v-card color="success darken-2" dark>
        <v-card-text>
          Loading messages...
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="loading_schedules_dialog" hide-overlay persistent width="300">
      <v-card color="success darken-2" dark>
        <v-card-text>
          Loading schedules...
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="specialist_dialog" scrollable max-width="450px">
      <v-card>
        <v-card-title class="px-2">
          <v-tabs v-model="tab" background-color="transparent" centered color="success" grow icons-and-text>
            <v-tabs-slider></v-tabs-slider>
              <v-tab>
                <span class="caption">Doctor Schedules</span>  
                <v-icon size="20" color="success darken-2">mdi-doctor</v-icon>
              </v-tab>

              <v-tab>
                <span class="caption">Lab Schedules</span>
                <v-icon size="20" color="success darken-2">mdi-microscope</v-icon>
              </v-tab>
            </v-tabs>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 350px;">
          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-card color="basil" flat>
                <v-card-text class="pa-0">
                  <v-row v-if="doctors.length">
                    <v-col cols="6" md="6" v-for="doctor in doctors" :key="doctor.id">
                      <v-card style="border: 1px solid green!important;" outlined link @click="open_specialist_schedules(doctor)">
                        <v-card-text class="d-flex flex-column align-center justify-center">
                          <v-avatar size="60">
                            <v-img :src="doctor_img(doctor)"></v-img>
                          </v-avatar>
                          <span class="caption text-uppercase mt-2">{{doctor.title}} {{doctor.firstname}} {{doctor.lastname}}</span>
                          <span class="caption text-uppercase mt-1 font-weight-bold">
                            <v-icon size="18" color="success darken-2 mr-1">mdi-phone-classic</v-icon>
                            {{doctor.phone}}
                          </span>  
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                  <v-row v-else>
                    <v-col cols="12">
                      <v-responsive>
                        <v-img src="/app_asset/doctor.png" width="70%" class="mx-auto" />
                      </v-responsive>
                      <v-card class="info darken-2" dark flat>
                        <v-card-text>
                          <span class="subtitle-2 font-weight-bold white--text text-uppercase text-center">User Information Unavailable</span>
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <v-card color="basil" flat>
                <v-card-text>
                  <v-row v-if="lab_doctors.length">
                    <v-col cols="6" md="6" v-for="doctor in lab_doctors" :key="doctor.id">
                      <v-card style="border: 1px solid green!important;" outlined link @click="open_specialist_schedules(doctor)">
                        <v-card-text class="d-flex flex-column align-center justify-center">
                          <v-avatar size="60">
                            <v-img :src="lab_img(doctor)"></v-img>
                          </v-avatar>
                          <span class="caption text-uppercase mt-2">{{doctor.title}} {{doctor.firstname}} {{doctor.lastname}}</span>
                          <span class="caption text-uppercase mt-1 font-weight-bold">
                            <v-icon size="18" color="success darken-2 mr-1">mdi-phone-classic</v-icon>
                            {{doctor.phone}}
                          </span>  
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                  <v-row v-else>
                    <v-col cols="12">
                      <v-responsive>
                        <v-img src="/app_asset/doctor.png" width="70%" class="mx-auto" />
                      </v-responsive>
                      <v-card class="info darken-2" dark flat>
                        <v-card-text>
                          <span class="subtitle-2 font-weight-bold white--text text-uppercase text-center">User Information Unavailable</span>
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer />
          <v-btn color="info darken-2" dark tile depressed @click="specialist_dialog = false">
            <span class="caption">Close</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="schedules_dialog" scrollable max-width="450px">
      <v-card>
        <v-card-title class="px-2 subtitle-2 font-weight-bold text-uppercase">Schedule List for <span class="ml-1">{{specialist_name}}</span></v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 350px;">
          <template v-if="schedules.length">
            <v-row v-for="schedule in schedules" :key="schedule.id">
                <v-col cols="12" >
                    <div class="d-flex justify-space-between">
                        <span class="font-weight-bold subtitle-2 grey--text">
                            <v-icon class="mr-1" color="success darken-2">mdi-calendar-today</v-icon> 
                            {{schedule.schedule_date | formatDate}}
                        </span>
                    </div>
                    
                    <v-divider class="mt-0" />
                    <div>
                        <template v-for="time in schedule.timings">
                            <v-chip class="ma-1" color="info darken-1" :disabled="formatStatus(time)" :key="time.id" rounded pill>
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
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer />
          <v-btn color="blue darken-1" text @click="close_schedules">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="sign_out_dialog" persistent max-width="450">
      <v-card>
        <v-card-title class="subtitle-2 text-uppercase font-weight-bold">Are you sure you want to exit the app?

        </v-card-title>
        <v-divider />
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-responsive>
                <v-img src="/app_asset/undraw_escaping_my1b.svg" width="50%" class="mx-auto"></v-img>
              </v-responsive>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider /> 
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn tile depressed color="success darken-2" dark class="px-6" @click="sign_out_dialog = false">
            <span class="caption">Cancel</span>
          </v-btn>
          <v-btn tile depressed color="red darken-3" class="px-6" dark @click="logout">
            <span class="caption">Exit</span>
            <v-icon size="20" right>mdi-logout</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="timeout_session_dialog" max-width="500">
      <v-card flat style="border-radius: 15px !important;">
        <v-card-title class="subtitle-1 font-weight-bold">Session Timeout</v-card-title>
        <v-divider />

        <v-card-text v-if="getUser" class="pb-0">
            <div class="d-flex">
              <v-avatar class="mx-auto" size="40">
                <v-img :src="getImage"></v-img>
              </v-avatar>
            </div>
            <h5 class="text-center font-weight-black subtitle-2">Hello, {{getUser.title}} {{getUser.firstname}}</h5>
            <span class="subtitle-2 font-weight-bold d-block text-center my-3">Your Session has Timed out from inactivity. Do you want to continue Session?</span>
        </v-card-text>
        <v-card-text class="pb-0">
          <span class="caption grey--text font-italic text-right">The system will logout within 5 minutes with no response</span>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="red darken-3" text @click="logout">
            <span class="caption">Logout</span>
          </v-btn>

          <v-btn color="green darken-3" tile dark depressed class="px-4" @click="continueSession">
            <span class="caption">continue</span>  
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
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

  name: 'App',

  data: () => ({
    timeout_session_dialog: false,
    date: moment().format('YYYY'),
    sign_out_dialog: false,
    loading_schedules_dialog:false,
    tab: null,
    specialist_name:null,
    schedules_dialog:false,
    specialist_dialog:false,
    loading_dialog: false,
    messages_dialog: false,
    notification_alert: false,
    close_on_content: false,
    user: window.user,
    show: false,
    fab: false,
    notifications: [],
    messages:[],
    list: 0,
    drawer: null,
    tab_index: 0,
    schedules:[],
    lab_doctors:[],
    doctors:[],
    events: ['click', 'mousedown', 'mousemove', 'scroll', 'keypress', 'load', 'resize'],
    warningTimer: null,
    logoutTimer: null,
  }),
    watch:{
      notification_alert(){
        if(this.notification_alert === true){
          setTimeout(() => {
            this.notification_alert = false;
          }, 5000);
        }
      },

      timeout_session_dialog(){
        if(this.timeout_session_dialog !== false){
          this.setLogoutTimer();
        }
      }
  },
  methods: {
    ...mapActions(['fetchUser', 'fetchUnreadNotifications', 'clearUnreadNotification']),

    doctor_img(doctor){
      if(doctor.image){
        return '/staff/profiles/' + doctor.image
      }else{
        return '/app_asset/doctor.jpg';
      }
    },

    lab_img(doctor){
      if(doctor.image){
        return '/staff/profiles/' + doctor.image
      }else{
        return '/app_asset/lab tech.jpg';
      }
    },

    removeNotification(item) {
      var index = this.allUnreadNotifications.indexOf(item);
      this.allUnreadNotifications.splice(index, 1);
      axios.post('/mark_as_read', {id : item.id});
    },
    clear_notifications(){
      this.clearUnreadNotification();
      axios.post('/mark_all_read');
    },
    view_notifications(){
      this.loading_dialog = true;
      axios.get('/fetch_all_notifications').then(response => {
        this.messages = response.data;
        this.loading_dialog = false;
        this.messages_dialog = true;
      });
    },
    delete_all_messages(){
      swalWithBootstrapButtons.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete all!',
          cancelButtonText: 'No, cancel!',
          reverseButtons: true
        }).then((result) => {
          if (result.value) {
            this.messages = [];
            axios.post('/delete_all_messages').then(response => {
              if(response.data.success){
                swalWithBootstrapButtons.fire(
                  'Deleted!',
                  'Your Message(s) have been deleted.',
                  'success'
                )
              }
              if(response.data.no_messages){
                swalWithBootstrapButtons.fire(
                  'No Messages',
                  'No Message(s) Available.',
                  'info'
                )
              }
            })
            
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              'Cancelled',
              'Your Message(s) are safe :)',
              'info'
            )
          }
        }) 
    },
    logout(){
        axios.post('/auth_logout').then(response =>{
          if(response.data.success){
            this.$router.go('/');
          }
        });
    },
    goToAppointment(){
      this.$router.push({name: 'today_appointment'})
    },
    manage_Appointment(){
      this.$router.push({name: 'manage_today_appointment'})
    },
    goToSettings(){
      this.$router.push({name: 'settings'})
    },
    goToReport(){
      this.$router.push({name: 'reports'})
    },
    listen(){
        Echo.channel('users-'+this.user.role_id)
          .listen('DoctorAppointmentEvent', (appointment) => {
            this.notification_alert = true;
          });

    },
    open_schedules(){
      this.specialist_dialog = true;
    },
    getLabDoctors(){
      axios.get('/api/lab_doctors').then(response => {
        this.lab_doctors = response.data;
      })
    },
    getDoctors(){
      axios.get('/api/doctors').then(response => {
        this.doctors = response.data;
      })
    },
    open_specialist_schedules(doctor){
      this.specialist_name = doctor.title + " " + doctor.firstname + " " + doctor.lastname;
      this.fetch_specialist_schedules(doctor.id);
    },
    fetch_specialist_schedules(id){
      this.loading_schedules_dialog = true;
      axios.post('/api/fetch_specialist_schedules', {id: id}).then(response => {
        if(response.data.schedule){
          this.schedules = response.data.schedule;
          this.loading_schedules_dialog = false;
          this.schedules_dialog = true;
        }
        if(response.data.no_schedules){
          this.loading_schedules_dialog = false;
          this.schedules_dialog = true;
        }
      })
    },
    formatStatus(time){
      if(time.available === 0){
        return true;
      }else{
        return false;
      }
    },
    close_schedules(){
      this.schedules_dialog = false;
      this.schedules = [];
    },

    continueSession(){
      this.timeout_session_dialog = false;
      this.resetTimer();
    },

    resetTimer(){
      clearTimeout(this.warningTimer);
      clearTimeout(this.logoutTimer);
      this.setTimer();
    },

    setTimer(){
      this.warningTimer = setTimeout(() => {
        this.timeout_session_dialog = true;
      },  15 * 60 * 1000);
    },

    setLogoutTimer(){
      this.logoutTimer  = setTimeout(() => {
        this.logoutUser();
      },  5 * 60 * 1000);
    },

    logoutUser(){
      this.logout();
    }
    

  },
  computed:{
    ...mapGetters(['getUser', 'allUnreadNotifications', 'unreadnotificationsCount']),
      getImage(){
        if(this.getUser){
            if(this.getUser.image){
                return '/staff/profiles/' + this.getUser.image;
            }else{
                  if(this.getUser.role_id === 1){
                    return '/app_asset/doctor.jpg'
                }else if(this.getUser.role_id === 2){
                    return '/app_asset/nurse.jpg'
                }else if(this.getUser.role_id === 3){
                    return '/app_asset/pharmacist.jpg'
                }else if(this.getUser.role_id === 4){
                    return '/app_asset/lab tech.jpg'
                }else if(this.getUser.role_id === 5){
                    return '/app_asset/manager.png'
                }
            }
        }
    },
  },
  created(){
    this.listen();
    this.fetchUser();
    this.fetchUnreadNotifications();
    setInterval(() => {
      this.fetchUnreadNotifications();
    }, 5000);
    this.getDoctors();
    this.getLabDoctors();

  },
  updated(){
    this.getDoctors();
    this.getLabDoctors();
  },
  filters:{
      formatDate(value){
          return moment(value).format('ddd, MMMM Do');
      },
      formatTime(value){
          return moment(value).format('LT');
      }
  },
  updated(){
    
  },
  mounted(){
    this.events.forEach(event => {
      window.addEventListener(event, this.resetTimer);
    });

    this.setTimer();
  },
  destroyed(){
    this.events.forEach(event => {
      window.removeEventListener(event, this.resetTimer);
    });

    this.resetTimer();
  }

};
</script>

<style scoped>
  #access_link{
    position: fixed !important;
    bottom: 15px !important;
    right: 15px !important;
  }

  @media only screen and (max-width: 320px) {
    #app_logo {
      font-size: 11px !important;
    }

    #logo_title {
      margin-top: 20px !important;
    }
  }

  @media only screen and (min-width: 321px) and (max-width: 600px) {
    #app_logo {
      font-size: 14px !important;
    }

    #logo_title {
      margin-top: 20px !important;
    }
  }
</style>

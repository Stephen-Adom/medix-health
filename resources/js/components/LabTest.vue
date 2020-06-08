<template>
    <v-container class="mt-5 ma-3">
        <v-toolbar flat class="pa-1">
            <v-toolbar-title class="subtitle-1 font-weight-bold text-uppercase"> Lab Reports</v-toolbar-title>
            <v-spacer />
            <v-btn class="red darken-2 px-5" dark tile depressed @click="goback">
                <span class="caption">Back</span>
            </v-btn>
        </v-toolbar>
        <v-divider />
        <v-row>
            <v-col cols="6" md="3" sm="3">
                <v-card outlined style="border-top: 5px solid red;" link hover>
                    <v-card-title class="subtitle-1 font-weight-bold pb-1">
                        <span>Blood Tests</span>
                    </v-card-title>
                    <v-divider />
                    <v-card-text class="pa-0 d-flex justify-center align-center">
                        <v-avatar size="85" style="border: 3px solid red;">
                            <v-img  class="mx-auto" src="/app_asset/blood_tests.png" />
                        </v-avatar>
                    </v-card-text>
                    <v-card-text class="body d-flex justify-center">
                        Click to view various Blood Test Result
                    </v-card-text>
                    <v-divider />
                    <v-card-actions class="d-flex justify-center">
                        <v-btn dark rounded class="px-7 red darken-2" depressed :to="{name: 'blood-test', hash:'#options'}">
                            <span class="caption font-weight-bold">View Results</span>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="6" md="3" sm="3">
                <v-card outlined style="border-top: 5px solid #007E33;" link hover>
                    <v-card-title class="subtitle-1 font-weight-bold pb-1">
                        <span>Urine Tests</span>
                    </v-card-title>
                    <v-divider />
                    <v-card-text class="pa-0 d-flex justify-center align-center">
                        <v-avatar size="85" style="border: 3px solid #007E33;">
                            <v-img  class="mx-auto" src="/app_asset/urine_tests.png" />
                        </v-avatar>
                    </v-card-text>
                    <v-card-text class="body d-flex justify-center">
                        Click to view various Urine Test Results
                    </v-card-text>
                    <v-divider />
                    <v-card-actions class="d-flex justify-center">
                        <v-btn dark rounded class="px-7 success darken-2" depressed :to="{name: 'urine-test'}">
                            <span class="caption font-weight-bold">View Results</span>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="6" md="3" sm="3">
                <v-card outlined style="border-top: 5px solid #FF8800;" link hover>
                    <v-card-title class="subtitle-1 font-weight-bold pb-1">
                        <span>Faecal Tests</span>
                    </v-card-title>
                    <v-divider />
                    <v-card-text class="pa-0 d-flex justify-center align-center">
                        <v-avatar size="85" style="border: 3px solid #FF8800;">
                            <v-img  class="mx-auto" src="/app_asset/stool_tests.png" />
                        </v-avatar>
                    </v-card-text>
                    <v-card-text class="body d-flex justify-center">
                        Click to view various Faecal Test Results
                    </v-card-text>
                    <v-divider />
                    <v-card-actions class="d-flex justify-center">
                        <v-btn dark rounded class="px-7" color="#FF8800" depressed :to="{name: 'faecal-test'}">
                            <span class="caption font-weight-bold">View Results</span>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="6" md="3" sm="3">
                <v-card outlined style="border-top: 5px solid #6e40bd;" link hover>
                    <v-card-title class="subtitle-1 font-weight-bold pb-1">
                        <span>Saliva Tests</span>
                    </v-card-title>
                    <v-divider />
                    <v-card-text class="pa-0 d-flex justify-center align-center">
                        <v-avatar size="85" style="border: 3px solid #6e40bd;">
                            <v-img  class="mx-auto" src="/app_asset/sperm_tests.png" />
                        </v-avatar>
                    </v-card-text>
                    <v-card-text class="body d-flex justify-center">
                        Click to view various Saliva Test Results
                    </v-card-text>
                    <v-divider />
                    <v-card-actions class="d-flex justify-center">
                        <v-btn dark rounded class="px-7" color="#6e40bd" depressed :to="{name: 'saliva-test'}">
                            <span class="caption font-weight-bold">View Result</span>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" id="options">
                <router-view :key="$router.path" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        loadingData:false,
        search: '',
        headers: [
        {
          text: 'Name of Patient',
          align: 'start',
          sortable: false,
          value: 'firstname',
        },
        { text: 'Sex', value: 'gender' },
        { text: 'Phone Number', value: 'phone' },
        { text: 'Email', value: 'email' },
        { text: 'Job Title', value: 'job_title' },
        { text: 'Status', value: 'referred' },
        { text: 'Actions', value: 'actions', sortable: false, align: 'center', },
      ],
    }),
    methods:{
        goback(){
            this.$router.go(-1);
        }
    }
}
</script>
<template>
    <v-container>
        <vue-topprogress ref="topProgress" color="#00C851" colorShadow="#00C851" :height="5" errorColor="#CC0000"></vue-topprogress>
        <v-card class="pa-4" outlined>
            <v-toolbar dark class="success darken-2" elevation="10">
                <v-toolbar-title class="subtitle-2 font-weight-bold text-uppercase">
                    <v-icon class="mr-2">mdi-vote</v-icon>
                    Welcome to Report Dashboard
                </v-toolbar-title>
                <v-spacer />
                <v-btn rounded color="red darken-3" class="px-5" dark elevation="15" @click="dashboard">
                    <span class="caption font-weight-bold text-uppercase">Reports</span>
                    <v-icon right>mdi-chevron-double-right</v-icon>
                </v-btn>
            </v-toolbar>
            <v-divider />
            <v-card-text>
                <v-row>
                    <v-col cols="12" md="7">
                        <v-responsive>
                            <v-img src="/app_asset/undraw_report_mx0a.svg" width="70%" class="mx-auto"></v-img>
                        </v-responsive>
                    </v-col>
                    <v-col cols="12" md="5">
                        <v-card class="pa-3 justify-center" outlined>
                            <v-card-title class="pa-1 mx-auto subtitle-2 font-weight-bold text-uppercase">Patient Demographic Data</v-card-title>
                            <v-divider />
                            <v-card-text class="pa-1">
                                <doughnut :chart-data="datacollection" :height="300"></doughnut>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import Doughnut from '../Doughnut';
import { mapActions, mapGetters } from 'vuex';

export default {
    components: {
        Doughnut
    },
    data:() => ({
        males: null,
        females:null,
        referred:null,
        datacollection: null,
    }),
    methods: {
        ...mapActions(['fetchPatientGender']),
        fillData () {
            axios.get('/api/patient_category').then(response => {
                this.males = response.data.male;
                this.females = response.data.female;
                this.referred = response.data.referred;
                this.datacollection = {
                    labels: ['Females','Males', 'Referred'],
                    datasets: [
                        {
                            backgroundColor: ['#FF0066', '#048ECB', '#F39F19'],
                        data: [this.females, this.males, this.referred]
                        },
                    ]
                }
            });
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      },
      dashboard(){
          this.$router.push({name: 'reports_dashboard'});
        },
    },
    mounted(){
         this.fillData();
        this.$refs.topProgress.start()
        // Use setTimeout for demo
        setTimeout(() => {
        this.$refs.topProgress.done()
        }, 2000);
    }
}
</script>

<style scoped>

</style>
<template>
    <v-container>
        <v-card outlined>
            <v-card-title>
                <span class="subtitle-1 text-uppercase font-weight-bold">Dispensary Data</span>
            </v-card-title>
            <v-divider />
            <v-card-text>
                <v-data-table ref="dispensaryData" :headers="headers" :items="patients" sort-by="full_name" class="elevation-0" :search="search" :loading ="loadingData" loading-text="Loading... Please wait">
                    <template v-slot:top>
                    <v-toolbar flat color="white">
                        <v-toolbar-title>Patients Data</v-toolbar-title>
                        <v-divider class="mx-4" inset vertical></v-divider>
                        <v-spacer></v-spacer>
                        <v-text-field color="success" v-model="search" label="Who are you looking for?" class="mx-4 mt-2" append-icon="mdi-magnify"/>
                    </v-toolbar>
                    </template>
                    <template v-slot:item.name="{item}">
                        <span>{{item.patient.title}} {{item.patient.firstname}} {{item.patient.lastname}}</span>    
                    </template>
                     <template v-slot:item.contact="{item}">
                        <span>{{item.patient.phone}}</span>    
                    </template>
                    <template v-slot:item.drugs="{item}">
                        <span>{{item.drug_name}}</span>    
                    </template>
                    <template v-slot:item.drugs="{item}">
                        <span>{{item.drug_name}}</span>    
                    </template>
                    <template v-slot:item.start="{item}">
                        <span>{{item.start_course | formatDate}}</span>    
                    </template>
                    <template v-slot:item.end="{item}">
                        <span>{{item.end_course | formatDate}}</span>    
                    </template>
                    <template v-slot:item.status="{item}">
                        <span>{{formatStatus(item)}}</span>    
                    </template>
                    <template v-slot:item.actions="{item}">
                        <v-btn icon color="warning darken-1" @click="details(item)">
                            <v-icon> mdi-eye</v-icon>
                        </v-btn>  
                        <v-btn icon color="red darken-2" @click="">
                            <v-icon> mdi-delete</v-icon>
                        </v-btn>    
                    </template>
                </v-data-table>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
    data:() => ({
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
        { text: 'Contact', value: 'contact' },
        { text: 'Drugs Prescribed', value: 'drugs' },
        { text: 'Start Course', value: 'start' },
        { text: 'End Course', value: 'end' },
        { text: 'Status', value: 'status' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
    }),
    computed:{
        ...mapGetters(['allData'])
    },
    watch:{
        allData(){
            if(this.allData.length){
                this.patients = this.allData;
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
    methods:{
        ...mapActions(['fetchDispensary']),

        formatStatus(item){
            if(item.prescribed === 0){
                return 'Incomplete'
            }else{
                return 'Completed'
            }
        },
        details(item){
            this.$router.push({name: 'dispensary_details', params: {id: item.id}})
        }
    },
    mounted(){
        this.fetchDispensary();
        this.loadingData = true;
    }
}
</script>
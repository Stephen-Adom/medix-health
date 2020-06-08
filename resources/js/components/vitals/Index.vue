<template>
    <v-container fluid>
        <v-card class="pa-0" outlined>
            <v-toolbar flat>
                <v-toolbar-title>
                    <span class="subtitle-1 font-weight-bold text-uppercase">Vitals Assessment</span>    
                </v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer/>
                <v-btn rounded class="px-6 success darken-2" elevation="15" @click="addNewPatient">
                    <span class="font-weight-thin caption">New Vital Record</span>
                    <v-icon right size="20">mdi-heart-flash</v-icon>
                </v-btn>
            </v-toolbar>
            <v-divider />
            <v-card-text class="mt-2">
                <v-row>
                    <v-col cols="12">
                        <v-card flat>
                            <v-card-title class="subtitle-2 font-weight-bold text-uppercase">
                            Patient Vital Record List
                            <v-spacer></v-spacer>
                            <v-text-field v-model="search" class="subtitle-2 font-weight-light" append-icon="mdi-magnify" label="Looking for a patient?" single-line hide-details color="success"
                            ></v-text-field>
                            </v-card-title>
                            <v-data-table :headers="headers" :items="patients" :search="search" :loading ="loadingData" loading-text="Loading... Please wait">
                            <template v-slot:item.actions="{ item }">
                                <v-tooltip top attach>
                                    <template v-slot:activator="{ on }">
                                        <v-btn tile color="red darken-3" @click="viewInfo(item)" v-on="on" class="px-5" depressed dark>
                                            <v-icon left size="20">mdi-heart-flash</v-icon>
                                            <span class="caption">vitals</span>    
                                        </v-btn>
                                    </template>
                                <span class="caption">check vitals</span>
                                </v-tooltip>
                            </template>
                            <template v-slot:item.name="{ item }">
                                <span>{{item.firstname}} {{item.lastname}}</span>
                            </template>
                            <template v-slot:item.gender="{ item }">
                                <span>{{item.gender}}<v-icon v-text="formatGender(item.gender)" :color="getGenderColor(item.gender)"></v-icon>
                                </span>
                            </template>
                            </v-data-table>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
    data:() => ({
        loadingData:false,
        search: '',
        headers: [
          {
            text: 'Full Name',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Age', value: 'age', align: 'center', },
          { text: 'Sex', value: 'gender', align: 'center', },
          { text: 'Email', value: 'email', align: 'center', },
          { text: 'Contact', value: 'phone',align: 'center', },
          { text: 'Action', value: 'actions', align: 'center', },
        ],
        patients: [],
    }),
    methods:{
        ...mapActions([]),
        getid(item){

        },
        addNewPatient(){
            this.$router.push({name: 'patient_vitals_new'})
        },
        viewInfo(item){
            this.$router.push({name: 'newvitals',  params: {id: item.id}})
        },
        getGenderColor(gender){
      	if(gender === 'Male'){
      		return 'primary'
      	}else{
      		return 'success'
      	}
      },
	    formatGender(gender){
      	if(gender == 'Male'){
      		return 'mdi-gender-male'
      	}else{
      		return 'mdi-gender-female'
      	}
      },
    },
    created(){
        // this.loadingData = true;
    },
    computed:{
        ...mapGetters([]),
    },
    watch:{
        
    }
}
</script>

<style scoped>

</style>
<template>
    <v-container>
        <vue-topprogress ref="topProgress" color="#00C851" colorShadow="#00C851" :height="5" errorColor="#CC0000"></vue-topprogress>
        <v-card outlined class="pa-3">
            <v-card-title>
                <span class="text-uppercase subtitle-2 font-weight-bold grey--text darken-7">Excuse Applicant List</span>
                <v-spacer />
                <v-btn depressed tile class="red darken-3 px-5" dark @click="goback">
                    <span class="caption font-weight-bold">back</span>
                </v-btn>
            </v-card-title>
            <v-divider />
            <v-card-text>
                <v-card-title>
                    <span class="subtitle-1 font-weight-bold">All Lists</span>
                <v-spacer></v-spacer>
                <v-text-field v-model="search" color="success darken-2" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
                </v-card-title>
                <v-data-table :headers="headers" :items="allExcuses" :search="search" :loading="loadingData">
                <template v-slot:item.name="{item}">
                    <span>{{item.patient.title}} {{item.patient.firstname}} {{item.patient.lastname}}</span>    
                </template>
                <template v-slot:item.job_title="{item}">
                    <span>{{item.patient.job_title}}</span>    
                </template>
                <template v-slot:item.start_date="{item}">
                    <span>{{item.start_date | formatDate}}</span>    
                </template>
                <template v-slot:item.end_date="{item}">
                    <span>{{item.end_date | formatDate}}</span>    
                </template>
                <template v-slot:item.actions="{item}">
                    <v-btn icon color="warning darken-1" @click="approve(item)">
                        <v-icon>mdi-account-details</v-icon>
                    </v-btn>
                    <v-btn icon color="red darken-2" @click="deleteApplication(item)">
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
import Swal from 'sweetalert2';
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

export default {
    data:() => ({
        loadingData: false,
        search: '',
        headers: [
          {
            text: 'Staff Name',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Job Title', value: 'job_title'},
          { text: 'Start Date', value: 'start_date'},
          { text: 'End Date', value: 'end_date' },
          { text: 'Reason', value: 'reason' },
          { text: 'Actions', value: 'actions' },
        ],
    }),
    watch:{
        allExcuses(){
            if(this.allExcuses.length){
                this.loadingData = false;
                this.$refs.topProgress.done();
            }else{
                this.loadingData = false;
                this.$refs.topProgress.done();
            }
        }
    },
    computed:{
        ...mapGetters(['allExcuses'])
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
        ...mapActions(['fetchExcuses']),
        goback(){
            this.$router.go(-1);
        },
        approve(item){
            this.$router.push({name: 'excuse_duty_approval', params: {id: item.id}});
        },
        deleteApplication(item){
            swalWithBootstrapButtons.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
                }).then((result) => {
                if (result.value) {
                    var index = this.allExcuses.indexOf(item);
                    this.allExcuses.splice(index, 1);
                    axios.post('/api/delete_excuseduty_application', {id: item.id}).then(response => {
                        if(response.data.success){
                            swalWithBootstrapButtons.fire(
                            'Deleted!',
                            'Application has been deleted.',
                            'success'
                            )
                        }
                    })
                    
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Application Operation Cancelled :)',
                    'info'
                    )
                }
                }) 
        }
    },
    created(){
        this.loadingData = true;
        this.fetchExcuses();
    },
    mounted(){
        this.$refs.topProgress.start();
    
    }
}
</script>

<style scoped>

</style>
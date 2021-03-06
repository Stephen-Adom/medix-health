<template>
    <div>
        <v-container class="mt-5 ma-3">
              <v-card class="pa-4" outlined v-if="allSteroidHormones">
                <v-data-table :headers="headers" :search="search" :items="allSteroidHormones" :loading ="loadingData" loading-text="Loading... Please wait">
                    <template v-slot:top>
                    <v-toolbar flat color="white">
                        <v-toolbar-title> Steroid Hormone Analysis</v-toolbar-title>
                        <v-divider class="mx-4" inset vertical></v-divider>
                        <v-spacer></v-spacer>
                        <v-btn rounded elevation="15" class="success darken-2 px-7" dark @click="goback">
                            <span class="caption">back</span>
                            <v-icon right size="20">mdi-chevron-double-left</v-icon>
                        </v-btn>
                    </v-toolbar>
                    <v-text-field color="success" v-model="search" label="Search..." class="mx-4" append-icon="mdi-magnify"/>
                    </template>

                    <template v-slot:item.image="{item}">
                        <v-avatar>
                            <v-img :src="getImage(item)" />
                        </v-avatar>
                    </template>
                    <template v-slot:item.firstname="{item}">
                        <span v-if="allSteroidHormones" class="caption font-weight-bold">{{item.patient.firstname}} {{item.patient.lastname}}</span>
                    </template>
                    <template v-slot:item.gender="{item}">
                        <span v-if="allSteroidHormones" class="caption font-weight-bold">{{item.patient.gender}}</span>
                    </template>
                    <template v-slot:item.dob="{item}">
                        <span v-if="allSteroidHormones" class="caption font-weight-bold">{{item.patient.dob | formatDob}}</span>
                    </template>
                    <template v-slot:item.examined="{item}">
                        <span v-if="allSteroidHormones" class="caption font-weight-bold">{{item.user.title}} {{item.user.lastname}}, {{item.user.firstname}}</span>
                    </template>
                    <template v-slot:item.created_at="{item}">
                        <span v-if="allSteroidHormones" class="caption font-weight-bold">{{item.created_at | formatDate}}</span>
                    </template>
                    <template v-slot:item.actions="{item}">
                        <v-tooltip top>
                            <template v-slot:activator="{on}">
                                <v-btn icon color="info darken-2" v-on="on" dark class="mx-1" @click="print_form(item)"> 
                                    <v-icon size="25">mdi-receipt</v-icon>
                                </v-btn>
                            </template>
                            <span class="caption">print preview</span>
                        </v-tooltip>

                        <v-tooltip top>
                            <template v-slot:activator="{on}">
                                <v-btn icon color="red darken-3" v-on="on" dark class="mx-1" @click="deleteItem(item)">
                                    <v-icon size="25">mdi-delete</v-icon>
                                </v-btn>
                            </template>
                            <span class="caption">delete report</span>
                        </v-tooltip>
                    </template>
                </v-data-table>
            </v-card>
        </v-container>

        <v-row justify="center">
            <v-dialog v-model="lab_form_dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                <html id="print_body_form">
                    <body>
                        <v-card>
                            <v-toolbar dark color="info darken-2" flat class="print_preview_toolbar">
                            <v-toolbar-title class="subtitle-2 font-weight-bold text-uppercase">Lab Test Print Form</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-toolbar-items>
                                <v-btn dark text @click="lab_form_dialog = false">
                                    <span class="caption">Close</span>
                                </v-btn>
                            </v-toolbar-items>
                            </v-toolbar>
                            <v-card-text>
                                    <v-container>
                                        <v-card outlined>
                                            <v-card-title>
                                                <v-row>
                                                    <v-col cols="4" class="d-flex flex-column">
                                                        <v-responsive>
                                                            <v-img src="/images/medix_full.png" width="40%" class="mx-auto" />
                                                        </v-responsive>
                                                        <p class="text-center subtitle-2 font-weight-bold">Medix Digital Application</p>
                                                    </v-col>
                                                    <v-col cols="6" class="mt-10 text-center">
                                                        <h5 class="title font-weight-thin text-uppercase title--text">Medix Saliva Analysis Report</h5>
                                                        <h5 class="subtitle-2 font-weight-bold text-uppercase">Steroid Hormone Analysis</h5>
                                                        <p class="subtitle-2 text-uppercase font-weight-light">{{current_date}}</p>
                                                    </v-col>
                                                    <v-col cols="2" class="mt-8">
                                                        <v-btn tile large class="px-5 success darken-2 print_preview_toolbar" depressed @click="print_form_report">
                                                            <span class="caption font-weight-bold">Print Report</span>
                                                        </v-btn>
                                                    </v-col>
                                                </v-row>
                                            </v-card-title>
                                            <v-divider />
                                            <v-card-text>
                                            
                                            <v-card outlined>
                                                <v-card-title class="success darken-2 subtitle-2">
                                                    <span class="subtitle-2 font-weight-bold text-uppercase white--text">Basic Information</span>
                                                </v-card-title>
                                                <v-card-text>
                                                    <v-row>
                                                        <v-col cols="4">
                                                            <v-text-field readonly v-model="form.patient_name" dense label="Patient Name" class="subtitle-2 font-weight-bold"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="2">
                                                            <v-text-field readonly v-model="form.age" dense label="Age" class="subtitle-2 font-weight-bold"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="3">
                                                            <v-text-field readonly v-model="form.sex" dense label="Sex" class="subtitle-2 font-weight-bold"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="3">
                                                            <v-text-field readonly v-model="form.dob" dense label="DOB" class="subtitle-2 font-weight-bold"></v-text-field>
                                                        </v-col> 
                                                    </v-row>
                                                    <v-row>
                                                        <v-col cols="3">
                                                            <v-text-field readonly v-model="form.ordering_dr" dense label="Ordering Dr." class="subtitle-2 font-weight-bold"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="2">
                                                            <v-text-field readonly v-model="form.status" dense label="Status" class="subtitle-2 font-weight-bold"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="3">
                                                            <v-text-field readonly v-model="form.physician_copy" dense label="Physician Copy for" class="subtitle-2 font-weight-bold"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="4">
                                                            <v-text-field readonly v-model="form.examined_by" dense label="Examined By" class="subtitle-2 font-weight-bold"></v-text-field>
                                                        </v-col>
                                                    </v-row>
                                                    <v-row>
                                                        <v-col cols="3">
                                                            <v-text-field readonly v-model="form.spec" dense label="SPEC #" class="subtitle-2 font-weight-bold"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="3">
                                                            <v-text-field readonly v-model="form.collection_date" dense label="Collection Date" class="subtitle-2 font-weight-bold"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="3">
                                                            <v-text-field readonly v-model="form.collection_time" dense label="Collection Time" class="subtitle-2 font-weight-bold"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="3">
                                                            <v-text-field readonly v-model="form.specimen" dense label="SPECIMEN" class="subtitle-2 font-weight-bold"></v-text-field>
                                                        </v-col>
                                                    </v-row>
                                                    <v-row>
                                                        <v-col cols="3">
                                                            <v-text-field readonly v-model="form.received_date" dense label="Received Date" class="subtitle-2 font-weight-bold"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="3">
                                                            <v-text-field readonly v-model="form.received_time" dense label="Received Time" class="subtitle-2 font-weight-bold"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="3">
                                                            <v-text-field readonly v-model="form.report_date" dense label="Report Date" class="subtitle-2 font-weight-bold"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="3">
                                                            <v-text-field readonly v-model="form.report_time" dense label="Report Time" class="subtitle-2 font-weight-bold"></v-text-field>
                                                        </v-col>
                                                    </v-row>
                                                </v-card-text>
                                            </v-card>

                                            <v-card outlined>
                                                <v-card-title class="success darken-2 subtitle-2">
                                                    <span class="subtitle-2 font-weight-bold text-uppercase white--text">Steriod Hormone Analysis</span>
                                                </v-card-title>
                                                <v-card-text>
                                                    <v-simple-table>
                                                        <template v-slot:default>
                                                        <thead>
                                                            <tr>
                                                                <th class="text-left">Analysis</th>
                                                                <th class="text-left">Result</th>
                                                                <th class="text-left">Unit</th>
                                                                <th class="text-left">Flag</th>
                                                                <th class="text-left">Reference Range</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td class="subtitle-2 font-weight-bold">Estrogens</td>
                                                                <td>
                                                                    <v-text-field v-model="form.estrogen" readonly dense class="subtitle-2 font-weight-bold"></v-text-field>
                                                                </td>
                                                                <td>
                                                                    <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                                                </td>
                                                                <td>
                                                                    <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                                                </td>
                                                                <td>
                                                                    <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="subtitle-2 font-weight-bold">Progesterone</td>
                                                                <td>
                                                                    <v-text-field v-model="form.progesterone" readonly dense class="subtitle-2 font-weight-bold"></v-text-field>
                                                                </td>
                                                                <td>
                                                                    <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                                                </td>
                                                                <td>
                                                                    <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                                                </td>
                                                                <td>
                                                                    <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="subtitle-2 font-weight-bold">Testosterone</td>
                                                                <td>
                                                                    <v-text-field v-model="form.testosterone" readonly dense class="subtitle-2 font-weight-bold"></v-text-field>
                                                                </td>
                                                                <td>
                                                                    <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                                                </td>
                                                                <td>
                                                                    <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                                                </td>
                                                                <td>
                                                                    <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="subtitle-2 font-weight-bold">Cortisol</td>
                                                                <td>
                                                                    <v-text-field v-model="form.cortisol" readonly dense class="subtitle-2 font-weight-bold"></v-text-field>
                                                                </td>
                                                                <td>
                                                                    <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                                                </td>
                                                                <td>
                                                                    <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                                                </td>
                                                                <td>
                                                                    <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="subtitle-2 font-weight-bold">Melatonin</td>
                                                                <td>
                                                                    <v-text-field v-model="form.melatonin" readonly dense class="subtitle-2 font-weight-bold"></v-text-field>
                                                                </td>
                                                                <td>
                                                                    <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                                                </td>
                                                                <td>
                                                                    <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                                                </td>
                                                                <td>
                                                                    <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="subtitle-2 font-weight-bold">Dehydroepiandrosterone (DHEA)</td>
                                                                <td>
                                                                    <v-text-field v-model="form.dea" readonly dense class="subtitle-2 font-weight-bold"></v-text-field>
                                                                </td>
                                                                <td>
                                                                    <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                                                </td>
                                                                <td>
                                                                    <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                                                </td>
                                                                <td>
                                                                    <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                        </template>
                                                    </v-simple-table>
                                                </v-card-text>
                                            </v-card>

                                            <v-card flat>
                                                <v-card-text class="py-0">
                                                    <div class="d-flex">
                                                        <span class="subtitle-2 font-weight-bold mr-5 mt-3 black--text">Flag Key</span>
                                                        <p class="subtitle-2 font-weight-bold" style="width: 80%;"> <v-text-field dense></v-text-field></p>    
                                                    </div>  
                                                </v-card-text>
                                            </v-card>
                                            <v-card flat>
                                                <v-card-text class="py-0">
                                                    <div class="d-flex">
                                                        <span class="subtitle-2 font-weight-bold mr-5 mt-3 black--text">Comments</span>
                                                        <p class="subtitle-2 font-weight-bold" style="width: 80%;"> <v-text-field dense></v-text-field></p>    
                                                    </div>  
                                                </v-card-text>
                                            </v-card>
                                            <v-card outlined>
                                                <v-card-text class="pa-3 text-center">
                                                    <span class="subtitle-2 font-weight-bold mr-5 mt-3 black--text text-uppercase">**End of Report**</span>   
                                                </v-card-text>
                                            </v-card>
                                        </v-card-text>
                                        </v-card>
                                    </v-container>
                            </v-card-text>
                        </v-card>
                    </body>
                </html>
            </v-dialog>
        </v-row>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: "Thyroid",

    data: () => ({
        current_date: moment().format('MMMM Do, YYYY'),
        lab_form_dialog: false,
        search:"",
        loadingData: false,
        headers: [
        { text: 'Image', align: 'start', value: 'image'},
        { text: 'Name of Patient', align: 'start', sortable: false, value: 'firstname'}, 
        { text: 'Sex', value: 'gender' },
        { text: 'DOB', value: 'dob' },
        { text: 'Examined By', value: 'examined' },
        { text: 'Date of Examination', value: 'created_at' },
        { text: 'Actions', value: 'actions', sortable: false, align: 'center', },
      ],
    form:{
          patient_name:'',
          age:'',
          sex:'',
          dob:'',
          ordering_dr:'',
          status:'',
          physician_copy:'',
          spec:'',
          collection_date:'',
          collection_time:'',
          specimen:'',
          received_date:'',
          received_time:'',
          report_time:'',
          report_date:'',
          examined_by:'',
          cortisol:'',
          dea:'',
          estrogen:'',
          melatonin:'',
          progesterone:'',
          testosterone:''
      }
    }),
    watch:{
        allSteroidHormones(){
            if(this.allSteroidHormones.length){
                this.loadingData = false;
            }else{
                this.loadingData = false;
            }
        }
    },
    computed:{
        ...mapGetters(['allSteroidHormones']),
    },
    methods:{
        ...mapActions(['fetchSteroidHormone']),

        print_form_report(){
            window.print();
        },

        goback(){
            this.$router.go(-1);
        },
        getImage(item){
            if(item.patient.image){
                return '/patients/profiles/' + item.patient.image;
            }else{
                if(item.patient.gender === 'Male'){
                    return '/app_asset/male_avatar.png'
                }else{
                    return '/app_asset/undraw_female_avatar_l3ey.png'
                }
            }
        },
        print_form(item){
            console.log(item);
            this.form.patient_name = item.patient.title + ' ' + item.patient.firstname + ' ' + item.patient.lastname;
            this.form.age = item.patient.age;
            this.form.sex = item.patient.gender;
            this.form.dob = moment(item.patient.dob).format('MMMM Do, YYYY dddd');
            this.form.ordering_dr = item.saliva.ordering_dr;
            this.form.status = item.saliva.status;
            this.form.physician_copy = item.saliva.physician_copy;
            this.form.spec = item.saliva.spec;
            this.form.collection_date = moment(item.saliva.collection_date).format('MMMM Do, YYYY');
            this.form.collection_time = moment(item.saliva.collection_time).format('LT');
            this.form.specimen = item.saliva.specimen;
            this.form.received_date = moment(item.saliva.received_date).format('MMMM Do, YYYY');
            this.form.received_time = moment(item.saliva.received_time).format('LT');
            this.form.report_time = moment().format('LT');
            this.form.report_date = moment().format('MMMM Do, YYYY');
            this.form.examined_by = item.user.title + ' ' + item.user.firstname + ' ' + item.user.lastname;
            this.form.dea = item.dea;
            this.form.cortisol = item.cortisol;
            this.form.testosterone = item.testosterone;
            this.form.progesterone = item.progesterone;
            this.form.melatonin = item.melatonin;
            this.form.estrogen = item.estrogen;
            this.lab_form_dialog = true;
        },
        deleteItem (item) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.value) {
                    const index = this.allSalivaInfections.indexOf(item);
                    this.allSalivaInfections.splice(index, 1);
                    Swal.fire(
                        'Deleted!',
                        'The Role has been deleted.',
                        'success'
                    )
                }
            })

        },
    },
    created(){
        this.fetchSteroidHormone();
    },
    filters:{
        formatDob(value){
            return moment(value).format('MMMM Do, YYYY');
        },
        formatDate(value){
            return moment(value).format('YYYY-MMMM-DD HH:mm');
        }
    }
}
</script>
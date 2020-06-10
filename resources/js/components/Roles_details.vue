<template>
    <v-container>
        <vue-topprogress ref="topProgress" color="#00C851" colorShadow="#00C851" height="5" errorColor="#CC0000"></vue-topprogress>
        <v-card outlined>
            <v-card-title v-if="role">
                <v-btn dark depressed tile class="success darken-3 px-6" @click="deleteItem(role)">
                    <span class="caption">delete role</span>
                </v-btn>
                <v-spacer />
                <v-btn dark depressed tile class="red darken-3 px-6" @click="goback">
                    <span class="caption">Back</span>
                </v-btn>
            </v-card-title>
            <v-divider />
            <v-card-text >
                <v-row>
                    <v-col cols="12" md="3" sm="6" class="d-flex flex-column align-center justify-center">
                        <v-avatar size="120" v-if="role">
                            <v-img :src="getImage(role)" />
                        </v-avatar>
                        <p class="subtitle-2 mt-5 mb-1" v-if="role">Role Name: <span class="font-weight-bold">{{role.name}}</span></p>
                        <p class="caption">Number of Staff: <span class="font-weight-bold" v-if="role">{{role.users.length}}</span></p>
                    </v-col>
                    <v-col cols="12" md="9" sm="6" class="">
                        <v-responsive>
                            <v-img src="/app_asset/undraw_multitasking_hqg3.svg" width="30%" class="mx-auto" />
                        </v-responsive>
                        <p class="subtitle-1 black--text mt-5 text-center" v-if="role">{{role.description}}</p>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>

        <v-card outlined class="mt-5">
            <v-card-title>
                <span class="subtitle-2 font-weight-regular text-uppercase mt-2">Staff Lists</span>
                <v-spacer></v-spacer>
                <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
            </v-card-title>
            <v-divider/>
            <v-card-text v-if="role">
                <v-data-table
                    :headers="headers"
                    :items="staff"
                    :search="search"
                >
                   <template v-slot:item.name="{ item }">
                        <v-avatar size="30">
                            <v-img :src="getStaffImage(item)" />
                        </v-avatar>
                        <span class="subtitle-2 font-weight-bold mx-2">{{item.title}} {{item.firstname}} {{item.lastname}}</span>
                    </template>
                    <template v-slot:item.email="{ item }">
                        <span class="subtitle-2 font-weight-bold">{{item.email}}</span>
                    </template>
                    <template v-slot:item.phone="{ item }">
                        <span class="subtitle-2 font-weight-bold">{{item.phone}}</span>
                    </template>
                    <template v-slot:item.email="{ item }">
                        <span class="subtitle-2 font-weight-bold">{{item.email}}</span>
                    </template>
                    <template v-slot:item.job_title="{ item }">
                        <span class="subtitle-2 font-weight-bold">{{item.job_title}}</span>
                    </template>
                    <template v-slot:item.age="{ item }">
                        <span class="subtitle-2 font-weight-bold">{{item.age}} years</span>
                    </template>
                    <template v-slot:item.gender="{ item }">
                        <span class="subtitle-2 font-weight-bold">{{item.gender}}</span>
                    </template>
                </v-data-table>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props:{
        id:[Number]
    },
    data:() => ({
        search: '',
        headers: [
          { text: 'Staff Profile', align: 'start', sortable: false, value: 'name'},
          { text: 'Email', value: 'email' },
          { text: 'Contact', value: 'phone' },
          { text: 'Job Title', value: 'job_title' },
          { text: 'Age', value: 'age' },
          { text: 'Sex', value: 'gender' },
        ],
        staff:[],
    }),
    computed:{
        ...mapGetters(['getAllRoles']),
        role(){
            return this.getAllRoles.find(item => item.id == this.id);
        }
    },
    methods:{
        goback(){
            this.$router.go(-1);
        },
        getImage(item){
            if(item.id === 1){
                return '/app_asset/doctor.jpg'
            }else if(item.id === 2){
                return '/app_asset/nurse.jpg'
            }else if(item.id === 3){
                return '/app_asset/pharmacist.jpg'
            }else if(item.id === 4){
                return '/app_asset/lab tech.jpg'
            }else if(item.id === 5){
                return '/app_asset/manager.png'
            }else{
                return '/app_asset/image placeholder.png'
            }
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
                    axios.delete('/api/delete_role/'+item.id).then(response => {
                        this.goback();
                    });
                    Swal.fire(
                        'Deleted!',
                        'The Role has been deleted.',
                        'success'
                    )
                }
            })

    },
    getStaffImage(item){
        if(item.image){
            return '/staff/profiles/' + item.image;
        }else{
            if(item.gender === 'Male'){
                return '/app_asset/male-profile-2.jpg'
            }else{
                return '/app_asset/female-avatar.jpg'
            }
        }
    }
},
mounted(){
    this.$refs.topProgress.start();
    setInterval(() => {
      this.$refs.topProgress.done();
    }, 1000);
    if(this.role){
        this.staff = this.role.users;
    }
}
}
</script>
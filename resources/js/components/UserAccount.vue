<template>
    <div class="mt-5">
        <v-container>
            <v-row class="px-5 d-flex flex-column mt-3">
                <section class="d-flex justify-space-between">
                    <span class="subtitle-1 font-weight-bold mt-4">User Profile</span>

                    <div>
                        <v-btn tile depressed dark class="red darken-2 px-5 ml-auto ma-2" @click="goback">
                            <span class="caption">back</span>
                        </v-btn>
                        <v-btn tile depressed dark class="success darken-2 px-5 ml-auto ma-2" @click.stop="UpdateRoledialog = true">
                            <span class="caption">update role</span>
                        </v-btn>
                    </div>
                </section>
                <v-card class="mt-4" flat>
                    <v-card-text>
                        <v-row>
                            <v-col cols="3" class="d-flex flex-column justify-center align-center">
                                <v-avatar size="120" v-if="staff">
                                    <v-img :src="getProfile(staff)"/>
                                </v-avatar>
                                <h5 class="subtitle-1 font-weight-bold mt-2" v-if="staff">{{staff.title}} {{staff.firstname}} {{staff.lastname}}</h5>
                                <h5 class="subtitle-2 font-weight-bold grey--text">Status: {{formatStatus}}</h5>
                                <v-chip class="ma-2" color="teal" text-color="white">
                                <v-avatar left>
                                    <v-icon>mdi-account-circle</v-icon>
                                </v-avatar>
                                <span>{{format_status(staff)}}</span>
                                </v-chip>
                            </v-col>
                            <v-col cols="9">
                                <div class="d-flex justify-space-between mb-3">
                                    <p class="grey--text darken-5 font-weight-light subtitle-2 mb-1 mt-2">User Profile</p>
                                    <v-btn rounded elevation="10" class="red darken-3 px-7" dark small @click="deleteItem(staff)">
                                        <span class="overline">delete account</span>
                                    </v-btn>
                                </div>
                                <v-divider />
                                <v-row class="mt-4">
                                    <v-col cols="4">
                                        <h5 class="subtitle-2">Gender: <span class="font-weight-bold" v-if="staff">{{staff.gender}}</span></h5>
                                    </v-col>
                                    <v-col cols="4">
                                        <h5 class="subtitle-2">Date of Birth: <span class="font-weight-bold" v-if="staff">{{staff.dob | formatDate}}</span></h5>
                                    </v-col>
                                    <v-col cols="4">
                                        <h5 class="subtitle-2">Phone Number: <span class="font-weight-bold" v-if="staff">{{formatContact(staff.phone)}}</span></h5>
                                    </v-col>
                                </v-row>
                                <v-divider />
                                <v-row class="mt-4">
                                    <v-col cols="4">
                                        <h5 class="subtitle-2">Email: <span class="font-weight-bold" v-if="staff">{{staff.email}}</span></h5>
                                    </v-col>
                                    <v-col cols="4">
                                        <h5 class="subtitle-2">Job Title: <span class="font-weight-bold" v-if="staff">{{staff.job_title}}</span></h5>
                                    </v-col>
                                    <v-col cols="4">
                                        <h5 class="subtitle-2">Role: 
                                            <span class="font-weight-bold" v-if="staff">{{staff.role.name}}</span>
                                            <v-avatar size="30">
                                                <v-img :src="getImage" />
                                            </v-avatar>
                                        </h5>
                                    </v-col>
                                </v-row>
                                <v-divider />
                                <v-row class="mt-4">
                                    <v-col cols="4">
                                        <h5 class="subtitle-2" v-if="staff">Username: <span class="font-weight-bold">{{staff.username}}</span></h5>
                                    </v-col>
                                    <v-col cols="3">
                                        <h5 class="subtitle-2">Age: <span class="font-weight-bold" v-if="staff">{{staff.age}}</span></h5>
                                    </v-col>
                                    <v-col cols="5" class="d-flex justify-end pa-0">
                                        <v-btn class="ma-2 px-4" tile color="red darken-2" depressed dark @click="deactivate" v-if="staff.status == 1">
                                            <span class="text-lowercase caption">Deactivate</span>    
                                        </v-btn>
                                        <v-btn class="ma-2 px-4" tile color="success darken-2" depressed dark @click="activate" v-else>
                                            <span class="text-lowercase caption">activate</span>    
                                        </v-btn>
                                    </v-col>
                                </v-row>
                                <v-divider />
                            </v-col>
                        </v-row>
                        <v-row class="px-5 d-flex flex-column mt-5">
                            <span class="subtitle-1 font-weight-bold mt-4 black--text text-uppercase">Biography</span>
                            <v-divider />
                            <div v-if="staff">
                                <template v-if="staff.Biodata">
                                    <p class="subtitle-2 font-weight-regular">{{staff.Biodata}}</p>
                                </template>  
                                <template v-else>
                                    <p class="subtitle-2 font-weight-bold font-italic grey--text darken-5">Staff Biography Information Not Available!!!</p>
                                </template>    
                            </div>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-row>

            <v-dialog v-model="UpdateRoledialog" width="300">
                <v-card>
                    <v-card-title class="subtitle-1 text-uppercase font-weight-bold" primary-title>
                    Update Role
                    </v-card-title>
                    <v-spacer></v-spacer>
                    <v-card-text>
                        <v-radio-group v-model="staffRow">
                            <template v-for="item in getAllRoles">
                                <v-radio :value="item.id" :key="item.id">
                                    <template v-slot:label>
                                        <div class="font-weight-bold mt-1">{{item.name}}</div>
                                    </template>
                                </v-radio>
                            </template>    
                        </v-radio-group>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="UpdateRole">update</v-btn>
                    <v-btn color="grey" text @click="UpdateRoledialog = false">cancel</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-container>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import {Toast} from '../app';

export default {
    data: () => ({
        UpdateRoledialog: false,
        staffRow: null,
    }),
    props:{
        id: [Number]
    },
    created(){
        this.getStaffRole;
    },
    computed:{
        ...mapGetters(['allStaff', 'getAllRoles']),
        staff(){
            return this.allStaff.find(staff => staff.id == this.id);
        },
        getStaffRole(){
            if(this.staff){
                this.staffRow = this.staff.role.id
            }
        },
        formatStatus(){
            if(this.staff.status == 1){
                return 'Active'
            }else{
                return 'Inactive'
            }
        },
        getColor(){
            if(this.staff.status == 1){
                return 'success darken-1'
            }else{
                return 'red darken-1'
            }
        },
        getImage(){
            if(this.staff){
                if(this.staff.role_id === 1){
                    return '/app_asset/doctor.jpg'
                }else if(this.staff.role_id === 2){
                    return '/app_asset/nurse.jpg'
                }else if(this.staff.role_id === 3){
                    return '/app_asset/pharmacist.jpg'
                }else if(this.staff.role_id === 4){
                    return '/app_asset/lab tech.jpg'
                }else if(this.staff.role_id === 5){
                    return '/app_asset/manager.png'
                }
            }
            }
    },
    filters:{
        formatDate(value){
            return moment(value).format('MMMM Do, YYYY');
        },
        formatContact(value){
            return '(+233)' + ' ' + value;
        }
    },
    methods:{
        ...mapActions(['fetchStaff']),
        formatContact(contact){
            return '(+233)' + ' ' + contact.slice(1, 10);
        },
        goback(){
            this.$router.go(-1);
        },
        UpdateRole(){
            if(this.staffRow !== null ){
                axios.patch('/api/updateRole/'+this.id, {role: this.staffRow}).then(response => {
                    if(response.data.success){
                        this.fetchStaff();
                        this.UpdateRoledialog = false;
                        Toast.fire({
                            icon: 'success',
                            title: 'Role Updated'
                        });
                    }
                })
            }
        },
        deactivate(){
            Swal.fire({
                title: 'Are you sure?',
                text: "You are making changes to this account!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, deactivate!'
            }).then((result) => {
                if (result.value) {
                    axios.post('/api/deactivate', {id: this.staff.id}).then(response => {});
                    this.fetchStaff();
                    Swal.fire(
                        'Deactivated!',
                        'The account has been deactivated.',
                        'success'
                    )
                }
            })
        },
        activate(){
            Swal.fire({
                title: 'Are you sure?',
                text: "You are making changes to this account!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#007E33',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, activate!'
            }).then((result) => {
                if (result.value) {
                    axios.post('/api/activate', {id: this.staff.id}).then(response => {});
                    this.fetchStaff();
                    Swal.fire(
                        'Activated!',
                        'The account has been activated.',
                        'success'
                    )
                }
            })
        },
        getProfile(staff){
            if(staff.image){
                return '/staff/profiles/' + staff.image;
            }else{
                if(staff.gender === 'Male'){
                    return '/app_asset/male-profile-2.jpg'
                }else{
                    return '/app_asset/female-avatar.jpg'
                }
            }
        },

        format_status(staff){
            if(staff.status == 1){
                return 'Active'
            }else{
                return 'Inactive'
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
                    axios.delete('/api/delete_staff/'+item.id).then(response => {
                        Swal.fire(
                            'Deleted!',
                            'The account has been deleted.',
                            'success'
                        )
                        this.goback();
                    });
                }
            })
      },
    }
    
}
</script>


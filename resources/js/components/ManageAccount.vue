<template>
	<v-container class="mt-5 pa-3">
		<vue-topprogress ref="topProgress" color="#00C851" colorShadow="#00C851" :height="5" errorColor="#CC0000"></vue-topprogress>
		<v-row class="px-5">
            <div class="d-flex flex-column">
                <h5 class="title font-weight-bold">All Staff</h5>
                <span class="subtitle-2 font-weight-regular grey--text">Compiled list of All Staff Records available at one place</span>
            </div>
            <div class="ml-auto d-flex flex-column justify-end">
                <span class="subtitle-2" v-if="allStaff"><v-icon color="success darken-2">mdi-account-group</v-icon> Number of Staff: <span class="font-weight-bold black--text">{{allStaff.length}}</span></span>
                <v-menu transition="slide-x-transition" bottom right>
                    <template v-slot:activator="{ on }">
                        <v-btn class="ma-2 px-5" small outlined color="success darken-2" dark v-on="on">
                            <span class="caption text-center">sort by</span>
                            <v-icon right size="15">mdi-chevron-down</v-icon>
                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item @click="fetch_doctors">
                            <v-list-item-title class="caption">Doctor</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="fetch_nurses">
                            <v-list-item-title class="caption">Nurse</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="fetch_lab_techs">
                            <v-list-item-title class="caption">Lab Technician</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="fetch_pharmacists">
                            <v-list-item-title class="caption">Pharmacist</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="fetch_managers">
                            <v-list-item-title class="caption">Clinic Manager</v-list-item-title>
                        </v-list-item>
						<v-list-item @click="fetchStaff">
                            <v-list-item-title class="caption">All</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div> 
       
        </v-row>
        <v-row class="mt-10 px-5">
            <v-btn tile depressed class="success darken-2 px-5" @click="dialog = true">
				<v-icon left size="20">mdi-account</v-icon>
				<span class="caption">New Staff</span>
			</v-btn>
            <v-spacer />
            <v-text-field class="subtitle-2" v-model="search" color="success darken-2" placeholder="Search by Name..." label="Staff Info" outlined clearable dense style="width: 5% !important;"></v-text-field>
        </v-row>
        <v-divider inset />
        <v-row class="mt-3" v-if="allStaff.length">
            <v-col cols="6" md="3" sm="4" v-for="staff in filteredStaff" :key="staff.id" class="staff_col">
                <v-card outlined hover max-height="100vh">
                    <v-card-text class="px-3 py-5">
                        <v-row>
                            <v-col cols="4">
                                <v-avatar size="50">
                                    <v-img :src="getImage(staff)" />
                                </v-avatar>
                            </v-col>
                            <v-col cols="8" class="d-flex flex-column">
                                <span class="subtitle-2 font-weight-bold black--text text-no-wrap d-inline-block text-truncate">{{staff.title}} {{staff.firstname}} {{staff.lastname}}</span>
                                <div class="mt-1 d-flex flex-column">
                                    <span class="subtitle-2 font-weight-bold">{{staff.role.name}}</span>
                                    <span class="caption font-weight-bold mt-1">Status: <span class="success--text">{{formatStatus(staff.status)}}</span></span>    
                                </div>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-divider class="my-0" />
                    <v-card-text class="py-1 px-5">
                        <v-row>
                            <v-col cols="7" class="px-2">
                                <span class="subtitle-2 font-weight-light black--text text-no-wrap d-inline-block text-truncate">{{staff.job_title}}</span>
                            </v-col>
                            <v-col cols="5">
                                <span class="caption font-weight-bold grey--text">{{staff.gender}}</span>
                                <v-icon color="pink">{{formatGender(staff.gender)}}</v-icon>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-divider class="my-0" />
                    <v-card-text class="d-flex justify-center">
                        <v-btn color="info darken-2" class="mr-2" depressed small dark @click="getid(staff)">
                            <v-icon size="14" left>mdi-account-details</v-icon>
                            <span class="caption">Details</span>
                        </v-btn>
                        
                        <v-btn color="red darken-3" class="mr-2" depressed small dark @click="deleteItem(staff)">
                            <v-icon size="14" left>mdi-close</v-icon>
                            <span class="caption">delete</span>
                        </v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

		<v-row v-else>
			<v-col cols="12">
				<v-card style="border-top: 4px solid green;">
					<v-card-text class="d-flex">
						<v-responsive max-width="30%">
							<v-img src="/app_asset/undraw_void_3ggu.svg" width="60%" class="mx-auto" />
						</v-responsive>
						<span class="text-center grey--text font-weight-bold subtitle-1 font-italic mx-5" style="margin-top: 80px;">No Staff(s) Data Available !!!</span>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>

		<v-dialog v-model="loading_dialog" hide-overlay persistent width="300">
			<v-card color="success darken-2" dark flat>
				<v-card-text>
				<span class="subtitle-2 font-weight-bold font-italic white--text">Adding staff account...</span>  
				<v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
				</v-card-text>
			</v-card>
		</v-dialog>

		<v-dialog v-model="dialog" width="700" scrollable persistent>
			<v-card>
				<v-card-title class="subtitle-1 font-weight-bold" primary-title>New Staff</v-card-title>
				<v-divider />
				<v-card-text class="mt-4" style="height: 600px;">
					<v-form ref="staffform" v-model="valid">
						<v-row>
							<v-col cols="12" sm="6" md="4">
								<v-select dense color="success darken-1" v-model.trim="editedItem.title" :rules="titleRules" :items="titleOptions" label="Title" outlined />
							</v-col>
							<v-col cols="12" sm="6" md="4">
								<v-text-field color="success darken-1" outlined dense :rules="nameRules" v-model.trim="editedItem.firstname" label="First Name"></v-text-field>
							</v-col>
							<v-col cols="12" sm="6" md="4">
								<v-text-field color="success darken-1" outlined dense :rules="nameRules" v-model.trim="editedItem.lastname" label="Last Name"></v-text-field>
							</v-col>
							<v-col cols="12" sm="6" md="4">
								<v-text-field color="success darken-1" outlined dense :rules="nameRules" v-model.trim="editedItem.username" label="Username"></v-text-field>
							</v-col>
							<v-col cols="12" sm="6" md="4">
								<v-dialog ref="dob_dialog" v-model.trim="dob_modal" :return-value.sync="editedItem.dob" persistent width="290px">
									<template v-slot:activator="{ on }">
										<v-text-field dense outlined label="DOB" color="success" :rules="dobRules" v-model.trim="editedItem.dob" v-on="on"></v-text-field>
									</template>
									<v-date-picker v-model="editedItem.dob" scrollable>
									<v-spacer></v-spacer>
									<v-btn text color="primary" @click="dob_modal = false">Cancel</v-btn>
									<v-btn text color="primary" @click="$refs.dob_dialog.save(editedItem.dob)">OK</v-btn>
									</v-date-picker>
								</v-dialog>
							</v-col>
							<v-col cols="12" sm="6" md="4">
								<v-text-field color="success darken-1" outlined dense :rules="emailRules" v-model.trim="editedItem.email" label="Email"></v-text-field>
							</v-col>
							<v-col cols="12" sm="6" md="4">
								<v-text-field color="success darken-1" outlined dense :rules="phoneRules" :counter="10" v-model.trim="editedItem.phone" label="Phone Number"></v-text-field>
							</v-col>
							<v-col cols="12" sm="6" md="4">
								<v-text-field color="success darken-1" outlined dense :rules="ageRules" v-model.trim="editedItem.age" label="Age"></v-text-field>
							</v-col>
							<v-col cols="12" sm="6" md="4">
								<v-select dense color="success darken-1" v-model.trim="editedItem.gender" :rules="genderRules" :items="genderOptions" label="Gender" outlined />
							</v-col>
							<v-col cols="12" sm="6" md="6">
								<v-text-field color="success darken-1" outlined dense :rules="addressRules" v-model.trim="editedItem.address" label="Address"></v-text-field>
							</v-col>

							<v-col cols="12" sm="6" md="6">
								<v-text-field color="success darken-1" outlined dense :rules="jobRules" v-model.trim="editedItem.job_title" label="Job Title"></v-text-field>
							</v-col>
							
							<v-col cols="12" class="d-flex">
								<label for="status" class="mt-7 mr-3 subtitle-1 font-weight-bold">Role:</label>
								<v-radio-group v-model="editedItem.role" row :rules="roleRules">
									<template v-for="item in getAllRoles">
										<v-radio :value="item.id" :key="item.id" class="ma-2" color="success darken-1">
											<template v-slot:label>
												<div class="mt-1 subtitle-2 font-weight-bold">{{item.name}}</div>
											</template>
										</v-radio>
									</template>    
								</v-radio-group>
							</v-col>
							<v-col cols="12" sm="12" md="12" class="d-flex">
								<label for="status" class="mt-5 mr-3 subtitle-1 font-weight-bold">Status:</label>
								<v-radio-group v-model="editedItem.status" row :rules="statusRules">
									<v-radio label="Active" value=1 color="success darken-1" class="font-weight-bold subtitle-2"></v-radio>
									<v-radio label="Inactive" value=0 color="red" class="font-weight-bold subtitle-2"></v-radio>
								</v-radio-group>
							</v-col>
						</v-row>
				</v-form>
				</v-card-text>

				<v-divider></v-divider>

				<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="success darken-2" depressed dark tile class="px-4 ma-2" @click="save">
					<span class="caption">save</span>
				</v-btn>
				<v-btn color="red darken-3" depressed dark tile class="px-4 ma-2" @click="close">
					<span class="caption">close</span>
				</v-btn>
				</v-card-actions>
			</v-card>
    </v-dialog>
	</v-container>
</template>

<script>

import {Toast} from '../app';
import { mapGetters, mapActions } from 'vuex';

  export default {
    data: () => ({
		loadingTable: false,
		loading_dialog: false,
		dob_modal: false,
		valid: false,
		loadingData:false,
      search: '',
      dialog: false,
      genderOptions: [
      	'Male',
      	'Female'
		],
		titleOptions: [
			'Mr',
			'Mrs',
			'Miss',
			'Dr'
		],
		nameRules: [
        	(v) => !!v || 'Name is required',
		],
		ageRules: [
        	(v) => !!v || 'Age is required',
		],
		statusRules: [
        	(v) => !!v || 'Status is required',
		],
		dobRules: [
        	(v) => !!v || 'Dob is required',
		],
		roleRules: [
        	(v) => !!v || 'Role is required',
		],
		jobRules: [
        	(v) => !!v || 'Job Title is required',
		],
		addressRules: [
        	(v) => !!v || 'Address Title is required',
		],
		genderRules: [
        	(v) => !!v || 'Gender is required',
		],
		titleRules: [
        	(v) => !!v || 'Title is required',
		],
		phoneRules: [
			(v) => !!v || 'Phone number is required',
			(v) => (v && v.length === 10) || 'Phone Number must be equal to 10 characters',
		],
		emailRules: [
			(v) => !!v || 'E-mail is required',
			(v) => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
	rolesOptions: [],
      headers: [
		{ text: 'Profile', align: 'start', value: 'image'},
        { text: 'Full Name', align: 'start', sortable: false, value: 'name'},
        { text: 'Email', value: 'email', align: 'center', },
        { text: 'Phone Number', value: 'phone' },
        { text: 'Age', value: 'age' },
        { text: 'Genger', value: 'gender' },
        { text: 'Job Title', value: 'role.name' },
        { text: 'Status', value: 'status', align: 'center'},
        { text: 'Actions', value: 'actions', align: 'center',},
      ],
      staff: [],
      editedIndex: -1,
      editedItem: {
		title: '',
		username: '',
		firstname: '',
		lastname: '',
        email: '',
        phone: '',
        age: '',
		dob:'',
		gender: '',
		address: '',
        role:null,
		status: null,
		job_title: '',
      }
    }),

    computed: {
		...mapGetters(['allStaff', 'getAllRoles']),
      formTitle () {
        return this.editedIndex === -1 ? 'New Staff' : 'Edit Staff Info'
	  },
	  filteredStaff(){
		  return this.allStaff.filter(staff => {
			  return staff.firstname.toLowerCase().match(this.search.toLowerCase()) || staff.lastname.toLowerCase().match(this.search.toLowerCase());
		  })
	  }
    },

    watch: {
      dialog (val) {
        val || this.close();
	},
	allStaff(){
		if(this.allStaff){
			this.$refs.topProgress.done();
			this.loadingTable = false;
		}else{
			this.$refs.topProgress.done();
			this.loadingTable = false;
		}
	},
	getAllRoles(){
		if(this.getAllRoles){
			this.rolesOptions=this.getAllRoles;
		}
	}
    },

    created () {
		this.fetchStaff();
		this.getRoles();
		this.loadingTable = true;
	},
	  mounted () {
		this.$refs.topProgress.start()

	},

    methods: {
		...mapActions(['fetchStaff', 'getRoles', 'newStaff', 'fetch_doctors', 'fetch_nurses', 'fetch_lab_techs', 'fetch_managers', 'fetch_pharmacists']),

		getid(item){
			this.$router.push({ name: 'useraccount', params: { id: item.id } })
		},

		editItem (item) {
		this.editedIndex = this.staff.indexOf(item)
		this.editedItem = Object.assign({}, item)
		this.dialog = true
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
				const index = this.allStaff.indexOf(item)
				this.allStaff.splice(index, 1)
				Swal.fire(
					'Deleted!',
					'The account has been deleted.',
					'success'
				)
				});
			}
		})
      },

      close () {
		this.dialog = false
		this.$refs.staffform.reset();
		this.$refs.staffform.resetValidation();
      },

      save () {
        if(this.$refs.staffform.validate()){
			this.$refs.topProgress.start()
			this.loading_dialog = true;
			axios.post('/api/store_staff', {staff: this.editedItem}).then(response => {
				if(response.data.success){
					this.$refs.topProgress.done();
					this.loading_dialog = false;
					this.fetchStaff();
					// this.newStaff(response.data.user);
					this.dialog = false;
					Toast.fire({
						icon: 'success',
						title: 'New Staff Account Created'
					});
				}
				if(response.data.username_error){
					this.$refs.topProgress.fail()
					this.loading_dialog = false;
					Toast.fire({
						icon: 'error',
						title: response.data.username_error
					});
				}
				if(response.data.email_error){
					this.$refs.topProgress.fail()
					this.loading_dialog = false;
					Toast.fire({
						icon: 'error',
						title: response.data.email_error
					});
				}
				if(response.data.contact_error){
					this.$refs.topProgress.fail()
					this.loading_dialog = false;
					Toast.fire({
						icon: 'error',
						title: response.data.contact_error
					});
				}
			});
		}else{
			Swal.fire(
				'No Data!',
				'Enter Data before submission',
				'info'
			)
		}
      },
      getColor(status){
      	if(status === 1){
      		return 'success'
      	}else{
      		return 'red'
      	}
      },
      getGenderColor(gender){
      	if(gender === 'Male'){
      		return 'primary'
      	}else{
      		return 'success'
      	}
      },
      formatStatus(status){
      	if(status === 1){
      		return 'Active'
      	}else{
      		return 'Inactive'
      	}
      },
	formatGender(gender){
      	if(gender == 'Male'){
      		return 'mdi-gender-male'
      	}else{
      		return 'mdi-gender-female'
      	}
      },
      deactivateUser(status){
      	if(status === 'Inactive'){
      		return true;
      	}
	  },
	  getImage(item){
		  if(item.image){
			  return '/staff/profiles/' + item.image;
		  }else{
			if(item.gender === "Male"){
				return '/app_asset/male-profile-2.jpg'
			}else{
				return '/app_asset/female-avatar.jpg'
			}
		  }
	  },
    },
  }
</script>

<style scoped>
	.status_chip{
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.10);
	}
	.cancelAccount{
		text-decoration: line-through;
	}
</style>

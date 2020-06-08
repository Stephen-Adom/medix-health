<template>
	<v-container class="mt-5 pa-3">
		<vue-topprogress ref="topProgress" color="#00C851" colorShadow="#00C851" :height="5" errorColor="#CC0000"></vue-topprogress>
		<v-row class="px-5">
            <div class="d-flex flex-column">
                <h5 class="title font-weight-bold">All Active Roles</h5>
                <span class="subtitle-2 font-weight-regular grey--text">Compiled list of All Role Records available at one place</span>
				<span class="subtitle-2 mt-1" v-if="getAllRoles"><v-icon color="success darken-2">mdi-account-group</v-icon> Number of Roles: <span class="font-weight-bold black--text">{{getAllRoles.length}}</span></span>
            </div>
			<v-spacer />
			<v-btn tile depressed class="success darken-2 px-7" @click="new_role">
				<v-icon left size="18">mdi-account-tie</v-icon>
				<span class="caption">Add Role</span>
			</v-btn>
        </v-row>
        <v-row class="mt-10 px-5">
            <span class="subtitle-1 mt-3">Looking for a role?</span>
            <v-spacer />
            <v-text-field class="subtitle-2" v-model="search_role" color="success darken-2" placeholder="Search by Name..." label="Role Info" outlined clearable dense style="width: 5% !important;"></v-text-field>
        </v-row>
        <v-divider inset />
        <v-row class="mt-3" v-if="getAllRoles.length">
            <v-col cols="6" md="3" sm="4" v-for="role in filteredRoles" :key="role.id">
                <v-card outlined hover>
                    <v-card-text class="px-3 d-flex py-2 justify-center">
                        <v-avatar size="70">
                            <v-img :src="getImage(role)" />
                        </v-avatar>
                    </v-card-text>
                    <v-card-text class="pa-1 d-flex flex-column justify-center align-center">
                        <h5 class="subtitle-1 font-weight-bold primary--text darken-5">{{role.name}}</h5>
                        <h5 class="subtitle-2 grey--text darken-5">Number of Users: <span class="font-weight-bold black--text">{{role.users.length}}</span></h5>
                    </v-card-text>
                    <v-divider />
                    <v-card-text class="d-flex justify-center">
                        <v-btn fab depressed dark class="info darken-2 px-5 ma-2" small @click="detail_page(role)">
                            <v-icon size="18">mdi-account-details</v-icon>
                        </v-btn>
                        <v-btn fab depressed dark class="warning darken-1 px-5 ma-2" small @click="editItem(role)">
                            <v-icon size="18">mdi-pencil</v-icon>
                        </v-btn>
                        <v-btn fab depressed dark class="red darken-3 px-5 ma-2" small @click="deleteItem(item)">
                            <v-icon size="18">mdi-close</v-icon>
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
						<span class="text-center grey--text font-weight-bold subtitle-1 font-italic mx-5" style="margin-top: 80px;">No Role(s) Data Available !!!</span>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>

		<v-dialog v-model="loading_dialog" hide-overlay persistent width="300">
			<v-card color="success darken-2" dark flat>
				<v-card-text>
				<span class="subtitle-2 font-weight-regular font-italic white--text">Updating Roles...</span>  
				<v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
				</v-card-text>
			</v-card>
		</v-dialog>

		<v-dialog v-model="dialog" width="550">
			<v-card>
				<v-card-title class="subtitle-1 font-weight-bold" primary-title>New Role</v-card-title>
				<v-divider />
				<v-card-text class="mt-3">
					<v-form ref="Roleform" v-model="valid" lazy-validation>
						<v-text-field v-model="editedItem.name" name="name" :rules="nameRules" label="Name of Role" placeholder="Doctor" class="subtitle-2" outlined></v-text-field>
						<v-textarea outlined name="description" v-model="editedItem.description" :rules="nameRules" class="subtitle-2" label="Role Description" placeholder="Input additional Information about Role"></v-textarea>
					</v-form>
				</v-card-text>

				<v-divider></v-divider>

				<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="success darken-2" dark tile depressed class="px-4" @click="submitRole" v-if="editedIndex === -1">
					<span class="caption">add</span>
				</v-btn>
				<v-btn color="info darken-2" dark tile depressed class="px-4" @click="updateRole" v-if="editedIndex === 0">
					<span class="caption">update</span>
				</v-btn>
				<v-btn color="red darken-2" dark tile depressed class="px-4" @click="close">
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
	loading_dialog: false,
	loadingData:false,
	valid: false,
      search_role: '',
      dialog: false,
      editedIndex: -1,
      editedItem: {
		name: '',
		description: '',
      },
		nameRules: [
        (v) => !!v || 'Name is required',
      ],
    }),
    computed: {
		...mapGetters(['getAllRoles']),

	  filteredRoles(){
		  return this.getAllRoles.filter(role => {
			  return role.name.toLowerCase().match(this.search_role.toLowerCase());
		  })
	  }

    },
    watch: {
      dialog (val) {
        val || this.close()
		},
	getAllRoles(){
		if(this.getAllRoles){
			this.$refs.topProgress.done();
			this.loadingData = false;
		}else{
			this.$refs.topProgress.done();
		}
	}
    },

    created () {
		this.loadingData = true;
		this.getRoles();
	},
	mounted(){
		this.$refs.topProgress.start();
	},
    methods: {
		new_role(){
			this.dialog = true;
		},
      editItem (item) {
		this.editedIndex = 0;
		this.editedItem = Object.assign({}, item);
		this.dialog = true;
	},
	updateRole(){
		if(this.$refs.Roleform.validate()){
			this.$refs.topProgress.start();
			this.loading_dialog = true;
			axios.post('/api/edit_role', {roles: this.editedItem}).then(response => {
				if(response.data.success){
					this.$refs.topProgress.done();
					this.loading_dialog = false;
					this.getRoles();
					this.$refs.Roleform.reset();
					this.dialog = false;
					Toast.fire({
						icon: 'success',
						title: 'Role Updated'
					});
				}
			});
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
				this.$refs.topProgress.start();
				const index = this.roles.indexOf(item);
				this.roles.splice(index, 1);
				axios.delete('/api/delete_role/'+item.id).then(response => {
					this.$refs.topProgress.done();
				});
				Swal.fire(
					'Deleted!',
					'The Role has been deleted.',
					'success'
				)
			}
		})

	},

      close () {
		this.dialog = false;
		this.$refs.Roleform.reset();
		this.$refs.Roleform.resetValidation();
		setTimeout(() => {
			this.editedItem = Object.assign({}, this.defaultItem)
			this.editedIndex = -1
		}, 300)
	},
      getColor(status){
      	if(status === 'Active'){
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
      	if(status === 'Active'){
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
	submitRole(){
		if(this.$refs.Roleform.validate()){
			this.$refs.topProgress.start();
			this.loading_dialog = true;
			axios.post('/api/create_role', {roles: this.editedItem}).then(response => {
				if(response.data.error){
					this.$refs.topProgress.fail();
					this.loading_dialog = false;
					this.dialog = true;
					Toast.fire({
						icon: 'error',
						title: 'Error found'
					});
				}
				if(response.data.success){
					this.$refs.topProgress.done();
					this.loading_dialog = false;
					this.getRoles();
					this.$refs.Roleform.reset();
					this.$refs.Roleform.resetValidation();
					this.dialog = false;
					Toast.fire({
						icon: 'success',
						title: 'New Role Added'
					});
				}
			})
		};
	},
	...mapActions(['getRoles']),

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
	detail_page(role){
		this.$router.push({name: 'roles_details', params:{id: role.id}});
	}
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

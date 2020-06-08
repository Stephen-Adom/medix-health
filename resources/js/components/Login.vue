<template>
  	<v-container fluid id="home-body" class="pt-0 fill-height">
		<vue-topprogress ref="topProgress" color="#00C851" colorShadow="#00C851" :height="5" errorColor="#CC0000"></vue-topprogress>
		<v-row align="center" justify="center">
			<v-col cols="12" lg="6" md="6" style="text-align: center;">
				<v-card elevation="5" class="px-3 py-5 mx-auto" max-width="473">
					<v-img src="/app_asset/medix_full.png" width="30%" class="mx-auto"></v-img>
					<h5 class="success--text darken-4 text-uppercase mt-2 subtitle-2 font-weight-bold">Medix Digital Application</h5>
						<p class="black--text">Choose Account Type</p>
						<v-sheet class="mx-auto" max-width="490">
							<v-slide-group v-model="model" class="pa-4" show-arrows center-active>
								<v-slide-item v-for="(item,i) in items" :key="i" v-slot:default="{ active, toggle }">
							        <v-card
							          class="ma-4"
							          height="120"
							          width="120"
							          @click="toggle"
							          flat
							        >
							        <v-img :src="item.src" height="120" width="120" class="account_img">
							        	<v-row
							            class="fill-height"
							            align="center"
							            justify="center"
							          >
							            <v-scale-transition>
							            	<v-btn fab small v-if="active" class="account_active" color="success" dark>
							            		<v-icon
							            			size="18"
									                v-text="'mdi-check'"
									              ></v-icon>
							            	</v-btn>
							            </v-scale-transition>
					         		  </v-row>
							        </v-img>
							          
					        		</v-card>
					      		</v-slide-item>
							</v-slide-group>
							<v-expand-transition>
						      <v-sheet
						        v-if="model != null"
						        color="white"
						        tile
						      >
						        <v-row class="fill-height" align="center" justify="center">
					          		<v-col cols="12" lg="7">
					          			<h3 class="caption" style="font-size: 15px !important; font-weight: 500;">Hello <span class="font-weight-bold success--text darken-2">{{ getAccountName }}</span></h3>
					          			<small class="grey--text darken-5">Sign in to continue</small>
						          		<v-form class="account_login mt-2" v-model="valid">
						          			<v-text-field color="success" class="subtitle-2" outlined rounded dense placeholder="Username" append-icon="mdi-account" name="username" v-model="username" :rules="usernameValidation" required />

						          			<v-text-field color="success" class="subtitle-2" outlined rounded dense placeholder="Password" append-icon="mdi-key" name="password" v-model="password" :rules="passwordValidation" type="password" required />

						          			<v-btn color="success darken-2" tile large depressed :disabled="!valid" @click="submitLogin()">
						          				<v-icon size="20" class="pr-3">mdi-login</v-icon>
						          				<span class="caption">Login</span>
						          			</v-btn>
						          		</v-form>
					          		</v-col>
					        	</v-row>
					      	  </v-sheet>
					    	</v-expand-transition>
						</v-sheet>
				</v-card>
			</v-col>
			<v-col cols="12" lg="6" md="6" id="login_ui">
				<div>
					<h5 class="display-1 font-weight-bold my-4 welcome--text">Welcome to <span class="text-uppercase success--text darken-7">Medix</span></h5>
				</div>
				<v-img src="/app_asset/undraw_medicine_b1ol.svg" width="80%" />
				<div class="d-flex mt-10">
					<h5 class="subtitle-2 font-weight-bold text-uppercase ml-auto">{{getYear}} &copy;All Right Reserved.</h5>
				</div>
			</v-col>
		</v-row>

		<v-dialog v-model="loading_dialog" hide-overlay persistent width="300">
			<v-card color="success darken-2" dark flat>
				<v-card-text>
				<span class="subtitle-2 font-weight-bold font-italic white--text">authenticating...</span>  
				<v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
				</v-card-text>
			</v-card>
		</v-dialog>

		<section id="login_blob">
			<v-img src="/app_asset/blob-shape (2).svg" />
		</section>
	</v-container>
</template>

<script>
import {Toast} from '../app';

export default {
  data: () => ({
	  getYear: moment().format('YYYY'),
	  loading_dialog: false,
      model: null,
      valid: false,
      username: '',
	  usernameValidation: [
	      (v) => !!v || 'Username is required',
      ],
	  password: '',
	  passwordValidation: [
	      (v) => !!v || 'Passowrd is required',
	      (v) => v.length >= 8 || 'Password must be more than 8 characters'
	  ],
      items: [
          {
            src: '/app_asset/doctor.jpg'
          },
          {
            src: '/app_asset/nurse.jpg'
          },
          {
            src: '/app_asset/pharmacist.jpg'
          },
          {
            src: '/app_asset/lab tech.jpg'
          },
          {
            src: '/app_asset/manager.png'
          },
        ]
   }),
  	computed:{
  		getAccountName(){
  			switch(this.model){
  				case 0: return 'Doctor'
  				case 1: return 'Nurse'
  				case 2: return 'Pharmacist'
  				case 3: return 'Lab Technician'
  				case 4: return 'Clinical Manager'
  			}
  		}
      },
    methods:{
        submitLogin(){
			this.$refs.topProgress.start();
			this.loading_dialog = true;
            axios.post('/auth_login',{username:this.username, password:this.password, account:this.getAccountName}).then(response => {
                if(response.data.error){
					this.$refs.topProgress.fail();
					this.loading_dialog = false;
                    Toast.fire({
                        icon: 'error',
                        title: 'User Account Does not Exit'
                    });
                }
                if(response.data.warning){
					this.$refs.topProgress.fail();
					this.loading_dialog = false;
                    Toast.fire({
                        icon: 'error',
                        title: 'Wrong Credential for this account!'
                    });
                }
                if(response.data.info){
					this.$refs.topProgress.fail();
					this.loading_dialog = false;
                    Toast.fire({
                        icon: 'error',
                        title: 'Password Incorrect. Please retype password'
                    });
                }
                if(response.data.success){
					this.$refs.topProgress.done();
					this.loading_dialog = false;
                    this.$router.go('/home');
                    Toast.fire({
                        icon: 'success',
                        title: 'Signed in successfully',
                    });
                }
				if(response.data.blocked){
					this.$refs.topProgress.fail();
					this.loading_dialog = false;
                    Toast.fire({
                        icon: 'error',
                        title: 'Your Account has been blocked. Please contact the Manager',
                    });
                }
            })
        }
	},
	mounted(){
		this.$refs.topProgress.start();
		   // Use setTimeout for demo
		setTimeout(() => {
			this.$refs.topProgress.done();
		}, 2000);
	}
}
</script>

<style scoped>
.account_img{
	position: relative !important; 
}

.account_active{
	position: absolute !important;
	bottom: 0 !important;
	right: 0 !important;
	height: 30px !important;
	width: 30px !important;
}

.account_login:focus {
	color: green !important;
}

#home-body{
	position: relative;
	width: 100%;
	height: 100%;
}

#login_blob{
	position: absolute;
	right: 5px;
	top: 5px;
	width: 12%;
	background-image: url('/app_asset/blob-shape (2).svg');
	background-size: cover;
	background-position: center;
	z-index: 1;
}

.welcome--text::after{
	content: "";
	display: block;
	width: 10%;
	margin-top: 5px;
	height: 5px;
	background-color: green;
}

@media(max-width: 960px){
	#login_ui{
		display: none;
	}

	#login_blob{
		display: none;
	}
}
</style>
<template>
    <v-container style="width: 95%" class="mx-auto mt-5">
        <vue-topprogress ref="topProgress" color="#00C851" colorShadow="#00C851" :height="5" errorColor="#CC0000"></vue-topprogress>
        <div class="d-flex px-3">
            <p class="subtitle-2 font-weight-bold grey--text darken-2">How are you today, <span class="font-weight-bold black--text lighten-4" v-if="getUser">{{getUser.title}} {{getUser.lastname}} ?</span></p>
            <v-spacer/>
            <span class="caption font-weight-bold success--text darken-3 text-uppercase mt-2">My Account</span>
            <v-btn class="caption font-weight-bold grey--text darken-5 mx-2" text color="info darken-2" @click="upload_image_dialog">Upload Image <v-icon size="15" class="ml-1">mdi-pencil</v-icon> </v-btn>
        </div>
        <v-card outlined pa-4>
            <v-row class="px-3">
                <v-col cols="12" md="8" lg="8" sm="6">
                    <div class="d-md-flex d-lg-flex flex-md-row flex-lg-row flex-sm-column" v-if="getUser">
                        <v-avatar class="mt-2" size="80">
                            <v-img :src="getImage"></v-img>
                        </v-avatar>
                        <div class="mx-3 mt-6 d-flex flex-column justify-start">
                            <span class="subtitle-2 font-weight-bold text-uppercase" v-if="getUser">{{getUser.title}} {{getUser.firstname}} {{getUser.lastname}}</span>
                            <span class="caption font-weight-bold text-uppercase grey--text darken-2">Status: <span :class="formatStatusColor" v-if="getUser">{{formatStatus}}</span></span>
                            <v-btn rounded small class="red darken-3" depressed dark @click="delete_profile">
                                <span class="overline">delete image</span>
                            </v-btn>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" md="4" lg="4" sm="6" class="d-flex mt-5">
                    <v-btn rounded class="success darken-2 px-6 ml-auto" elevation="15" dark @click="editAccount">
                        <span class="font-weight-bold text-uppercase caption">Edit Personal Info</span>
                    </v-btn>
                </v-col>
            </v-row>
            <v-divider/>
            <v-row class="px-3">
                <v-col cols="12" md="7">
                    <p class="subtitle-1 font-weight-bold green--text darken-4 text-uppercase">Personal Details</p>
                    <v-row>
                        <v-col cols="6" md="4" lg="3">
                            <span class="grey--text darken-4 text-uppercase subtitle-2">First Name</span>
                            <span class="grey--text darken-4 d-block font-weight-bold subtitle-2" v-if="getUser">{{getUser.firstname}}</span>
                        </v-col>
                        <v-col cols="6" md="4" lg="3">
                            <span class="grey--text darken-4 text-uppercase subtitle-2">Last Name</span>
                            <span class="grey--text darken-4 d-block font-weight-bold subtitle-2" v-if="getUser">{{getUser.lastname}}</span>
                        </v-col>
                        <v-col cols="6" md="4" lg="3">
                            <span class="grey--text darken-4 text-uppercase subtitle-2">Email</span>
                            <span class="grey--text darken-4 d-block font-weight-bold subtitle-2" v-if="getUser">{{getUser.email}}</span>
                        </v-col>
                        <v-col cols="6" md="4" lg="3">
                            <span class="grey--text darken-4 text-uppercase subtitle-2">Date of Birth</span>
                            <span class="grey--text darken-4 d-block font-weight-bold subtitle-2" v-if="getUser">{{getUser.dob | formatDate}}</span>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6" md="3" lg="3">
                            <span class="grey--text darken-4 text-uppercase subtitle-2">Contact</span>
                            <span class="grey--text darken-4 d-block font-weight-bold subtitle-2" v-if="getUser">{{getUser.phone}}</span>
                        </v-col>
                        <v-col cols="6" md="3" lg="3">
                            <span class="grey--text darken-4 text-uppercase subtitle-2">Sex</span>
                            <span class="grey--text darken-4 d-block font-weight-bold subtitle-2" v-if="getUser">{{getUser.gender}}</span>
                        </v-col>
                        <v-col cols="6" md="3" lg="3">
                            <span class="grey--text darken-4 text-uppercase subtitle-2">Username</span>
                            <span class="grey--text darken-4 d-block font-weight-bold subtitle-2" v-if="getUser">{{getUser.username}}</span>
                        </v-col>
                        <v-col cols="6" md="3" lg="3">
                            <span class="grey--text darken-4 text-uppercase subtitle-2">Role</span>
                            <span class="grey--text darken-4 d-block font-weight-bold subtitle-2" v-if="getUser">{{getUser.role.name}}</span>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <span class="grey--text darken-4 text-uppercase subtitle-2">Address</span>
                            <span class="grey--text darken-4 d-block font-weight-bold subtitle-2" v-if="getUser">{{getUser.address}}</span>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <span class="grey--text darken-4 text-uppercase subtitle-2">Biodata</span>
                            <span class="grey--text darken-3 d-block font-weight-bold" v-if="getUser">
                                <span v-if="getUser.Biodata">{{getUser.Biodata}}</span>
                                <span v-else>N/A</span>
                            </span>
                        </v-col>
                    </v-row>      
                </v-col>
                <v-col cols="12" md="5">
                    <div>
                        <v-responsive>
                            <v-img src="/app_asset/personal_settings.svg"></v-img>
                        </v-responsive>
                    </div>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
                <v-col cols="12">
                    <v-card class="pa-3 justify-center">
                        <div class="d-flex justify-center">
                            <v-avatar color="success darken-2" size="62" dark>
                                <v-icon size="25" class="white--text">mdi-lock-open-outline</v-icon>
                            </v-avatar>
                        </div>
                        <div class="text-center mt-4 mx-auto" style="width: 50%">
                            <span class="grey--text darken-5 body-2 font-weight-bold">Enter your current password in the form below and we will send you further instructions on how to reset your password</span>
                        </div>
                        <div class="text-center mt-5 mx-auto" style="width: 50%">
                            <v-form ref="verifyPassword">
                                <v-text-field color="success darken-2" type="password" v-model="old_password" :rules="passwordRules" :disabled="verifying" :loading="loadingPassword" label="Current Password" outlined placeholder="Enter your old password for verification"></v-text-field>
                                <v-btn rounded color="success darken-2" dark class="px-6" elevation="15" @click="verify">
                                    <span class="caption font-weight-bold" v-if="!verifying">Submit</span>
                                    <span class="caption font-weight-bold" v-else>verifying...</span>
                                </v-btn>
                            </v-form>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-card>
        <v-dialog v-model="editSettingsDialog" max-width="900" persistent scrollable>
            <v-card>
                <v-card-title class="success darken-2 pa-4" dark>
                    <v-icon size="20" class="mr-2 white--text">mdi-account-cog</v-icon>
                    <span class="subtitle-2 font-weight-bold white--text">Edit Account</span>
                </v-card-title>
                <v-divider /> 
                <v-card-text class="pa-6 px-10" style="height: 700px;">
                    <v-row>
                        <v-col cols="12" class="text-center">
                            <v-responsive>
                                <v-img :src="getImage" width="10%" class="mx-auto"></v-img>
                            </v-responsive>
                            <span class="grey--text darken-7 mt-5 font-weight-bold">Dr {{user.firstname}} {{user.lastname}}</span>
                        </v-col>
                    </v-row>
                    <v-form ref="account">
                        <v-row>
                            <v-col cols="12" md="4" lg="4">
                                <v-text-field label="First Name" :rules="nameRules" dense v-model="user.firstname"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="4" lg="4">
                                <v-text-field label="Last Name" :rules="nameRules" dense v-model="user.lastname"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="4" lg="4">
                                <v-text-field label="Username" :rules="nameRules" dense v-model="user.username"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="4" lg="4">
                                <v-text-field label="Age" :rules="ageRules" dense v-model="user.age"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="4" lg="4">
                                <v-text-field label="Email" :rules="emailRules" dense v-model="user.email"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="4" lg="4">
                                <v-text-field label="Phone" :rules="phoneRules" dense v-model="user.phone"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="4" lg="4">
                                <v-select :items="gender" label="Sex" :rules="genderRules" v-model="user.gender"></v-select>
                            </v-col>
                            <v-col cols="12" md="4" lg="4" class="mt-5">
                                <v-dialog ref="dob_dialog" v-model="dob_modal" :return-value.sync="user.dob" persistent width="290px">
                                    <template v-slot:activator="{ on }">
                                        <v-text-field label="DOB" v-on="on" :rules="dobRules" dense v-model="user.dob"></v-text-field>
                                    </template>
                                    <v-date-picker v-model="user.dob" scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn text color="primary" @click="dob_modal = false">Cancel</v-btn>
                                    <v-btn text color="primary" @click="$refs.dob_dialog.save(user.dob)">OK</v-btn>
                                    </v-date-picker>
                                </v-dialog>
                            </v-col>
                            <v-col cols="12" md="4" lg="4" class="mt-5">
                                <v-text-field label="Address" :rules="addressRules" dense v-model="user.address"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-textarea name="biodata" label="Biodata" hint="Enter Information about yourself" v-model="user.biodata"></v-textarea>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card-text>
                <v-divider/>
                <v-card-actions class="d-flex justify-center">
                    <v-btn class="success darken-2 px-5 mr-3" dark rounded elevation="15" @click="submitInfo">
                        <span class="caption font-weight-bold">Update</span>
                    </v-btn>
                    <v-btn class="px-5" rounded elevation="15" @click="editSettingsDialog = false">
                        <span class="caption font-weight-bold">Cancel</span>
                    </v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>

            <v-dialog v-model="resetdialog" persistent max-width="500">
                <v-card>
                    <v-card-title class="subtitle-1 success darken-2 pa-4">
                        <v-icon class="white--text mr-2" size="20">mdi-lock-open-check</v-icon>
                        <span class="white--text">Reset Password</span>
                    </v-card-title>
                    <v-card-text class="px-6">
                        <v-card-text>
                            <span class="black--text darken-5">Enter your New password and Confirm to change your password</span>
                        </v-card-text>
                        <v-form ref="reset">
                            <v-text-field color="success darken-2" :rules="passwordRules" dense label="New Password" outlined placeholder="Enter your New Password" v-model="reset.new" type="password"></v-text-field>
                            <v-text-field color="success darken-2" type="password" :rules="passwordRules" dense label="Confirm Password" outlined placeholder="Confirm your Password" v-model="reset.confirm"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" text @click="resetPassword">Reset</v-btn>
                        <v-btn color="green darken-1" text @click="resetdialog = false">cancel</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog v-model="upload_dialog" persistent max-width="600" scrollable>
            <v-card>
                <v-card-title class="subtitle-2 font-weight-bold">Upload User Profile Image</v-card-title>
                <v-divider />
                <v-card-text>
                    <v-row class="d-flex justify-center">
                        <v-col cols="6">
                            <croppa v-model="croppa"
                                    class="mx-auto"
                                    :width="200"
                                    :height="200"
                                    placeholder="Choose an image"
                                    placeholder-color="#000"
                                    :placeholder-font-size="16"
                                    canvas-color="transparent"
                                    :show-remove-button="true"
                                    remove-button-color="black"
                                    :remove-button-size="30"
                                    :prevent-white-space="true"
                                    initial-size="contain"
                                    initial-position="center"
                                    :show-loading="true"
                                    :loading-size="50"
                                    @new-image-drawn="onNewImage"
                                    @image-remove="handleImageRemove" 
                                    @zoom="onZoom"
                                    accept="image/*"
                                    :file-size-limit="2000000"
                                    @file-type-mismatch="onFileTypeMismatch"
                                    @file-size-exceed="onFileSizeExceed"
                                    loading-color="#606060"
                                    >
                                    <img slot="placeholder" src="/app_asset/upload_image.png" width="100%" class="mx-auto" />
                            </croppa>
                        </v-col>
                        <v-col cols="6" class="d-flex justify-center align-center">
                            <v-slider v-model="profile_zoom_value" :min="min" :max="max" step=".001" @input="onSliderChange" thumb-label thumb-color="pink" vertical label="Slide to Resize" class="caption grey--text font-italic font-weight-bold"></v-slider>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-divider />
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" class="subtitle-2" text @click="cancel_upload">Cancel</v-btn>
                <v-btn color="green darken-1" class="subtitle-2 font-weight-bold" text @click="save_image" v-if="user_avatar == null">Save Changes</v-btn>
                <v-btn color="green darken-1" class="subtitle-2 font-weight-bold" text @click="upload_image" v-else>Upload</v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>

            <v-dialog v-model="loading_dialog" hide-overlay persistent width="300">
                <v-card color="success darken-2" dark flat>
                    <v-card-text>
                    <span class="subtitle-2 font-weight-regular font-italic white--text">Updating Profile...</span>  
                    <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
                    </v-card-text>
                </v-card>
            </v-dialog>
    </v-container>
</template>

<script>

import {Toast} from '../app';
import { mapGetters, mapActions } from 'vuex';
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

export default {
    data:() => ({
        dob_modal: false,
        loading_dialog: false,
        user_avatar: null,
        max: 100,
        min: 0,
        profile_zoom_value: 0,
        croppa: {},
        upload_dialog: false,
        old_password:'',
        verifying: false,
        resetdialog:false,
        loadingPassword: false,
        editSettingsDialog: false,
        gender: ['Male', 'Female'],
        user: {
            firstname: '',
            lastname: '',
            email: '',
            username: '',
            age: '',
            gender: '',
            phone: '',
            biodata: '',
            dob:'',
            address:''
        },
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
        (v) => !!v || 'DOB is required',
        ],
        addressRules: [
        (v) => !!v || 'Address is required',
		],
		roleRules: [
        (v) => !!v || 'Role is required',
			],
		genderRules: [
        (v) => !!v || 'Gender is required',
		],
		phoneRules: [
			(v) => !!v || 'Phone number is required',
			(v) => (v && v.length === 10) || 'Phone Number must be equal to 10 characters',
		],
		emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => (v && v.length >= 8) || 'Password must be greater than 8 characters',
    ],
    reset: {
        new: '',
        confirm: ''
    }
    }),
    watch:{
        avatar(){
            if(this.avatar === null){
                this.getImage;
            }
        }
    },
    filters:{
        formatDate(value){
            return moment(value).format('MMMM Do, YYYY');
        }
    },
    methods:{
        ...mapActions(['fetchUser']),
        formatStatusColor(){
            if(this.getUser){
                if(this.getUser.status === 1){
                    return 'success--text darken-2'
                }else{
                    return 'red--text darken-2'
                }
            }
        },
        editAccount(){
            this.user.firstname = this.getUser.firstname;
            this.user.lastname = this.getUser.lastname;
            this.user.email = this.getUser.email;
            this.user.username = this.getUser.username;
            this.user.age = this.getUser.age;
            this.user.gender = this.getUser.gender;
            this.user.phone = this.getUser.phone;
            this.user.biodata = this.getUser.Biodata;
            this.user.address = this.getUser.address;
            this.user.dob = moment(this.getUser.dob).format('YYYY-MM-DD');
            this.editSettingsDialog = true;
        },
        submitInfo(){
            if(this.$refs.account.validate()){
                this.$refs.topProgress.start();
                this.loading_dialog = true;
                axios.patch('/update_account/'+ this.getUser.id, {user: this.user}).then(response => {
                    if(response.data.success){
                        this.loading_dialog = false;
                        this.$refs.topProgress.done();
                        this.editSettingsDialog = false;
                        this.fetchUser();
                        Swal.fire(
                            'Success',
                            'User Account Updated',
                            'success'
                        )
                    }
                })
            }else{
                this.$refs.topProgress.fail();
                Swal.fire(
                'Invalid Input',
                'Check the form for errors',
                'error'
                )
            }
        },
        verify(){
            if(this.$refs.verifyPassword.validate()){
                this.$refs.topProgress.start();
                this.verifying = true;
                this.loadingPassword = true;
                axios.post('/verify_password', {password: this.old_password}).then(response => {
                    if(response.data.success){
                        this.$refs.topProgress.done();
                        this.verifying = false;
                        this.loadingPassword = false;
                        this.resetdialog = true;
                    }
                    if(response.data.error){
                        this.$refs.topProgress.fail();
                        this.verifying = false;
                        this.loadingPassword = false;
                        Swal.fire(
                            'Password Mismatched',
                            'Password entered is Incorrect',
                            'error'
                        )
                    }
                });
            }else{
                this.$refs.topProgress.fail();
                Swal.fire(
                    'Empty Field',
                    'Enter your current password to verify your account',
                    'error'
                )
            }
        },
        resetPassword(){
            if(this.$refs.reset.validate()){
                this.$refs.topProgress.start();
                if(this.reset.new === this.reset.confirm){
                    axios.post('/reset_password', {password:this.reset.new}).then(response => {
                        if(response.data.success){
                            this.$refs.topProgress.done();
                            this.resetdialog = false;
                            this.$refs.reset.reset();
                            this.$refs.verifyPassword.reset();
                             Swal.fire(
                                'Success',
                                'Your password has been updated',
                                'success'
                            )
                        }
                    });
                }else{
                    this.$refs.topProgress.fail();
                    Swal.fire(
                        'Password mismatched',
                        'Password entered does not match',
                        'warning'
                    )
                }
                
            }else{
                this.$refs.topProgress.fail();
                Swal.fire(
                    'Empty Field',
                    'Enter your new password to update',
                    'error'
                )
            }
        },

        upload_image_dialog(){
            this.upload_dialog = true;
        },
        onSliderChange(e) {
            var increment = e;
            this.croppa.scaleRatio = +increment;
        },
        onNewImage() {
            this.profile_zoom_value = this.croppa.scaleRatio
            this.min = this.croppa.scaleRatio / 2
            this.max = this.croppa.scaleRatio * 2
        },
        onZoom() {
            this.profile_zoom_value = this.croppa.scaleRatio;
        },
        onFileTypeMismatch (file) {
            Toast.fire({
                icon: 'error',
                title: 'Invalid file type. Please choose a jpeg or png file.'
            });
        },
        onFileSizeExceed (file) {
            Toast.fire({
                icon: 'error',
                title: 'File size exceeds. Please choose a file smaller than 2mb.'
            });
        },
        handleImageRemove(){
            this.user_avatar = null;
        },
        save_image(){
            this.$refs.topProgress.start();
             this.croppa.generateBlob((blob) => {
            this.read(blob);
            }, 'image/*', 0.8) // 80% compressed image file
        },
        upload_image(){
            this.$refs.topProgress.start();
            this.loading_dialog = true;
            axios.post('/upload_profile', {image: this.user_avatar}).then(response => {
                if(response.data.success){
                    this.upload_dialog = false;
                    this.$refs.topProgress.done();
                    this.loading_dialog = false;
                    this.fetchUser();
                    swalWithBootstrapButtons.fire(
                        'Profile Uploaded',
                        'Your Profile image has been updated :)',
                        'success'
                    )
                }
            })
        },

        read(image){
            let reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = (e) => {
                this.user_avatar = e.target.result;
                this.$refs.topProgress.done();
            }
        },

        delete_profile(){
            this.$refs.topProgress.start();
            swalWithBootstrapButtons.fire({
                title: 'Are you sure?',
                text: "Your Profile image will be removed",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
                }).then((result) => {
                if (result.value) {
                    axios.delete('/delete_profile/' + this.getUser.id).then(response => {
                    if(response.data.success){
                        this.fetchUser();
                        this.$refs.topProgress.done();
                        swalWithBootstrapButtons.fire(
                            'Deleted!',
                            'Profile Image Deleted.',
                            'success'
                        )
                    }

                    if(response.data.info){
                        this.fetchUser();
                        this.$refs.topProgress.fail();
                        swalWithBootstrapButtons.fire(
                            'Deleted!',
                            response.data.info,
                            'success'
                        )
                    }
                    })
                    
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    this.$refs.topProgress.fail();
                    this.loading_dialog = false;
                    swalWithBootstrapButtons.fire(
                    'Reverted',
                    'Your Profile image is saved :)',
                    'info'
                    )
                }
            }) 
        },

        cancel_upload(){
            this.user_avatar = null;
            this.upload_dialog = false;
        }
    },
    computed:{
        ...mapGetters(['getUser']),
        
        getImage(){
            if(this.getUser){
                if(this.getUser.image){
                    return '/staff/profiles/' + this.getUser.image;
                }else{
                     if(this.getUser.role_id === 1){
                        return '/app_asset/doctor.jpg'
                    }else if(this.getUser.role_id === 2){
                        return '/app_asset/nurse.jpg'
                    }else if(this.getUser.role_id === 3){
                        return '/app_asset/pharmacist.jpg'
                    }else if(this.getUser.role_id === 4){
                        return '/app_asset/lab tech.jpg'
                    }else if(this.getUser.role_id === 5){
                        return '/app_asset/manager.png'
                    }
                }
            }
        },
        formatStatus(){
            if(this.getUser){
                if(this.getUser.status === 1){
                    return 'Active'
                }else{
                    return 'Inactive'
                }
            }
        },
    },
    mounted(){
        this.$refs.topProgress.start();
            
        setInterval(() => {
            this.$refs.topProgress.done()
        }, 1000);
    },
    created(){
        this.fetchUser();
    },
}
</script>

<style scoped>

</style>
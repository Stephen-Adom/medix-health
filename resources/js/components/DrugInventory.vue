<template>
	<v-container class="mt-5 pa-3">
    <vue-topprogress ref="topProgress" color="#00C851" colorShadow="#00C851" :height="5" errorColor="#CC0000"></vue-topprogress>
		<v-data-table
    :headers="headers"
    :items="drugs"
    sort-by="full_name"
    class="elevation-1"
    :search="search"
    :loading ="loadingData"
		loading-text="Loading... Please wait"
  	>
	    <template v-slot:top>
	      <v-toolbar flat color="white">
	        <v-toolbar-title>Drug List</v-toolbar-title>
	        <v-divider
	          class="mx-4"
	          inset
	          vertical
	        ></v-divider>
	        <v-spacer></v-spacer>
	        <v-dialog v-model="dialog" max-width="700px">
	          <template v-slot:activator="{ on }">
	            <v-btn color="success darken-2" rounded elevation="15" dark class="mb-2 px-5" v-on="on" v-if="$gate.isPharmacy()">
                <span class="caption">Add Drug</span>  
              </v-btn>
	          </template>
	          <v-card>
	            <v-card-title>
	              <span class="headline">{{ formTitle }}</span>
	            </v-card-title>

	            <v-card-text>
	              <v-container>
                  <v-form ref="drugform" v-model="valid">
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field color="success" outlined :rules="nameRules" dense v-model="editedItem.name" label="Drug Name"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field color="success" outlined dense :rules="quantityRules" v-model="editedItem.quantity" label="Quantity"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field color="success" outlined dense :rules="dosageRules" v-model="editedItem.dosage_info" label="Dosage Info"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field color="success" outlined dense :rules="categoryRules" v-model="editedItem.category" label="Cateogry/Class"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-dialog ref="dialog" v-model="date_modal" :return-value.sync="editedItem.expiry_date" persistent width="290px">
                          <template v-slot:activator="{ on }">
                            <v-text-field color="success" outlined dense v-model="editedItem.expiry_date" :rules="dateRules" label="Expiry Date" append-icon="mdi-calendar-edit" readonly
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker v-model="editedItem.expiry_date" scrollable color="success">
                            <v-spacer></v-spacer>
                            <v-btn text color="red" @click="date_modal = false">Cancel</v-btn>
                            <v-btn text color="success" @click="$refs.dialog.save(editedItem.expiry_date)">OK</v-btn>
                          </v-date-picker>
                        </v-dialog>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-dialog ref="purchased_dialog" v-model="purchaseddate_modal" :return-value.sync="editedItem.purchased_date" persistent width="290px">
                          <template v-slot:activator="{ on }">
                            <v-text-field color="success" outlined dense v-model="editedItem.purchased_date" :rules="dateRules" label="Purchased Date" append-icon="mdi-calendar-edit" readonly
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker v-model="editedItem.purchased_date" scrollable color="success">
                            <v-spacer></v-spacer>
                            <v-btn text color="red" @click="purchaseddate_modal = false">Cancel</v-btn>
                            <v-btn text color="success" @click="$refs.purchased_dialog.save(editedItem.purchased_date)">OK</v-btn>
                          </v-date-picker>
                        </v-dialog>
                      </v-col>
                    </v-row>
                  </v-form>
	              </v-container>
	            </v-card-text>

	            <v-card-actions>
	              <v-spacer></v-spacer>
	              <v-btn color="success darken-1" text @click="save" :disabled="!valid" v-if="editedIndex === -1">Save</v-btn>
                <v-btn color="success darken-1" text @click="updateDrug" :disabled="!valid" v-else>update</v-btn>
	              <v-btn color="red darken-1" text @click="close">Cancel</v-btn>
	            </v-card-actions>
	          </v-card>
	        </v-dialog>
	      </v-toolbar>
	      <v-text-field color="success" v-model="search" label="Looking for a drug?" class="mx-4" append-icon="mdi-magnify"/>
	    </template>
	    <template v-slot:item.actions="{ item }" v-if="$gate.isPharmacy()">
	      <v-icon small class="mr-2" @click="editItem(item)">
	        mdi-pencil
	      </v-icon>
	      <v-icon small color="red" class="mr-2" @click="deleteItem(item)">
	        mdi-delete
	      </v-icon>
	    </template>
	    <template v-slot:item.status="{ item }">
	      <v-chip :color="getColor(item.quantity)" dark v-text="formatStatus(item.quantity)" pill small class="status_chip"></v-chip>
	    </template>
	    <template v-slot:item.expiry_date="{ item }">
	      <span>{{item.expiry_date | formatDate}}</span>
	    </template>
      <template v-slot:item.purchased_date="{ item }">
	      <span>{{item.purchased_date | formatDate}}</span>
	    </template>
      <template v-slot:item.name="{ item }">
        <v-icon size="20" color="success darken-2">mdi-pill</v-icon>
	      <span>{{item.name}}</span>
	    </template>
      <template v-slot:item.left_until="{ item }">
	      <v-chip :class="getExpiredColor(item.expiry_date)" dark small>{{formatDaysLeft(item.expiry_date)}}</v-chip>
	    </template>
  	</v-data-table>

    	<v-dialog v-model="loading_dialog" hide-overlay persistent width="300">
			<v-card color="success darken-2" dark flat>
				<v-card-text>
				<span class="subtitle-2 font-weight-bold font-italic white--text">Updating Drug Inventory...</span>  
				<v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
				</v-card-text>
			</v-card>
		</v-dialog>
	</v-container>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import {Toast} from '../app';

  export default {
    data: () => ({
      loading_dialog: false,
      loadingData: false,
      valid: false,
      search: '',
      dialog: false,
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Quantity', value: 'quantity' },
        { text: 'Dosage Info', value: 'dosage_info' },
        { text: 'Category/Class', value: 'category' },
        { text: 'Expiry Date', value: 'expiry_date', align: 'center'},
        { text: 'Purchased Date', value: 'purchased_date', align: 'center' },
        { text: 'Left Until', value: 'left_until', align: 'center' },
        { text: 'Status', value: 'status', align: 'center'},
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      drugs: [],
      editedIndex: -1,
      updateId: null,
      editedItem: {
        category:null,
        dosage_info:null,
        name: null,
        quantity: null,
        expiry_date: null,
        purchased_date: null,
      },
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      date_modal: false,
      purchaseddate_modal: false,
      menu2: false,
      nameRules: [
        (v) => !!v || 'Name is required',
      ],
      quantityRules: [
        (v) => !!v || 'Quantity is required',
      ],
      dosageRules: [
        (v) => !!v || 'Dosage Information is required',
      ],
      categoryRules: [
        (v) => !!v || 'Category Information is required',
      ],
      dateRules: [
        (v) => !!v || 'Date is required',
      ],
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Drug' : 'Edit Drug Info'
      },
      ...mapGetters(['allDrugs']),

    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      allDrugs(){
        if(this.allDrugs.length){
          this.drugs = this.allDrugs;
          this.loadingData = false;
          this.$refs.topProgress.done()
        }else{
          this.loadingData = false;
          this.$refs.topProgress.done()
        }
      }
    },
    mounted () {
      this.$refs.topProgress.start()

    },
    created () {
      this.fetchDrugs();
      this.loadingData = true;
    },
    filters:{
      formatDate(value){
        return moment(value).format('MMM Do, YYYY');
      }
    },
    methods: {
      ...mapActions(['fetchDrugs']),

      editItem (item) {
        this.updateId = item.id;
        this.editedIndex = this.drugs.indexOf(item)
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
							axios.delete('/api/delete_drug/'+item.id).then(response => {});
							const index = this.drugs.indexOf(item)
							this.drugs.splice(index, 1)
							Swal.fire(
								'Deleted!',
								'The Drug has been deleted.',
								'success'
							)
						}
					})
      },

      close () {
        this.dialog = false
        this.$refs.drugform.reset();
        this.$refs.drugform.resetValidation();
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if(this.$refs.drugform.validate()){
          this.$refs.topProgress.start()
          this.loading_dialog = true;
          axios.post('/api/store_drugs', {drugs: this.editedItem}).then(response => {
            if(response.data.success){
              this.$refs.topProgress.done()
              this.loading_dialog = false;
              this.dialog = false;
              this.$refs.drugform.reset();
              this.$refs.drugform.resetValidation();
              this.fetchDrugs();
              Toast.fire({
									icon: 'success',
									title: 'New Drug Added'
							});
            }
          });
        }
      },
      getColor(quantity){
      	if(quantity >= 100){
          return 'success darken-2'
        }else if(quantity < 100 && quantity > 0 ){
          return 'warning darken-1'
        }else if(quantity == 0){
          return 'red darken-2'
        }
      },
      formatStatus(quantity){
      	if(quantity >= 100){
      		return 'in stock';
      	}else if(quantity > 0 && quantity < 100){
      		return 'low stock';
      	}else if(quantity <= 0){
          return 'out of stock';
        }
      },
      updateDrug(){
        if(this.$refs.drugform.validate()){
          this.$refs.topProgress.start()
          this.loading_dialog = true;
          axios.patch('/api/update_drug/'+this.updateId, {drug: this.editedItem}).then(response => {
              if(response.data.success){
                this.$refs.topProgress.done()
                this.loading_dialog = false;
                this.fetchDrugs();
                this.$refs.drugform.reset();
                this.$refs.drugform.resetValidation();
                this.dialog = false;
                Toast.fire({
									icon: 'success',
									title: 'Drug updated'
							});
              }
          })
        }
      },
      formatDaysLeft(expiry_date){
        return new moment().to(moment(expiry_date));
      },
      getExpiredColor(date){
        let expired = moment(date);
        let todaysdate = moment();
        let days = expired.diff(todaysdate, 'days');
        if(days <= 0){
          return 'red darken-2'
        }else{
          return 'success darken-2'
        }
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

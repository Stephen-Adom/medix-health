<template>
  <v-app>
    <v-container>
        <v-card outlined>
            <v-card-title>
                <v-row>
                    <v-col cols="4" class="d-flex flex-column">
                        <v-responsive>
                            <v-img src="/app_asset/medix_full.png" width="40%" class="mx-auto" />
                        </v-responsive>
                        <p class="text-center subtitle-2 font-weight-bold">Medix Digital Application</p>
                    </v-col>
                    <v-col cols="6" class="mt-10 text-center">
                        <h5 class="title font-weight-thin text-uppercase">Medix Blood Test Report</h5>
                        <p class="subtitle-1">{{current_date}}</p>
                    </v-col>
                    <v-col cols="2" class="mt-8">
                        
                    </v-col>
                </v-row>
            </v-card-title>
            <v-divider />
            <v-card-text>
                <v-card outlined>
                    <v-card-title class="success darken-2 subtitle-2">
                        <span class="subtitle-2 font-weight-bold text-uppercase white--text">Basic Information</span>
                    </v-card-title>
                    <v-card-text class="mt-2">
                        <v-form ref="basic_info">
                            <v-row v-if="appointment">
                                <v-col cols="4">
                                    <v-text-field dense label="Patient Name" class="subtitle-1 font-weight-bold" readonly :value="patient_name"></v-text-field>
                                </v-col>
                                <v-col cols="2">
                                    <v-text-field dense label="Age" class="subtitle-1 font-weight-bold" readonly :value="appointment.patient.age"></v-text-field>
                                </v-col>
                                <v-col cols="3">
                                    <v-text-field dense label="Sex" class="subtitle-1 font-weight-bold" readonly :value="appointment.patient.gender"></v-text-field>
                                </v-col>
                                <v-col cols="3">
                                    <v-text-field dense label="DOB" class="subtitle-1 font-weight-bold" readonly :value="formateDob"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="5">
                                    <v-text-field dense label="Ordering Dr." class="subtitle-1 font-weight-bold" :rules="inputRules" v-model="info.ordering_dr"></v-text-field>
                                </v-col>
                                <v-col cols="2">
                                    <v-text-field dense label="Status" class="subtitle-1 font-weight-bold" :rules="inputRules" v-model="info.status"></v-text-field>
                                </v-col>
                                <v-col cols="5">
                                    <v-text-field dense label="Physician Copy for" class="subtitle-1 font-weight-bold" :rules="inputRules" v-model="info.physician_copy"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="3">
                                    <v-text-field dense label="SPEC #" class="subtitle-1 font-weight-bold" :rules="inputRules" v-model="info.spec"></v-text-field>
                                </v-col>
                                <v-col cols="3">
                                    <v-dialog ref="collection_date_dialog" v-model="collection_date_modal" :return-value.sync="info.collection_date" persistent width="290px">
                                        <template v-slot:activator="{ on }">
                                            <v-text-field v-on="on" dense label="Collection Date" class="subtitle-1 font-weight-bold" v-model="info.collection_date" :rules="inputRules"></v-text-field>
                                        </template>
                                         <v-date-picker v-model="info.collection_date" scrollable>
                                        <v-spacer></v-spacer>
                                        <v-btn text color="primary" @click="collection_date_modal = false">Cancel</v-btn>
                                        <v-btn text color="primary" @click="$refs.collection_date_dialog.save(info.collection_date)">OK</v-btn>
                                        </v-date-picker>
                                    </v-dialog>
                                </v-col>
                                <v-col cols="3">
                                    
                                    <v-dialog ref="collection_time_dialog" v-model="collection_time_modal" :return-value.sync="info.collection_time" persistent width="290px">
                                        <template v-slot:activator="{ on }">
                                        <v-text-field dense label="Collection Time" class="subtitle-1 font-weight-bold" v-on="on" :rules="inputRules" v-model="info.collection_time"></v-text-field>
                                        </template>
                                        <v-time-picker v-if="collection_time_modal" v-model="info.collection_time" full-width>
                                        <v-spacer></v-spacer>
                                        <v-btn text color="primary" @click="collection_time_modal = false">Cancel</v-btn>
                                        <v-btn text color="primary" @click="$refs.collection_time_dialog.save(info.collection_time)">OK</v-btn>
                                        </v-time-picker>
                                    </v-dialog>
                                </v-col>
                                <v-col cols="3">
                                    <v-text-field dense label="SPECIMEN" class="subtitle-2 font-weight-bold" :rules="inputRules" v-model="info.specimen"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="6">
                                    <v-dialog ref="received_date_dialog" v-model="received_date_modal" :return-value.sync="info.received_date" persistent width="290px">
                                        <template v-slot:activator="{ on }">
                                            <v-text-field v-on="on" dense label="Received Date" class="subtitle-1 font-weight-bold" v-model="info.received_date" :rules="inputRules"></v-text-field>
                                        </template>
                                         <v-date-picker v-model="info.received_date" scrollable>
                                        <v-spacer></v-spacer>
                                        <v-btn text color="primary" @click="received_date_modal = false">Cancel</v-btn>
                                        <v-btn text color="primary" @click="$refs.received_date_dialog.save(info.received_date)">OK</v-btn>
                                        </v-date-picker>
                                    </v-dialog>
                                </v-col>
                                <v-col cols="6">
                                         <v-dialog ref="received_time_dialog" v-model="received_time_modal" :return-value.sync="info.received_time" persistent width="290px">
                                            <template v-slot:activator="{ on }">
                                            <v-text-field v-on="on" dense label="Received Time" class="subtitle-1 font-weight-bold" v-model="info.received_time" :rules="inputRules"></v-text-field>
                                            </template>
                                            <v-time-picker v-if="received_time_modal" v-model="info.received_time" full-width>
                                            <v-spacer></v-spacer>
                                            <v-btn text color="primary" @click="received_time_modal = false">Cancel</v-btn>
                                            <v-btn text color="primary" @click="$refs.received_time_dialog.save(info.received_time)">OK</v-btn>
                                            </v-time-picker>
                                        </v-dialog>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                </v-card>
                <v-card outlined>
                    <v-card-title class="grey darken-2 subtitle-2">
                        <span class="subtitle-2 font-weight-bold text-uppercase white--text">Choose Test Type</span>
                    </v-card-title>
                    <v-card-text>
                        <v-row justify="center">
                            <v-expansion-panels accordion focusable>
                            <v-expansion-panel>
                                <v-expansion-panel-header class="subtitle-1 font-weight-bold">Complete Blood Count [CBC] Test</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                       <v-card-text>
                                           <v-form ref="cbc">
                                            <v-simple-table>
                                                <template v-slot:default>
                                                    <thead>
                                                        <tr>
                                                            <th class="text-left">Test</th>
                                                            <th class="text-left">Result</th>
                                                        </tr>
                                                    </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td class="subtitle-2 font-weight-bold">White Blood Cells ( WBC )</td>
                                                                <td>
                                                                    <v-text-field dense class="subtitle-2 font-weight-bold" :rules="inputRules" v-model="cbc.white_blood"></v-text-field>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="subtitle-2 font-weight-bold">Red Blood Cells ( RBC )</td>
                                                                <td>
                                                                    <v-text-field dense class="subtitle-2 font-weight-bold" :rules="inputRules" v-model="cbc.red_blood"></v-text-field>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="subtitle-2 font-weight-bold">Hemoglobin ( HB/Hgb )</td>
                                                                <td>
                                                                    <v-text-field dense class="subtitle-2 font-weight-bold" :rules="inputRules" v-model="cbc.hemoglobin"></v-text-field>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="subtitle-2 font-weight-bold">Mean Cell Volume ( MCV )</td>
                                                                <td>
                                                                    <v-text-field dense class="subtitle-2 font-weight-bold" :rules="inputRules" v-model="cbc.mcv"></v-text-field>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="subtitle-2 font-weight-bold">Mean Cell Hemoglobin (MCH)</td>
                                                                <td>
                                                                    <v-text-field dense class="subtitle-2 font-weight-bold" :rules="inputRules" v-model="cbc.mch"></v-text-field>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="subtitle-2 font-weight-bold">Mean Cell Hb Concentration (MCHC)</td>
                                                                <td>
                                                                    <v-text-field dense class="subtitle-2 font-weight-bold" :rules="inputRules" v-model="cbc.mchc"></v-text-field>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="subtitle-2 font-weight-bold">Red Cell Dist Width (RDW)</td>
                                                                <td>
                                                                    <v-text-field dense class="subtitle-2 font-weight-bold" :rules="inputRules" v-model="cbc.rdw"></v-text-field>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="subtitle-2 font-weight-bold">Platelet Count</td>
                                                                <td>
                                                                    <v-text-field dense class="subtitle-2 font-weight-bold" :rules="inputRules" v-model="cbc.platelet"></v-text-field>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="subtitle-2 font-weight-bold">Mean Platelet Volume</td>
                                                                <td>
                                                                    <v-text-field dense class="subtitle-2 font-weight-bold" :rules="inputRules" v-model="cbc.platelet_volume"></v-text-field>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                </template>
                                            </v-simple-table>
                                        </v-form>
                                    </v-card-text>
                                    <v-divider />
                                    <v-card-actions class="d-flex">
                                        <v-btn tile depressed class="red darken-3 px-5" dark @click="cancel_cbc">
                                            <span class="caption font-weight-bold">Cancel</span>
                                        </v-btn>

                                        <v-btn tile depressed class="success darken-1 px-5 mx-3" dark @click="save_cbc">
                                            <span class="caption font-weight-bold">Save Result</span>
                                        </v-btn>
                                    </v-card-actions>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel>
                                <v-expansion-panel-header class="subtitle-1 font-weight-bold">Comprehensive Metabolic Panel Test</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                       <v-card-text>
                                           <v-form ref="metabolic">
                                               <v-simple-table>
                                                    <template v-slot:default>
                                                    <thead>
                                                        <tr>
                                                            <th class="text-left">Test</th>
                                                            <th class="text-left">Result</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td class="subtitle-2 font-weight-bold">Glucose</td>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="metabolic.glucose" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="subtitle-2 font-weight-bold">Sodium Salts</td>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="metabolic.sodium" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="subtitle-2 font-weight-bold">Potassium Salts</td>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="metabolic.potassium" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="subtitle-2 font-weight-bold">Calcium</td>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="metabolic.calcium" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="subtitle-2 font-weight-bold">Chloride</td>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="metabolic.chloride" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="subtitle-2 font-weight-bold">Carbon Dioxide</td>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="metabolic.dioxide" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="subtitle-2 font-weight-bold">Blood Urea Nitrogen</td>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="metabolic.nitrogen" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="subtitle-2 font-weight-bold">Creatinine</td>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="metabolic.creatinine" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="subtitle-2 font-weight-bold">Albumin</td>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="metabolic.albumin" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="subtitle-2 font-weight-bold">Total Protein</td>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="metabolic.protein" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="subtitle-2 font-weight-bold">Alkaline Phosphatase (ALP)</td>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="metabolic.alp" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="subtitle-2 font-weight-bold">Alamine Aminotransferase (ALT)</td>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="metabolic.alt" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="subtitle-2 font-weight-bold">Asparate Aminotransferase (AST)</td>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="metabolic.ast" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="subtitle-2 font-weight-bold">Bilirubin</td>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="metabolic.bilirubin" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="subtitle-2 font-weight-bold">Activated Partial Thromboplastin Time</td>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="metabolic.thromboplastin" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="subtitle-2 font-weight-bold">Prothrombin Time</td>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="metabolic.prothrombin" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    </template>
                                                </v-simple-table>
                                           </v-form>
                                        </v-card-text>
                                    <v-divider />
                                    <v-card-actions>
                                        <v-btn tile depressed class="red darken-3 px-5" dark @click="cancel_metabolic">
                                            <span class="caption font-weight-bold">Cancel</span>
                                        </v-btn>
                                        <v-btn tile depressed class="success darken-2 px-5 mx-3" dark @click="save_metabolic">
                                            <span class="caption font-weight-bold">Save Result</span>
                                        </v-btn>
                                    </v-card-actions>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel>
                                <v-expansion-panel-header class="subtitle-1 font-weight-bold">Lipoprotein panel</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                       <v-card-text>
                                           <v-form ref="lipoprotein">
                                               <v-simple-table>
                                                    <template v-slot:default>
                                                    <thead>
                                                        <tr>
                                                            <th class="text-left">Test</th>
                                                            <th class="text-left">Result</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td class="subtitle-2 font-weight-bold">low-density lipoprotein (LDL) cholesterol level</td>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="lipoprotein.low_density" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td class="subtitle-2 font-weight-bold">high-density lipoprotein (HDL) cholesterol level</td>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="lipoprotein.high_density" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td class="subtitle-2 font-weight-bold">Total cholesterol level</td>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="lipoprotein.total" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td class="subtitle-2 font-weight-bold">Triglycerides level</td>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="lipoprotein.triglycerides" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    </template>
                                                </v-simple-table>
                                           </v-form>
                                    </v-card-text>
                                    <v-divider />
                                    <v-card-actions>
                                        <v-btn tile depressed class="red darken-3 px-5" dark @click="cancel_lipoprotein">
                                            <span class="caption font-weight-bold">Cancel</span>
                                        </v-btn>
                                        <v-btn tile depressed class="success darken-2 px-5 mx-3" dark @click="save_lipoprotein">
                                            <span class="caption font-weight-bold">Save Result</span>
                                        </v-btn>
                                    </v-card-actions>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel>
                                <v-expansion-panel-header class="subtitle-1 font-weight-bold">Blood enzyme tests</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                       <v-card-text>
                                           <v-form ref="enzymes">
                                               <v-simple-table>
                                                    <template v-slot:default>
                                                    <thead>
                                                        <tr>
                                                            <th class="text-left">Test</th>
                                                            <th class="text-left">Result</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td class="subtitle-2 font-weight-bold"> Creatine Phosphokinase (CPK-1)</td>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="enzymes.cpk_1" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td class="subtitle-2 font-weight-bold"> CPK-2</td>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="enzymes.cpk_2" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td class="subtitle-2 font-weight-bold">CPK-3</td>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="enzymes.cpk_3" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td class="subtitle-2 font-weight-bold">Troponin</td>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="enzymes.troponin" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    </template>
                                                </v-simple-table>
                                           </v-form>
                                    </v-card-text>
                                    <v-divider />
                                    <v-card-actions>
                                        <v-btn tile depressed class="red darken-3 px-5" dark @click="cancel_enzymes">
                                            <span class="caption font-weight-bold">Cancel</span>
                                        </v-btn>
                                        <v-btn tile depressed class="success darken-2 px-5 mx-3" dark @click="save_enzymes">
                                            <span class="caption font-weight-bold">Save Result</span>
                                        </v-btn>
                                    </v-card-actions>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel>
                                <v-expansion-panel-header class="subtitle-1 font-weight-bold">Thyroid Panel</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                       <v-card-text>
                                           <v-form ref="thyroid">
                                               <v-simple-table>
                                                    <template v-slot:default>
                                                    <thead>
                                                        <tr>
                                                            <th class="text-left">Test</th>
                                                            <th class="text-left">Result</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td class="subtitle-2 font-weight-bold">Triiodothyronine (T3)</td>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="thyroid.t3" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td class="subtitle-2 font-weight-bold">T3 Resin Uptake (RU)</td>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="thyroid.ru" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td class="subtitle-2 font-weight-bold">Thyroxine (T4)</td>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="thyroid.t4" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td class="subtitle-2 font-weight-bold">Thyroid-Stimulating Hormone (TS)</td>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="thyroid.ts" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    </template>
                                                </v-simple-table>
                                           </v-form>
                                    </v-card-text>
                                    <v-divider />
                                    <v-card-actions>
                                        <v-btn tile depressed class="red darken-3 px-5" dark @click="cancel_thyroid">
                                            <span class="caption font-weight-bold">Cancel</span>
                                        </v-btn>
                                        <v-btn tile depressed class="success darken-2 px-5 mx-3" dark @click="save_thyroid">
                                            <span class="caption font-weight-bold">Save Result</span>
                                        </v-btn>
                                    </v-card-actions>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel>
                                <v-expansion-panel-header class="subtitle-1 font-weight-bold">Coagulation panel</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                       <v-card-text>
                                           <v-form ref="coagulation">
                                               <v-simple-table>
                                                    <template v-slot:default>
                                                    <thead>
                                                        <tr>
                                                            <th class="text-left">Test</th>
                                                            <th class="text-left">Result</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td class="subtitle-2 font-weight-bold">Prothrombin Time (PT)</td>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="coagulation.prothrombin" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td class="subtitle-2 font-weight-bold">Fibrinogen Activity Test</td>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="coagulation.fibrinogen" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    </template>
                                                </v-simple-table>
                                           </v-form>
                                    </v-card-text>
                                    <v-divider />
                                    <v-card-actions>
                                        <v-btn tile depressed class="red darken-3 px-5" dark @click="cancel_coagulation">
                                            <span class="caption font-weight-bold">Cancel</span>
                                        </v-btn>
                                        <v-btn tile depressed class="success darken-2 px-5 mx-3" dark @click="save_coagulation">
                                            <span class="caption font-weight-bold">Save Result</span>
                                        </v-btn>
                                    </v-card-actions>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel>
                                <v-expansion-panel-header class="subtitle-1 font-weight-bold">Disease Examinations</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                       <v-card-text>
                                           <v-form ref="disease">
                                               <v-simple-table>
                                                    <template v-slot:default>
                                                    <thead>
                                                        <tr>
                                                            <th class="text-left">Test</th>
                                                            <th class="text-left">Result</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td class="subtitle-2 font-weight-bold">Chlamydia</td>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="disease.chlamydia" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td class="subtitle-2 font-weight-bold">Gonorrhea</td>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="disease.gonorrhea" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td class="subtitle-2 font-weight-bold">Herpes</td>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="disease.herpes" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td class="subtitle-2 font-weight-bold">HIV</td>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="disease.hiv" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td class="subtitle-2 font-weight-bold">Syphilis</td>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="disease.syphilis" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    </template>
                                                </v-simple-table>
                                           </v-form>
                                    </v-card-text>
                                    <v-divider />
                                    <v-card-actions>
                                        <v-btn tile depressed class="red darken-3 px-5" dark @click="cancel_disease">
                                            <span class="caption font-weight-bold">Cancel</span>
                                        </v-btn>
                                        <v-btn tile depressed class="success darken-2 px-5 mx-3" dark @click="save_disease">
                                            <span class="caption font-weight-bold">Save Result</span>
                                        </v-btn>
                                    </v-card-actions>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel>
                                <v-expansion-panel-header class="subtitle-1 font-weight-bold">DHEA (Sulfate Serum Test)</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                       <v-card-text>
                                           <v-form ref="dea">
                                               <v-simple-table>
                                                    <template v-slot:default>
                                                    <thead>
                                                        <tr>
                                                            <th class="text-left">Result</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="sulphate_serum_test" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    </template>
                                                </v-simple-table>
                                           </v-form>
                                        </v-card-text>
                                    <v-divider />
                                    <v-card-actions>
                                        <v-btn tile depressed class="red darken-3 px-5" dark @click="cancel_dea">
                                            <span class="caption font-weight-bold">Cancel</span>
                                        </v-btn>
                                        <v-btn tile depressed class="success darken-2 px-5 mx-3" dark @click="save_dea">
                                            <span class="caption font-weight-bold">Save Result</span>
                                        </v-btn>
                                    </v-card-actions>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel>
                                <v-expansion-panel-header class="subtitle-1 font-weight-bold">C-Reactive Protein Test</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                       <v-card-text>
                                           <v-form ref="reactive">
                                               <v-simple-table>
                                                    <template v-slot:default>
                                                    <thead>
                                                        <tr>
                                                            <th class="text-left">Result</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <v-text-field dense class="subtitle-2 font-weight-bold" v-model="reactive" :rules="inputRules"></v-text-field>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    </template>
                                                </v-simple-table>
                                           </v-form>
                                        </v-card-text>
                                    <v-divider />
                                    <v-card-actions>
                                        <v-btn tile depressed class="red darken-3 px-5" dark @click="cancel_reactive">
                                            <span class="caption font-weight-bold">Cancel</span>
                                        </v-btn>
                                        <v-btn tile depressed class="success darken-2 px-5 mx-3" dark @click="save_reactive">
                                            <span class="caption font-weight-bold">Save Result</span>
                                        </v-btn>
                                    </v-card-actions>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            </v-expansion-panels>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-card-text>
        </v-card>
    </v-container>

    <v-dialog v-model="loading_dialog" hide-overlay persistent width="300">
        <v-card color="success darken-2" dark>
            <v-card-text>
            <span class="subtitle-2 font-weight-light font-italic">saving data...</span>  
            <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
            </v-card-text>
        </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import {bus} from '../../app';
import {Toast} from '../../app';

export default {
  name: 'Blood-Form',
  props:[
      'appointment',
  ],
  data: () => ({
      loading_dialog: false,
      collection_time_modal: false,
      received_date_modal: false,
      collection_date_modal: false,
      received_time_modal: false,
     inputRules: [
        (v) => !!v || 'Field is required',
      ],

      info:{
          spec: "",
          collection_date:null,
          collection_time:null,
          received_date:null,
          received_time:null,
          ordering_dr:"",
          status:"",
          physician_copy:"",
          specimen:""
      },
      cbc: {
          white_blood:"",
          red_blood:"",
          hemoglobin:"",
          mcv:"",
          mch:"",
          mchc:"",
          rdw:"",
          platelet:"",
          platelet_volume:""
      },
      metabolic: {
          glucose:"",
          sodium:"",
          potassium:"",
          calcium:"",
          chloride:"",
          dioxide:"",
          nitrogen:"",
          creatinine:"",
          albumin:"",
          protein:"",
          alp:"",
          alt:"",
          ast:"",
          bilirubin:"",
          thromboplastin:"",
          prothrombin:"",
      },
      lipoprotein: {
          high_density:"",
          low_density:"",
          total:"",
          triglycerides:""
      },
      enzymes:{
          cpk_1:"",
          cpk_2:"",
          cpk_3:"",
          troponin:""
      },
      thyroid:{
          t3:"",
          ru:"",
          t4:"",
          t3:""
      },
      coagulation:{
          prothrombin:"",
          fibrinogen:""
      },
      disease:{
          chlamydia:"",
          gonorrhea:"",
          herpes:"",
          hiv:"",
          syphilis:""
      },
      sulphate_serum_test: "",
      reactive:"",
      patient:null,
  }),
  computed: {
      patient_name(){
          if(this.appointment){
              return this.appointment.patient.firstname + " " + this.appointment.patient.lastname;
          }
      },
        current_date(){
          return moment().format('MMMM, Do YYYY');
      },
      formateDob(){
          if(this.appointment){
              return moment(this.appointment.patient.dob).format('YYYY MMMM, Do dddd');
          }
      }
    },
    methods:{
        save_cbc(){
            if(this.$refs.basic_info.validate() && this.$refs.cbc.validate()){
                this.loading_dialog = true;
                axios.post('/store_blood_cbc', {patient: this.appointment, info: this.info, cbc: this.cbc}).then(response => {
                    if(response.data.success){
                        this.loading_dialog = false;
                        this.$refs.cbc.resetValidation();
                        this.$refs.cbc.reset();
                        Toast.fire({
                            icon: 'success',
                            title: response.data.success
                        });
                    }

                    if(response.data.error){
                        this.loading_dialog = false;
                        Swal.fire(
                            'Error',
                            response.data.error,
                            'error'
                        )
                    }
                });
            }else{
                Swal.fire(
                    'No Data',
                    'Input Data before Submission',
                    'info'
                )
            }
        },
        cancel_cbc(){
            this.$refs.cbc.reset();
            this.$refs.cbc.resetValidation();
        },
        save_metabolic(){
            if(this.$refs.basic_info.validate() && this.$refs.metabolic.validate()){
                this.loading_dialog = true;
                axios.post('/store_blood_metabolic', {patient: this.appointment, info: this.info, metabolic: this.metabolic}).then(response => {
                    if(response.data.success){
                        this.loading_dialog = false;
                        this.$refs.metabolic.reset();
                        this.$refs.metabolic.resetValidation();
                        Toast.fire({
                            icon: 'success',
                            title: response.data.success
                        });
                    }

                    if(response.data.error){
                        this.loading_dialog = false;
                        Swal.fire(
                            'Error',
                            response.data.error,
                            'error'
                        )
                    }
                })
            }else{
                Swal.fire(
                    'No Data',
                    'Input Data before Submission',
                    'info'
                )
            }
        },
        cancel_metabolic(){
            this.$refs.metabolic.reset();
            this.$refs.metabolic.resetValidation();
        },
        save_lipoprotein(){
            if(this.$refs.basic_info.validate() && this.$refs.lipoprotein.validate()){
                this.loading_dialog = true;
                axios.post('/save_blood_lipoprotein', {patient: this.appointment, info: this.info, lipoprotein: this.lipoprotein}).then(response => {
                    if(response.data.success){
                        this.loading_dialog = false;
                        this.$refs.lipoprotein.reset();
                        this.$refs.lipoprotein.resetValidation();
                        Toast.fire({
                            icon: 'success',
                            title: response.data.success
                        });
                    }

                    if(response.data.error){
                        this.loading_dialog = false;
                        Swal.fire(
                            'Error',
                            response.data.error,
                            'error'
                        )
                    }
                });
            }else{
                Swal.fire(
                    'No Data',
                    'Input Data before Submission',
                    'info'
                )
            }
        },
        cancel_lipoprotein(){
            this.$refs.lipoprotein.reset();
            this.$refs.lipoprotein.resetValidation();
        },
        save_enzymes(){
            if(this.$refs.basic_info.validate() && this.$refs.enzymes.validate()){
                this.loading_dialog = true;
                axios.post('/save_blood_enzymes', {patient: this.appointment, info: this.info, enzymes: this.enzymes}).then(response => {
                    if(response.data.success){
                        this.loading_dialog = false;
                        this.$refs.enzymes.reset();
                        this.$refs.enzymes.resetValidation();
                        Toast.fire({
                            icon: 'success',
                            title: response.data.success
                        });
                    }

                    if(response.data.error){
                        this.loading_dialog = false;
                        Swal.fire(
                            'Error',
                            response.data.error,
                            'error'
                        )
                    }
                });
            }else{
                Swal.fire(
                    'No Data',
                    'Input Data before Submission',
                    'info'
                )
            }
        },
        cancel_enzymes(){
            this.$refs.enzymes.reset();
            this.$refs.enzymes.resetValidation();
        },
        save_thyroid(){
            if(this.$refs.basic_info.validate() && this.$refs.thyroid.validate()){
                this.loading_dialog = true;
                axios.post('/save_blood_thyroid', {patient: this.appointment, info: this.info, thyroid: this.thyroid}).then(response => {
                    if(response.data.success){
                        this.loading_dialog = false;
                        this.$refs.thyroid.reset();
                        this.$refs.thyroid.resetValidation();
                        Toast.fire({
                            icon: 'success',
                            title: response.data.success
                        });
                    }

                    if(response.data.error){
                        this.loading_dialog = false;
                        Swal.fire(
                            'Error',
                            response.data.error,
                            'error'
                        )
                    }
                });
            }else{
                Swal.fire(
                    'No Data',
                    'Input Data before Submission',
                    'info'
                )
            }
        },
        cancel_thyroid(){
            this.$refs.thyroid.reset();
            this.$refs.thyroid.resetValidation();
        },
        save_coagulation(){
            if(this.$refs.basic_info.validate() && this.$refs.coagulation.validate()){
                this.loading_dialog = true;
                axios.post('/save_blood_coagulation', {patient: this.appointment, info: this.info, coagulation: this.coagulation}).then(response => {
                    if(response.data.success){
                        this.loading_dialog = false;
                        this.$refs.coagulation.reset();
                        this.$refs.coagulation.resetValidation();
                        Toast.fire({
                            icon: 'success',
                            title: response.data.success
                        });
                    }

                    if(response.data.error){
                        this.loading_dialog = false;
                        Swal.fire(
                            'Error',
                            response.data.error,
                            'error'
                        )
                    }
                });
            }else{
                Swal.fire(
                    'No Data',
                    'Input Data before Submission',
                    'info'
                )
            }
        },
        cancel_coagulation(){
            this.$refs.coagulation.reset();
            this.$refs.coagulation.resetValidation();
        },
        save_disease(){
            if(this.$refs.basic_info.validate() && this.$refs.disease.validate()){
                this.loading_dialog = true;
                axios.post('/save_blood_disease', {patient: this.appointment, info: this.info, disease: this.disease}).then(response => {
                    if(response.data.success){
                        this.loading_dialog = false;
                        this.$refs.disease.reset();
                        this.$refs.disease.resetValidation();
                        Toast.fire({
                            icon: 'success',
                            title: response.data.success
                        });
                    }

                    if(response.data.error){
                        this.loading_dialog = false;
                        Swal.fire(
                            'Error',
                            response.data.error,
                            'error'
                        )
                    }
                });
            }else{
                Swal.fire(
                    'No Data',
                    'Input Data before Submission',
                    'info'
                )
            }
        },
        cancel_disease(){
            this.$refs.disease.reset();
            this.$refs.disease.resetValidation();
        },

        save_dea(){
            if(this.$refs.basic_info.validate() && this.$refs.dea.validate()){
                this.loading_dialog = true;
                axios.post('/save_blood_dea', {patient: this.appointment, info: this.info, dea: this.sulphate_serum_test}).then(response => {
                    if(response.data.success){
                        this.loading_dialog = false;
                        this.$refs.dea.reset();
                        this.$refs.dea.resetValidation();
                        Toast.fire({
                            icon: 'success',
                            title: response.data.success
                        });
                    }

                    if(response.data.error){
                        this.loading_dialog = false;
                        Swal.fire(
                            'Error',
                            response.data.error,
                            'error'
                        )
                    }
                });
            }else{
                Swal.fire(
                    'No Data',
                    'Input Data before Submission',
                    'info'
                )
            }
        },
        cancel_dea(){
            this.$refs.dea.reset();
            this.$refs.dea.resetValidation();
        },

        save_reactive(){
            if(this.$refs.basic_info.validate() && this.$refs.reactive.validate()){
                this.loading_dialog = true;
                axios.post('/save_blood_protein', {patient: this.appointment, info: this.info, reactive: this.reactive}).then(response => {
                    if(response.data.success){
                        this.loading_dialog = false;
                        this.$refs.reactive.reset();
                        this.$refs.reactive.resetValidation();
                        Toast.fire({
                            icon: 'success',
                            title: response.data.success
                        });
                    }

                    if(response.data.error){
                        this.loading_dialog = false;
                        Swal.fire(
                            'Error',
                            response.data.error,
                            'error'
                        )
                    }
                });
            }else{
                Swal.fire(
                    'No Data',
                    'Input Data before Submission',
                    'info'
                )
            }
        },
        cancel_reactive(){
            this.$refs.reactive.reset();
            this.$refs.reactive.resetValidation();
        },
    },

};
</script>

<style scoped>
  
</style>

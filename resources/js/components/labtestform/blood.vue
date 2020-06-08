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
                        <p class="subtitle-1">25th April, 2020</p>
                    </v-col>
                    <v-col cols="2" class="mt-8">
                        <v-btn tile large class="px-5 success darken-2" depressed>
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
                                <v-text-field dense label="Patient Name" class="subtitle-2 font-weight-bold"></v-text-field>
                            </v-col>
                            <v-col cols="2">
                                <v-text-field dense label="Age" class="subtitle-2 font-weight-bold"></v-text-field>
                            </v-col>
                            <v-col cols="3">
                                <v-text-field dense label="Sex" class="subtitle-2 font-weight-bold"></v-text-field>
                            </v-col>
                            <v-col cols="3">
                                <v-text-field dense label="DOB" class="subtitle-2 font-weight-bold"></v-text-field>
                            </v-col> 
                        </v-row>
                        <v-row>
                            <v-col cols="5">
                                <v-text-field dense label="Ordering Dr." class="subtitle-2 font-weight-bold"></v-text-field>
                            </v-col>
                            <v-col cols="2">
                                <v-text-field dense label="Status" class="subtitle-2 font-weight-bold"></v-text-field>
                            </v-col>
                            <v-col cols="5">
                                <v-text-field dense label="Physician Copy for" class="subtitle-2 font-weight-bold"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="3">
                                <v-text-field dense label="SPEC #" class="subtitle-2 font-weight-bold"></v-text-field>
                            </v-col>
                            <v-col cols="3">
                                <v-text-field dense label="Collection Date" class="subtitle-2 font-weight-bold"></v-text-field>
                            </v-col>
                            <v-col cols="3">
                                <v-text-field dense label="Collection Time" class="subtitle-2 font-weight-bold"></v-text-field>
                            </v-col>
                            <v-col cols="3">
                                <v-text-field dense label="SPECIMEN" class="subtitle-2 font-weight-bold"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="3">
                                <v-text-field dense label="Received Date" class="subtitle-2 font-weight-bold"></v-text-field>
                            </v-col>
                            <v-col cols="3">
                                <v-text-field dense label="Received Time" class="subtitle-2 font-weight-bold"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
                <v-card outlined>
                    <v-card-title class="success darken-2 subtitle-2">
                        <span class="subtitle-2 font-weight-bold text-uppercase white--text">Complete Blood Count</span>
                    </v-card-title>
                    <v-card-text>
                        <v-simple-table>
                            <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-left">Test</th>
                                    <th class="text-left">Normal</th>
                                    <th class="text-left">Abnormal</th>
                                    <th class="text-left">Flag</th>
                                    <th class="text-left">Units</th>
                                    <th class="text-left">Reference Range</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="subtitle-2 font-weight-bold">White Blood Cells ( WBC )</td>
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
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
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="subtitle-2 font-weight-bold">Red Blood Cells ( RBC )</td>
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
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
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="subtitle-2 font-weight-bold">Hemoglobin ( HB/Hgb )</td>
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
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
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="subtitle-2 font-weight-bold">Mean Cell Volume ( MCV )</td>
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
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
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="subtitle-2 font-weight-bold">Mean Cell Hemoglobin (MCH)</td>
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
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
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="subtitle-2 font-weight-bold">Mean Cell Hb Conc (MCHC)</td>
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
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
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="subtitle-2 font-weight-bold">Red Cell Dist Width (RDW)</td>
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
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
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="subtitle-2 font-weight-bold">Platelet Count</td>
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
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
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="subtitle-2 font-weight-bold">Mean Platelet Volume</td>
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
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
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                    </td>
                                </tr>
                            </tbody>
                            </template>
                        </v-simple-table>
                    </v-card-text>
                </v-card>
                <v-card outlined>
                    <v-card-title class="success darken-2 subtitle-2">
                        <span class="subtitle-2 font-weight-bold text-uppercase white--text">Comprehensive Metabolic Panel</span>
                    </v-card-title>
                    <v-card-text>
                        <v-simple-table>
                            <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-left">Test</th>
                                    <th class="text-left">Normal</th>
                                    <th class="text-left">Abnormal</th>
                                    <th class="text-left">Flag</th>
                                    <th class="text-left">Units</th>
                                    <th class="text-left">Reference Range</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="subtitle-2 font-weight-bold">Glucose</td>
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
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
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="subtitle-2 font-weight-bold">Sodium Salts</td>
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
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
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="subtitle-2 font-weight-bold">Potassium Salts</td>
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
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
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="subtitle-2 font-weight-bold">Calcium</td>
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
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
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="subtitle-2 font-weight-bold">Chloride</td>
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
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
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="subtitle-2 font-weight-bold">Carbon Dioxide</td>
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
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
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="subtitle-2 font-weight-bold">Blood Urea Nitrogen</td>
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
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
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="subtitle-2 font-weight-bold">Creatinine</td>
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
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
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="subtitle-2 font-weight-bold">Albumin</td>
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
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
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="subtitle-2 font-weight-bold">Total Protein</td>
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
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
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="subtitle-2 font-weight-bold">Alkaline Phosphatase (ALP)</td>
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
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
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="subtitle-2 font-weight-bold">Alamine Aminotransferase (ALT)</td>
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
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
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="subtitle-2 font-weight-bold">Asparate Aminotransferase (AST)</td>
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
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
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="subtitle-2 font-weight-bold">Bilirubin</td>
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
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
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="subtitle-2 font-weight-bold">Activated Partial Thromboplastin Time</td>
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
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
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="subtitle-2 font-weight-bold">Prothrombin Time</td>
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
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
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                    </td>
                                </tr>
                            </tbody>
                            </template>
                        </v-simple-table>
                    </v-card-text>
                </v-card>
            </v-card-text>
        </v-card>
    </v-container>
  </v-app>
</template>

<script>

export default {
  name: 'Blood',
  data: () => ({
     
  }),
  computed: {
    
    }

};
</script>

<style scoped>
  
</style>

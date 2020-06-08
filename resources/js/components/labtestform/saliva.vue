<template>
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
                        <h5 class="title font-weight-thin text-uppercase">Medix Saliva Test Report</h5>
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
                            <v-col cols="6">
                                <v-text-field dense label="Received Date" class="subtitle-2 font-weight-bold"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field dense label="Received Time" class="subtitle-2 font-weight-bold"></v-text-field>
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
                                    <th class="text-left">Reference Interval</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="subtitle-2 font-weight-bold">Estrogens</td>
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
                                    <td class="subtitle-2 font-weight-bold">Progesterone</td>
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
                                    <td class="subtitle-2 font-weight-bold">Testosterone</td>
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
                                    <td class="subtitle-2 font-weight-bold">Cortisol</td>
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
                                    <td class="subtitle-2 font-weight-bold">Melatonin</td>
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
                                    <td class="subtitle-2 font-weight-bold">Dehydroepiandrosterone (DHEA)</td>
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
                        <span class="subtitle-2 font-weight-bold text-uppercase white--text">Genetic Materials</span>
                    </v-card-title>
                    <v-card-text>
                        <v-simple-table>
                            <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-left">Analysis</th>
                                    <th class="text-left">Result</th>
                                    <th class="text-left">Normal Range</th>
                                    <th class="text-left">Reference Interval</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="subtitle-2 font-weight-bold">Deoxyribonucleic Acid [DNA]</td>
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
                                    <td class="subtitle-2 font-weight-bold">Ribo-Nucleic Acid [RNA]</td>
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
                                    <td class="subtitle-2 font-weight-bold">Antibodies</td>
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
                                    <td class="subtitle-2 font-weight-bold">Enzymes</td>
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
                        <span class="subtitle-2 font-weight-bold text-uppercase white--text">Infection Examination</span>
                    </v-card-title>
                    <v-card-text>
                        <v-simple-table>
                            <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-left">Analysis</th>
                                    <th class="text-left">Result</th>
                                    <th class="text-left">Normal Range</th>
                                    <th class="text-left">Reference Interval</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="subtitle-2 font-weight-bold">HIV</td>
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold" ></v-text-field>
                                    </td>
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                    </td>
                                    <td>
                                        <v-text-field dense class="subtitle-2 font-weight-bold"></v-text-field>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="subtitle-2 font-weight-bold">Cancer</td>
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
                                    <td class="subtitle-2 font-weight-bold">Parasite [worms, amoeba etc]</td>
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
                                    <td class="subtitle-2 font-weight-bold">Allergies</td>
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
                                    <td class="subtitle-2 font-weight-bold">pH</td>
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
</template>

<script>
export default {
    data: () => ({

    })
}
</script>
<template>
    <v-container id="options">
        <h5 class="subtitle-1 font-weight-bold">List of Saliva Test Type</h5>
        <v-divider inset />
        <v-row>
            <v-col cols="12" md="7">
                <v-card link hover style="border-bottom: 3px solid grey;" v-for="(test, index) in tests" :key="index" class="mt-3">
                    <div class="d-flex">
                        <div class="justify-center align-center mr-auto pa-3">
                            <v-icon size="30" color="#6e40bd">mdi-cards</v-icon>
                        </div>
                        <div class="d-flex justify-center align-center">
                            <v-card-text class="pa-1 subtitle-2 font-weight-bold ml-4">{{test.name}}</v-card-text>
                        </div>
                        <v-divider inset vertical class="mx-3" />
                        <v-card-actions class="ml-auto">
                            <v-btn rounded class="px-5" depressed :to="test.link">
                                <span class="caption">view results</span>
                                <v-icon right size="19">mdi-send</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" md="5">
                <v-responsive>
                    <v-img src="/app_asset/undraw_files_6b3d.svg" width="70%" class="mx-auto" />
                </v-responsive>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        tests: [
            {name: 'Steroid Hormone Analysis', link: {name: 'steroid-hormone'}},
            {name: 'Genetic Material Assessment', link: {name: 'genetics'}},
            {name: 'Infection Examination', link: {name: 'saliva-infection'}},
        ]
    })
}
</script>
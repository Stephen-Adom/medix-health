<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="10">
                <v-card class="pa-4" flat>
                    <v-card-text>
                        <v-responsive>
                            <v-img src="/app_asset/undraw_authentication_fsn5.svg" width="55%" class="mx-auto"></v-img>
                        </v-responsive>
                        <p class="text-center subtitle-1 font-weight-bold text-uppercase mt-4">You are not authorized to access this page</p>
                    </v-card-text>
                    <v-divider />
                    <v-card-actions class="d-flex justify-center mt-5">
                        <v-btn class="ma-2" tile outlined color="success darken-2" dark @click="homepage">
                            <v-icon left>mdi-home</v-icon>
                            <span class="subtitle-2 font-weight-bold"> Back to Dashboard</span>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({

    }),
    methods:{
        homepage(){
            this.$router.push({name: 'Home'});
        }
    }
}
</script>
<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="10">
                <v-card class="pa-4" flat>
                    <v-card-text>
                        <v-responsive>
                            <v-img src="/app_asset/undraw_page_not_found_su7k.svg" width="50%" class="mx-auto"></v-img>
                        </v-responsive>
                        <p class="text-center subtitle-1 font-weight-light text-uppercase mt-4"><span class="font-weight-bold">Ooops,</span> Page Not Found</p>
                    </v-card-text>
                    <v-divider />
                    <v-card-actions class="d-flex justify-center mt-5">
                        <v-btn class="ma-2" tile outlined color="success darken-2" dark @click="homepage">
                            <v-icon left>mdi-home</v-icon>
                            <span class="subtitle-2 font-weight-bold"> Back to Previous Page</span>
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
            this.$router.go(-1);
        }
    }
}
</script>
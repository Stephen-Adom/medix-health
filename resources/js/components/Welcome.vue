<template>
     <v-container fluid class="fill-height" id="welcome_background">
        <v-row align="center" justify="center" id="welcome_intro">
            <v-col cols="12" lg="6">
                <div align="center" justify="center">
                    <v-img src="/app_asset/medix_full.png" id="brand_logo" width="50%"></v-img>
                </div>
                <div align="center" justify="center" class="mt-6">
                    <h1 class="overline grey--text ligten-2 text-uppercase font-weight-thin application--text">Application</h1>
                </div>
                <div align="center" justify="center" class="mt-10">
                    <v-btn class="success darken-3 px-8" tile depressed link href="/login" large>
                        <v-icon size="18" left>mdi-login</v-icon> 
                        <span class="caption">login</span>
                    </v-btn>
                </div>
            </v-col>
        </v-row>
        <!-- <div id="background_img">
            <v-img src="/app_asset/wave (3).svg" width="100%" class="bg_img"></v-img>
        </div> -->
    </v-container>
</template>

<script>
export default {
    data: () =>({

    }) 
}
</script>

<style scoped>
#welcome_background{
    width: 100%;
    height: 100%;
    background-image: url('/app_asset/Artboard 1.png');
    background-origin: content-box;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow-x: hidden;
}

.application--text{
    font-size: 70px !important;
}

@media (max-width: 960px){
    #welcome_background{
        width: 100%;
        height: 100%;
        background-image: url('/app_asset/Artboard 1.png');
        background-origin:border-box;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
}

@media (max-width: 600px){
    #brand_logo{
        width: 40% !important;
    }

    .application--text{
        font-size: 30px !important;
    }
}
</style>
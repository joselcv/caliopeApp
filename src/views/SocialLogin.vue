<template>
  <v-container fluid id="container">
     <v-flex xs3 >
       <v-card style="background-color:transparent;" elevation="0" width="80%" height="80px">
          <img src="../../public/img/vectores/logo_caliope.svg"   width="200px" height="80px" style=" padding-top:20px; transform: scale(0.8);">
        </v-card>
        </v-flex>
  <v-flex xs12 style="padding-top:200px; width:100px; margin-left:34%" />
    <v-card id="car" max-width="500" class="mx-auto">
                <v-flex xs12 text-center flex-column style="padding:8% 5% 15% 5%">
                  <v-btn large   color="blue" dark style="width:100%; font-size:15px; text-transform:none; ">
                     <v-icon left>fab fa-facebook-f</v-icon> {{ labels.signin_with_facebook }} 
                  </v-btn>
                  <v-btn large  outlined  style="width:100%; font-size:15px; text-transform:none; margin-top:5%;">
                     <img src="../../public/img/google1.png" alt="" width="18px" style="margin-right:2%; margin-left:-7%"> {{ labels.signin_with_google }} 
                  </v-btn>
                  
                    <v-flex xs12 style="display:flex; margin-top:4%"><span style="width:170px; margin:auto; margin-right:1%"><hr></span><span style="margin:auto;margin-left:0%;margin-right:0%">o</span><span style="width:170px; margin:auto; margin-left:1%"><hr></span></v-flex>
                 
                  <v-btn large   color="blue" dark style="width:100%; text-transform:none; margin-top:5%">
                     <v-icon left>far fa-envelope</v-icon> {{ labels.register_with_your_email }} 
                  </v-btn>
                  <v-flex layout justify-start mt-5 style="font-size:15px; font-weight:600" >
                    <span>{{labels.already_have_a_caliope_account}} <a @click="()=> $router.push({name:'login'})" style="text-decoration:none">{{labels.sign_in}}</a></span>
                  </v-flex>
                </v-flex>
      </v-card>
      <modal />
  </v-container>
</template>

<script>
// import VueRecaptcha from "vue-recaptcha";
import {labels} from "@/lang/lang.js"
import {mapState, mapMutations} from 'vuex';
import modal from '@/components/Modals/TermsAndConditionsModal.vue'
export default {
  components:{
    // VueRecaptcha,
    modal
  },
  data:()=>({
    labels:labels,
    activeBtn:0,
  }),mounted() {
    this.hiddenTolbar();
  },
  computed:{
    ...mapState(["termsAndConditionsModal"])
  },methods: {
    ...mapMutations(["hiddenTolbar"]),
  },
  }
</script>
<style scoped>
#car{
  padding-top:2%;


}
    @media (max-height: 650px) {
  #car {
    margin-top: 20%;
    height:300px
  }
}

#container{
  background-image: linear-gradient(to right, rgb(181, 184, 177), rgb(181, 184, 177)), url(../../public/img/WEBP/girl-410334.webp);
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center;
  height: 100%;
  font-family: "nunito";
  
}
</style>

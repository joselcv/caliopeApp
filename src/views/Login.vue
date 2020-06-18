<template>
  <v-container fluid id="container">
     <v-flex xs3 >
        <v-card style="background-color:transparent;" elevation="0" width="80%" height="80px">
          <img src="../../public/img/vectores/logo_caliope.svg"   width="200px" height="80px" style=" padding-top:20px; transform: scale(0.8);">
        </v-card>
        </v-flex>
  <v-flex xs12 style="padding-top:200px; width:100px; margin-left:34%" />
    <v-card id="car" max-width="500" height="470" class="mx-auto">
               <v-flex xs12 text-center flex-column  style=" padding-bottom:15%; padding-left:5%; padding-right:5%;">
                      <v-layout justify-center>
                      <v-flex xs9>
                      <form>
                            <v-text-field
                              v-model="email"
                              :label="labels.email"
                              required
                            ></v-text-field>
                            <v-text-field
                              v-model="password"
                              :label="labels.password"
                              required
                            ></v-text-field>
                            
                            <v-flex layout justify-center>
                              <div style="">
                                <vue-recaptcha
                                      sitekey="6LfRvqsUAAAAAAQCWq3hL9tchVuiKST0iFFDILir"
                                      class="layout column align-center"
                                    />
                              </div>
                            </v-flex>
                            
                      </form>
                        </v-flex>
                        </v-layout>
                      <v-layout justify-center mt-5>
                        <v-flex xs10>
                          <v-btn block style="text-transform:none; height:50px" color="primary">Iniciar sesión</v-btn>
                        </v-flex>
                      </v-layout>
                      <v-flex layout justify-center mt-5 style="font-size:15px; font-weight:600;" >
                        <span>¿{{labels.did_you_forget_your_password}}? &nbsp;&nbsp;&nbsp;<a href="#" style="text-decoration:none">{{labels.recover}}</a></span>
                      </v-flex>
                       <v-flex xs12 style="display:flex; margin-top:2%"><span style="width:170px; margin:auto; margin-right:1%"><hr></span><span style="margin:auto;margin-left:0%;margin-right:0%">o</span><span style="width:170px; margin:auto; margin-left:1%"><hr></span></v-flex>
                        <v-flex xs12 @click="()=> $router.push({name:'registry'})"> <a style="text-decoration:none; font-weight:600">{{labels.sign_up}}</a></v-flex>
                </v-flex>

      </v-card>
      <modal />
  </v-container>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";
import {labels} from "@/lang/lang.js"
import {mapState, mapMutations} from 'vuex';
import modal from '@/components/Modals/TermsAndConditionsModal.vue'
export default {
  data:()=>({
    labels:labels,
    activeBtn:0,
    email:'',
    password:''
  }),mounted() {
    this.hiddenTolbar();
  },
  components:{
    VueRecaptcha,
    modal
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

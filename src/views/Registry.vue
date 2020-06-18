<template>
  <v-container fluid id="container">
     <v-flex xs3 >
       <v-card style="background-color:transparent;" elevation="0" width="80%" height="80px">
          <img src="../../public/img/vectores/logo_caliope.svg"   width="200px" height="80px" style=" padding-top:20px; transform: scale(0.8);">
        </v-card>
        </v-flex>
  <v-flex xs12 style="padding-top:50px; width:200px; margin-left:34%" />
    <v-card id="car" max-width="500"  class="mx-auto" v-if="completarRegistroModal.show">
      <v-flex xs12 text-center flex-column  style="padding-top:4%; padding-left:5%; padding-right:5%">
             <span style="font-weight:600">{{labels.register_with}}</span> <a @click="()=> $router.push({name:'SocialLogin'})"  style="text-decoration:none; font-weight:600">Facebook</a> <span style="font-weight:600">o</span> <a @click="()=> $router.push({name:'SocialLogin'})" style="text-decoration:none;font-weight:600">Google</a>
                        <v-flex xs12 style="display:flex; margin-top:4%"><span style="width:170px; margin:auto; margin-right:1%"><hr></span><span style="margin:auto;margin-left:0%;margin-right:0%">o</span><span style="width:170px; margin:auto; margin-left:1%"><hr></span></v-flex>
      </v-flex>
                <v-flex xs12 text-center flex-column  style=" padding-bottom:15%; padding-left:5%; padding-right:5%;">
                      <v-layout justify-center>
                      <v-flex xs9>
                      <form>
                            <v-text-field
                              v-model="name"
                              :label="labels.name"
                              required
                            ></v-text-field>
                            <v-text-field
                              v-model="name"
                              :label="labels.last_name"
                              required
                            ></v-text-field>
                            <v-text-field
                              v-model="email"
                              :label="labels.email"
                              required
                            ></v-text-field>
                            <v-text-field
                              v-model="email"
                              :label="labels.password"
                              required
                            ></v-text-field>
                            <v-text-field
                              v-model="email"
                              :label="labels.confirm_Password"
                              required
                            ></v-text-field>
                            <v-flex style="display:flex">
                                <v-checkbox
                                  v-model="checkbox"
                                  required
                                >
                                </v-checkbox>
                            <span style="height:2%; width:300px; margin-top:5%; font-weight:600">{{labels.accept_the}}<a  href="" style="margin-left:2%;text-decoration:none;font-weight:600">{{labels.terms_and_conditions}}</a></span>
                            </v-flex>
                           
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
                          <v-btn block style="text-transform:none" color="primary" @click="showModal">Resgistrarse</v-btn>
                        </v-flex>
                      </v-layout>
                      <v-flex layout justify-start mt-5 style="font-size:15px; font-weight:600; padding-left:30px" >
                        <span>{{labels.already_have_a_caliope_account}} <a @click="()=> $router.push({name:'login'})" style="text-decoration:none">{{labels.sign_in}}</a></span>
                      </v-flex>
                </v-flex>

      </v-card>
      <v-layout justify-center style="margin-top:10%" >
        <cardsRegistry v-if="completarRegistroModal.show1"/>
      </v-layout>
      <modal />
  </v-container>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";
import {labels} from "@/lang/lang.js"
import {mapState, mapMutations} from 'vuex';
import modal from '@/components/Modals/TermsAndConditionsModal.vue';
import cardsRegistry from '@/components/Modals/cardsRegistry.vue';
// import { validationMixin } from 'vuelidate';
//   import { required, maxLength, email } from 'vuelidate/lib/validators';
export default {
  // mixins: [validationMixin],
  //  validations: {
  //     name: { required, maxLength: maxLength(10) },
  //     email: { required, email },
  //     select: { required },
  //     checkbox: {
  //       checked (val) {
  //         return val
  //       },
  //     },
  //   },
  components:{
    VueRecaptcha,
    modal,
    cardsRegistry
  },
  data:()=>({
    
    labels:labels,
    activeBtn:0,
     name: '',
      email: '',
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
  }),mounted() {
    this.hiddenTolbar();
  },
  computed:{
    ...mapState(["termsAndConditionsModal","completarRegistroModal"]),
    //  checkboxErrors () {
    //     const errors = []
    //     if (!this.$v.checkbox.$dirty) return errors
    //     !this.$v.checkbox.checked && errors.push('You must agree to continue!')
    //     return errors
    //   },
    //   selectErrors () {
    //     const errors = []
    //     if (!this.$v.select.$dirty) return errors
    //     !this.$v.select.required && errors.push('Item is required')
    //     return errors
    //   },
    //   nameErrors () {
    //     const errors = []
    //     if (!this.$v.name.$dirty) return errors
    //     !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
    //     !this.$v.name.required && errors.push('Name is required.')
    //     return errors
    //   },
    //   emailErrors () {
    //     const errors = []
    //     if (!this.$v.email.$dirty) return errors
    //     !this.$v.email.email && errors.push('Must be valid e-mail')
    //     !this.$v.email.required && errors.push('E-mail is required')
    //     return errors
    //   },
  },methods: {
    ...mapMutations(["hiddenTolbar","showModal"]),
  },
  }


 
</script>
<style scoped>
#car{
  padding-top:2%;


}
    @media (max-height: 650px) {
  #car {
    margin-top: -5%;
    height:650px
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

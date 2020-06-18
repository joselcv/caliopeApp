<template>
  <v-container fluid style="background-color:#364573; height:100%">
  <v-flex style="margin-top:10%;">
  <p id="p" align="center" class="white--text">
{{ labels.password_recovery_email }}
</p>
  </v-flex>
    <v-card id="car" max-width="500" height="420" class="mx-auto">
      <v-form ref="form" :v-model="true" lazy-validation autocomplete="on">
        <v-text-field
          :label="labels.email"
          style="margin-left:10%; margin-right:10%;"
          append-icon="far fa-envelope"
        />
       <br>
       </v-form>
       <br>
       <vue-recaptcha
                sitekey="6LfRvqsUAAAAAAQCWq3hL9tchVuiKST0iFFDILir"
                class="layout column align-center"
              />
              <br>
              <v-card-actions>
                <v-flex text-center>
                  <v-btn color="yellow" style="width:65%;">
<strong> {{ labels.save }} </strong>
</v-btn>
                </v-flex>
              </v-card-actions>
      </v-card>
      <v-card style="margin-top:2%; margin-bottom:5%; padding-top:2%; padding-bottom:2%; opacity:0.9" max-width="500" class="mx-auto">
        <v-flex layout justify-center>
            <a href="#">{{ labels.you_do_not_have_an_account }}? - {{ labels.sign_up_here }}</a>
        </v-flex>
      </v-card>
  </v-container>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";
import {labels} from "@/lang/lang.js"
export default {
  components:{
    VueRecaptcha
  },
  data:()=>({
    labels:labels,
    activeBtn:0,
  })
  }
</script>
<style >
#car{
  padding-top:2%;
  opacity:0.9;
}
    @media (max-height: 650px) {
  #car {
    height:300px
  }

  #p{
      margin-top: 20%;
      margin-bottom: -10%;
      
  }
}
</style>
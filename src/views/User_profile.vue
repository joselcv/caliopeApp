<template>
  <div class="overflow-hidden" style="background-color:#364573; height:100%">
   <v-flex style="margin-top:6%">
        <strong><p align="center" class="white--text">Perfil de usuario</p></strong>
    </v-flex>
    <v-flex layout justify-center>
        <v-card width="200" height="200">
            <v-img
                :src="upload"
                width="200"  
                height="200"
            />
         </v-card>
    </v-flex>
    <v-flex layout justify-center style="margin-top:1%;">
        <v-flex xs10 md2>
                <v-file-input
                v-model="upload"
                label="Editar foto de perfil"
                filled
                dark   
                prepend-icon="mdi-camera"
                @change="obtenerBase64()"  
            />
        </v-flex>
    </v-flex>
            <v-tabs
            v-model="tab"
            background-color="#364573"
            class="elevation-2 hidden-sm-and-down"
            color="#D4D93D"
            style="width:90%; margin-left:5%;"
            dark
            :centered="centered"
            :grow="grow"
            :vertical="vertical"
            :right="right"
            :prev-icon="prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined"
            :next-icon="nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined"
            :icons-and-text="icons"
            >
            <v-tabs-slider />

            <v-tab
                v-for="i in tabs"
                :key="i"
                :href="`#tab-${i}`"
            >
                {{ textTabs[i] }} 
                <v-icon v-if="icons" :class="iconsClass[i]" />
            </v-tab>

            <v-tab-item
                v-for="i in tabs"
                :key="i"
                :value="'tab-' + i"
            >
                <v-card
                flat
                tile
                >
                <v-card-text>
                    <v-card-text>
                    <infoContact v-if="i===1 ? true : false" />
                    <changePasword v-if="i===2 ? true : false" />
                    <validateData v-if="i===3 ? true : false" />
                </v-card-text>
                </v-card-text>
                </v-card>
            </v-tab-item>
            </v-tabs>

            <v-tabs
            v-model="tab"
            background-color="#364573"
            class="elevation-2 hidden-md-and-up"
            color="#D4D93D"
            dark
            :centered="true"
            :grow="grow"
            :vertical="false"
            :right="right"
            :prev-icon="prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined"
            :next-icon="nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined"
            :icons-and-text="icons"
            >
            <v-tabs-slider />

            <v-tab
                v-for="i in tabs"
                :key="i"
                :href="`#tab-${i}`"
            >
                {{ textTabs[i] }} 
                <v-icon v-if="icons" :class="iconsClass[i]" />
            </v-tab>

            <v-tab-item
                v-for="i in tabs"
                :key="i"
                :value="'tab-' + i"
            >
                <v-card
                flat
                tile
                >
                <v-card-text>
                    <infoContact v-if="i===1 ? true : false" />
                    <changePasword v-if="i===2 ? true : false" />
                    <validateData v-if="i===3 ? true : false" />
                </v-card-text>
                </v-card>
            </v-tab-item>
            </v-tabs>
  </div>
</template>
<script>
import {labels} from '@/lang/lang.js';
import infoContact from '@/components/UserProfile/userProfileContactInfoTab.vue';
import changePasword from '@/components/UserProfile/userProfileChangePasswordTab.vue';
import validateData from '@/components/UserProfile/userProfileValidateProfileTab.vue'
  export default {components:{
        infoContact,
        changePasword,
        validateData
    },
    data:()=>({
        photo:null,
        upload:null,
        labels:labels,
        showNav: true,
        tab: null,
        text: 'hol ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        icons: true,
        centered: false,
        grow: false,
        vertical: true,
        prevIcon: false,
        nextIcon: false,
        right: false,
        tabs: 3,
        iconsClass:["fas fa-user-circle","fas fa-user-circle","fas fa-key","fas fa-shield-alt"],
        textTabs:["",labels.contact_information,labels.change_password,labels.validate_profile],
        reader: new FileReader()
    }),beforeUpdate() {
        
    },methods: { 
        obtenerBase64(){
            this.reader.onload= ()=>{
                this.upload=this.reader.result;
            }

            if(this.upload){
                    this.reader.readAsDataURL(this.upload);
                    
            }else {
                    this.photo = "../../public/img/WEBP/perfil-hombre.webp";
                }
            }
    },
  }
</script>
<template>
<div v-if="stateTolbar.stateTolbar">
  <v-bottom-navigation id="nav" :value="activeBtn" max-height="100px" class="hidden-sm-and-down "  
  style="border-width: 2px;
  border-style: solid;
  border-right: #364573;
  border-left: #364573;
  border-color: white;
  "
>
        <img src="../../public/img/WEBP/Logo_Caliope.webp" width="200px" height="51px">
        <v-spacer />
        <v-btn class="buttons" href="#aboutUs">
          <strong><span style="font-size: 13px; color: white;">{{ labels.about_us }}</span></strong>
        </v-btn>

        <v-btn class="buttons" href="#products">
          <strong><span style="font-size: 13px; color: white;">{{ labels.products }}</span></strong>
        </v-btn>

        <v-btn class="buttons" href="#services">
          <strong><span style="font-size: 13px; color: white;">{{ labels.our_services }}</span></strong>
        </v-btn>
        
        <v-btn class="buttons" href="#professionals">
          <strong><span style="font-size: 13px; color: white;">{{ labels.our_professionals }}</span></strong>
        </v-btn>
        <v-btn class="buttons" href="#contact">
          <strong><span style="font-size: 13px; color: white;">{{ labels.blog }}</span></strong>
        </v-btn>
 <!-- lang -->
<v-tooltip bottom>
  <template v-slot:activator="{ on }">
    <v-btn icon v-on="on">
      <img src="../../public/img/WEBP/co.webp">
    </v-btn>
  </template>
  <span>Español</span>
</v-tooltip>
<v-tooltip bottom>
  <template v-slot:activator="{ on }">
    <v-btn icon v-on="on">
      <img src="../../public/img/WEBP/us.webp">
    </v-btn>
  </template>
  <span>English</span>
</v-tooltip>
      </v-bottom-navigation>

<!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
  <v-toolbar     
  
      dark
      class="hidden-md-and-up"
      style="
      position:fixed; 
      z-index: 100; 
      top: 0; 
      background-color: #364573 ; 
      font-family: 'Questrial', sans-serif; 
      width: 100%; 
      opacity: 1;
      border-width: 2px;
      border-style: solid;
      border-right: #364573;
      border-left: #364573;
      border-color: white;
      "
    >
        <img src="../../public/img/WEBP/Logo_Caliope.webp" width="100px" height="48px" alt="">
        <v-spacer />
       <!-- lang -->
<v-tooltip bottom>
  <template v-slot:activator="{ on }">
    <v-btn icon v-on="on">
      <img src="../../public/img/WEBP/co.webp">
    </v-btn>
  </template>
  <span>Español</span>
</v-tooltip>
<v-tooltip bottom>
  <template v-slot:activator="{ on }">
    <v-btn icon v-on="on">
      <img src="../../public/img/WEBP/us.webp">
    </v-btn>
  </template>
  <span>English</span>
</v-tooltip>


        <v-menu
        v-if="!selection.length"
    :offset-y="offsetY"
    transition="slide-y-transition"
    bottom
>
      <template v-slot:activator="{ on }">
        <v-btn
          icon
          class="transparent"
          dark
          v-on="on"
        >
        <v-icon class="fas fa-bars" style="color:white" />              
        </v-btn>
      </template>
<v-list> 
  <v-list-item
    v-for="(item, i) in items2"
    :id="i"
    :key="i"
    @click="redirect(item)"   
    @mouseover="changeStyle(i,son+i)"
    >
    <v-list-item-icon>
      <v-icon :id="son + i">
{{ item.icon }}
</v-icon>
    </v-list-item-icon>
    <v-list-item-title>{{ item.title }}</v-list-item-title>
  </v-list-item>
</v-list>
</v-menu>
</v-toolbar>
  </div>
</template>
<script>
import {labels} from '@/lang/lang.js';
import {mapState,mapMutations} from "vuex";
export default {
data:()=>({
    labels:labels,
    selection: [],
    son:5,
    offsetY:true,
    items2: [
        { title: labels.about_us,icon: 'far fa-building' },
        { title: labels.products,icon: 'fas fa-store' },
        { title: labels.our_professionals, icon: 'fas fa-users' },
        { title: labels.our_services,icon:'fas fa-briefcase' },
        { title: labels.blog,icon:'fab fa-blogger' },
        
      ],
    activeBtn: 0
}),
  mounted() {
    this.hiddenTolbar();
  },
  computed:{
    ...mapState(["stateTolbar"])
  },
methods:{
  ...mapMutations(["hiddenTolbar"]),
    redirect(item){
           switch (item.title) {
             case "Sobre nosotros":
               location.href = "#";
               break;
             case "Productos":
               location.href = "#";
               break;
             case "Nuestros profesionales":
               location.href = "#";
               break;
             case "Contactenos":
               location.href = "#";
               break;
             case "Nuestros servicios":
               location.href = "#";
               break;
             default:
               break;
           }
               
         },
    changeStyle(item,son){         
          document.getElementById(item).style.cssText = 'background-color:#364573;color:white !important';
          document.getElementById(son).style.color = 'white';
          switch (item) {
            case 0:
            document.getElementById(1).style.cssText = 'background-color: white; color: gray';
            document.getElementById(2).style.cssText = 'background-color: white; color: gray';
            document.getElementById(3).style.cssText = 'background-color: white; color: gray';
            document.getElementById(4).style.cssText = 'background-color: white; color: gray';
            document.getElementById(6).style.color = 'gray';
            document.getElementById(7).style.color = 'gray';
            document.getElementById(8).style.color = 'gray';
            document.getElementById(9).style.color = 'gray';
            break;
            case 1:
            document.getElementById(0).style.cssText = 'background-color: white; color: gray';
            document.getElementById(2).style.cssText = 'background-color: white; color: gray';
            document.getElementById(3).style.cssText = 'background-color: white; color: gray';
            document.getElementById(4).style.cssText = 'background-color: white; color: gray';
            document.getElementById(5).style.color = 'gray';
            document.getElementById(7).style.color = 'gray';
            document.getElementById(8).style.color = 'gray';
            document.getElementById(9).style.color = 'gray';
            break;
            case 2:
            document.getElementById(1).style.cssText = 'background-color: white; color: gray';
            document.getElementById(0).style.cssText = 'background-color: white; color: gray';
            document.getElementById(3).style.cssText = 'background-color: white; color: gray';
            document.getElementById(4).style.cssText = 'background-color: white; color: gray';
            document.getElementById(5).style.color = 'gray';
            document.getElementById(6).style.color = 'gray';
            document.getElementById(8).style.color = 'gray';
            document.getElementById(9).style.color = 'gray';
            break;
            case 3:
            document.getElementById(1).style.cssText = 'background-color: white; color: gray';
            document.getElementById(2).style.cssText = 'background-color: white; color: gray';
            document.getElementById(0).style.cssText = 'background-color: white; color: gray';
            document.getElementById(4).style.cssText = 'background-color: white; color: gray';
            document.getElementById(5).style.color = 'gray';
            document.getElementById(6).style.color = 'gray';
            document.getElementById(7).style.color = 'gray';
            document.getElementById(9).style.color = 'gray';
            break;
            case 4:
            document.getElementById(1).style.cssText = 'background-color: white; color: gray';
            document.getElementById(2).style.cssText = 'background-color: white; color: gray';
            document.getElementById(3).style.cssText = 'background-color: white; color: gray';
            document.getElementById(0).style.cssText = 'background-color: white; color: gray';
            document.getElementById(5).style.color = 'gray';
            document.getElementById(6).style.color = 'gray';
            document.getElementById(7).style.color = 'gray';
            document.getElementById(8).style.color = 'gray';
              break;
          
            default:
              break;
          }

         }
}

}
</script>
<style scoped>
 #nav {
     position:fixed; 
     z-index: 100; 
     top: 0; 
     background-color: #364573 ; 
     font-family: 'Questrial', 
     sans-serif; color: white; 
     opacity: 0.9;
    }
    .buttons{
      margin-top: 0.5%;
      padding-left: 1% !important;
      bottom: 0;
      display: flex;
      left: 0;
      justify-content: center;
      width: 100%;
      box-shadow: 0 0 0 0 !important;
    }

</style>
<template>
<v-layout>
    <v-layout class="hidden-sm-and-down">
      <v-bottom-navigation  id="nav" :value="activeBtn" class="d-flex justify-end" >
      <v-btn class="buttons" href="#">
          <strong>
            <span
              class="btnNav"
            >Nosotros</span>
          </strong>
        </v-btn>
        
        <v-btn class="buttons"  @click="openDocument()">
          <strong>
            <span
              class="btnNav"
            >Servicios</span>
          </strong>
        </v-btn>

        <v-btn class="buttons" href="#">
          <strong>
            <span
            class="btnNav"
            >Tienda</span>
          </strong>
        </v-btn>

        <v-btn class="buttons1" href="#">
          <strong>
            <span
              class="btnNav"
            >¿Eres especialista?</span>
          </strong>
        </v-btn>
        <v-btn id="btnSession" min-width="120px">
          <p id="initS">
Iniciar sesión
</p>
        </v-btn>
        <v-btn id="btnRegis" min-width="120px" @click="openViewFile">
          <p id="regist">
Registrarse
</p>
        </v-btn>
      </v-bottom-navigation>

</v-layout>

         <!-- toolbar -->
  <v-layout class="hidden-md-and-up">
     <v-toolbar     
      dark
      id="toolbar"
      class="d-flex justify-end"
    >
    <v-toolbar-title style="font-size:12px; text-transform: capitalize; margin-left:75%">Menú</v-toolbar-title>
        <v-menu
        v-if="!selection.length"
        :offset-y="offsetY"
        transition="slide-y-transition"
        bottom
>
      <template v-slot:activator="{ on }" >
        <v-btn
        style="margin-top:60px"
          icon
          class="transparent"
          dark
          v-on="on"
        >
        <v-icon  class="fas fa-bars" style="color:white; " />              
        </v-btn>
      </template>
<v-list> 
  <v-list-item
  style="font-family: Nunito;"
    v-for="(item, i) in items2"
    :id="i"
    :key="i"
    @click="redirect(item)"   
    >
    <v-list-item-title>{{ item.title }}</v-list-item-title>
  </v-list-item>
</v-list>
</v-menu>
</v-toolbar>
</v-layout>
  <!-- toolbar -->
</v-layout>

</template>

<script>
import {mapState,mapMutations} from "vuex";
export default {
    data:()=>({
        activeBtn: 0,
        selection: [],
    offsetY:true,
    items2: [
        { title: "Sobre nosotros",icon: 'far fa-building' },
        { title: "Nuestros productos",icon: 'fas fa-store' },
        { title: "Nuestros profesionales", icon: 'fas fa-users' },
        { title: "Nuestros servicios",icon:'fas fa-briefcase' },
        { title: "bloc",icon:'fab fa-blogger' },
        
      ],
    }),
    computed: {
      ...mapState(["show"])
    },
    methods:{
      ...mapMutations(["openViewFile"]),
        openDocument(){

      let object = `<object data="catalogo.pdf" type="application/pdf" style="width: 100%;height: 100%;"></object>`;
      let html = `<html><body style="margin: 0;background: #3a3a3a;"> <div style="width: 100%;height: 100%;"> ${object} </div></body></html>`;

      var newWin = window.open("", "_blank");
      newWin.document.write(html);
    },
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
               this.openDocument();
               break;
             default:
               break;
           }
               
         },
    }
}
</script>

<style scoped>
    .btnNav{
  margin-left: 4%;
  color: white;
  font-family: Nunito;
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.37;
  letter-spacing: normal;
}
#nav {
  padding-right: 2%;
  padding-top: 30px;
  padding-bottom: 5.4%;
  position: fixed;
  z-index: 1;
  top: 0;
  background-color: transparent;
  font-family: "Nunito", sans-serif;
  color: white;
  box-shadow: none;
 
}

.buttons {
  margin-top: 10px;
  padding-left: 1% !important;
  bottom: 0;
  display: flex;
  left: 0;
  justify-content: center;
  min-width: 300px;
  box-shadow: 0 0 0 0 !important;
}

.buttons1 {
  margin-top: 10px;
  padding-left: 4% !important;
  bottom: 0;
  display: flex;
  left: 0;
  justify-content: center;
  min-width: 300px;
  box-shadow: 0 0 0 0 !important;
}

#btnSession {
  margin-top: 0.5%;
  margin-left: 6%;
  margin-right: -1%;
  width: 120px;
  height: 40px;
  border-radius: 5px;
  box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
}

#initS {
  margin: auto;
  margin-top:10%;
  font-family: Nunito;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
}

#btnRegis {
  margin-left: 2%;
  margin-top: 0.5%;
  width: 120px;
  height: 40px;
  border-radius: 5px;
  box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
  background-color: #0f8bec;
}

#regist {
  margin: auto;
  font-family: Nunito;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
}

#toolbar{
      position:absolute; 
      padding-right: 5%;
      z-index: 100; 
      top: 0; 
      background-color: transparent ; 
      width: 100%; 
      box-shadow:none;  
}
</style>
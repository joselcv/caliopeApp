import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    show: false,
    termsAndConditionsModal: {
      dialog: false
    },
    stateTolbar: {
      stateTolbar: false,
    },
    completarRegistroModal: {
      /*
        instrucciones para mostrar modales
          para el modal "Hemos reactivado su cuenta. ¡Bienvenido otra vez a Caliope!"
          pasar los siguientes states a false:
           reactiveAcoount,
           send
           ---------------------------
          para el modal "Este correo se encuentra inactivo temporalmente, 
                          por favor solicite la reactivación al correo vinculado." 
          con boton inactivo pasar los siguientes states a true:
           reactiveAcoount,
           send
          con boton activo pasar los siguientes states a false:
           send
           ----------------------------
          para mostrar el modal "Ya haz confirmado tu correo, por favor
                            presiona aceptar y continuar.
                            ¡Bienvenido a Calíope!" 
           pasar los siguientes states a false:
           reactivacion 
           ----------------------------
           para mostrar el modal  "Hemos recibido tu información satisfactoriamente.
              Haz recibido en tu correo un enlace para
              completar tu registro."
            pasar los siguientes states a false:
            aprove
            reactivacion
      */
      show: true,
      show1: false,
      aprove:false,
      reactivacion:false,
      reactiveAcoount:true,
      send:false
    }
  },
  mutations: {
    showModal(state){  
        state.completarRegistroModal.show1= !state.completarRegistroModal.show1;
        state.completarRegistroModal.show = !state.completarRegistroModal.show;   
    },
    openViewFile(state) {
      Vue.set(state, "show", !state.show);
    },
    hiddenTolbar(state) {
      var URLactual = window.location.href;
      Vue.set(state.stateTolbar, "stateTolbar", URLactual.substr(24) === "landing-page" ? false : true);
    },
    viewFile(state, v) {
      let file = v === "document" ? state.modalValidations.img : state.modalValidations.img2;
      let type = file.substr(0, file.indexOf(";")).replace("data:", "");

      let style =
        type === "application/pdf"
          ? "width: 100%;height: 100%;"
          : "margin: auto;display: list-item;width: 100%;height: 100%;";

      let object = `<object data="${file}" type="${type}" style="${style}"></object>`;
      let html = `<html><body style="margin: 0;background: #3a3a3a;"> <div style="width: 100%;height: 100%;"> ${object} </div></body></html>`;

      var newWin = window.open("", "_blank");
      newWin.document.write(html);
    }
  },
  actions: {
  },
  modules: {
  }
})

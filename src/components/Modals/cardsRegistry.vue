<template>
  <div>
    <v-card
      width="500"
      style="margin:auto;"
      v-if="completarRegistroModal.aprove===false && completarRegistroModal.reactivacion === false"
    >
      <p align="center" style="color:gray; font-size:20px ;padding:50px 25px 0px 25px">
        Hemos recibido tu información satisfactoriamente.
        Haz recibido en tu correo un enlace para
        completar tu registro.
      </p>
      <v-card-actions>
        <v-layout justify-center>
          <v-flex xs9 flex-column>
            <v-btn
              @click="showModal"
              block
              color="#8D8D8D"
              dark
              height="50"
              style="font-weight:700; font-size:20px; text-transform:none"
            >Pendiente</v-btn>
            <v-flex layout justify-center style="padding: 10px 0px 10px 0px">
              <a
                style="color:#8D8D8D;text-decoration: underline;"
              >Reenviar el correo de confirmación</a>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-card-actions>
    </v-card>

    <v-card
      width="500"
      style="margin:auto;"
      v-if="completarRegistroModal.aprove===true && completarRegistroModal.reactivacion === false"
    >
      <p align="center" style="color:gray; font-size:20px ;padding:50px 70px 0px 70px">
        Ya haz confirmado tu correo, por favor
        presiona aceptar y continuar.
        ¡Bienvenido a Calíope!
      </p>
      <v-card-actions>
        <v-layout justify-center style="margin-bottom:50px">
          <v-flex xs9 flex-column>
            <v-btn
              @click="showModal"
              block
              color="primary"
              dark
              height="50"
              style="font-weight:700; font-size:20px; text-transform:none"
            >Aceptar y continuar</v-btn>
          </v-flex>
        </v-layout>
      </v-card-actions>
    </v-card>

    <v-card width="500" style="margin:auto;" v-if="completarRegistroModal.reactivacion === true">
      <p align="center" style="color:gray; font-size:20px ;padding:50px 70px 0px 70px">
        {{!completarRegistroModal.reactiveAcoount ?
        `Hemos reactivado su cuenta.
        ¡Bienvenido otra vez a Caliope!`
        :
        `Este correo se encuentra inactivo
        temporalmente, por favor solicite la
        reactivación al correo vinculado.`}}
      </p>
      <v-card-actions>
        <v-layout justify-center style="margin-bottom:50px">
          <v-flex xs9 flex-column>
            <v-btn
              @click="showModal"
              block
              :color="completarRegistroModal.send ? '#8D8D8D' : '#0F8BEB'"
              dark
              height="50"
              style="font-weight:700; font-size:20px; text-transform:none"
            >{{completarRegistroModal.send ? 'Pendiente' : 'Solicitar reactivación'}}</v-btn>
            <v-flex
              layout
              justify-center
              style="padding: 10px 0px 10px 0px"
              v-if="completarRegistroModal.send"
            >
              <a
                style="color:#8D8D8D;text-decoration: underline;"
              >Reenviar el correo de reactivación</a>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data: () => ({}),
  computed: {
    ...mapState(["completarRegistroModal"])
  },
  methods: {
    ...mapMutations(["showModal"])
  }
};
</script>
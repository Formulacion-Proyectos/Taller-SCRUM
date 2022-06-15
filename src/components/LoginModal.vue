<template>
  <div class="container-login" v-if="$store.state.showModal">
    <form>
      <button type="button" class="btn-close" aria-label="Close" v-on:click="changeShowModal()"></button>
      <div class="form-outline mb-4">
        <input type="email" id="form2Example1" class="form-control" />
        <label class="form-label" for="form2Example1">Correo electrónico</label>
      </div>

      <div class="form-outline mb-4">
        <input type="password" id="form2Example2" class="form-control" />
        <label class="form-label" for="form2Example2">Contraseña</label>
      </div>

      <div class="row mb-4">
        <div class="col d-flex">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
            <label class="form-check-label" for="form2Example31"> Recordarme </label>
          </div>
        </div>

        <div class="col">
          <a href="#!">He olvidado mi contraseña</a>
        </div>
      </div>

      <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>

      <div class="text-center">
        <p>¿No eres miembo? <a href="#!">Regístrate</a></p>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<script>
import { mapState } from 'vuex'
export default {
  methods: {
    changeShowModal () {
      this.$store.commit('change_show_modal')
    }
  }
}
</script>

<style scoped>
.container-login {
  height: 100%;
  position: fixed;
  width: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  z-index: 2;
  justify-content: center;
  align-items: center;
}

form {
  background-color: rgb(238, 238, 238);
  padding: 2rem;
  border-radius: .5rem;
}

.btn-close {
  float: right;
  margin-bottom: 1rem;
}
</style>
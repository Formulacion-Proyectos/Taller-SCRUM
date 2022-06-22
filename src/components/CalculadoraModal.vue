<template>
  <button
    class="btn btn-dark ms-3"
    v-on:click="changeShowModal"
  >
    Calculadora
  </button>
  <div
    class="container-calc"
    v-if="showModal"
  >
    <form>
      <div class="container-close">
        <button type="button" class="btn-close" aria-label="Close" v-on:click="changeShowModal"></button>
      </div>
      <div class="form-group">
        <input type="number" class="form-control" id="inputNumber" aria-describedby="emailHelp" placeholder="Digite un número">
        <input class="form-control" id="inputOperation" :placeholder="placeHolderOperation" disabled>
        <span>=</span>
        <input class="form-control" id="inputResult" :placeholder="placeHolderResult" disabled>
      </div>
      <div class="buttons-group">
        <a class="button-operation btn btn-light" v-on:click="pressButton('sum')">+</a>
        <a class="button-operation btn btn-light" v-on:click="pressButton('rest')">-</a>
        <a class="button-operation btn btn-light" v-on:click="pressButton('mult')">*</a>
        <a class="button-operation btn btn-light" v-on:click="pressButton('div')">/</a>
        <a class="button-operation btn btn-light" v-on:click="pressButton('result')">=</a>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<script>
export default {
  data () {
    return {
      showModal: false,
      placeHolderOperation: 'Operación',
      placeHolderResult: 'Resultado'
    }
  },

  methods: {
    changeShowModal() {
      this.showModal = !this.showModal
    },

    variables() {
      this.numeros=[]
      this.operaciones=[]
      this.cadena = ' '
    },

    pressButton(operation) {
      this.numero = document.getElementById('inputNumber').value;
      this.cadena += this.numero + '+'
      this.placeHolderOperation=this.cadena
      switch (operation) {
        case 'sum':
          this.numeros.push(this.numero)
          this.operaciones.push('+')

          break
        case 'rest':
          this.numeros.push(this.numero)
          this.operaciones.push('-')
          this.cadena=+this.numero + '-'
          placeHolderOperation=this.cadena
          break
        case 'mult':
          this.numeros.push(this.numero)
          this.operaciones.push('*')
          this.cadena=+this.numero + '*'
          placeHolderOperation=this.cadena
          break
        case 'div':
          this.numeros.push(this.numero)
          this.operaciones.push('/')
          this.cadena=+this.numero + '/'
          placeHolderOperation=this.cadena
          break
        case 'result':
          for (let i = 0; i < this.operaciones.length; i++) {
            if (this.operaciones[i] == '+') {
              this.numeros[0] = parseInt(this.numeros[0]) + parseInt(this.numeros[i + 1])
            } else if (operaciones[i] == '-') {
              this.numeros[0] = parseInt(this.numeros[0]) - parseInt(this.numeros[i + 1])
            } else if (operaciones[i] == '*') {
              this.numeros[0] = parseInt(this.numeros[0]) * parseInt(this.numeros[i + 1])
            } else if (operaciones[i] == '/') {
              this.numeros[0] = parseInt(this.numeros[0]) / parseInt(this.numeros[i + 1])
            }
          }
          placeHolderResult = this.numeros[0]
          placeHolderOperation = ''
          this.numeros=[]
          this.operaciones=[]
          this.cadena = ''
          break
      }

      this.placeHolderOperation = inputNumber;
    }
  }
}
</script>

<style scoped>
.container-calc {
  align-items: center;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 4;
}

.container-close {
  width: 100%;
  text-align: right;
  margin-bottom: 1rem;
}

.buttons-group {
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  width: 100%;
}

.button-operation {
  height: 2.5rem;
  margin-right: .2rem;
  width: 2.5rem;
}

.button-operation:hover {
  background-color: rgb(196, 196, 196);
}

form {
  background-color: rgb(165, 165, 165);
  border-radius: .5rem;
  padding: 1rem;
  width: 30%;
  min-width: 30rem;
}

.form-group {
  align-items: center;
  display: flex;
}

#inputNumber {
  max-width: 35%;
}

#inputOperation {
  max-width: 35%;
}

#inputResult {
  max-width: 25%;
}

input, span {
  margin-right: .5rem;
}
</style>
<template>
  <h1
    v-for="(item, i) in usuarios"
    :key="i"
  >
    {{ item.direccion.calle }} - {{ item.direccion.carrera }}
  </h1>
</template>

<script>
export default {
  name: 'InitialPage',

  data () {
    return {
      usuarios: [
        {
          nombre: 'juan',
          apellido: 'apellido juanito',
          direccion: {
            calle: 'tal',
            carrera: 'pascual'
          }
        },
        {
          nombre: 'otro pepito',
          apellido: 'otro follajes',
          direccion: {
            calle: 'tal 2',
            carrera: 'pascual 2'
          }
        }
      ]
    }
  },

  methods: {
    sumar () {
      this.numero ++
      console.log(this.numero)
    }
  }
}
</script>
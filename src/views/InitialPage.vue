<template>
  <button 
  class="btn btn-primary" 
  data-bs-target="#collapseTarget" 
  data-bs-toggle="collapse">
  Bootstrap collapse
</button>
<div class="collapse py-2" id="collapseTarget">
  This is the toggle-able content!
</div>
</template>

<script>
export default {
  name: 'InitialPage',

  data () {
    return {
      usuarios: [
        {
          nombre: 'pepito',
          apellido: 'perez',
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
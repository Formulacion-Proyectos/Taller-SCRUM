<template>
<div class='container'>
    <div id="carouselExampleFade" class="carousel slide carousel-fade col-6" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="4000">
      <img src="../assets/carrusel/conjunto1.jpg" class="d-block w-100 img-thumbnail"  alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Mira nuestros nuevos conjuntos</h5>
        <p><button type="button" class="btn btn-light">Ver más </button></p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="4000">
      <img src="../assets/carrusel/promociones.jpg" class="d-block w-100 img-thumbnail" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Promociones disponibles</h5>
        <p><button type="button" class="btn btn-light">Ver más </button></p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="4000">
      <img src="../assets/carrusel/conjunto.jpg" class="d-block w-100 img-thumbnail" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Eres arte viste arte</h5>
        <p><button type="button" class="btn btn-light">Ver más </button></p>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script setup>
    import { ref } from 'vue'
</script>

<style scoped>
.container {
  width: 100%;
  margin: 2rem 0;
}

#carouselExampleFade {
  width: 100%;
}

@media (min-width: 1200px) {
  .container {
    max-width: 100%;
  }
}
</style>

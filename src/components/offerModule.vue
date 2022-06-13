<template>
<div class='container'>
    <div id="carouselExampleFade" class="carousel slide carousel-fade col-6" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
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
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</template>

<script setup>
    import { ref } from 'vue'
</script>

<!-- <style >
    .carousel-item{
        $carousel-transition-duration: .1s;
    }

</style> -->

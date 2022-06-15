<template>
<div class="container">
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/carrusel/promociones.jpg" class="img-fluid" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Nuevas promociones</h5>
        <input type="button" class="btn btn-light" value="Ver más"/>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../assets/carrusel/cyberDays.png" class="img-fluid" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5 class='text-danger bg-dark'>Lleva prendas hasta con el 20% de descuento</h5>
        <input type="button" class="btn btn-dark" value="Ver más"/>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../assets/carrusel/eventoPrivado.png" class="img-fluid" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5 class="text-light bg-dark">¿Quierés hacer parte de nuestro evento?</h5>
        <input type="button" class="btn btn-dark" value="Inscribete"/>
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

<style scoped>
  img{
    width: 100%;
    height: 300px;
  }
</style>
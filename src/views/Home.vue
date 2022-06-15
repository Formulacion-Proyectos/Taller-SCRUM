<template>
  <NavBarHeader />
  <womenModule/>
  <FooterComponent />
</template>

<script setup>
import { ref } from 'vue'
import NavBarHeader from '../components/NavBarHeader.vue'
import FooterComponent from '../components/Footer.vue'
import womenModule from '../components/womenModule.vue'
</script>
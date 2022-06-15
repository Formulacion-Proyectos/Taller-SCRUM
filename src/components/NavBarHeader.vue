<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a
                href="#"
                class="navbar-brand mb-0 h1">
                <img
                src="../assets/Untitled.png"
                width="30" height="30"/>
                ROPA PARA HEMBRAS GUAPAS
            </a>
            <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            class="navbar-toggler"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="toggle navigation"
            >
            <span class="navbar-toggler-icon"></span>

            </button>
            <div
                class="collapse navbar-collapse"
                id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active dropdown">
                    <a href="#" class="nav-link dropdown-toggle"
                    id="navbarDropdown" role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Categoria
                    </a>
                    <ul class="dropdown-menu"
                    aria-labelledby="navbarDropdown">
                        <li><a href="#"
                        class="dropdown-item">Camisas</a></li>
                        <li><a href="#"
                        class="dropdown-item">Camisetas</a></li>
                        <li><a href="#"
                        class="dropdown-item">Pantalones</a></li>
                        <li><a href="#"
                        class="dropdown-item">Jeans</a></li>
                        <li><a href="#"
                        class="dropdown-item">Vestidos</a></li>
                        <li><a href="#"
                        class="dropdown-item">Shorts</a></li>
                        <li><a href="#"
                        class="dropdown-item">Faldas</a></li>
                        <li><a href="#"
                        class="dropdown-item">Enterizos</a></li>
                        <li><a href="#"
                        class="dropdown-item">Pijama</a></li>
                    </ul>
                    </li>
                    <li class="nav-item active">
                    <a href="#" class="nav-link">
                    SALE
                    </a>
                    </li>
                </ul>
            </div>
            <form class="d-flex">
                <input type="text" class="form-control me-2">
                <button type="submit" class="btn btn-dark">Buscar</button>
            </form>
            <button
                class="btn btn-dark ms-3"
                v-on:click="changeShowModal"
            >
                Login
            </button>
        </div>
    </nav>
    <LoginModal />
</template>

<script setup>
import { ref } from 'vue'
import LoginModal from './LoginModal.vue'
</script>

<script>
export default {
    methods: {
        changeShowModal () {
            this.$store.commit('change_show_modal')
        }
    }
}
</script>

<style scoped>
nav {
    z-index: 2;
}
</style>
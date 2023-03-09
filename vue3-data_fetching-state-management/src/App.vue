<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="container">
      <nav class="nav">
        <RouterLink class="nav__el" to="/">Home</RouterLink>
        <RouterLink class="nav__el" to="/jokes">Jokes</RouterLink>
        <RouterLink class="nav__el" to="/favorites">Favorites</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped></style>

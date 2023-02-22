<template>
  <main>
    <div class="header-main">
      <h1>Manu's Weather App</h1>
      <button class="header__button">Explore weather</button> 
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView'
});
</script>

<style scoped>
  main {
    width: 100vw;
    height: 100vh;
    background-color: #040018;
    color: #FEFEFE;
  }

  .header-main {
    display: flex;
    justify-content: space-between;
    padding: 0.9375rem 1.125rem;
  }

  .header__button {
    
  }
</style>

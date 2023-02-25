<template>
  <main>
    <div class="header-main">
      <h1>Manu's Weather App</h1>
      <button class="header__button">Explore weather</button> 
    </div>
    <div class="wrapper-cards">
      <CardWeather/>
      <CardWeather/>
      <CardWeather/>
      <CardWeather/>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardWeather from '@/components/CardWeather.vue';


export default defineComponent({
  name: 'HomeView',
  components: {
    CardWeather
  }
});
</script>

<style scoped>
  main {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(90deg, rgba(1,0,19,1) 0%, rgba(28,28,84,1) 100%);
    color: #FEFEFE;
  }

  .header-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.9375rem 1.125rem;
  }

  .header__button {
    -webkit-backdrop-filter: blur( 4px );
    backdrop-filter: blur( 4px );
    background: rgba( 255, 255, 255, 0.45 );
    border-radius: 0.9375rem;
    border: none;
    box-shadow: 0 3px 15px 0 rgba(39, 42, 90, 0.37);
    color: #040018;
    cursor: pointer;
    outline: inherit;
    padding: 1rem;
    transition: background 0.4s ease-in;
  }

  .header__button:hover {
    background: rgba( 255, 255, 255, 0.50 );
    color: #040114;
  }

  .wrapper-cards {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
  }

</style>

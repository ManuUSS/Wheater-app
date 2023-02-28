<template>
  <main class="weather-wrapper">
    <div class="header-main">
      <h1>Manu's Weather App</h1>
    </div>
    <div class="weather-body">
      <form action="">
        <input 
          class="input-weather"
          type="text" 
          placeholder="Search a zone"
        />
        <input 
          type="submit" 
        />
      </form>
      <div 
        class="wrapper-cards"
        :v-if="defaultWeathers.length > 0" 
      >
        <CardWeather 
          v-for="{ location, current } in defaultWeathers" 
          :key="location.name" 
          :placeName="location.name" 
          :countryName="location.country"
          :windSpeed="current.wind_kph"
          :windDirection="current.wind_dir"
          :precipMm="current.precip_mm"
          :humidity="current.humidity"
          :temperatureCelcius="current.temp_c"
          :temperatureFarenheit="current.temp_f"
          :icon="current.condition.icon"
        />
    </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useWeather } from '@/composables/useWeather';
import CardWeather from '@/components/CardWeather.vue';


export default defineComponent({
  name: 'HomeView',
  components: {
    CardWeather
  },
  setup () {
    const { defaultWeathers } = useWeather();
    return {
      defaultWeathers
    }
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
    flex-wrap: wrap;
    
  }

  .weather-wrapper {
    display: flex;
    flex-direction: column;
  }

  .weather-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2em;
    flex-grow: 1;
  }
  
  .input-weather {
    
  }

</style>

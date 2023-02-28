<template>
  <main class="weather-wrapper">
    <div class="header-main">
      <h1>Manu's Weather App</h1>
    </div>
    <div class="weather-body">
      <form>
        <input 
          class="input-weather"
          type="text" 
          placeholder="Search a zone"
        />
        <button 
          class="input-weather_submit" 
          type="submit"
        >
          Search
        </button>
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
  
  form {
    border: none;
    padding: 0;
    display: flex;
    gap: 0.5rem;
  }

  .input-weather {
    width: 260px;
    border: 1px solid #555;
    border-radius: 1.375rem;
    display: block;
    padding: 9px 4px 9px 40px;
    background: #FFFFFF url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 13px center;
  }

  .input-weather_submit {
    border-radius: 0.9375rem;
    padding: 0.5rem;
    background: transparent;
    color: #FFFFFF;
    border: 1px solid #FFFFFF;
  }

  .input-weather_submit:hover {
    opacity: 1;
  }

  .input-weather:focus,
  .input-weather_submit:focus {
    box-shadow: 0 0 3px 0 #1183d6;
    border-color: #1183d6;
    outline: none;
}

</style>

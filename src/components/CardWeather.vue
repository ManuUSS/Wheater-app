<script lang="ts" src='./CardWeather.ts'/>

<template>
  <article class="card card--glass card--weather">
    <div class="card__weather-place">
        <h2>{{ placeName }}</h2>
        <h4>{{ countryName }}</h4>
    </div>
    <div>
        <img src="./icons/rainy.svg" alt="rainy" />
    </div>
    <div class="card--weather__timestamp">
        <h1>Precip</h1>
        <h1>Temp</h1>
        <h1>Viento</h1>
    </div>
  </article>
</template>

<style scoped>

    .card--weather {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 2rem;
        gap: 0.5rem;
    }

    .card__weather-place {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .card--weather__timestamp {
        display: flex;
        flex-direction: row;
        gap: 4px;    
    }
</style>
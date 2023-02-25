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
    <div class="card__weather-timestamp">
        <div class="card__weather_timestamp-section">
            <i class="fa-solid fa-droplet"></i>
            <p>{{ precipMm }}</p>
        </div>
        <div class="card__weather_timestamp-section">
            <i class="fa-solid fa-water"></i>
            <p>{{ humidity }}</p>
        </div>
        <div class="card__weather_timestamp-section">
            <i class="fa-solid fa-wind"></i>
            <p>{{ windSpeed }} kph</p>
        </div>
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

    .card__weather-timestamp {
        display: flex;
        flex-direction: row;
        gap: 15px;   
        user-select: none; 
    }

    .card__weather-timestamp-temperature {
        font-size: 25px;
    }

    .card__weather_timestamp-section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
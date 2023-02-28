<script lang="ts" src='./CardWeather.ts'/>

<template>
  <article class="card card--glass card--weather animate__animated animate__fadeIn">
    <div class="card__weather-place">
        <h2>{{ placeName }}</h2>
        <h4>{{ countryName }}</h4>
    </div>
    <div>
        <img :src="icon" alt="Nose" width="65" />
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
        <div class="card__weather_timestamp-section">
            <i class="fa-solid fa-signs-post"></i>
            <p>{{ windDirection }}</p>
        </div>
    </div>
    <div class="card__weather-temperature">
        <div class="card__weather_timestamp-section">
            <i class="fa-solid fa-f"></i>
            <p class="card__weather-temperature-main">{{ temperatureFarenheit }}</p>
        </div>
        <div class="card__weather_timestamp-section">
            <i class="fa-solid fa-c"></i>
            <p class="card__weather-temperature-main">{{ temperatureCelcius }}</p>
        </div>
    </div>
  </article>
</template>

<style scoped>

    .card--weather {
        display: flex;
        align-items: center;
        flex-direction: column;
        min-width: 15.3125rem;
        padding: 2rem;
        gap: 0.5rem;
        user-select: none; 
        position: relative;
        overflow: hidden;
    }

    .card--weather::before {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        height: 20%;
        z-index: -1;
        width: 100%;
        background: linear-gradient(90deg, rgba(255,255,255,.2) 0%, rgba(160,195,227, .2) 100%);
        border-radius: 0 0 50% 50%/0 0 100% 100%;
        transition: all .3s ease-out;
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
        
    }

    .card__weather_timestamp-section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .card__weather-temperature {
        margin-top: 0.3125rem;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }

    .card__weather-temperature-main {
        font-size: 25px;
    }

</style>
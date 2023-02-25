import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'CardWeather',
    props: {
        countryName: {
            type: String,
            required: true
        },
        placeName: {
            type: String,
            required: true
        },
        humidity: {
            type: Number,
            required: true
        },
        windSpeed: {
            type: Number,
            required: true

        },
        windDirection: {
            type: String,
            required: true
        },
        precipMm: {
            type: Number,
            required: true
        },
        temperatureCelcius: {
            type: Number,
            required: true
        },
        temperatureFarenheit: {
            type: Number,
            required: true
        },
        icon: {
            type: String,
            required: true
        }
    }
});

import { WeatherResponse } from '../../interfaces/weather';
export interface PlacesWeatherState {
    isLoading: boolean;
    placeWeather: WeatherResponse;
}

function state(): PlacesWeatherState {
    return {
        isLoading: true,
        placeWeather: {
            location: {
                name: '',
                region: '',
                country: ''
            },
            current: {
                temp_c: 0,
                temp_f: 0,
                is_day: 0,
                condition: {
                    text: '',
                    icon: '',
                    code: 0
                },
                wind_kph: 0,
                wind_dir: '',
                precip_mm: 0,
                humidity: 0,
            }
        }
    }
}

export default state;
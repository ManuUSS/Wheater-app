import { WeatherResponse } from '@/interfaces/weather';
import { ref } from 'vue';
import { weatherApi } from '../api/weatherApi';


export const useWeather = () => {

    const defaultWeathers = ref<WeatherResponse[]>([]);

    const getWeather = async () => {
        
        const parisWeather = weatherApi.get<WeatherResponse>('/current.json', {
            params: {
                q: 'Paris'
            }
        });
        
        const newYorkWeather = weatherApi.get<WeatherResponse>('/current.json', {
            params: {
                q: 'New York'
            }
        });
        
        const sanJoseWeather = weatherApi.get<WeatherResponse>('/current.json', {
            params: {
                q: 'San José'
            }
        });
        
        const rioJaneiroWeather = weatherApi.get<WeatherResponse>('/current.json', {
            params: {
                q: 'Rio Janeiro'
            }
        });

        const s = await Promise.all([ parisWeather, newYorkWeather, sanJoseWeather, rioJaneiroWeather ]);
    }

    getWeather();

    return {
        defaultWeathers,
    }
}
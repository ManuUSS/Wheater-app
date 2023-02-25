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

        const [ weatherParis, weatherNewYork, weatherSanJose, weatherRioJaneiro  ] = await Promise.all([ parisWeather, newYorkWeather, sanJoseWeather, rioJaneiroWeather ]);
        const { data: weatherParisResponse } = weatherParis; 
        const { data: weatherNewYorkResponse } = weatherNewYork; 
        const { data: weatherSanJoseResponse } = weatherSanJose; 
        const { data: weatherRioJaneiroResponse } = weatherRioJaneiro; 
        
        console.log({ weatherParisResponse });
        console.log({ weatherNewYorkResponse });
        console.log({ weatherSanJoseResponse });
        console.log({ weatherRioJaneiroResponse });
    }

    getWeather();

    return {
        defaultWeathers,
    }
}
import { WeatherResponse } from '@/interfaces/weather';
import { destructurePromises } from '@/utils';
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
                q: 'Costa Rica'
            }
        });
        
        const rioJaneiroWeather = weatherApi.get<WeatherResponse>('/current.json', {
            params: {
                q: 'Rio Janeiro'
            }
        });

        const [ 
            weatherParis, 
            weatherNewYork, 
            weatherSanJose, 
            weatherRioJaneiro  
        ] = await Promise.all(
            [ 
                parisWeather, 
                newYorkWeather, 
                sanJoseWeather, 
                rioJaneiroWeather 
            ]);
            
        const weatherParisResponse      =  destructurePromises( weatherParis ); 
        const weatherNewYorkResponse    =  destructurePromises( weatherNewYork ); 
        const weatherSanJoseResponse    =  destructurePromises( weatherSanJose ); 
        const weatherRioJaneiroResponse =  destructurePromises( weatherRioJaneiro ); 

        defaultWeathers.value = [ 
            weatherParisResponse, 
            weatherNewYorkResponse, 
            weatherSanJoseResponse, 
            weatherRioJaneiroResponse 
        ];
        console.log(defaultWeathers.value);
    }

    getWeather();

    return {
        defaultWeathers,
    }
}
import { WeatherResponse } from '@/interfaces/weather';
import { destructurePromises } from '@/utils';
import { ref } from 'vue';
import { weatherApi } from '../api/weatherApi';
import { citiesAroundTheWorld } from '../helpers/regions';


export const useWeather = () => {

    const defaultWeathers = ref<WeatherResponse[]>([]);

    const getWeather = async () => {
        
        const num1 = Math.floor( Math.random() * 100 );
        const num2 = Math.floor( Math.random() * 100 );
        const num3 = Math.floor( Math.random() * 100 );
        const num4 = Math.floor( Math.random() * 100 );

        const city1 = citiesAroundTheWorld[ num1 ].toLowerCase();
        const city2 = citiesAroundTheWorld[ num2 ].toLowerCase();
        const city3 = citiesAroundTheWorld[ num3 ].toLowerCase();
        const city4 = citiesAroundTheWorld[ num4 ].toLowerCase();

        const weather1 = weatherApi.get<WeatherResponse>('/current.json', {
            params: {
                q: city1
            }
        });
        
        const weather2 = weatherApi.get<WeatherResponse>('/current.json', {
            params: {
                q: city2
            }
        });
        
        const weather3 = weatherApi.get<WeatherResponse>('/current.json', {
            params: {
                q: city3
            }
        });
        
        const weather4 = weatherApi.get<WeatherResponse>('/current.json', {
            params: {
                q: city4
            }
        });

        const [ 
            weatherPromise1, 
            weatherPromise2, 
            weatherPromise3, 
            weatherPromise4  
        ] = await Promise.all(
            [ 
                weather1, 
                weather2, 
                weather3, 
                weather4 
            ]);
            
        const weatherResponse1 =  destructurePromises( weatherPromise1 ); 
        const weatherResponse2 =  destructurePromises( weatherPromise2 ); 
        const weatherResponse3 =  destructurePromises( weatherPromise3 ); 
        const weatherResponse4 =  destructurePromises( weatherPromise4 ); 

        defaultWeathers.value = [ 
            weatherResponse1, 
            weatherResponse2, 
            weatherResponse3, 
            weatherResponse4 
        ];
    }

    getWeather();

    return {
        defaultWeathers,
    }
}
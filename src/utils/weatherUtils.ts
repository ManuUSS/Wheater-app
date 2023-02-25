import { WeatherResponse } from "@/interfaces/weather";
import { AxiosResponse } from "axios";


export const destructurePromises = ( weatherPromise: AxiosResponse<WeatherResponse> ) => {

    const { data } = weatherPromise; 

    return data;
}
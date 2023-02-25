import axios from "axios";

const apiKey='1c3dbac08c67473c830193617232502';

export const weatherApi = axios.create({
    baseURL: 'http://api.weatherapi.com/v1',
    params: {
        key: apiKey,
        lang: 'es'
    }
});
import axios from "axios";

const apiKey = process.env.API_KEY;

export const weatherApi = axios.create({
    baseURL: 'http://api.weatherapi.com/v1',
    params: {
        key: apiKey
    }
});
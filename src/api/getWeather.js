import axios from 'axios';

const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = "1edaf112947a54bc27ff937dc42e76d3";

export const getWeather = async (query) => {
    const data = await axios.get(API_URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY
        }
    });
    return data.data;
}
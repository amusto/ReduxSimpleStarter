import axios from 'axios';

const API_KEY = '83c6226e0571ef3d1ac0767ca79c1e8c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('Request:', request);

    return {
        type: FETCH_WEATHER,
        payload: request //Redux-promise returns the results. If payload is a process the middleware returns the returned data
    };
}
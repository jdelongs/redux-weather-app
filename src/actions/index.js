//imports
import axios from 'axios'; 

//global variables
const API_KEY = ''; 
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`; 

//exports 
export const FETCH_WEATHER = 'FETCH_WEATHER'; 
export function fetchWeather(city) {

    //api request url
    const url = `${ROOT_URL}&q=${city}, us`;
    //ajax request using axios
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER, 
        playload: request
    }; 
}
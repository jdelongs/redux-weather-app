import axios from 'axios'; 

const API_KEY = ''; 
const ROOT_URL = `https://samples.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`; 

export const FETCH_WEATHER = 'FETCH_WEATHER'; 
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}, us`;
<<<<<<< HEAD
    //ajax request using axios(returns a promise)
=======
>>>>>>> parent of a823878... added the ability to make api requests using search bar
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER, 
        playload: request
    }; 
}
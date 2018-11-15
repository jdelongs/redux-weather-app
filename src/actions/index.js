//imports
import axios from 'axios'; 

//global variables
const API_KEY = 'bd3699d88dada6a54fb5e6bd6e11dcbf'; 
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`; 

//exports 
export const FETCH_WEATHER = 'FETCH_WEATHER'; 
export function fetchWeather(city) {

    //api request url
    const url = `${ROOT_URL}&q=${city}, us`;
<<<<<<< HEAD
<<<<<<< HEAD
    //ajax request using axios(returns a promise)
=======
>>>>>>> parent of a823878... added the ability to make api requests using search bar
=======
    //ajax request using axios(returns a promise)
>>>>>>> 9d1dde4c4ad0026054bf9b9d40499bce37e1275c
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER, 
        playload: request
    }; 
}
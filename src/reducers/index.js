import { combineReducers } from 'redux';

//reducer imports
import WeatherReducer from './reducer_weather'; 

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;

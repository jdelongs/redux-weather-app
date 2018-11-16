import { FETCH_WEATHER } from "../actions/index";

export default function (state = [], action) {
    if (action.error) {
        alert('Make sure you are searching for a city in Canada')
        return state;
    }
    switch(action.type) {
        case FETCH_WEATHER: 
            return [action.payload.data, ...state]; 
    }
    return state; 
}

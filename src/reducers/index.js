import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  //S5T59: combine the WeatherReducer to the application state
  weather: WeatherReducer
});

export default rootReducer;


//S5T57: after using npm to install axios (npm install --save axios), we import it to here
//axios is similar to JQuery. it is made solely to make AJAX request
import axios from 'axios';



//S5T55: OpenWeatherMap API key from openweathermap.org
//username: dindanmao
//password: 19***
const API_KEY = '13bb723639d14d78f3929e7b83452402';

//S5T57: make a root URL we will use for send ajax quiry to the weather API
//this ROOT_URL referenced from 
//http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=13bb723639d14d78f3929e7b83452402
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;
//or, use ES6 syntax
//const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//S5T57: by convention, the action type is assigned to a variable and this variable will be used in the 
//corresponding reducer files in switch method. 
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = ROOT_URL + "&q=" + city + ",ca";
  //S5T57: axios.get() method returns a promise
  const request = axios.get(url);

  return{
    //S5T57: using a FETCH_WATHER variable instead of directly using a string "FETCH_WEATHER" is to prevent accidently
    //changing the type in this file or in the corresponding reducer files. By using the variable, as long as 
    //we use the same variable in this file and the the corresponding reducer files, it is safe if any mistakes made
    //in the string.
    type: FETCH_WEATHER,
    payload: request
  };
}
//S2T32: after installing lodash using npm (npm install --save lodash), import it here
//lodash can adjust the frequency the search keywords user types in in the search bar
import _ from 'lodash';

//S2T21 import the youtube api search
import YTSearch from 'youtube-api-search';

//S1T13: to use google youtube API, the first step is to get an API key from google
const API_KEY = 'AIzaSyAmoz4DqY5lgezXqHWI1hSAPukln5yE3-I';

export const ONLOAD_LIST = 'ONLOAD_LIST';

export function makeDefaultList(){

  var videoList;

  YTSearch({key: API_KEY, term: "surfboard"}, (data)=> {videoList = data}); 

  return {
    type: ONLOAD_LIST,
    payload: videoList
  };
}


    //S2T32: use lodash's debounce method to throttle the videoSearch function to be called every 300 mss
    //const videoSearchThrottled = _.debounce((term) => {this.videoSearch(term)}, 300)
    
     
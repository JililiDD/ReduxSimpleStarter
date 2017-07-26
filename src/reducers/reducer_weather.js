
//S5T60
import { FETCH_WEATHER } from '../actions/index';


//S5T60: change the initial state to an empty array for the data of searched cities
export default function(state = [], action){
  switch (action.type){
    case FETCH_WEATHER:
      //S5T60: in redux, as the same in react, we do not want to mutate the original state. In react, we use 
      //setState to change the state. In redux here, we do not want to use state.push() because this mutates
      //the original array in the state. Instead, we use concat(), which makes a new array and return it. 
      return state.concat([ action.payload.data ]);
      //or using ES6 syntax: 
      //return [ action.payload.data, ...state ];
  }
  return state;
}

/*
//S5T59
export default function(state = null, action){
  return state;
}
*/
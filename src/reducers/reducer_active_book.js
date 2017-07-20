//S4T47
//State argument is not application state, only the state this reducer is responsible for
//state = null is a ES6 syntax meaning if the value comes in as undefined for state, set the state to null
export default function(state = null, action){
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload;
  }
  
  //if the action.type is not found in this function, keep the state intact and return it
  return state;
}


import { USER_INPUT } from '../actions/action_searchbar_input';
import { ONLOAD_LIST } from '../actions/action_make_default_list';

export default function(state=null, action){
  switch (action.type){
    case USER_INPUT:
      return state.setState(action.payload);
    case ONLOAD_LIST:
      return state.setState(action.payload);
  }
  return state;
}
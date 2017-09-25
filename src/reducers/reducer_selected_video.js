
import { SELECT_VIDEO } from '../actions/action_select_video';
import { USER_INPUT } from '../actions/action_searchbar_input';
import { ONLOAD_LIST } from '../actions/action_make_default_list';

export default function(state=[], action){
  switch (action.type){
    case SELECT_VIDEO:
      return action.payload;
    case USER_INPUT:
      return action.payload[0];
    case ONLOAD_LIST:
      return action.payload[0];
  }
  return state;
}
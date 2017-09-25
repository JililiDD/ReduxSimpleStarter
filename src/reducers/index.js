import { combineReducers } from 'redux';

//S4T47
import VideoList from './reducer_video_list'

import SelectedVideo from './reducer_selected_video';

/*
The combineReducers helper function turns an object whose values are different reducing functions 
into a single reducing function you can pass to createStore.
The resulting reducer calls every child reducer, and gathers their results into a single state object. The shape 
of the state object matches the keys of the passed reducers.
Consequently, the state object will look like this:
{
  reducer1: ...
  reducer2: ...
}
*/

const rootReducer = combineReducers({
  //S4T39: create key(books) value(BooksReducer) pairs to store an application state
  videoList: VideoList, 
  selectedVideo: SelectedVideo 

});

export default rootReducer;
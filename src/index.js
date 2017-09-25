/*
This app followed the course -- Modern React with Redux from udemy
Some comment line start with, e.g. S1T13, S1T13 means the following content is from section 1 Tutorial 13
from the course 
*/


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//S5T55: after installing redux-promise package using "npm install --save redux-promise", import the package here
//redux-promise is a popular middleware package.
//middeware is the functions that can manipulate the result of an action before pass it through all the reducers
import ReduxPromise from 'redux-promise';

import App from './containers/app';
import reducers from './reducers';

//S5T55: hook the ReduxPromise here
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));





//step1: create a new component. This component should produce some HTML
//Note belowing App is actually a class, not an instance!

/*
//S2T22 refactor the App function into a class
//use a class component if the component needs to have the state
class App extends Component {           //()=>{function body} is the same as function(){function body} except the meaning of 'this'
  constructor(props){
    super(props);

    this.state = { 
      videos: [],
      //S2T29 
      selectedVideo: null
    };

    this.videoSearch('surfboard');
  }
  
  //S2T31: 
  videoSearch(term){
    //S2T22 test the youtube api search
    YTSearch({key: API_KEY, term: term}, (data) => {
      this.setState({ 
        videos: data, 
        //after searching, the selectedVideo is the first video in the returned videos list
        selectedVideo: data[0]
      });
    });
  }
  
  render(){
    //S2T32: use lodash's debounce method to throttle the videoSearch function to be called every 300 mss
    const videoSearchThrottled = _.debounce((term) => {this.videoSearch(term)}, 300)
    
    
    
    
    return (
      //create a SearchBar instance and put it in div
      <div>
        <SearchBar 
          //S2T32
          onSearchTermChange= { videoSearchThrottled } 
          //or to combine use debounce directly in here:
          //onSearchTermChange={_.debounce(search_bar_searchTerm => this.videoSearch(search_bar_searchTerm),300)}

          //S2T31: same as in VideoList below, use the search_bar_searchTerm returned by search_bar component
          //and pass it to videoSearch()
          //onSearchTermChange={search_bar_searchTerm => this.videoSearch(search_bar_searchTerm)} 
        />  
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          //S2T29: use the selectedVideo selected in the video_list_item component to set the selectedVideo in the App state
          onVideoSelect={video_list_item_selectedVideo => this.setState({ selectedVideo: video_list_item_selectedVideo })}
          vlVideos={this.state.videos} //pass the videos list from parent (App) to the child(VideoList)
                                              //vlVideos in this case is refered to as a 'props' 
                                              //the 'props' object is passed down to the child by calling super(props) in the child's constructor
        />
      </div>
    );       
  }
}

/*
//S1T14
const App = () => {           //()=>{function body} is the same as function(){function body} except the meaning of 'this'
  return (
    //create a SearchBar instance and put it in div
    <div>
      <SearchBar />  
    </div>);
}

//before S1T14
const App = () => {           //()=>{function body} is the same as function(){function body} except the meaning of 'this'
  return <div>Hi!</div>;
}


const App = function(){
  return <div>Hi!</div>;
}
*/

//step2: Take this conponent's generated HTML and put it on the page (in the DOM)


//<App /> is a JSX syntax to create an instance of App class
//second argument of render() is to indicate where to render the component to

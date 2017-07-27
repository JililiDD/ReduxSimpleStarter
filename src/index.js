/*
This app followed the course -- Modern React with Redux from udemy
Some comment line start with, e.g. S1T13, S1T13 means the following content is from section 1 Tutorial 13
from the course 
*/


import React, { Component } from 'react'; //create a instance of a certain class
import ReactDom from 'react-dom'; //render a component to display on a webpage

//S1T14 import SearchBar component from search_bar.js from 'components' directory
import SearchBar from './components/search_bar';
//S2T23
import VideoList from './components/video_list';

//S2T21 import the youtube api search
import YTSearch from 'youtube-api-search';

//S2T27
import VideoDetail from './components/video_detail';

//S2T32: after installing lodash using npm (npm install --save lodash), import it here
//lodash can adjust the frequency the search keywords user types in in the search bar
import _ from 'lodash';

//S1T13: to use google youtube API, the first step is to get an API key from google
const API_KEY = 'AIzaSyAmoz4DqY5lgezXqHWI1hSAPukln5yE3-I';

//step1: create a new component. This component should produce some HTML
//Note belowing App is actually a class, not an instance!

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
ReactDom.render(<App />, document.querySelector('.container')); 
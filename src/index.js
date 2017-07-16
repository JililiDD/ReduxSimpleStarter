/*
This app followed the course -- Modern React with Redux from udemy
Some comment line start with, e.g. S1T13, S1T13 means the following content is from section 1 Tutorial 13
from the course 
*/


import React from 'react'; //create a instance of a certain class
import ReactDom from 'react-dom'; //render a component to display on a webpage

//S1T14 import SearchBar component from search_bar.js from 'components' directory
import SearchBar from './components/search_bar';

//S1T13: to use google youtube API, the first step is to get an API key from google
const API_KEY = 'AIzaSyAmoz4DqY5lgezXqHWI1hSAPukln5yE3-I';



//step1: create a new component. This component should produce some HTML
//Note belowing App is actually a class, not an instance!

//S1T14
const App = () => {           //()=>{function body} is the same as function(){function body} except the meaning of 'this'
     return (
     <div>
      <SearchBar />
     </div>);
}

/*
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
//S1T14
//S1T15: {Component} is a shortcut for const Component = React.Component; 
import React, {Component} from 'react';


//S1T15: change the following functional component to a class component
class SearchBar extends Component{ //it can also be written as extends React.Component
     render(){              //inherited from 'React.Component'
          return <input />;
     }
}

/*
//S1T14: functional component
const SearchBar = () => {
     return <input />;
}
*/

//when another js file import this js, SearchBar is returned 
export default SearchBar;
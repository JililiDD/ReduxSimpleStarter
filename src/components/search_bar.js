//S1T14
//S1T15: {Component} is a shortcut for const Component = React.Component; 
import React, {Component} from 'react';


//S1T15: change the following functional component to a class component
//use a class component for more complex functionalities
class SearchBar extends Component{ //it can also be written as extends React.Component

     //S1T17: every class component needs to keep its state. Functional componentd doesnt have state
     //When the state is changed, the class along with the other components inside of this class will be re-rendered
     //A state object can be initialize in the constructor
     constructor(props){
          super(props);

          //create a state object for this class to keep track of the change/state of the searchTerm user typed in
          this.state = {searchTerm: ''};
     }


     render(){  //inherited from 'React.Component'
          //S1T17: use setState to change the state
          return (
          <div>
                <input 
                value={ this.state.searchTerm } //assigns the current value of the searchTerm in the state to the value of the input
                onChange={event => this.setState({ searchTerm: event.target.value })} />
          </div>
          );
          
          //S1T16:
          //return <input onChange={this.onInputChange}/>;
          //or we combine the onInputChange function into the return:
          //return <input onChange={event => console.log(event.target.value)} />;
     }

/*
//S1T16: to handle user events, there are two steps: 1. create an event handler
     onInputChange(event){ //everytime a user event is detected, an event object is created
          console.log(event.target.value);
     }
*/
}



/*
//S1T14: functional component
const SearchBar = () => {
     return <input />;
}
*/





//when another js file import this js, SearchBar is returned 
export default SearchBar;
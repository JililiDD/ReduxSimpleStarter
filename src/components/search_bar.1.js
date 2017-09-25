//S1T14
//S1T15: {Component} is a shortcut for const Component = React.Component; 
import React, {Component} from 'react';


//S1T15: change the following functional component to a class component
//use a class component if the component needs the state
class SearchBar extends Component{ //it can also be written as extends React.Component
      
  //S1T17: every class component needs to keep its state. Functional componentd doesnt have state
  //When the state is changed, the class along with the other components inside of this class will be re-rendered
  //A state object can be initialize in the constructor
  constructor(props){
    super(props);
    
    //create a state object for this class to keep track of the change/state of the searchTerm user typed in
    this.state = {searchTerm: ''};
    
  }
  
  //S2T31
  onInputChange(search_bar_searchTerm){
    this.setState({ searchTerm: search_bar_searchTerm });
    this.props.onSearchTermChange(search_bar_searchTerm);
  }

  render(){  //inherited from 'React.Component'
  //S1T17: use setState to change the state
    return (
    <div className="search-bar">
        <input 
        value={ this.state.searchTerm } //assigns the current value of the searchTerm in the state to the value of the input
        onChange={event => this.onInputChange(event.target.value)} //everytime the setState() is called, the component is rerendered
        />  
    </div>
    );
  }
}

export default SearchBar;
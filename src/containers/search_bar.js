//S1T14
//S1T15: {Component} is a shortcut for const Component = React.Component; 
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getVideos } from '../actions/action_searchbar_input';
import { bindActionCreators } from 'redux';

//S1T15: change the following functional component to a class component
//use a class component if the component needs the state
class SearchBar extends Component{ //it can also be written as extends React.Component
  constructor(props){
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
  }
  
  //S5T53
  onInputChange(event){
    this.props.getVideos(event.target.value);
  }
  
  render(){  //inherited from 'React.Component'
  //S1T17: use setState to change the state
    return (
    <div className="search-bar">
        <input 
        //value={ this.state.searchTerm } //assigns the current value of the searchTerm in the state to the value of the input
        onChange={(event) => this.onInputChange(event)} //everytime the setState() is called, the component is rerendered
        />  
    </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { getVideos } ,dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
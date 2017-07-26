
//S5T52
import React, { Component } from 'react';

//S5T58
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component{
  //S5T53: add state using a constructor in the component
  constructor(props){
    super(props);

    this.state={ term: '' };

    //S5T53:？？？？？？？？？？？？？？？？Not sure if understood right
    //this.onInputChange is assigned to a new 'this.onInputChange' which is bound with 'this'--SearchBar
    this.onInputChange = this.onInputChange.bind(this);

    //S5T58:
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  //S5T53
  onInputChange(event){
    this.setState({ term:event.target.value });
  }

  //S5T54: to prevent the default behavior of the form element and to pass the user input to the backend
  onFormSubmit(event){
    event.preventDefault();

    //S5T58: call fetchWeather from props after the fetchWeather method is connected to this file
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  //S5T52
  render(){
    return(
      //Using a form tag for SearchBar is to use some form default functionalities, such as submit the user input
      //by typing the enter key or click on the submit button.
      <form 
      //S5T54: add an onSubmit event handler to prevent the default form element behavior which is to submit
      //the user input to the backend and refresh the webpage every time when user pressed enter key or clicked on
      //submit button
      onSubmit={ this.onFormSubmit }
      className="input-group"
      >
        <input 
          placeholder='Get a five-day forecast in your favorite cities'
          className="form-control"
          value={ this.state.term }

          //S5T53: NOTE here that, this.onInputChange is a callback function that gets called once the 'input' field is
          //change(onChange function)
          //回调函数是你写一个函数，让预先写好的系统来调用。你去调用系统的函数，是直调。让系统调用你的函数，就是回调。
          //Here, our function -- onInputChange is called by the system function -- onChange

          //TAKE HOME MESSAGE: every time we pass a callback function and the callback function has a reference to 'this'
          //we need to bind with the context in the constructor
          onChange={ this.onInputChange }
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  }
}

//S5T58: this makes sure that the fetchWeather action flows into the middleware and then the reducers inside of our
//redux application
function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}

//S5T58: null is because we do not need to update any state based on the application state to props
export default connect (null, mapDispatchToProps)(SearchBar);
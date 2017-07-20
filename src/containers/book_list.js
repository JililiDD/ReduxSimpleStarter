//S4T40: put book_list.js in the containers folder instead of the components folder is because
//this component is going to use react-redux library to bridge the react library and redux library together
//when react-redux library is used, this component is called a container and placed in the containers folder
//a container is a component that has direct access to the state that is produced by redux 

import React, { Component } from 'react';

//S4T42: import the connect function from react-redux in order to produce a container
import { connect } from 'react-redux';

//S4T45: import the action -- selectBook
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component{
  renderList(){
    return this.props.books.map(
      (book) => {
        return(
          //S4T40: this is a list, so give an unique key for each item in the list
          <li 
            key={book.title}
            //S4T46: assign props.book_list_selectBook to the onClick event
            onClick={() => this.props.book_list_selectBook(book)} 
            className='list-group-item'>
            { book.title }
          </li>
        );
      }
    );
  }

  render(){
    return(
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}

//S4T42: takes application state
function mapStateToProps(appState){
  //whatever(an object) is returned will be used as props inside of BookList 
  //(in this case: return this.props.books.map() in the BookList class above)
  return (
    { books: appState.books }
  );
}

//S4T45: anything returned from this function will end up as props on the BookList container
//so that we can call this.props.book_list_selectBook action in BookList container. 
function mapDispatchToProps(dispatch){
  //S4T45: whenever book_list_selectBook, which is assigned with the selectBook action from index.js in the actions folder,
  //is dispatched, the action flows through all of our reducers
  //dispatch function takes the action and pass it to all the reducers inside of the application
  return bindActionCreators( {book_list_selectBook: selectBook}, dispatch );
}

//instead of a component, a container produced using connect function is exported 
//by using a containner, everytime the appState is changed, the props passed to the BookList
//will be changed automatically
//S4T45: add mapDispatchToProps as another parameter in connect(). This is to promote BookList from a component to 
//a container -- it needs to know about this new dispatch method, selectBook. Make it available as a new function
//in the props in this BookList container.
//mapStateToProps is to include the application's state into this.props and the mapDispatchToProps is to include
//the functions/actions in actions into this.props for BookList container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
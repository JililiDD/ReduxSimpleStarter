import React, { Component } from 'react';

//S4T42
import BookList from '../containers/book_list';

//S4T48
import BookDetail from '../containers/book_detail';

export default class App extends Component {
  render() {
    return (
      
      <div className='col-sm-8'>
        <BookList //S4T42 
        />
        <BookDetail //S4T48
          />
      </div>
      
    );
  }
}

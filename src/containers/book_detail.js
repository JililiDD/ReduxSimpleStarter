//S4T48
import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component{
  render(){
    //S4T49: add an if to check if the book exists, if not display a sentence so that the browser won't
    //complain a null value
    if(!this.props.book){
      return(<div>Select a book to get started.</div>);
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: { this.props.book.title }</div>
        <div>Pages: { this.props.book.pages }</div>
      </div>
    );
  }
}

function mapStateToProps(appState){
  return{
    book: appState.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
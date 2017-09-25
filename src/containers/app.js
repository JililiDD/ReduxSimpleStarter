
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SearchBar from '../containers/search_bar';
import VideoDetail from '../containers/video_detail';
import VideoList from '../containers/video_list';
import { makeDefaultList } from '../actions/action_make_default_list';

class App extends Component{
  render(){
    return(
      //create a SearchBar instance and put it in div
      <div onLoad={this.props.makeDefaultList}>
        <SearchBar />  
        <VideoDetail />
        <VideoList />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { makeDefaultList } ,dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

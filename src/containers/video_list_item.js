//S2T24

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectVideo } from '../actions/action_select_video';
import { bindActionCreators } from 'redux';

const VideoListItem = (props) => {
  const video = props.video;

  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    //S2T26: className classes are from bootstrap
    //S2T29: onClick function will pass video all the way to the App component in index.js by onVideoSelect() method
    <li onClick={() => this.props.selectVideo(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ selectVideo }, dispatch);
}


export default connect(null, mapDispatchToProps)(VideoListItem);
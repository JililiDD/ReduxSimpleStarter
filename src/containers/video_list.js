//S2T23
import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoListItem from './video_list_item';

class VideoList extends Component{
  renderList(){
    return this.props.videoList.map((video) => {
      return (<VideoListItem key={video.etag} video={video}//S2T25 video.etag will provide an unique fixed key for each video from youtube 
                           onVideoSelect={props.onVideoSelect} //S2T29: pass onVideoSelect to the child(video_list_item)
    />);
    });
  }

  render(){
    return (<ul>{ this.renderList() }</ul>);
  }
}

//bind application's videoList state to the props of this VideoList
function mapStateToProps(appState){
  return { videoList: appState.videoList};
}

export default connect(mapStateToProps)(VideoList);
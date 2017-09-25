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
function mapStateToProps(){
  return { videoList: videoList};
}

export default connect(mapStateToProps)(VideoList);





/*
const VideoList1 = (props) => {
  //S2T23 use array.map iterator to return an array of videos. Do not use for loop in react
  //example of using array.map:
  //array = ["one","two"];
  //array.map((param) => {return param + 'surfix'});
  //output: ["onesurfix", "twosurfix"]
  const videoItems = props.vlVideos.map((video) => {
    //pass the single video's key and video from the parent(video_list) to the child(video_list_item) in a props object
    return (<VideoListItem key={video.etag} video={video}//S2T25 video.etag will provide an unique fixed key for each video from youtube 
                           onVideoSelect={props.onVideoSelect} //S2T29: pass onVideoSelect to the child(video_list_item)
    />)
  });

  return (
    //use className in JSX insead of class in CSS
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;
*/
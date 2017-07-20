//S2T23
import React from 'react';

import VideoListItem from './video_list_item';

const VideoList = (props) => {
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
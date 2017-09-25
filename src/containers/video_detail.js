//S2T27
import React, { Component } from 'react';
import { connect } from 'react-redux';


class VideoDetail extends Component{
  render(){
    const video = this.props.selectedVideo;

    if(!video){
      return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;

    //in ES6, the following line can also be written as:
    //const url = `http://www.youtube.com/embed/&{videoId}`;
    const url = 'http://www.youtube.com/embed/' + videoId;

    return(
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe src={url} frameBorder="0" allowFullScreen></iframe> 
        </div>
        
        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    );
  }
}

//bind application's videoList state to the props of this VideoList
function mapStateToProps(appState){
  return { selectedVideo : appState.selectedVideo };
}

export default connect(mapStateToProps)(VideoDetail);


/*
const VideoDetail1 = (props) => {

  const video = props.video;
  if(!video){
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;

  //in ES6, the following line can also be written as:
  //const url = `http://www.youtube.com/embed/&{videoId}`;
  const url = 'http://www.youtube.com/embed/' + videoId;

  return(
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={url} frameBorder="0" allowFullScreen></iframe> 
      </div>
      
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
}
//<iframe className="embed-responsive-item" scr={url}></iframe>
export default VideoDetail;
*/
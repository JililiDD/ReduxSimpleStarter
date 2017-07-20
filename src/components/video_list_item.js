//S2T24

import React from 'react';

const VideoListItem = (props) => {
  const video = props.video;
  //S2T29
  const onVideoSelect = props.onVideoSelect;

  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    //S2T26: className classes are from bootstrap
    //S2T29: onClick function will pass video all the way to the App component in index.js by onVideoSelect() method
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
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

export default VideoListItem;
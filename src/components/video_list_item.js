import React from 'react';

// {video} is similar as if we pass the argument "props" and then get props.video
const VideoListItem = ({video, onVideoSelect}) => {
  const imgUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  return (
    <li
      onClick={() => onVideoSelect(video)}
      className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imgUrl}/>
        </div>

        <div className="media-body">
          <div className="media-heading">
            {title}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
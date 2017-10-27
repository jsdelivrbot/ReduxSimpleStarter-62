import React from 'react';

// {video} is similar as if we pass the argument "props" and then get props.video
const GooderListItem = ({gooder, onGooderSelect}) => {
  const avatarUrl = gooder.user.profiles[0].avatar_uri;
  const name = `${gooder.user.firstname} ${gooder.user.lastname}`;
  return (
    <li
      onClick={() => onGooderSelect(gooder)}
      className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={avatarUrl}/>
        </div>

        <div className="media-body">
          <div className="media-heading">
            {name}
          </div>
        </div>
      </div>
    </li>
  );
};

export default GooderListItem;
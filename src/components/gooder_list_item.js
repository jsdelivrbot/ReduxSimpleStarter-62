import React from 'react';

// {video} is similar as if we pass the argument "props" and then get props.video
const GooderListItem = ({gooder, onGooderSelect, classe}) => {
  const avatarUrl = gooder.user.profiles[0].avatar_uri;
  const name = `${gooder.user.firstname} ${gooder.user.lastname}`;
  let classes = "list-group-item";
  if (classe == 'active'){
    classes += ' activeItem';
  }
  return (
    <li
      onClick={() => onGooderSelect(gooder)}
      className={classes}>
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
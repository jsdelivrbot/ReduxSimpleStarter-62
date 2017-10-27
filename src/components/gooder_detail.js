import React from 'react';

const GooderDetail = ({gooder}) => {
  if (!gooder) {
    return <div>Loading...</div>;
  }

  const name = `${gooder.user.firstname} ${gooder.user.lastname}`;
  const avatarUrl = gooder.user.profiles[0].avatar_uri;
  const bio = gooder.user.profiles[0].bio;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <img className="avatar" src={avatarUrl} alt="avatar"/>
      </div>
      <div className="detail">
        <div className="video-title">{name}</div>
        <div>{bio}</div>
      </div>
    </div>
  );
};

export default GooderDetail;
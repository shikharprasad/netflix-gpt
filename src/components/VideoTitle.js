import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='video-title-container'>
      <h1 className='video-title'>{title}</h1>
      <p className='video-desc'>{overview}</p>
      <div>
        <button className='video-play'>  ▶  Play</button>
        <button className='video-info'>ⓘ More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle

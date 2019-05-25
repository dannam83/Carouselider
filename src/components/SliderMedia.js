import React from 'react';

import './SliderMedia.css';

const SliderMedia = ({ media }) => {
  const { name, show, backgroundImage } = media;
  const imgSource = `/images/${backgroundImage}`;

  return (
    <div className="Slider-media-div">
      <img src={imgSource} className="Slider-media-image" alt="media" />
      <div className="Slider-labels-div">
        <label className="Slider-label-show">{show}</label>
        <label className="Slider-label-name">{name}</label>
      </div>
    </div>
  )
}

export default SliderMedia;

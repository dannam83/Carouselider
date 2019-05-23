import React from 'react';

import './ListMedia.css';

const ListMedia = ({ media }) => {
  const { name, show, backgroundImage } = media;
  const imgSource = `/images/${backgroundImage}`;

  return (
    <div className="List-media-div">
      <img src={imgSource} className="List-media-image" alt="media" />
      <div className="List-labels-div">
        <label className="List-label-show">{show}</label>
        <label className="List-label-name">{name}</label>
      </div>
    </div>
  )
}

export default ListMedia;

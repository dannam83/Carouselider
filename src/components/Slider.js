import React from 'react';
import Carousel from 'nuka-carousel';

import SliderMedia from './SliderMedia';
import './css/Slider.css';

const Slider = ({ media, windowWidth }) => {
  const slidesToShow = windowWidth > 500 ? 4 : 1;

  return (
    <div className="Slider-div">
      <div className="Slider-headline-div">
        <label className="Slider-headline">Headline</label>
      </div>
      <Carousel
        wrapAround={true}
        slidesToShow={slidesToShow}
        framePadding="20px"
        cellSpacing={30}
        renderBottomCenterControls={() => false}
        width="85%"
      >

        { media.map((m) => <SliderMedia media={m} key={m.id}/>) }

      </Carousel>
    </div>
  )
}

export default Slider;

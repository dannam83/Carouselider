import React, { Component } from 'react';
import { connect } from 'react-redux';
import windowSize from 'react-window-size';

import { fetchMedia } from '../actions';
import Slider from './Slider';
import List from './List';
import './css/Display.css';

class Display extends Component {
  componentDidMount() {
    this.props.fetchMedia();
  }

  render() {
    const { media, windowWidth } = this.props;
    return (
      <div>
        {
          this.props.display === 'Slider' ?
          <div className="Slider-container">
            <Slider media={media} windowWidth={windowWidth} />
          </div>
          :
          <div className="List-container">
            <List media={this.props.media} />
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { display, media } = state;

  return { display, media };
};

export default connect(mapStateToProps, { fetchMedia })(windowSize(Display));

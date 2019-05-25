import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import windowSize from 'react-window-size';

import { displaySelect } from '../actions';
import './css/ToggleDisplay.css';

class ToggleDisplay extends Component {
  onClick(label) {
    this.props.displaySelect(label);
  }

  render() {
    const { display, windowWidth } = this.props;
    const buttonSize = windowWidth > 500 ? "large" : "small";

    const sliderButtonStyle = display === 'Slider' ?
      selectedButtonStyle : unselectedButtonStyle;

    const listButtonStyle = display === 'List' ?
      selectedButtonStyle : unselectedButtonStyle;

    return (
      <div className="Toggle-display-container">
        <div className="Toggle-display-div">
          <label className="Toggle-display-label">Toggle Display</label>
          <Button
            style={sliderButtonStyle}
            variant="contained"
            size={buttonSize}
            onClick={() => this.onClick('Slider')}
          >
            Slider
          </Button>
          <Button
            style={listButtonStyle}
            variant="contained"
            size={buttonSize}
            onClick={() => this.onClick('List')}
          >
            List
          </Button>
        </div>
      </div>
    )
  }
}

const selectedButtonStyle = {
  fontSize: '10px',
  backgroundColor: 'rgba(0,0,131)',
  color: 'white',
  marginLeft: '9px',
  width: '80px',
}

const unselectedButtonStyle = {
  fontSize: '10px',
  backgroundColor: 'white',
  color: 'rgba(0,0,131)',
  marginLeft: '9px',
  width: '80px',
}

const mapStateToProps = (state) => {
  const { display } = state;
  return {
    display
  };
};

export default connect(mapStateToProps, { displaySelect })(windowSize(ToggleDisplay));

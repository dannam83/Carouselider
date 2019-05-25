import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMedia, searchMedia } from '../actions';
import './SearchBar.css';

class SearchBar extends Component {
  state = { search: "" }

  onChangeText = (event) => {
    const { value } = event.target;
    this.setState({ search: value });
    this.props.searchMedia(value);
  }

  submitSearch = (event) => {
    this.props.searchMedia(this.state.search);
  }

  render() {
    return (
      <div className="Search-bar-container">

        <div className="Search-bar-div">
          <input
            className="Search-bar-input"
            value={this.state.search}
            type="text"
            name="name"
            placeholder='Search "Walmart"'
            onChange={this.onChangeText}
          />
        <img src="images/iconSearch.svg" className="Search-bar-icon" alt="logo" />
        </div>
      </div>
    )
  }
}

export default connect(null, { fetchMedia, searchMedia })(SearchBar);

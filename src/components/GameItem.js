import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  constructor() {
    super();
    this.state = {
    beenClicked: false,
    className: '',
    };
  }

  onItemClicked = (event) => {
    // Fill this in for Wave 2!
    if (this.props.type === 'litter') {
      this.setState({beenClicked: true, className: 'spotted-litter'})
      this.props.itemClicked(this)
    }
    else {
      this.setState({beenClicked: true, className: 'spotted-nature'})
    }
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
      let icon = ItemIcons[this.props.type]

    return (
      <div className={`game-item ${this.state.className}`} style={itemStyle} onClick={this.onItemClicked} >
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;

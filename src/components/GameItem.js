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
    this.state {
    beenClicked: false
    };
  }

  onItemClicked = (props) => {
    // Fill this in for Wave 2!
    this.setState ({beenClicked: true})
    // props.beenClickedCallback(props.index)
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
      let icon = ItemIcons[this.props.type]

    return (
      <div className={`game-item ${this.className}`} style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;

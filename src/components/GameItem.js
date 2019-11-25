import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor () {
    super()

    const pickIcon = () => {
      var keys = Object.keys(ItemIcons)
      return ItemIcons[keys[ keys.length * Math.random() << 0]];
    }
    this.icon = pickIcon()
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  onItemClicked = () => {
    // Fill this in for Wave 2!
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    return (
      <div className="game-item" style={itemStyle}>
        <img src={this.icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;

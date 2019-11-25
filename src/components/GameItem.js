import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
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

    // Update this to select the correct icon for each item
    let icon = null;


    if (this.props.type === "litter") {
      icon = ItemIcons.litter;
    } else if (this.props.type === "rock") {
      icon = ItemIcons.rock;
    } else if (this.props.type === "bush") {
      icon = ItemIcons.bush;
    } else if (this.props.type === "flower") {
      icon = ItemIcons.flower;
    } else if (this.props.type === "mushroom") {
      icon = ItemIcons.mushroom;
    }

    // findType()

    return (
      <div className="game-item" style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;

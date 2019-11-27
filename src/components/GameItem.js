import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      classes: "game-item",
    };
  }

  onItemClicked = () => {
    // Fill this in for Wave 2!

    if (this.props.type === 'litter') {
      this.setState({classes: this.state.classes + ' spotted-litter'});
      this.props.onItemClicked();
    } else {
      this.setState({classes: this.state.classes + ' spotted-nature'})
    };
  }
    
  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    const itemIconMatch = {
      'litter': ItemIcons.litter,
      'rock': ItemIcons.rock,
      'bush': ItemIcons.bush,
      'flower': ItemIcons.flower,
      'mushroom': ItemIcons.mushroom,
    };

    // Update this to select the correct icon for each item
    const icon = itemIconMatch[this.props.type];

    return (
      <div className={this.state.classes} style={itemStyle} onClick={this.onItemClicked}>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;

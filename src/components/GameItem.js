import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor() {
    super();
    this.state = {
      spotted: false,
      className: null
    };
  }
  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  onItemClicked = () => {
    if (this.state.spotted === false) {
      this.spotted = true
    } 

    if (this.state.className === 'litter') {
      this.className = "spotted-litter"
    } else {
      this.className = "spotted-nature"
    }
// if spotted litter  change to true
    //  if type is litter change class to spotted litter
//  else spotted nature



  } 
    
  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    // const icon = ItemIcons.type;
    const icon = ItemIcons[this.props.type];
    return (
      <div className={`game-item ${this.className}`} style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item" onClick={this.onItemClicked}></img>
      </div>
    );
  }
}

export default GameItem;

import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      cssClass: 'game-item',
    };
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }
  
  onItemClicked = (props) => {
    // Fill this in for Wave 2!
    let icon = this.props.type;
    if (icon==='litter') {
      this.setState({
        cssClass: 'game-item spotted-litter',
      })
    } else {
      this.setState({
        cssClass: 'game-item spotted-nature',
      })
    }
    return;
  }
    
  render() {
    
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    let imageHelper = this.props.type;
    const icon = ItemIcons[imageHelper];

    return (
      <div className={this.state.cssClass} style={itemStyle}>
        <img src={icon} alt="Item" className='icon-item' onClick={this.onItemClicked} ></img>
      </div>
    );
  }
}

export default GameItem;

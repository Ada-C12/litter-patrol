import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  }

  constructor() {
    super();

    this.state = {};
  }

  onItemClicked = () => {
    let spotted;

    if (this.props.type === 'litter') {
      spotted = 'spotted-litter';
    }
    else {
      spotted = 'spotted-nature';
    }

    this.setState({ spotted: spotted });
  }
    
  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type];
    const classes = `game-item ${this.state.spotted}`;

    return (
      <div className={classes} style={itemStyle} onClick={this.onItemClicked}>
        <img src={icon} alt="Item" className='icon-item'></img>
      </div>
    );
  }
}

export default GameItem;

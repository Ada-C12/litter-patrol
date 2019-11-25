import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }

  static propTypes = {
    type: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  onItemClicked = () => {
    this.setState({clicked: true})
  }
    
  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[`${this.props.type}`];
    let spottedType = ''

    if (this.state.clicked) {
      if (this.props.type === 'litter') {
        spottedType = 'spotted-litter';
      } else {
        spottedType = 'spotted-nature';
      }
    }

    return (
      <div className="game-item" style={itemStyle}>
        <span className={spottedType}></span>
        <img src={icon} alt="Item" className="icon-item" onClick={ this.onItemClicked}></img>
      </div>
    );
    }
  
  }

export default GameItem;

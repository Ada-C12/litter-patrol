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

  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    }
  }
  onItemClicked = () => {
    // Fill this in for Wave 2!
    this.setState({
      clicked: true,
      })

  }
    

  render() {
    let className

    if(this.props.type === 'litter' && this.state.clicked) {
      className = 'spotted-litter'
    } else if(this.state.clicked) {
      className = 'spotted-nature'
    }

    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set
    };
    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type];

    return (
      <div onClick={this.onItemClicked} className={`game-item ${className}`} style={itemStyle}>
        <img src={icon} alt='Item' className="icon-item"></img> 
      </div>
    );
  }
}

export default GameItem;

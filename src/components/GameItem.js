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
    const status = (this.state) ? true : false;

    this.setState({
      isClicked: status,
    });

  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.displayItem];
    
    let itemClassName = "game-item";
    if (this.state !== null) {
      itemClassName += (this.props.displayItem === 'litter') ? " spotted-litter" : " spotted-nature";
    }

    return (
      <div onClick={this.onItemClicked} className={itemClassName} style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;

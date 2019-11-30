import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {

  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

    constructor (request, _props) {
      super ()
      this.request = request
    }

  render() {

  // THIS SECTION DETERMINES HOW/WHERE THE ICON WILL BE DISPLAYED
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };
    
    //itemType is actually a reference to App.js...which is how GameItem knows which item it's actually trying to render. 

    const icon = ItemIcons[this.props.itemType]

    return (
      
      <div className="game-item" style={itemStyle}>
        <img src={icon} alt="item" className="icon-item"></img>
      
      
      
      </div>
    );
  }
}

export default GameItem;

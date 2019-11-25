import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
      constructor(event){
        super()
        this.state = {
          trash: false
        };
      }
    
        // if item has litter, green
          // else item has no litter, red
          // use event handler to 
          // item: 'spotted-litter',
          // item: 'spotted-nature'

        // state === false 
        // state === true 


  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  onItemClicked = () => {
    this.setState({trash: !this.state.trash})
    // if this.state === 'spotted-litter'
    // elsif this.state === 'spotted-nature'
    
    // Fill this in for Wave 2!
  }

  
    
  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type];

    return (
      <div className="game-item" style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;

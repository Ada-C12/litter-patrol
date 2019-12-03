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
    
    // default state of game item is 'not spotted'
    this.state = {
      spotted: false
    };
  }
  
  onClick = () => {
    console.log('clicked!')
    // when clicked, if the current item hasn't been spotted yet ...
    if(!this.state.spotted) {
      // set the item's state to 'spotted'
      this.setState({ spotted: true });
      // call onItemClicked function with item type passed in as argument
      this.props.onItemClicked(this.props.type);
    }
  }
  
  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };
    
    // create an array to hold game item styles
    const items = ['game-item'];
    
    if(this.state.spotted) {
      // if user spots litter, apply spotted-litter styling. Otherwise apply spotted-nature styling. 
      const style = this.props.type === 'litter' ? 'spotted-litter' : 'spotted-nature';
      items.push(style);
    }
    
    // Select the correct icon for each item
    const icon = ItemIcons[this.props.type];
    
    return (
      <div className={items.join(' ')} style={itemStyle} onClick={this.onClick}>
      <img src={icon} alt="Item" className="icon-item"></img>
      </div>
      );
    }
  }
  
  export default GameItem;
  
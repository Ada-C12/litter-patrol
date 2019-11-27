import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';
import { spawn } from 'child_process';
const randomObjProp = require('random-obj-prop');


class GameItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      classForX: "game-item",
      alreadyScored: false,
    }
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  onItemClicked = () => {
    // Fill this in for Wave 2!
   if (this.props.type === "litter"){
      this.setState({
      classForX: "game-item spotted-litter"
      })
      if (this.state.alreadyScored === false){
        this.props.onClickCallback()
        this.setState({
          alreadyScored: true
        })
      }
      
   } else {
       this.setState({
        classForX: "game-item spotted-nature"
       })
    }
  }
    
  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };


    // If we're spotted, add the appropriate class


   
    // Update this to select the correct icon for each item
       const icon = ItemIcons[this.props.type];

    
    return (
      <div className= {this.state.classForX} style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item" onClick = {this.onItemClicked}></img>
      </div>
      
    );
  }
}

export default GameItem;

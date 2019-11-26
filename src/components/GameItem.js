import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  iconChooser = () => {

  //THIS SECTION DETERMINES HOW THE ICON WILL BE CHOSEN:
    // Note, handles are shuffled before being put in object because object cannot be shuffled. ATM, wondering if this is better done with a map. Are the choices really random or are they running 1-5 really fast? 

    // an array that will be used as identifications for handles to grab specific icons
    const choices = [1, 2, 3, 4, 5]

    // shuffle function
    const shuffleIcons = function (array) {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      };
    };

    // call shuffle function on handles
    shuffleIcons(choices)

    //attach handles to specific elements
    const really = {
      1: ItemIcons.litter,
      2: ItemIcons.rock,
      3: ItemIcons.bush,
      4: ItemIcons.flower,
      5: ItemIcons.mushroom
    }

    return really[choices[0]]

  }

  render() {


  // THIS SECTION DETERMINES HOW/WHERE THE ICON WILL BE DISPLAYED
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    // const icon = ItemIcons.rock;

  
    // this selects the item from really based on whatever is at the first handle spot
    let icon = this.iconChooser()

    return (
      
      <div className="game-item" style={itemStyle}>
        <img src={icon} alt="Item" 
        className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;

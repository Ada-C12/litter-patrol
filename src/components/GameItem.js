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
    // Fill this in for Wave 2!
  }
    


  itemPicker = () => {

  }


  render() {

    const choices = [1, 2, 3, 4, 5]

    const shuffleIcons = function (array) {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      };
    };

    shuffleIcons(choices)

    const really = {
      1: ItemIcons.litter,
      2: ItemIcons.rock,
      3: ItemIcons.bush,
      4: ItemIcons.flower,
      5: ItemIcons.mushroom
    }

    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    // const icon = ItemIcons.rock;

    let icon = really[choices[0]];

    return (
      
      <div className="game-item" style={itemStyle}>
        <img src={icon} alt="Item" 
        className="icon-item"></img>
        {console.log(really)}
      </div>
    );
  }
}

export default GameItem;

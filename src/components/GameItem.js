import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {

  // this sets up the state to be used later
  constructor(props) {
    super(props);
    this.state = {
      spottedItem: false
    }
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  // this changes the state upon clicking 
  onItemClicked = () => {
      this.setState({spottedItem: true})
  }

  render() {

    // this will change the class (to be used by the CSS) based on whether the item has been clicked on AND if the item type that got clicked is litter
    let spottedClass = null

    if (this.state.spottedItem === true) {
      spottedClass = "spotted-nature"
      if (this.props.itemType === 'litter') {
        spottedClass = "spotted-litter"
      }
    }

  // THIS SECTION DETERMINES HOW/WHERE THE ICON WILL BE DISPLAYED
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    //itemType is actually a reference to App.js...which is how GameItem knows which item it's actually trying to render. 
    const icon = ItemIcons[this.props.itemType]

    return (
    // note how "onClick" exist here, this is React logic so that the game will wait for us to click on it before implementing the onItemClicked logic
      <div onClick={this.onItemClicked} className={`game-item ${spottedClass}`}style={itemStyle}>
        <img src={icon} alt="item" className="icon-item"></img>
      </div>
    );
    
  }
}

export default GameItem;

import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor() {
    super();
    this.state ={
      spotted: false,
    };
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  onItemClicked = () => {
    this.setState({ spotted: true });
  }

  
render() {
  let styleName = "";
  if ((this.props.type === "litter") &&  (this.state.spotted === true )) {
    styleName = "game-item spotted-litter";
  }
  else if ((this.props.type !== "litter") && (this.state.spotted === true )) {
    styleName = "game-item spotted-nature";
  }
  else if (this.state.spotted === false ) {
    styleName = "game-item";
  }
 


    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
      
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type];

    return (
      <div className={styleName} style={itemStyle}>
          <img src={icon} alt="Item" className="icon-item" onClick= { this.onItemClicked }></img>
        
      </div>
    );
  }
}

export default GameItem;

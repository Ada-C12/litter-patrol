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
      spotted: false,
    };
  }

  

  onItemClicked = () => {
    if (this.state.spotted != true ) {
      this.setState({ spotted: true });
      this.props.onItemClicked(this.props.type)
    }
  }

    
  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    let spotted = "game-item"

    if (this.state.spotted === true) {
      if (this.props.type === "litter") {
        spotted += " spotted-litter";
      } else {
        spotted += " spotted-nature";
      }
    }


    // Update this to select the correct icon for each item
    
    let icon = ItemIcons[this.props.type];

    return (
      <div onClick= { this.onItemClicked } className={spotted} style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;

import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      spotted: false,
    }
  }

  onItemClicked = () => {
    // Fill this in for Wave 2!
    this.setState({
      spotted: true,
    });
  }
    
  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    let icon = ItemIcons[this.props.type];

    let spotted = null

    if (this.state.spotted === true && this.props.type === "litter") {
      spotted = "game-item spotted-litter";
    } else if (this.state.spotted === true) {
      spotted = "game-item spotted-nature";
    } else {
      spotted = "game-item"
    }

    return (
      <div className={spotted} style={itemStyle} onClick={this.onItemClicked}>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;

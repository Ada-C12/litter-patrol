import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameItemType: "game-item"
    }
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  onItemClicked = () => {
    // Fill this in for Wave 2!
    if (this.props.icon === 'litter') {
      this.setState({
        gameItemType: "game-item spotted-litter"
      })
    } else {
      this.setState({
        gameItemType: "game-item spotted-nature"
      })
    }
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.icon]
    // console.log(this.props.icon)

    return (
      <div className={this.state.gameItemType} style={itemStyle}>
          <img src={icon} alt="Item" className="icon-item" onClick={this.onItemClicked} ></img>
      </div>
    );
  }
}

export default GameItem;

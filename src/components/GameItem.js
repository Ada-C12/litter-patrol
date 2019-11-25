import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';
// import App from '../App';

class GameItem extends Component {
  constructor (props) {
    super(props)

    this.itemClass = "game-item";
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  //need to make sure this can only be clicked once
  onItemClicked = () => {
    if(this.props.type === "litter" && this.itemClass === "game-item") {
      this.itemClass = this.itemClass + " spotted-litter"
      this.props.onClickCallback()
    } else if (this.itemClass === "game-item") {
      this.itemClass = this.itemClass + " spotted-nature"
    }
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    return (
      <div className={this.itemClass} style={itemStyle} onClick={this.onItemClicked}>
        <img src={ItemIcons[this.props.type]} alt="Item" className="icon-item" ></img>
      </div>
    );
  }
}

export default GameItem;

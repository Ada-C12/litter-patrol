import React, { Component } from "react";
import "../App.css";
import ItemIcons from "../ItemIcons.js";
import PropTypes from "prop-types";

class GameItem extends Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
    types: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      click: false
    };
  }
  onItemClicked = () => {
    // Fill this in for Wave 2!
    if (this.props.type === "litter") {
      this.setState({ click: true });
      this.props.onItemClicked("litter");
    } else {
      this.setState({ click: false });
    }
  };

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type];

    let clicked = "game-item";
    if (this.state.click === true) {
      if (this.props.type === "litter") {
        clicked += " spotted-litter";
      } else if (this.state.click === false) {
        clicked += " spotted-nature";
      }
    }

    return (
      <div onClick={this.onItemClicked} className={clicked} style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;

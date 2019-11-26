import React, { Component } from "react";
import "../App.css";
import ItemIcons from "../ItemIcons.js";
import PropTypes from "prop-types";

class GameItem extends Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      spotted: false
    };
  }

  onItemClicked = event => {
    if (!this.state.spotted) {
      this.setState({ spotted: true });
      this.props.increaseScore(this.props.type);
    }
  };

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type];

    let status = "";

    if (this.state.spotted) {
      if (this.props.type === "litter") {
        status = "spotted-litter";
      } else {
        status = "spotted-nature";
      }
    }

    return (
      <div
        className={"game-item " + status}
        style={itemStyle}
        onClick={this.onItemClicked}
      >
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;

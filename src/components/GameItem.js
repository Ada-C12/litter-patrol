import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false, 
      // type: props.type
    }
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
  }

  selectedClass = () => {

  }
// TODO Classes: spotted-litter or spotted-nature
  onItemClicked = () => {
    // TODO if already true, don't do
    if (this.state.selected === false && this.props.icon === "litter") {
      this.setState({
        selected: true
      });
      // console.log("litter")
    } else if (this.props.icon !== "litter") {
      // console.log("not litter")
    }
  }
  
  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    // const icon = ItemIcons.rock;
    const icon = ItemIcons[`${this.props.icon}`];

    return (
      <div className={`game-item `} style={itemStyle} onClick={this.onItemClicked}>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;

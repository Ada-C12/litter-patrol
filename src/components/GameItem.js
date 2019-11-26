import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type,
      clicked: false,
      clickClass: "",
    };
  }
  
  
  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  onItemClicked = () => {
    this.setState({
      clicked: true,
      clickClass: (this.state.type === "litter" ? "spotted-litter" : "spotted-nature")
    });
    this.props.onClick(this.props.type);
    } 
    
    
  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };
    // Update this to select the correct icon for each item
    let icon = ItemIcons[this.state.type];

    let cssClass = `game-item ${this.state.clickClass}`

    return (
      <div onClick={this.onItemClicked} className={cssClass} style={itemStyle} >
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;

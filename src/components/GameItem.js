import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

// inheriting props from Component
// proptypes expect height and layer to be passed in through props
class GameItem extends Component {
  
  constructor() {
    super()
    this.state = {spotted:false}
  }
  
  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  }

  onItemClicked = () => {
    if (this.state.spotted === false && this.props.type === "litter") {
      this.setState({ spotted:true })
      this.props.updatePoints()
    } else if (this.state.spotted === false) {
      this.setState({ spotted:true })
    };
  }
    
  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    let style

    if (this.state.spotted === true && this.props.type === "litter") {
      style = "spotted-litter"
      
    } else if (this.state.spotted === true && this.props.type !== "litter") {
      style = "spotted-nature"
    }
    console.log(style)

    // Update this to select the correct icon for each item
  
    const icon = ItemIcons[this.props.type]
   
    return (
      <div onClick={this.onItemClicked} className={`${style} game-item`} style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item" ></img>
      </div>
    );
  }
}

export default GameItem;

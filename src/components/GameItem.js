import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor(props){
    super(props) 
    this.state = { 
      className: "game-item",
      score: 0,
    };
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  onItemClicked = () => {
    // Fill this in for Wave 2!
    if (this.props.type === "litter") { 
      this.setState( {className: "game-item spotted-litter"}); 
      this.props.onItemClicked(); 
    } 
    else { this.setState({className: "game-item spotted-nature"}) };
  }

  const 
    
  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    let icon = ItemIcons[this.props.type];
      
    return (
      <div className={this.state.className} style={itemStyle} onClick={this.onItemClicked}>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;

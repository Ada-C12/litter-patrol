import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    };
  }
  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }
  
  onItemClicked = (props) => {
    if (!this.state.clicked && this.props.type === 'litter'){
      this.props.onItemClickedCallBack();
    }
    this.setState({ clicked: true });
  }

  
  render() {
    console.log(this.state)
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type]

    let spotClass = ''
    if (this.state.clicked === true) {
      spotClass = 'spotted-nature'
      if (this.props.type === 'litter') {
        spotClass = 'spotted-litter'
      } 
    }
    
    return (
      <div onClick={this.onItemClicked} className={`game-item ${spotClass}`} style={itemStyle}>
        <img src={icon} alt="Item" className='icon-item'></img>
      </div>
    );
  }
}

export default GameItem;

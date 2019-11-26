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
      spotted: false
    }
  }

  // this.props.classList.add(TYPE)
  onItemClicked = () => {
    // let gameItemCss = ['game-item'];
    // check to see how long setState takes to set 
    this.setState({spotted: true})
    let style = null
    if (this.props.spotted){
      if (this.props.type === 'litter'){
        // display green check
        this.props.classList.add('spotted-litter')
      } else {
        // display red x  
        this.props.classList.add('spotted-nature')
      }
    }
    // gameItemCss.push(style);
  }
  

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type];

    return (
      <div className="game-item" style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;

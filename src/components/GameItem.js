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
    super(props)
    this.state = {
      clicked: false,
      classNameAfterClick: null,
    }
  }

  onItemClicked = (event) => {
    console.log(`clicked on ${event.target.alt}`);
    
    if (event.target.alt === "litter" && !this.state.clicked) {
      console.log("point + 1 by App.onClick()");
      
      this.setState({classNameAfterClick: 'spotted-litter::before'});
      
    } else if (!this.state.clicked) {
      console.log('oh no');
      this.setState({classNameAfterClick: 'spotted-nature::before'});
    }
    
    this.setState({clicked: true});
  }
    
  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item    
    const icon = ItemIcons[this.props.type];
    const afterClick = null;

    if (this.state.clicked) {
      return (
        <div className="game-item" style={itemStyle}>
          <img src={icon} onClick={this.onItemClicked} alt={this.props.type} className={this.state.classNameAfterClick}></img>
        </div>
      );
    } else {
      return (
      <div className="game-item" style={itemStyle}>
        <img src={icon} onClick={this.onItemClicked} alt={this.props.type} className="icon-item"></img>
      </div>
    );
    }
    
  }
}


export default GameItem;

import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor() {
    super();
    this.state = {
      className: 'game-item'
    };
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  onItemClicked = (props) => {
    if (this.props.type === "litter") {
      this.setState({className: "game-item spotted-litter"})
      this.props.score();
    }
    
    else {
      this.setState({className: "game-item spotted-nature"})
    }
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    let imageHelper = this.props.type;
    const icon = ItemIcons[imageHelper];

    return (
      <div className={this.state.className} style={itemStyle} >
        <img src={icon} alt="Item" className="icon-item" onClick={ this.onItemClicked }></img>
      </div>
    );
  }
}

export default GameItem;

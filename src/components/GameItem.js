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
    }
  };

  onItemClicked = () => {
    if (this.props.type === 'litter') {
      this.props.markIncreaseCallback();
      this.setState ({
        itemClass: "spotted-litter"
      })

    } else {
      this.setState ({
        itemClass: "spotted-nature"
      })
    };
  };
    
  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    let avatar = this.props.type;
    const icon = ItemIcons[avatar];

    return (
      <div onClick={this.onItemClicked} className={`game-item ${this.state.itemClass}`} style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;

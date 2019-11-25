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
      spotted: false,
      displayCorrectness: null
    };
  }

  onItemClicked = () => {
    if (this.props.type === 'litter') {
      this.setState({spotted: true,
                    displayCorrectness: 'spotted-litter'});
    } else {
      this.setState({spotted: true,
                    displayCorrectness: 'spotted-nature'});
    }
  }
    
  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    // const icon = ItemIcons.rock;

    let icon = null;
    
    switch(this.props.type) {
      case 'litter':
        icon = ItemIcons.litter;
        break;
      case 'rock':
        icon = ItemIcons.rock;
        break;
      case 'bush':
        icon = ItemIcons.bush;
        break;
      case 'flower':
        icon = ItemIcons.flower;
        break;
      default:
        icon = ItemIcons.mushroom;
    }

    return (
      <div className={`game-item ${this.state.displayCorrectness}`} style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item" onClick={ this.onItemClicked } ></img>
      </div>
    );
  }
}

export default GameItem;

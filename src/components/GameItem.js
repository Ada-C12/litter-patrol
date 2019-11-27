import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: '', 
      // type: props.type
    }
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
  }

  onItemClicked = () => {
    if ((this.state.selected === false || this.state.selected === '') && this.props.icon === "litter") {
      this.setState({
        selected: true, 
      });
      this.props.parentCB();
    } else if (this.props.icon !== "litter") {
      this.setState({
        selected: false
      });
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
      <div className={`game-item ${(this.state.selected === '') ? '': (this.state.selected == true) ? 'spotted-litter'  : 'spotted-nature'}`} style={itemStyle} onClick={this.onItemClicked}>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;

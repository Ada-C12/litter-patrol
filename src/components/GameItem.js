import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spottedItem: '',
    }
  }
  
  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }
  
  onItemClicked = () => {
    if (this.props.itemType === 'litter') {
      // this.setState( { classes: this.state.classes.concat(" spotted-litter") } );
      this.setState({spottedItem: "spotted-litter"})
    } else {
      // this.setState( { classes: this.state.classes.concat(" spotted-nature") } );
      this.setState({spottedItem: "spotted-nature"})
    }

    this.props.onItemClickedCallback(this.props.itemType);
  }
    
  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    const itemIcon = this.props.itemType;
    const icon = ItemIcons[itemIcon];

    return (
      <div className={`game-item ${this.state.spottedItem}`} style={itemStyle} onClick={ this.onItemClicked }>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;

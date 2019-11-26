import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
      constructor(props){
        super(props)
        this.state = {
          trash: null
        };
      }

  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  onItemClicked = () => {
    if (this.props.type === 'litter') {
      this.setState({trash: true})
    } 
    else {
      this.setState({trash: false})
    }
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type];
    

    let iconCSS = "game-item";
    if (this.state.trash === true) {
      iconCSS += ' spotted-litter';
    }
    else if (this.state.trash === false) {
      iconCSS += ' spotted-nature';
    }

    return (
      <div onClick={ this.onItemClicked } 
      
       className={iconCSS} style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>

    );
  }
}

export default GameItem;

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
      spottedState: "game-item",
      clicked: false
        }
  }
  onItemClicked = () => {
    // Fill this in for Wave 2!
  
    if(this.props.type === "litter") {
      this.setState({ 
        spottedState: "game-item spotted-litter"


        });
        if(!this.state.clicked) {
        this.props.onItemClickedCallback()
        this.setState({ 
          clicked: true

          });

        }
       
    }else{
      this.setState({ 
        spottedState: "game-item spotted-nature"
        });
    }
  
  }
    
  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type];


    return (
      

      <div className={this.state.spottedState} style={itemStyle}>
        <img  src={icon} alt="Item" className="icon-item" onClick={this.onItemClicked}></img>
      </div>
    );
  }
}

export default GameItem;

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
      type: this.props.type,
      clicked: false,
      classNameAfterClick: null,
    }
  }

  onItemClicked = (event) => {
    console.log(`clicked on ${event.target.alt}`);
    
    if (event.target.alt === "litter" && !this.state.clicked) {

      this.setState({classNameAfterClick: 'game-item spotted-litter'});
      
      // add a point in parent
      this.props.parentCB();

    } else if (!this.state.clicked) {
      this.setState({classNameAfterClick: 'game-item spotted-nature'});
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
    let classNameNow = null;

    if (this.state.clicked) {
      classNameNow = this.state.classNameAfterClick;
      // console.log(classNameNow);
      
    } else {
      classNameNow = "game-item";
    }

    return (
      <div className={classNameNow}  style={itemStyle}>
        <img src={icon} alt={this.props.type} onClick={this.onItemClicked} className="icon-item"></img>
      </div>
    );
  }
}


export default GameItem;

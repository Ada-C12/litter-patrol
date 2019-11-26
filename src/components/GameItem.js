import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor(props){
    super(props);
    this.state = ({
     spotted: false,
    classNames : 'game-item',
    });
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired
  }

  onClicked = () => {
    // Fill this in for Wave 2!
    if (this.state.spotted) {
      const style = this.props.type === 'litter' ? 'spotted-litter' : 'spotted-nature';
      this.setState({
        classNames: 'game-item ' + style,

      })
    }
    else {
      this.setState({ spotted :true });
      this.props.callBack(this.props.type);
     }   
    }
    
  render() {

    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
      
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type]

    return (
      <div className={this.state.classNames} style={itemStyle} onClick={this.onClicked}>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;

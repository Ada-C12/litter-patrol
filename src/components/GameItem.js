import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      spotted: false
    };
  }

  onClickSpot = () => {
    if(!this.state.spotted) {
      this.setState({ spotted: true });
      // pass values to app
      this.props.onItemClickedCallBack(this.props.type);
    }
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    const classNames = ['game-item'];

    // add classes upon click.
    if(this.state.spotted) {
      const style = this.props.type === 'litter' ? 'spotted-litter' : 'spotted-nature';
      classNames.push(style);
    }

    const icon = ItemIcons[this.props.type];

    return (
      <div className={classNames.join(' ')} style={itemStyle} onClick={this.onClickSpot}>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;

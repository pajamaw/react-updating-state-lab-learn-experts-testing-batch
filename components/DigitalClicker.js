import React from 'react';

class DigitalClicker extends React.Component {
  constructor(){
    super();

    this.state = {
      timesClicked: 0,
    }
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick(){
    this.setState({
      timesClicked: this.state.timesClicked +1,
    })
  }

  render(){
    return (
      <div>
        <p>{this.state.timesClicked}</p>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}
module.exports = DigitalClicker;

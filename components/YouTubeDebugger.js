import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor(){
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
    this.handleClickBit = this.handleClickBit.bind(this);
    this.handleClickRes = this.handleClickRes.bind(this);
  }
  handleClickBit(){
    this.setState({
      settings: Object.assign({}, this.state.settings, {
          bitrate: 12
      })
    })
  }
  handleClickRes(){
    this.setState({
      settings: Object.assign({}, this.state.settings,{
        video: Object.assign({}, this.state.video, {
          resolution: '720p'
        })
      })
    })
  }
  render(){
    return(
      <div>

        <button className='bitrate' onClick={this.handleClickBit}>Change Bit</button>
        <button className='resolution' onClick={this.handleClickRes}>Change Resolution</button>
        <p>Bit - {this.state.settings.bitrate}</p>
        <p>pixels - {this.state.settings.video.resolution}</p>
      </div>
    )
  }
}

module.exports = YouTubeDebugger;

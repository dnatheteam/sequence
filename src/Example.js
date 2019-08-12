import React, { Component } from 'react';
import { Sequency } from './Sequency';
import exampleSrc from './sprite-1.png';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 1000,
      height: 120,
      width: 120,
      frames: 30,
      delay: 0
    };
  }

  handleInputChange(e) {
    e.preventDefault();
    let value = e.target.value;
    this.setState({ [e.target.className]: value });
  }

  render() {
    let imagePreview = (
      <Sequency
        src={exampleSrc}
        duration={this.state.duration}
        delay={this.state.delay}
        frames={this.state.frames}
        width={this.state.width}
        height={this.state.height}
        mode="backwards"
        direction="alternate-reverse"
      />
    );

    return (
      <div>
        {/* <h2>Example</h2> */}
        <div className="img-editor">
          <div className="imgPreview">{imagePreview}</div>

          <label>Duration</label>
          <input
            type="text"
            className="duration"
            placeholder="duration"
            value={this.state.duration}
            onChange={e => this.handleInputChange(e)}
          />

          <label>Width</label>
          <input
            type="text"
            className="width"
            placeholder="width"
            value={this.state.width}
            onChange={e => this.handleInputChange(e)}
          />

          <label>Height</label>
          <input
            type="text"
            className="height"
            placeholder="height"
            value={this.state.height}
            onChange={e => this.handleInputChange(e)}
          />

          <label>Delay</label>
          <input
            type="text"
            className="delay"
            placeholder="delay"
            value={this.state.delay}
            onChange={e => this.handleInputChange(e)}
          />

          <label>Frames</label>
          <input
            type="text"
            className="frames"
            placeholder="frames"
            value={this.state.frames}
            onChange={e => this.handleInputChange(e)}
          />
        </div>
      </div>
    );
  }
}

export default Example;

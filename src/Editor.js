import React, { Component } from "react";
import { Sequency } from "./Sequency";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 0,
      height: 0,
      width: 0,
      frames: 0,
      delay: 0
    };
  }

  handleInputChange(e) {
    e.preventDefault();
    let value = e.target.value;
    this.setState({ [e.target.className]: value });
  }

  render() {
    let imageUrl = this.props.imageUrl;
    let imagePreview = null;
    if (imageUrl) {
      imagePreview = (
        <Sequency
          src={imageUrl}
          duration={this.state.duration}
          delay={this.state.delay}
          frames={this.state.frames}
          width={this.state.width}
          height={this.state.height}
          mode="backwards"
          direction="alternate-reverse"
        />
      );
    } else {
      imagePreview = (
        <p className="preview-text">Please select an Image for Preview</p>
      );
    }

    return (
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
    );
  }
}

export default Editor;

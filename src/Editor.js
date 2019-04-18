import React, { Component } from "react";
import { Sequency } from "./Sequency";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 0,
      height: 120,
      width: 120,
      frames: 30,
      delay: 1000
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
        <div className="previewText">Please select an Image for Preview</div>
      );
    }

    return (
      <div className="">
        <div className="imgPreview">{imagePreview}</div>
        <div>
          <input
            type="text"
            className="duration"
            placeholder="duration"
            onChange={e => this.handleInputChange(e)}
          />
        </div>
        <div>
          <input
            type="text"
            className="width"
            placeholder="width"
            onChange={e => this.handleInputChange(e)}
          />
        </div>
        <div>
          <input
            type="text"
            className="height"
            placeholder="height"
            onChange={e => this.handleInputChange(e)}
          />
        </div>
        <div>
          <input
            type="text"
            className="delay"
            placeholder="delay"
            onChange={e => this.handleInputChange(e)}
          />
        </div>
        <div>
          <input
            type="text"
            className="frames"
            placeholder="frames"
            onChange={e => this.handleInputChange(e)}
          />
        </div>
      </div>
    );
  }
}

export default Editor;

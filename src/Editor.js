import React, { Component } from "react";
import { Sequency } from "./Sequency";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 0
    };
  }

  handleInputChange(e) {
    e.preventDefault();
    let text = e.target.value;
    this.setState({ duration: +text });
  }

  render() {
    let imageUrl = this.props.imageUrl;
    let imagePreview = null;
    if (imageUrl) {
      imagePreview = (
        <Sequency
          src={imageUrl}
          duration={this.state.duration}
          delay={1000}
          frames={30}
          width="120px"
          height="120px"
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
        <input type="text" onChange={e => this.handleInputChange(e)} />
        <div className="imgPreview">{imagePreview}</div>
      </div>
    );
  }
}

export default Editor;

import React, { Component } from "react";
import Editor from "./Editor";

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = { file: "", imageUrl: "" };
  }

  handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log("handle uploading-", this.state.file);
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }
  render() {
    let { imagePreviewUrl } = this.state;

    return (
      <div className="previewComponent">
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            className="fileInput"
            type="file"
            onChange={e => this.handleImageChange(e)}
          />
          <button
            className="submitButton"
            type="submit"
            onClick={e => this.handleSubmit(e)}
          >
            Upload Image
          </button>
        </form>
        <Editor imageUrl={imagePreviewUrl} />
      </div>
    );
  }
}

export default ImageUpload;

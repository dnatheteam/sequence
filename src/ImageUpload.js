import React, { Component } from "react";

class ImageUpload extends Component {
  render() {
    let { handleSubmit, handleImageChange } = this.props;

    return (
      <>
        <form onSubmit={e => handleSubmit(e)}>
          <input
            className="fileInput"
            type="file"
            onChange={e => handleImageChange(e)}
          />
          <button
            className="submitButton"
            type="submit"
            onClick={e => handleSubmit(e)}
          >
            Upload Image
          </button>
        </form>
      </>
    );
  }
}

export default ImageUpload;

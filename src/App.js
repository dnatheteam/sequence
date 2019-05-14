import React, { Component } from "react";
import ImageUpload from "./ImageUpload";
import Editor from "./Editor";
import Example from "./Example";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { file: "", imageUrl: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
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
    console.log(this.state.imagePreviewUrl);

    return (
      <div>
        <ImageUpload
          handleChange={this.handleChange}
          handleImageChange={this.handleImageChange}
        />
        <Editor imageUrl={this.state.imagePreviewUrl} />
        <Example />
      </div>
    );
  }
}

export default App;

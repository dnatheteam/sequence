import React, { Component } from "react";
import styled from "styled-components";
import test from "./sprite-2.png";

import "./App.css";

const Sequence = styled.div`
  width: ${props => props.width + "px"};
  height: ${props => props.height + "px"};
  overflow: hidden;
`;

//     transform: translate(-120px,0);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frameSize: 306,
      frameCount: 148,
      animationDuration: 3,
      transform: "translate(0px,0)"
    };

    function changeFrames(source) {
      var that = this;
      let count = 0;
      let interval = setInterval(function() {
        count -= that.state.frameSize;
        console.log(
          (that.state.animationDuration / that.state.frameCount) * 1000
        );
        that.setState({
          transform: "translate(" + count + "px,0)"
        });
      }, (this.state.animationDuration / this.state.frameCount) * 1000);

      setTimeout(function() {
        clearInterval(interval);
      }, that.state.animationDuration * 1000);
    }

    changeFrames.bind(this)();
  }

  render() {
    // animation: ${props => sequenceMove + props.fps + " linear infinite"};

    const imgStyles = {
      transform: this.state.transform
    };

    return (
      <div className="App">
        <Sequence
          width={this.state.frameSize}
          height={this.state.frameSize}
          cycle
          delay
        >
          {console.log(imgStyles)}
          <img src={test} alt="sequence" style={imgStyles} />
        </Sequence>
      </div>
    );
  }
}

export default App;

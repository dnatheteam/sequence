import React, { Component } from "react";
import styled from "styled-components";
import test from "./sprite-1.png";

const Sequence = styled.div`
  width: ${props => props.width + "px"};
  height: ${props => props.height + "px"};
  overflow: hidden;
`;

class Sequency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationDuration: 1000,
      delay: 1000,
      frameCount: 29,
      frameSize: 120,
      transform: "translate(0px,0)"
    };

    this.changeFrames = this.changeFrames.bind(this);
  }

  changeFrames() {
    let sequencePosition = 0,
      count = 0;

    const repeatCount = Math.round(
      this.state.animationDuration / this.state.frameCount
    );

    const that = this;
    
    setTimeout(() => {
      let interval = setTimeout(function go() {
        sequencePosition -= that.state.frameSize;
        count++;

        that.setState({
          transform: "translate(" + sequencePosition + "px,0)"
        });
        interval = setTimeout(go, repeatCount);

        if (count === that.state.frameCount) {
          clearInterval(interval);
        }
      }, repeatCount);
    }, this.state.delay);
  }

  componentDidMount() {
    this.changeFrames();
  }

  render() {
    const imgStyles = {
      transform: this.state.transform
    };

    return (
      <>
        <Sequence width={this.state.frameSize} height={this.state.frameSize}>
          <img src={test} alt="sequence" style={imgStyles} />
        </Sequence>
      </>
    );
  }
}

export default Sequency;

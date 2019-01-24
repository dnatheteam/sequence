import React, { Component } from "react";
import styled from "styled-components";

const Sequence = styled.div`
  width: ${props => props.width + "px"};
  height: ${props => props.height + "px"};
  overflow: hidden;
`;

class Sequency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationDuration: this.props.animationDuration,
      delay: this.props.delay,
      frameCount: this.props.frameCount,
      frameSize: this.props.frameSize,
      transform: "translate(0px,0)"
    };

    this.changeFrames = this.changeFrames.bind(this);
  }

  changeFrames() {
    const repeatCount = Math.round(
      this.state.animationDuration / this.state.frameCount
    );

    let sequencePosition = 0,
      count = 0,
      interval;

    const startChangeFrames = () => {
      sequencePosition -= this.state.frameSize;
      count++;
      this.setState({
        transform: "translate(" + sequencePosition + "px,0)"
      });
      interval = setTimeout(startChangeFrames, repeatCount);
      if (count === this.state.frameCount) {
        clearInterval(interval);
      }
    };

    setTimeout(() => {
      interval = setTimeout(startChangeFrames, repeatCount);
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
          <img src={this.props.imageSrc} alt="sequence" style={imgStyles} />
        </Sequence>
      </>
    );
  }
}

export default Sequency;

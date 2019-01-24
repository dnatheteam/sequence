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
      cycle: this.props.cycle,
      delay: this.props.delay,
      frameCount: this.props.frameCount,
      frameWidth: this.props.frameWidth,
      frameHeight: this.props.frameHeight,
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
      endAnimationTimeout;

    const endAnimation = () => {
      if (this.state.cycle) {
        sequencePosition = 0;
        count = 0;
      } else {
        clearInterval(endAnimationTimeout);
      }
    };

    const startChangeFrames = () => {
      sequencePosition -= this.state.frameWidth;
      count++;
      this.setState({
        transform: "translate(" + sequencePosition + "px,0)"
      });
      endAnimationTimeout = setTimeout(startChangeFrames, repeatCount);
      if (count === this.state.frameCount) {
        endAnimation();
      }
    };

    setTimeout(() => {
      endAnimationTimeout = setTimeout(startChangeFrames, repeatCount);
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
        <Sequence width={this.state.frameWidth} height={this.state.frameHeight}>
          <img src={this.props.imageSrc} alt="sequence" style={imgStyles} />
        </Sequence>
      </>
    );
  }
}

export default Sequency;

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Sequency } from "./Sequency";

import firstSprite from "./sprite-1.png";
import secondSprite from "./sprite-2.png";
import thirdSprite from "./sprite-3.png";

ReactDOM.render(
  <div>
    <Sequency
      src={firstSprite}
      duration={1000}
      delay={1000}
      frames={30}
      width="120px"
      height="120px"
      mode="backwards"
      direction="alternate-reverse"
    />
    <Sequency
      src={secondSprite}
      duration={2000}
      delay={3000}
      frames={148}
      width="306px"
      height="306px"
      iterations={1}
    />
    <Sequency
      src={thirdSprite}
      duration={5000}
      delay={0}
      frames={123}
      width="208px"
      height="200px"
    />
  </div>,
  document.getElementById("root") // eslint-disable-line
);

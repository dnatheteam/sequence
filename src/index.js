import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Sequency from "./Sequency";
import * as serviceWorker from "./serviceWorker";
import example from "./sprite-1.png";
import anotherExample from "./sprite-2.png";

ReactDOM.render(
  <>
    <Sequency
      imageSrc={example}
      animationDuration={1000}
      delay={1000}
      frameCount={29}
      frameSize={120}
      cycle
    />

    <Sequency
      imageSrc={anotherExample}
      animationDuration={2000}
      delay={3000}
      frameCount={147}
      frameSize={306}
    />
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

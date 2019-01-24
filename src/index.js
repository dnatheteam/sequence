import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Sequency from "./Sequency";
import * as serviceWorker from "./serviceWorker";
import example_1 from "./sprite-1.png";
import example_2 from "./sprite-2.png";
import example_3 from "./sprite-3.png";

ReactDOM.render(
  <>
    <Sequency
      imageSrc={example_1}
      animationDuration={1000}
      delay={1000}
      frameCount={29}
      frameWidth={120}
      frameHeight={120}
    />
    <Sequency
      imageSrc={example_2}
      animationDuration={2000}
      delay={3000}
      frameCount={147}
      frameWidth={306}
      frameHeight={306}
    />
    <Sequency
      imageSrc={example_3}
      animationDuration={5000}
      delay={0}
      frameCount={122}
      frameWidth={208}
      frameHeight={200}
      cycle
    />
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

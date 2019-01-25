import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Sequency } from "./Sequency";

import example_1 from "./sprite-1.png";
import example_2 from "./sprite-2.png";
import example_3 from "./sprite-3.png";

ReactDOM.render(
  <div>
    <Sequency
      src = { example_1 }
      duration = { 1000 }
      delay = { 1000 }
      frames = { 29 }
      width = '120px'
      height = '120px'
      mode = 'backwards'
      direction = 'alternate-reverse'
    />
    <Sequency
      src = { example_2 }
      duration = { 2000 }
      delay = { 3000 }
      frames = { 147 }
      width = '306px'
      height = '306px'
      iterations = { 1 }
    />
    />
    <Sequency
      src = { example_3 }
      duration = { 5000 }
      delay = { 0 }
      frames = { 122 }
      width = '208px'
      height = '200px'
    />
  </div>,
  document.getElementById("root")
);

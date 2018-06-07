import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { Container } from "@cerebral/react";
import controller from "./controller";

ReactDOM.render(
  <Container controller={controller}>
    <App />
  </Container>,
  document.getElementById("root")
);
registerServiceWorker();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SpeechProvider } from "@speechly/react-client";
import * as serviceWorker from "./serviceWorker";
import { LogKit } from "@speechly/logkit";

ReactDOM.render(
  <React.StrictMode>
    <SpeechProvider appId="a194bb09-dca0-451a-8f0f-d29b49a4c446">
      <LogKit appName="voice-search" appVersion={100} >
        <App />
      </LogKit>
    </SpeechProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import App from "App";
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

import consumer from "services/createConsumer";

window.consumer = consumer;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

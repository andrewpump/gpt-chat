import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./components/button";
import Text from "./components/text";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <div>
      <Button label="Button Label"/>
      <Text label="Text Label"/>
    </div>
  </React.StrictMode>
);

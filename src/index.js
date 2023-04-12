import React from "react";
import ReactDOM from "react-dom/client";
import AiAssistant from "./containers/AiAssistant";
import Text from "./components/text";
import DemoImage from "./assets/images/demoImage.png"
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const getListItem = [
  {
    id: '1',
    title: "Purchase More:",
    subtitle: "PRINGLES SOUR CREAM & ONION PO",
  },
  {
    id: '2',
    title: "Purchase More:",
    subtitle: "PRINGLES SOUR CREAM & ONION PO",
  },
];

root.render(
  <React.StrictMode>
    <div className="main-background">
      <AiAssistant label="Button Label" itemList={getListItem} color="#7b6cf3" image={DemoImage} />
      <h1>
        BOPS React web app in this background area!
      </h1>
    </div>
  </React.StrictMode>
);

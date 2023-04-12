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
  {
    id: '3',
    title: "Purchase More:",
    subtitle: "PRINGLES SOUR CREAM & ONION PO",
  },
  {
    id: '4',
    title: "Purchase More:",
    subtitle: "PRINGLES SOUR CREAM & ONION PO",
  },
  {
    id: '5',
    title: "Purchase More:",
    subtitle: "PRINGLES SOUR CREAM & ONION PO",
  },
  {
    id: '6',
    title: "Purchase More:",
    subtitle: "PRINGLES SOUR CREAM & ONION PO",
  },
  // {
  //   id: '7',
  //   title: "Purchase More:",
  //   subtitle: "PRINGLES SOUR CREAM & ONION PO",
  // },
  // {
  //   id: '8',
  //   title: "Purchase More:",
  //   subtitle: "PRINGLES SOUR CREAM & ONION PO",
  // },
];

root.render(
  <React.StrictMode>
    <div>
      <AiAssistant label="Button Label" itemList={getListItem} 
      // color="#FF0000"
      color="#7b6cf3" 
      image={DemoImage}
      />
      <Text label="Text Label" />
    </div>
  </React.StrictMode>
);

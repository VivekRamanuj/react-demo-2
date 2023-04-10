import React from "react";
import Countcomponent from "./Component/Countcomponent";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <h2>Increment Decrement with Reset Button Demo</h2>
      <Countcomponent />
    </div>
  );
}
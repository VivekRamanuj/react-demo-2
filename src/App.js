import React from "react";
import Countcomponent from "./Component/Countcomponent";
import Header from  './Component/Header';
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Header name="Increment Decrement with Reset Button Demo" demo="Second"/>
      <Countcomponent />
    </div>
  );
}
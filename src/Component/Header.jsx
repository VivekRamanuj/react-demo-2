import React from "react";

function Header(props) {
    const name = props.name;
    const demo = props.demo;
      return (
        <div>
          <h1>{demo} Demo</h1>
          <h2>{name}</h2>
        </div>
      );
  }
  
export default Header
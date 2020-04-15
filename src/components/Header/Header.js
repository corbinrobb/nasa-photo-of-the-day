import React from "react";
import "./Header.css";
import Nasa from "./Nasa";
import Title from "./Title";

const Header = (props) => {

  return (
    <header>
      <Nasa />
      <Title title={props.title} copy={props.copy} date={props.date}/>
    </header>
  );
}

export default Header; 
import React from "react";
import "./Header.css";
import Nasa from "./Nasa";
import Title from "./Title";

const Header = (props) => {

  return (
    <header>
      <Nasa setDate={props.setDate} date={props.date} />
      <Title title={props.title} copy={props.copy} date={props.date}/>
    </header>
  );
}

export default Header; 
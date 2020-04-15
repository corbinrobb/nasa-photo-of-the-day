import React from "react";
import "./Header.css";

const Nasa = (props) => {

  const nextDay = () => {
    const today = new Date().getDate();
    const day = parseInt(props.date.match(/[0-9]+$/)[0]);
    if ( day === today) return;
    props.setDate(props.date.replace(/[0-9]+$/, '') + (day + 1))
  }

  const previousDay = () => {
    const day = parseInt(props.date.match(/[0-9]+$/)[0]);
    if((day - 1) === 0) return;
    props.setDate(props.date.replace(/[0-9]+$/, '') + (day - 1))
  }

  return (
    <div className="nasa">
      <button onClick={previousDay} >Previous</button>
      <h1>Nasa</h1>
      <button onClick={nextDay}>Next</button>
    </div>
  );
}

export default Nasa;
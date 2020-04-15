import React from "react";
import "./Photo.css";

const Photo = (props) => {
  return (
    <section className="display">
      <div className="info">
        <p>{props.intro}</p>
      </div>
      <div className="photo">
        <img src={props.url}></img>
      </div>
    </section>
  );
}

export default Photo;
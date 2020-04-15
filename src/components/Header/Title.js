import React from "react";
import "./Header.css";

const Title = (props) => {
  return (
    <section className="info">
      <div className="title">
        <h2>{props.title}</h2>
      </div>
      <div>
        <h3>{props.copy}</h3>
        <p>{props.date}</p>
      </div>
    </section>
  );
}

export default Title;
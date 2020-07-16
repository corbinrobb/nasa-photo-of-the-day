import React from "react";
import "./Header.css";
import Nasa from "./Nasa";
import Title from "./Title";
import { Container, Row, Col } from 'reactstrap';

const Header = (props) => {

  return (
    <Container className="header">
      <Nasa setDate={props.setDate} date={props.date} />
      <Title title={props.title} copy={props.copy} date={props.date} />
    </Container>
  );
}

export default Header; 
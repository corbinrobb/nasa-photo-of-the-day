import React from "react";
import "./Header.css";
import { Container, Row, Col, Button } from 'reactstrap';

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
    <Row>
      <Col className="nasa-container">
        <Button color="primary" onClick={previousDay} >Previous</Button>
      </Col>
      <Col className="nasa-container">
        <h1 className="display-3">Nasa</h1>
      </Col>
      <Col className="nasa-container">
        <Button color="primary" onClick={nextDay}>Next</Button>
      </Col>
    </Row>
  );
}

export default Nasa;
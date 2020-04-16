import React from "react";
import "./Header.css";
import { Row } from 'reactstrap';
import styled from 'styled-components';

const TitleInfo = styled.div`
  background-color: #e9ecef;
  border-radius: 10px;
  padding: 2%;
`

const Title = (props) => {
  return (
    <Row className="info">
      <TitleInfo className="title">
        <h2>{props.title}</h2>
      </TitleInfo>
      <div>
        <h3>{props.copy}</h3>
        <p>{props.date}</p>
      </div>
    </Row>
  );
}

export default Title;
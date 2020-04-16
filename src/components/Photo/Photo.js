import React from "react";
import "./Photo.css";
import { Jumbotron } from 'reactstrap';
import styled from 'styled-components';

const Intro = styled.div`
  margin-bottom: 2rem;
`

const Image = styled.div`
display: flex;
justify-content: center;
align-items: center;
  img {
    box-shadow: 5px 5px 5px lightslategray;
  }
`

const Photo = (props) => {
  return (
    <Jumbotron className="display">
      <Intro className="lead">
        <p>{props.intro}</p>
      </Intro>
      <Image>
        <img src={props.url} />
      </Image>
    </Jumbotron>
  );
}

export default Photo;
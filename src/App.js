import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Header from "./components/Header/Header";
import Photo from "./components/Photo/Photo";
import { Container } from 'reactstrap';

function App() {
  const [ appData, setAppData ] = useState();
  const [ date, setDate ] = useState(null);

  useEffect(() => {
    if (!date) {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(res => {
          console.log(res.data)
          setAppData(res.data);
          console.log('Set App Data');
        })
        .catch(err => console.log(err));
    } else {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
        .then(res => {
          console.log(res.data)
          setAppData(res.data);
          console.log('Set App Data');
        })
        .catch(err => console.log(err));
    }
  }, [date]);

  if (!appData) return <h3>Loading...</h3>;
  return (
    <Container>
      <Header title={appData.title} copy={appData.copyright} date={appData.date} setDate={setDate} />
      <Photo url={appData.url} intro={appData.explanation} />
    </Container>
  );
}

export default App;

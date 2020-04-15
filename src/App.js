import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Header from "./components/Header/Header";
import Photo from "./components/Photo/Photo";

function App() {
  const [appData, setAppData] = useState();

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        setAppData(res.data);
        console.log(res.data);
        console.log('Set App Data');
      })
      .catch(err => console.log(err));
  }, []);

  if (!appData) return <h3>Loading...</h3>;
  return (
    <div>
      <Header title={appData.title} copy={appData.copyright} date={appData.date} />
      <Photo url={appData.url} intro={appData.explanation} />
    </div>
  );
}

export default App;

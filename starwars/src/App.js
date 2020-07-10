import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from "react";


function App() {
  const [planet, setPlanet] = useState({})
  let [id, setId] = useState(1)

  const BASE_URL = 'https://swapi.dev/api/planets/'
  
  const requestPlanetData = async () => {
    try {
       let res = await axios.get(`${BASE_URL}/planet/${id}`);
      let { data } = res;
      return setPlanet(data)
    } catch(err) {
       console.error(err)
    }
   };

  const next = () => {
    setId(id++)
  }

  const back = () => {
    if (id > 1 ) return setId(id--)
  }

  useEffect(() => {
    requestPlanetData()
    console.log(id)
  }, [id])

  return (
    // double click the buttons to activate
    // see if you can render more object properties
    <div className="App">
      <header className="App-header">
        <p>{planet.name}</p>
        <p> {planet.climate}</p>
        <p>{character.terrain}</p>
        <button onClick={back}>back</button>
        <button onClick={next}>next</button>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from "react";

function App() {
  const [planets, setPlanets] = useState({})
  let [id, setId] = useState(1)

  const BASE_URL = 'https://swapi.dev/planets'
  // then and catch version
  // change the url to see what else you can look at, like /planets or /starships
  const requestPlanetsData = () => {
    axios
      .get(`${BASE_URL}/people/${id}`)
      .then(res => {
        // try console logging res.data (Did this)
        console.log(res.data)
        return setPlanets(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }

//Uncommented this and formatted it correctly.
  const requestPlanetData = async () => {
    try {
      let res = await axios.get(`${BASE_URL}/planet/${id}`);
      let { data } = res;
      return setPlanet(data)
    } catch (err) {
      console.error(err)
    }
  };

  const next = () => {
    setId(id++)
  }

  const back = () => {
    if (id > 1) return setId(id--)
  }

  useEffect(() => {
    requestPlanetsData()
    console.log(id)
  }, [id])

  return (
    // double click the buttons to activate (I changed the code for the buttons 
    // to incorporate on double click).
    // see if you can render more object properties (I included more of the object 
    //properties mentioned for the planets.)
    <div className="App">
      <header className="App-header">
        <p>{planets.name}</p>
        <p> {planets.rotation_period}</p>
        <p>{planets.orbital_period}</p>
        <p>{planets.diameter}</p>
        <p>{planets.climate}</p>
        <p>{planets.gravity}</p>
        <button ondblclick={back}>back</button>
        <button ondblclick={next}>next</button>
      </header>
    </div>
  );
}

export default App;

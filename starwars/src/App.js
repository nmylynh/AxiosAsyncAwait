import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from "react";


function App() {
  const [planets, setPlanets] = useState({})
  let [id, setId] = useState(1)

  const BASE_URL = 'https://swapi.dev/api'
  // then and catch version
  // change the url to see what else you can look at, like /planets or /starships
  const requestPlanetsData = () => {
    axios
      .get(`${BASE_URL}/people/${id}`)
      .then(res => {
        // try console logging res.data
        console.log(res)
        return setPlanets(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }
  // async version, uncomment to try out
  // const requestCharacterData = async () => {
  //   try {
  //     let res = await axios.get(`${BASE_URL}/people/${id}`);
  //     let { data } = res;
  //     return setCharacter(data)
  //   } catch(err) {
  //     console.error(err)
  //   }
  // };

  const next = () => {
    setId(id++)
  }

  const back = () => {
    if (id > 1 ) return setId(id--)
  }

  useEffect(() => {
    requestPlanetsData()
    console.log(id)
  }, [id])

  return (
    // double click the buttons to activate
    // see if you can render more object properties
    <div className="App">
      <header className="App-header">
        <p>{planets.name}</p>
        <p> {planets.birth_year}</p>
        <p>{planets.gender}</p>
        <button onClick={back}>back</button>
        <button onClick={next}>next</button>
      </header>
    </div>
  );
}

export default App;

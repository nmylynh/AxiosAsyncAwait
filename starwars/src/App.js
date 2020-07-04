import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from "react";


function App() {
  const [character, setCharacter] = useState({})
  let [id, setId] = useState(1)

  const BASE_URL = 'https://swapi.dev/api'
  // then and catch version
  // change the url to see what else you can look at, like /planets or /starships
  const requestCharacterData = () => {
    axios
      .get(`${BASE_URL}/people/${id}`)
      .then(res => {
        // try console logging res.data
        console.log(res)
        return setCharacter(res.data)
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
    requestCharacterData()
    console.log(id)
  }, [id])

  return (
    // double click the buttons to activate
    // see if you can render more object properties
    <div className="App">
      <header className="App-header">
        <p>{character.name}</p>
        <p> {character.birth_year}</p>
        <p>{character.gender}</p>
        <button onClick={back}>back</button>
        <button onClick={next}>next</button>
      </header>
    </div>
  );
}

export default App;

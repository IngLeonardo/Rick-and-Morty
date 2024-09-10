import { useState } from 'react';
import imgHome from './assets/img/rick-morty_home.png'
import Character from './components/Character';


export function App() {

  const [character, setCharacter] = useState(null );

  const requestApi = async() =>{
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    setCharacter(characterApi.results);
  }


  return (
    <>
      <section className="flex flex-col items-center"> 
        <h1 className="font-title1 text-gray-300 text-5xl my-5
                        sm:text-6xl 
                        2xl:text-7xl">Rick and Morty</h1>
        {character ?(
          <Character characters={ character } setCharacter={ setCharacter } />
        ):(
          <>
          <img className="w-6/12" src={imgHome} alt="Rick and Morty portada" />
          <button className="p-3 bg-lime-700 text-white rounded-md my-5 w-9/12 font-semibold
                          sm:w-3/12" onClick={requestApi}>Buscar personajes</button>
          </>
        )}
        
      </section>
    </>
  )
}

export default App



export default function Character({ characters, setCharacter }) {

    const resetCharacter = ()=>{
        setCharacter(null);
    }

    return (
        <>
            <h1 id="title" className="text-white font-extrabold text-5xl my-8">Personajes</h1>
            <button  className="text-white m-4 p-4 font-semibold bg-lime-700 rounded-full transition ease-out duration-1000  hover:bg-cyan-800" onClick={ resetCharacter }>Volver al inicio</button>
            
            {/* Diseño de la card */}
            <div className="flex flex-wrap gap-3 justify-center m-2 p-2 text-white w-11/12 ">
                {characters.map((character, index) => (

                    <div key={index} className="flex flex-row-reverse rounded-md w-80 bg-cyan-800">
                        <img className=" w-6/12 rounded-lg" src={ character.image }></img>
                        <div className="flex flex-col justify-center  rounded-lg w-40 mx-3 text-2xl font-black">
                            <p>{character.name}</p>
                            <div className="flex flex-row items-center gap-2">
                                {character.status === "Alive"?
                                (
                                    <>
                                        <span className="rounded-lg w-2.5 h-2.5 bg-lime-500"></span>
                                        <span className="text-sm text-left">{ character.status }</span>
                                    </>
                                ):(
                                    <>
                                        <span className="rounded-lg w-2.5 h-2.5 bg-red-600"></span>
                                        <span className="text-sm text-left">{ character.status }</span>
                                    </>
                                )}
                            </div>
                            <article className="flex flex-col justify-center mt-8 mb-4">
                            <div className="flex flex-row gap-1">
                                <span className="text-xs font-normal text-gray-400">Episodio :</span>
                                <span className="text-xs font-semibold"> { character.episode.length }</span>
                            </div>
                            <div className="flex flex-row gap-1">
                                <span className="text-xs font-normal text-gray-400">Especie :</span>
                                <span className="text-xs font-semibold"> { character.species }</span>
                            </div>
                            </article>
                        </div>
                        
                    </div>
                    
                )
                )}
            </div>
            <div className="my-4 ">
                <a className="text-lime-700 shadow-l transition ease-linear duration-900 hover:text-cyan-700" href="#title">
                    <i className="fa-solid fa-circle-arrow-up animate-bounce text-5xl"></i>
                </a>
            </div>
        </>
    )

    
}


import React, { useState } from 'react';
import Images from '../../components/images/Images';
import axios from 'axios';
import './pokemons.css';
import initData from '../../pokemon';

const api = axios.create(
    {
        baseURL: "https://pokeapi.co/api/v2/pokemon"
    }
);

const Pokemons = () => {

    const [pokeData, setPokeData] = useState(initData);
    const [pokeName, setPokeName] = useState('');
    
    const getData = async (event) => {
        event.preventDefault();

        await api.get(`/${pokeName.toLowerCase()}`).then(res => {
            setPokeData(res.data);
            setPokeName('');
        })
    };

    const onChangeHandler = (event) => {
        setPokeName(event.target.value);
    }

    console.log("This is ", pokeData);

    return (
    <>
        <img className="pokemon" src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"></img>
        <br></br>
        <form onSubmit={getData}>
            <input type="text" className="pokeSearch" onChange={onChangeHandler} value={pokeName} placeholder="Search Pokemon"></input>
        </form>
        <br></br>
        <Images 
            pimg={pokeData.sprites?.other.dream_world.front_default} 
            pname={pokeData.name?.toUpperCase()}
            ptype={pokeData.types}
            pstats={pokeData.stats}
        />
        <hr></hr>
        <h2 className="pokeMoveHeading">Moves:</h2>
        <p className="pokeTotalMoves">Total Moves: {pokeData.moves?.length}</p>
        <div className="moveSets">
            {pokeData.moves?.map((item, id) =>
                <>
                    <p key={id} className="moveNames">{item.move.name}</p>
                </>
            )}
        </div>
    </>);
}

export default Pokemons;
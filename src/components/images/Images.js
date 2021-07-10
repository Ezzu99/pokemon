import React from 'react';
import './images.css';

const Images = props => {
    return (
        <>
            <div className="cardsContainer">
                <div className="imgContainer">
                    <img className="pokeImg" src={props.pimg? `${props.pimg}` : 'https://www.svgrepo.com/show/276264/pokeball-pokemon.svg'} alt="Pokemon"></img>
                    <div className="pokeStats">
                        <p className="pokeName">{props.pname}</p>
                        <div className="pokeTypeContainer">
                            <h2 className="pokeTypeHeading">Type:</h2>
                            {props.ptype?.map((item, id) => {
                                if (item.type.name === 'bug' || item.type.name === 'grass') {
                                    return (
                                        <>
                                            <p key={id} className="pokeType grass">{item.type.name}</p>
                                        </>)
                                }
                                else if (item.type.name === 'electric') {
                                    return (
                                        <>
                                            <p key={id} className="pokeType electric">{item.type.name}</p>
                                        </>)
                                }
                                else if (item.type.name === 'fire' || item.type.name === 'dragon') {
                                    return (
                                        <>
                                            <p key={id} className="pokeType fire">{item.type.name}</p>
                                        </>)
                                }
                                else if (item.type.name === 'water' || item.type.name === 'ice') {
                                    return (
                                        <>
                                            <p key={id} className="pokeType water">{item.type.name}</p>
                                        </>)
                                }
                                else if (item.type.name === 'rock' || item.type.name === 'ground' || item.type.name === 'fighting') {
                                    return (
                                        <>
                                            <p key={id} className="pokeType rock">{item.type.name}</p>
                                        </>)
                                }
                                else if (item.type.name === 'steel' || item.type.name === 'dark') {
                                    return (
                                        <>
                                            <p key={id} className="pokeType steel">{item.type.name}</p>
                                        </>)
                                }
                                else if (item.type.name === 'psychic' || item.type.name === 'fairy') {
                                    return (
                                        <>
                                            <p key={id} className="pokeType psychic">{item.type.name}</p>
                                        </>)
                                }
                                else if (item.type.name === 'poison' || item.type.name === 'ghost') {
                                    return (
                                        <>
                                            <p key={id} className="pokeType poison">{item.type.name}</p>
                                        </>)
                                }
                                else if (item.type.name === 'flying') {
                                    return (
                                        <>
                                            <p key={id} className="pokeType flying">{item.type.name}</p>
                                        </>)
                                }
                                else {
                                    return (
                                        <>
                                            <p key={id} className="pokeType">{item.type.name}</p>
                                        </>)
                                }
                            })}
                        </div>
                        <div className="pokeBaseStatsContainer">
                            <h2>Stats:</h2>
                            <table className=".pokeBaseStats">
                                <tbody>
                                    {props.pstats?.map((item, id) => {
                                        return (
                                            <>
                                                <tr key={id}>
                                                    <td><p className="pokeStatName">{item.stat.name}</p></td>
                                                    <td><meter value={item.base_stat} min='0' max='200' title={item.base_stat}></meter></td>
                                                </tr>
                                            </>
                                        )
                                    })}
                                </tbody>
                            </table>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Images;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => {
                setPokemon(response.data.results);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div>
            <ol style={{width: "100px", margin: "20px auto"}}>
                {
                    pokemon.map((pokemon, i) => {
                        return (
                            <li key={i}>{pokemon.name}</li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

export default Pokemon;
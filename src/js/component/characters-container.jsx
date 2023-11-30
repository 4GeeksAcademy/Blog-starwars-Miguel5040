import React, { useContext, useEffect, useState } from "react";
import Card from "./card.jsx";
import Context from "../store/appContext.js";
import "../../styles/cardContainer.css";

const Characters = () => {

    const [characters, setCharacters] = useState([]);

    //Funcion para solicitar data de personajes a la API
    async function solicitarData() {
        const response = await fetch("https://swapi.tech/api/people");
        const data = await response.json();
        const results = data.results;
        setCharacters(results);
    }


    useEffect(() => {
        solicitarData();
    }, [])

    return (
        <div className="contenedor-cards">
            {
                characters.map((value, index) => (
                    <Card nombre={value.name} key={index} id={value.uid} type={"character"} />
                ))
            }
        </div>
    )
}

export default Characters;
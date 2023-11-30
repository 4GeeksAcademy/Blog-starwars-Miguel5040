import React, { useState, useEffect } from "react";
import Card from "./card.jsx";
import "../../styles/cardContainer.css";

const Planets = () => {

    const [planets, setPlanets] = useState([]);

    //Funcion para solicitar data de personajes a la API
    async function solicitarData() {
        const response = await fetch("https://swapi.tech/api/planets");
        const data = await response.json();
        const results = data.results;
        setPlanets(results);
    }


    useEffect(() => {
        solicitarData();
    }, [])

    return (
        <div className="contenedor-cards">
            {
                planets.map((value, index) => (
                    <Card nombre={value.name} key={index} />
                ))
            }
        </div>
    )
}

export default Planets;
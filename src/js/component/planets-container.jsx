import React, { useState, useEffect, useContext } from "react";
import Card from "./card.jsx";
import { Context } from "../store/appContext.js";
import "../../styles/cardContainer.css";

const Planets = () => {

    const contexto = useContext(Context);

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
                    <Card nombre={value.name} key={index} id={value.uid} type={"planets"} />
                ))
            }
        </div>
    )
}

export default Planets;
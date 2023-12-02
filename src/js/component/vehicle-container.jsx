import React, { useState, useEffect, useContext } from "react";
import Card from "./card.jsx";
import { Context } from "../store/appContext.js";
import "../../styles/cardContainer.css";

const Vehicles = () => {

    const contexto = useContext(Context);

    const [vehicles, setVehicles] = useState([]);

    //Funcion para solicitar data de personajes a la API
    async function solicitarData() {
        const response = await fetch("https://swapi.tech/api/vehicles");
        const data = await response.json();
        const results = data.results;
        setVehicles(results);
    }


    useEffect(() => {
        solicitarData();
    }, [])

    return (
        <div className="contenedor-cards">
            {
                vehicles.map((value, index) => (
                    <Card nombre={value.name} key={index} id={value.uid} type={"vehicles"} />
                ))
            }
        </div>
    )
}

export default Vehicles;
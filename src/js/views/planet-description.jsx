import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../../styles/description.css";

const CharacterDescription = () => {

    const [propiedades, setPropiedades] = useState({});
    const [descripcion, setDescripcion] = useState("");

    const { id } = useParams();

    async function solicitarData() {
        const respose = await fetch("https://swapi.tech/api/planets/" + id);
        const data = await respose.json();
        const result = data.result.properties;
        const result2 = data.result.description;
        setPropiedades(result);
        setDescripcion(result2);
        console.log(data.result)
    }

    useEffect(() => {
        solicitarData();
    }, [])

    return (
        <div className="contenedor-principal-characters">
            <div className="container contenedor-descripcion">
                <img className="imagen-descripcion" src="https://buntingmagnetics.com/wp-content/uploads/2015/04/400x300.gif" />
                <div>
                    <h2>{propiedades.name}</h2>
                    <p>{descripcion}</p>
                </div>
            </div>
            <div className="container contenedor-propiedades">
                <div className="text">
                    <p>Name</p>
                    <p>{propiedades.name}</p>
                </div>
                <div className="text">
                    <p>Climate</p>
                    <p>{propiedades.climate}</p>
                </div>
                <div className="text">
                    <p>Population</p>
                    <p>{propiedades.population}</p>
                </div>
                <div className="text">
                    <p>Orbital Period</p>
                    <p>{propiedades.orbital_period}</p>
                </div>
                <div className="text">
                    <p>Rotation Period</p>
                    <p>{propiedades.rotation_period}</p>
                </div>
                <div className="text">
                    <p>Diameter</p>
                    <p>{propiedades.diameter}</p>
                </div>
            </div>
        </div>
    )
}

export default CharacterDescription;
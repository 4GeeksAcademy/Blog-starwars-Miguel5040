import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

const Card = (props) => {

	const [verificarFav, setVerificarFav] = useState(false);
	const contexto = useContext(Context);

	function asignarFavoritos() {
		contexto.actions.addFavoritos(props.nombre);
	}

	useEffect(() => {
		setVerificarFav(contexto.actions.verificarFavorito(props.nombre));
	}, [contexto.store.favoritos])

	// https://starwars-visualguide.com/assets/img/planets/2.jpg
	// https://starwars-visualguide.com/assets/img/vehicles/6.jpg
	// https://buntingmagnetics.com/wp-content/uploads/2015/04/400x300.gif

	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src={`https://starwars-visualguide.com/assets/img/${props.type}/${props.id}.jpg`}
				className="card-img-top"
				onError={(event) => {
					event.target.src = 'https://buntingmagnetics.com/wp-content/uploads/2015/04/400x300.gif'
				}}
			/>
			<div className="card-body">
				<h5 className="card-title">{props.nombre}</h5>
				<div className="d-flex justify-content-between">
					<Link to={`${props.type}/${props.id}`} className="btn btn-outline-primary">Learn more!</Link>
					<button type="button" className="btn btn-outline-warning" onClick={asignarFavoritos}>
						{verificarFav ? (
							<i className="bi bi-suit-heart-fill"></i>
						) : (
							<i className="bi bi-suit-heart"></i>
						)}
					</button>
				</div>
			</div>
		</div>
	)
}

export default Card;
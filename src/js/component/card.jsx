import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {

	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src="https://buntingmagnetics.com/wp-content/uploads/2015/04/400x300.gif" className="card-img-top" />
			<div className="card-body">
				<h5 className="card-title">{props.nombre}</h5>
				<div className="d-flex justify-content-between">
					<Link to={`${props.type}/${props.id}`} className="btn btn-outline-primary">Learn more!</Link>
					<button type="button" className="btn btn-outline-warning"><i className="bi bi-suit-heart"></i></button>
				</div>
			</div>
		</div>
	)
}

export default Card;
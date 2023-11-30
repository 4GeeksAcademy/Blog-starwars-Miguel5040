import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

const Navbar = () => {
	return (
		<nav>
			<header className="container">
				<Link to="/"><img className="imagen-logo" src="https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png" /></Link>
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu">
						<li><a className="dropdown-item" href="#">Action</a></li>
						<li><a className="dropdown-item" href="#">Another action</a></li>
						<li><a className="dropdown-item" href="#">Something else here</a></li>
					</ul>
				</div>
			</header>
		</nav>
	);
};

export default Navbar;
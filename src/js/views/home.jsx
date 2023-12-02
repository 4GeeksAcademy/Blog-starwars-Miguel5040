import React from "react";
import Characters from "../component/characters-container.jsx";
import Planets from "../component/planets-container.jsx";
import Vehicles from "../component/vehicle-container.jsx";
import "../../styles/home.css";

const Home = () => {

	return (
		<main className="container">

			<section>
				<h1>Characters</h1>
				<Characters />
			</section>

			<section>
				<h1>Planets</h1>
				<Planets />
			</section>

			<section>
				<h1>Vehicles</h1>
				<Vehicles />
			</section>

		</main >
	)
};

export default Home;

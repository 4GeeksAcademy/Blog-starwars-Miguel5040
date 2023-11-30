import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import Characters from "../component/characters-container.jsx";
import Planets from "../component/planets-container.jsx";
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

		</main >
	)
};

export default Home;

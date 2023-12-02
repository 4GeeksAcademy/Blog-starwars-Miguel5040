import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import Home from "./views/home.jsx";
import CharacterDescription from "./views/character-description.jsx";
import PlanetDescription from "./views/planet-description.jsx";
import VehicleDescription from "./views/vehicle-description.jsx";
import Navbar from "./component/navbar.jsx";
import injectContext from "./store/appContext";


const Layout = () => {

	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/characters/:id" element={<CharacterDescription />} />
						<Route path="/planets/:id" element={<PlanetDescription />} />
						<Route path="/vehicles/:id" element={<VehicleDescription />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
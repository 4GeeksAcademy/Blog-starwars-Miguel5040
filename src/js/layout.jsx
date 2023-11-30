import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import Home from "./views/home.jsx";
import Navbar from "./component/navbar.jsx";
import injectContext from "./store/appContext";


const Layout = () => {

	const basename = process.env.BASENAME || "";

	const { id } = useParams();
	console.log(id);

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/:id" element={<h1>Buenos dias</h1>} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
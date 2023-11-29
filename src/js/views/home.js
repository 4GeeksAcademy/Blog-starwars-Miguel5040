import React from "react";
import "../../styles/home.css";

const Home = () => {

	return (
		<main className="container">
			<h1>Characters</h1>
			<div className="card" style={{ width: "18rem" }}>
				<img src="https://buntingmagnetics.com/wp-content/uploads/2015/04/400x300.gif" className="card-img-top" />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" className="btn btn-primary">Learn more!</a>
				</div>
			</div>
		</main >
	)
};

export default Home;

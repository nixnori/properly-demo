import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route>
					<Hero />
				</Route>
			</Switch>
		</div>
	);
}

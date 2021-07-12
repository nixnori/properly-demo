import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/Home";

export default function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route>
					<Home />
				</Route>
			</Switch>
		</div>
	);
}

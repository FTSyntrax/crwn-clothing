import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

//   fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
// 		.then((res) => {
// 			return res.json();
// 		})
// 		.then((data) => {
// 			console.log(data);
// 		})
// 		.catch((err) => console.log(err));
function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;

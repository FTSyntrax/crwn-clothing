import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth } from './firebase/firebase.utils';

//   fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
// 		.then((res) => {
// 			return res.json();
// 		})
// 		.then((data) => {
// 			console.log(data);
// 		})
// 		.catch((err) => console.log(err));

class App extends React.Component {
	constructor() {
		super()

		this.state = {
			currentUser: null
		}
	}

	unsubscribeFromAuth = null


	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });
			// console.log(user)
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
			return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signin" component={SignInAndSignUpPage} />
				</Switch>
			</div>
		)
	}
}

export default App;

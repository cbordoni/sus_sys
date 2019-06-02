import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';

import NotFound from './routes/NotFound';

import Login from './login/Login';
import Register from './login/Register';

import Home from './home/Home';

import Base from './core/Base';
import Profile from './users/Profile';
import ListAppointments from './appointments/ListAppointments';

import PrivateRoute from './PrivateRoute';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Base>
						<Switch>
							<PrivateRoute exact path="/" component={Home} />

							<PrivateRoute exact path="/perfil/" component={Profile} />

							<PrivateRoute
								exact
								path="/historico/"
								component={ListAppointments}
							/>

							<Route exact path="/auth/register" render={() => <Register />} />
							<Route exact path="/auth/login" render={() => <Login />} />

							<Route component={NotFound} />
						</Switch>
					</Base>
				</BrowserRouter>
			</Provider>
		);
	}
}

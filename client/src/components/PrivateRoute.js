import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { connect } from 'react-redux';

// import Unauthorized from './routes/Unauthorized';

const PrivateRoute = ({ component: Component, user, ...rest }) => (
	<Route
		render={props =>
			user ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: 'auth/login',
						state: { from: props.location },
					}}
				/>
			)
		}
		{...rest}
	/>
);

const props = store => ({
	user: store.auth.user,
});

export default connect(
	props,
	{},
)(PrivateRoute);

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUser } from '../../actions/auth';
import { getHospitals } from '../../actions/hospitals';

import Login from '../login/Login';
import { Typography, Grid } from '@material-ui/core';

class Home extends Component {
	componentDidMount() {
		this.props.getUser();
		this.props.getHospitals();
	}

	render() {
		const { user } = this.props;

		return user ? <ChildHome /> : <Login />;
	}
}

const ChildHome = () => (
	<Grid container>
		<Grid item xs={12} sm={6}>
			<Typography
				variant="h5"
				style={{
					paddingTop: 16,
					paddingBottom: 24,
				}}
				children={`Bem vindo a versão mais caralhenta desse site foda pra carai.`}
			/>

			<Typography
				variant="h6"
				children={`Esse site vai fazer uma coisa muito foda.`}
			/>
		</Grid>
	</Grid>
);

const props = store => ({
	user: store.auth.user,
});

export default connect(
	props,
	{ getUser, getHospitals },
)(Home);

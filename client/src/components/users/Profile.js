import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Typography } from '@material-ui/core';

class Profile extends Component {
	render() {
		return (
			<Typography
				variant="h5"
				children={`Aqui vai ser a porra do perfil. Sacou?`}
			/>
		);
	}
}

const props = store => ({
	user: store.auth.user,
});

export default connect(
	props,
	{},
)(Profile);

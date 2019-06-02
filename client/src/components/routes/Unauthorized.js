import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

export default class Unauthorized extends Component {
	render() {
		return <Typography variant="h5">200 - User Not Authorized</Typography>;
	}
}

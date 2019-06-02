import React, { Component, Fragment } from 'react';

import { Snackbar } from '@material-ui/core';

let openSnackbarFn;

export default class CustomizedSnackbar extends Component {
	state = {
		open: false,
		message: '',
	};

	handleClose = (event, reason) => {
		if (reason === 'clickaway') return;

		this.setState({ open: false });
	};

	componentDidMount() {
		openSnackbarFn = message => {
			this.setState({
				open: true,
				message: message,
			});
		};
	}

	render() {
		const { open, message } = this.state;

		const anchor = {
			vertical: 'bottom',
			horizontal: 'left',
		};

		return (
			<Fragment>
				<Snackbar
					anchorOrigin={anchor}
					open={open}
					autoHideDuration={6000}
					onClose={this.handleClose}
					message={<span id="message-id">{message}</span>}
					ContentProps={{
						'aria-describedby': 'message-id',
					}}
				/>
			</Fragment>
		);
	}
}

export function openSnackbar(message) {
	openSnackbarFn(message);
}

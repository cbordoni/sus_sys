import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CoreHeader from './CoreHeader';
import CoreDrawer from './CoreDrawer';

import {
	CssBaseline,
	withStyles,
	Paper,
	MuiThemeProvider,
} from '@material-ui/core';

import { app, appTheme } from './Common.css';

import { compose } from 'recompose';

class Base extends Component {
	static propTypes = {
		user: PropTypes.object,
	};

	render() {
		const { classes, children, user } = this.props;

		return (
			<MuiThemeProvider theme={appTheme}>
				<CssBaseline />

				<div className={classes.base}>
					<CoreHeader />

					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							overflowY: 'auto',
							flex: 1,
						}}
					>
						{user ? <CoreDrawer /> : null}

						<Paper
							className={classes.content}
							children={children}
							elevation={0}
						/>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}

const props = state => ({
	user: state.auth.user,
});

export default connect(
	props,
	{},
)(
	compose(
		withRouter,
		withStyles(app, { withTheme: true }),
	)(Base),
);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core/';

import MenuIcon from '@material-ui/icons/Menu';

import { withStyles } from '@material-ui/core/styles';

import { header } from './Common.css';
import { openDrawer } from './CoreDrawer';

import { getUser } from '../../actions/auth';

class CoreHeader extends Component {
	static propTypes = {
		classes: PropTypes.object.isRequired,
		user: PropTypes.object,
	};

	openDrawer = () => {
		openDrawer();
	};

	render() {
		const { classes, user } = this.props;

		return (
			<AppBar className={classes.appBar}>
				<Toolbar>
					{user ? (
						<IconButton
							className={classes.menuButton}
							onClick={this.openDrawer}
							color="inherit"
							aria-label="Open drawer"
							children={<MenuIcon />}
						/>
					) : null}

					<Typography variant="h6" color="inherit" noWrap>
						SYS
					</Typography>

					<div className={classes.grow} />

					{user ? (
						<Typography
							className={classes.title}
							variant="subtitle1"
							color="inherit"
							noWrap
							children={`Bem vindo, ${user.name}`}
						/>
					) : null}
				</Toolbar>
			</AppBar>
		);
	}
}

const props = state => ({
	user: state.auth.user,
});

export default connect(
	props,
	{ getUser },
)(withStyles(header)(CoreHeader));

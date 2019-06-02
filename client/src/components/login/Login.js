import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { Link, withRouter } from 'react-router-dom';

import {
	Typography,
	withStyles,
	Button,
	CircularProgress,
} from '@material-ui/core';

import { login, getAuth } from '../../actions/auth';

import { FormInput } from '../core/CoreDialog';
import { login as loginStyle } from '../core/Common.css';

import CustomizedSnackbar, { openSnackbar } from '../core/SnackBar';

class Login extends Component {
	state = {
		login: 'paciente@sys.com.br',
		password: 'paciente',
		auth: false,
	};

	onChange = e => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};

	onSubmit = e => {
		e.preventDefault();

		const { login, password } = this.state;

		this.props
			.login(login, password)
			.then(res => {
				this.props.history.push('/');
			})
			.catch(error => {
				openSnackbar('Usuário não encontrado');
			});
	};

	componentDidMount() {
		if (!this.props.fetched)
			this.props.getAuth().then(res => {
				this.props.history.push('/');
			});
	}

	render() {
		const { classes } = this.props;

		if (!this.props.fetched) return <CircularProgress />;

		return (
			<Fragment>
				<CustomizedSnackbar />

				<div className={classes.mainContainer}>
					<div
						style={{
							margin: 'auto',
							width: 380,
							maxWidth: '100%',
						}}
					>
						<Typography variant="h6">Entrar</Typography>

						<form
							onSubmit={this.onSubmit}
							className={classes.container}
							noValidate
							autoComplete="off"
						>
							<FormInput
								id="login"
								label="Matrícula"
								value={this.state.login}
								classes={classes}
								onChange={this.onChange}
							/>

							<FormInput
								id="password"
								type="password"
								label="Senha"
								value={this.state.password}
								classes={classes}
								onChange={this.onChange}
							/>

							<Button component={Link} to="/auth/register" variant="text">
								Não possuo conta ainda
							</Button>

							<div style={{ paddingTop: 16, textAlign: 'right' }}>
								<Button type="submit" color="secondary" children={'Entrar'} />
							</div>
						</form>
					</div>
				</div>
			</Fragment>
		);
	}
}

const props = store => ({
	fetched: store.auth.fetched,
});

export default connect(
	props,
	{ login, getAuth },
)(withRouter(withStyles(loginStyle)(Login)));

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';

import { Typography, withStyles, Button } from '@material-ui/core';

import { register } from '../../actions/auth';

// import { register } from '../../actions/auth';

import { FormInput } from '../core/CoreDialog';
import { login as loginStyle } from '../core/Common.css';

import CustomizedSnackbar, { openSnackbar } from '../core/SnackBar';

class Register extends Component {
	state = {
		name: '',
		cpf: '',
		email: '',
		password: '',
		password_confirmation: '',
		registered: false,
	};

	onChange = e => {
		this.setState({ [e.target.id]: e.target.value });
	};

	onSubmit = e => {
		e.preventDefault();

		const { name, cpf, email, password } = this.state;

		this.props.register({ name, cpf, email, password }).then(res => {
			openSnackbar('Conta criada');

			this.setState({
				registered: true,
			});
		});
	};

	render() {
		const { classes } = this.props;

		if (this.state.registered) return <Redirect to="/auth/login" />;

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
						<Typography variant="h6">Registrar</Typography>

						<form
							onSubmit={this.onSubmit}
							className={classes.container}
							noValidate
							autoComplete="off"
						>
							<FormInput
								id="name"
								label="Nome"
								value={this.state.nome}
								classes={classes}
								onChange={this.onChange}
							/>

							<FormInput
								id="cpf"
								label="CPF"
								value={this.state.cpf}
								classes={classes}
								onChange={this.onChange}
							/>

							<FormInput
								id="email"
								label="Email"
								value={this.state.email}
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

							<FormInput
								id="password_confirmation"
								type="password"
								label="Confirmar Senha"
								value={this.state.password_confirmation}
								classes={classes}
								onChange={this.onChange}
							/>

							<div style={{ paddingTop: 16, textAlign: 'right' }}>
								<Button
									type="submit"
									color="secondary"
									children={'Confirmar'}
								/>
							</div>
						</form>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default connect(
	null,
	{ register },
)(withStyles(loginStyle)(Register));

import React from 'react';

import {
	FormControl,
	InputLabel,
	Input,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Select,
} from '@material-ui/core';

import { CancelBt, ConfirmBt } from './CoreButtons';

export default ({ title, children, onConfirm, handleClose, open }) => {
	return (
		<Dialog
			open={open}
			onClose={handleClose}
			fullWidth
			maxWidth="sm"
			aria-labelledby="title"
		>
			<DialogTitle id="title">{title}</DialogTitle>

			<DialogContent>{children}</DialogContent>

			<DialogActions>
				<CancelBt onClick={handleClose} />

				<ConfirmBt onClick={onConfirm} />
			</DialogActions>
		</Dialog>
	);
};

export const FormInput = ({
	classes,
	id,
	label,
	notRequired = false,
	...rest
}) => (
	<FormControl
		className={classes.formControl}
		required={!notRequired}
		margin="normal"
		fullWidth
	>
		<InputLabel htmlFor={id}>{label}</InputLabel>
		<Input id={id} {...rest} />
	</FormControl>
);

export const FormSelect = ({
	classes,
	id,
	label,
	value,
	children,
	handleChange,
}) => (
	<FormControl className={classes.formControl} fullWidth>
		<InputLabel htmlFor={id}>{label}</InputLabel>

		<Select
			value={value}
			onChange={handleChange}
			inputProps={{
				name: id,
				id: id,
			}}
		>
			{children}
		</Select>
	</FormControl>
);

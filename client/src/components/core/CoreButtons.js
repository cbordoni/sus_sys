import React from 'react';
import { Button } from '@material-ui/core';

export const ConfirmBt = props => (
	<Button color="primary" {...props}>
		Confirmar
	</Button>
);

export const CancelBt = props => <Button {...props}>Cancelar</Button>;

export const ViewBt = props => (
	<Button color="secondary" {...props}>
		Vizualizar
	</Button>
);

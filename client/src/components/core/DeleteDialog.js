import React from 'react';

export const RemoveDialog = props => (
	<Dialog
		open={open}
		onClose={this.handleClose}
		fullWidth
		maxWidth="sm"
		aria-labelledby="title"
	>
		<DialogTitle id="title">{props.title}</DialogTitle>

		<DialogContent>
			<DialogContentText>{props.message}</DialogContentText>
		</DialogContent>

		<DialogActions>
			<Button onClick={props.onCancel} color="primary">
				Cancel
			</Button>

			<Button onClick={props.onConfirm} color="primary">
				Remove
			</Button>
		</DialogActions>
	</Dialog>
);

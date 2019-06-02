import React, { Fragment } from 'react';

import {
	List,
	Typography,
	IconButton,
	withStyles,
	Divider,
} from '@material-ui/core';

import FilterListIcon from '@material-ui/icons/FilterList';

import { list } from './Common.css';

export default withStyles(list)(({ classes, title, length, children }) => {
	return (
		<Fragment>
			<div className={classes.titleContainer}>
				<Typography className={classes.listTitle} variant="h5" gutterBottom>
					{title}
				</Typography>

				<IconButton>
					<FilterListIcon />
				</IconButton>
			</div>

			<div className={classes.list}>
				<List disablePadding className={classes.listOverflow}>
					{children}
				</List>
			</div>

			<Divider style={{ marginLeft: 16, marginTop: 8 }} />

			<Typography variant="body1" className={classes.subHeading}>
				{`Exibindo: ${length} resultados`}
			</Typography>
		</Fragment>
	);
});

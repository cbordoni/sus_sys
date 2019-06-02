import { createMuiTheme } from '@material-ui/core';

import { green, amber, blue } from '@material-ui/core/colors';

const drawerWidth = 240;

export const header = theme => ({
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
		// [theme.breakpoints.up('md')]: {
		// 	display: 'none',
		// },
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'block',
		},
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		position: 'relative',
	},
});

export const drawer = theme => ({
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	drawer: {
		[theme.breakpoints.up('md')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
});

export const app = theme => ({
	base: {
		display: 'flex',
		flexDirection: 'column',
		height: '100vh',
		flex: 1,
	},
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 2,
		overflowY: 'auto',
		overflowX: 'hidden',
		//backgroundColor: 'rgba(214, 214, 214, 0.08)',
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	nested: {
		paddingLeft: theme.spacing.unit * 4,
	},
	card: {
		width: '100%',
		padding: 0,
		marginTop: 28,
		overflowX: 'unset',
		overflowY: 'unset',
	},
	formControl: {
		marginTop: theme.spacing.unit,
		marginBottom: theme.spacing.unit,
	},
	fab: {
		position: 'absolute',
		bottom: theme.spacing.unit * 2,
		right: theme.spacing.unit * 2,
	},
	withPadd: {
		padding: theme.spacing.unit * 2,
	},
});

export const list = theme => ({
	paper: {
		maxHeight: '100%',
		overflow: 'hidden',
		display: 'flex',
		flexDirection: 'column',
		paddingTop: theme.spacing.unit,
	},
	paperWithBottomPadding: {
		paddingBottom: theme.spacing.unit * 6,
	},
	listTitle: {
		paddingTop: theme.spacing.unit,
		marginBottom: 0,
		flex: 1,
	},
	titleContainer: {
		paddingLeft: theme.spacing.unit * 2,
		//paddingRight: theme.spacing.unit * 2,
		backgroundColor: theme.palette.background.paper,
		top: 0,
		position: 'sticky',
		display: 'flex',
	},
	list: {
		maxHeight: `calc(100% - ${theme.spacing.unit * 6}px)`,
		paddingTop: 0,
		overflowY: 'hidden',
		display: 'flex',
		backgroundColor: theme.palette.background.paper,
	},
	listOverflow: {
		overflowY: 'auto',
		flex: 1,
	},
	subHeader: {
		top: 0,
		backgroundColor: theme.palette.background.paper,
	},
	subHeading: {
		paddingLeft: theme.spacing.unit * 2,
		paddingTop: theme.spacing.unit,
	},
});

export const snackbar = theme => ({
	success: {
		backgroundColor: green[600],
	},
	error: {
		backgroundColor: theme.palette.error.dark,
	},
	info: {
		backgroundColor: theme.palette.primary.dark,
	},
	warning: {
		backgroundColor: amber[700],
	},
	icon: {
		fontSize: 20,
	},
	iconVariant: {
		opacity: 0.9,
		marginRight: theme.spacing.unit,
	},
	message: {
		display: 'flex',
		alignItems: 'center',
	},
});

export const login = theme => ({
	mainContainer: {
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		alignContent: 'center',
	},
	mainPaper: {
		padding: theme.spacing.unit * 3,
	},
	button: {
		margin: theme.spacing.unit,
	},
	options: {
		display: 'flex',
		flex: 1,
		alignItems: 'flex-end',
	},
	fullHeight: {
		height: '100%',
	},
	grid: {
		display: 'flex',
		padding: 16,
		margin: -16,
	},
	gridItem: {
		padding: 16,
	},
	subTitle: {
		paddingBottom: 24,
		position: 'sticky',
		top: 0,
		background: '#FFF',
	},
	child: {
		overflow: 'hidden scroll',
		flex: 1,
	},
});

export const appTheme = createMuiTheme({
	palette: {
		primary: {
			main: '#FFFFFF',
		},
		secondary: blue,
	},
});

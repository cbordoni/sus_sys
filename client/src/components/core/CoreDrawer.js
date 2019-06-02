import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import { drawer } from './Common.css';

import {
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core/';

import DashboardIcon from '@material-ui/icons/Dashboard';
import HistoryIcon from '@material-ui/icons/History';
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';
import ReplyIcon from '@material-ui/icons/Reply';

import { logout } from '../../actions/auth';

let openDrawerFn;

class CoreDrawer extends Component {
	state = {
		open: false,
	};

	static propTypes = {
		classes: PropTypes.object.isRequired,
	};

	componentDidMount() {
		openDrawerFn = () => {
			this.setState({
				open: true,
			});
		};
	}

	handleClose = () => {
		this.setState({
			open: false,
		});
	};

	render() {
		const { classes, container, theme } = this.props;
		const { open } = this.state;

		const isSelected = to => {
			return window.location.href === `${window.location.origin}${to}`;
		};

		const drawer = (
			<List>
				<LinkItem
					children={<DashboardIcon />}
					primary={'Home'}
					to={'/'}
					selected={isSelected('/')}
				/>

				<LinkItem
					children={<PersonIcon />}
					primary={'Meu Perfil'}
					to={'/perfil'}
					selected={isSelected('/perfil')}
				/>

				<LinkItem
					children={<HistoryIcon />}
					primary={'Meu Histórico'}
					to={'/historico'}
					selected={isSelected('/historico')}
				/>

				<LinkItem
					children={<MailIcon />}
					primary={'Agendar Atendimento'}
					to={'/agendamentos'}
					selected={isSelected('/agendamentos')}
				/>

				<ListItem button onClick={this.props.logout}>
					<ListItemIcon children={<ReplyIcon />} />
					<ListItemText primary={'Sair'} />
				</ListItem>
			</List>
		);

		return (
			<Drawer
				container={container}
				variant="temporary"
				anchor={theme.direction === 'rtl' ? 'right' : 'left'}
				classes={{
					paper: classes.drawerPaper,
				}}
				open={open}
				onClose={this.handleClose}
				children={drawer}
			/>
		);
	}
}

export default connect(
	null,
	{ logout },
)(withStyles(drawer, { withTheme: true })(CoreDrawer));

export function openDrawer() {
	openDrawerFn();
}

const LinkItem = ({ children, primary, ...props }) => (
	<ListItem component={Link} button {...props}>
		<ListItemIcon children={children} />
		<ListItemText primary={primary} />
	</ListItem>
);

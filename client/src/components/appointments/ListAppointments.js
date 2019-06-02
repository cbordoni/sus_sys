import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { getAppointments } from '../../actions/appointments';
import { getHospitals } from '../../actions/hospitals';

import { ListItem, ListItemText, Typography, List } from '@material-ui/core';

class ListAppointments extends Component {
	componentDidMount() {
		this.props.getHospitals();
		this.props.getAppointments(this.props.user.id);
	}
	render() {
		const { hospitals, appointments } = this.props;

		console.log(appointments);

		return (
			<div style={styles.maxHeight}>
				<Typography
					variant="h5"
					style={styles.title}
					children={`Histórico Médico`}
				/>

				{/* <List style={styles.maxHeightWithLimit}>
					{appointments.map((item, key) => {
						const hospital = hospitals.find(
							hospital => hospital.id === item.hospital,
						);

						const name = hospital ? hospital.name : 'Hospital desconhecido';

						if (new Date(item.date).getFullYear() !== lastYear) {
							lastYear = new Date(item.date).getFullYear();

							return (
								<Fragment key={`section-${lastYear}`}>
									<Typography variant="h6" style={styles.subHeader}>
										{lastYear}
									</Typography>

									<Appointment key={key} item={item} name={name} />
								</Fragment>
							);
						}

						return <Appointment key={key} item={item} name={name} />;
					})}
				</List> */}
			</div>
		);
	}
}

const Appointment = ({ item, name }) => (
	<ListItem>
		<ListItemText
			disableTypography
			primary={<Primary item={item} name={name} />}
			secondary={<Secondary item={item} />}
		/>
	</ListItem>
);

const Primary = ({ item, name }) => (
	<div style={styles.secondary}>
		<Typography
			variant="subtitle1"
			style={styles.priTitle}
			children={`Razão: ${item.reason}`}
		/>

		<Typography
			variant="subtitle2"
			style={styles.secTitle}
			children={`Antedimento realizado em: ${name}, ${new Date(
				item.date,
			).toLocaleDateString()}`}
		/>
	</div>
);

const Secondary = ({ item }) => (
	<Typography
		variant="subtitle2"
		style={styles.secTitle}
		children={`Aqui vai ter alguma informação bem importante.`}
	/>
);

const styles = {
	subHeader: {
		paddingLeft: 16,
		paddingRight: 16,
		color: 'rgba(0, 0, 0, 0.54)',
	},
	priTitle: {
		width: '100%',
		color: 'rgba(0, 0, 0, 0.87)',
	},
	secTitle: {
		width: '100%',
		color: 'rgba(0, 0, 0, 0.54)',
	},
	secondary: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
	},
	title: {
		padding: 16,
		paddingBottom: 24,
	},
	maxHeight: {
		maxHeight: '100%',
	},
	maxHeightWithLimit: {
		maxHeight: 'calc(100% - 64px)',
		overflowY: 'auto',
	},
};

const props = store => ({
	user: store.auth.user,
	appointments: store.appointments.appointments,
	hospitals: store.hospitals.hospitals,
});

export default connect(
	props,
	{ getAppointments, getHospitals },
)(ListAppointments);

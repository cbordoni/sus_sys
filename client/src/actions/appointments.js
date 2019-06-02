import axios from 'axios';

import {
	CREATE_APPOINTMENT,
	UPDATE_APPOINTMENT,
	GET_APPOINTMENTS,
	URL,
} from './types';

const config = require('./config');

export const createAppointment = data => dispatch => {
	return axios.post(`${URL}/api/appointment`, data, config).then(res => {
		dispatch({
			type: CREATE_APPOINTMENT,
			payload: data,
		});
	});
};

export const updateAppointment = data => dispatch => {
	const { id } = data;

	return axios.put(`${URL}/api/appointment/${id}`, data, config).then(res => {
		dispatch({
			type: UPDATE_APPOINTMENT,
			payload: data,
		});
	});
};

export const getAppointments = id => dispatch => {
	return axios.get(`${URL}/api/appointment/${id}`, config).then(res => {
		dispatch({
			type: GET_APPOINTMENTS,
			payload: res.data,
		});
	});
};

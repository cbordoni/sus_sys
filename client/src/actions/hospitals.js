import axios from 'axios';

import {
	CREATE_HOSPITAL,
	UPDATE_HOSPITAL,
	DELETE_HOSPITAL,
	GET_HOSPITALS,
	URL,
} from './types';

export const createHospital = data => dispatch =>
	dispatch({
		type: CREATE_HOSPITAL,
		payload: data,
	});

export const updateHospital = data => dispatch =>
	dispatch({
		type: UPDATE_HOSPITAL,
		payload: data,
	});

export const removeHospital = id => dispatch =>
	dispatch({
		type: DELETE_HOSPITAL,
		payload: id,
	});

export const getHospitals = () => dispatch => {
	return axios.get(`${URL}/api/hospital`, config).then(res => {
		dispatch({
			type: GET_HOSPITALS,
			payload: res.data,
		});
	});
};

var config = {
	headers: {
		'Content-Type': 'application/json',
	},
};

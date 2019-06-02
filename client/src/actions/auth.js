import {
	AUTH_LOGIN,
	AUTH_LOGOUT,
	AUTH_USER,
	AUTH_REGISTER,
	URL,
	AUTH_USER_FAIL,
} from './types';

import axios from 'axios';

const config = require('./config');

export const getUser = () => (dispatch, getState) => getState().auth.user;

export const login = (email, password) => (dispatch, getState) => {
	return axios
		.post(`${URL}/api/auth/login`, { email, password }, config)
		.then(res => {
			dispatch({
				type: AUTH_LOGIN,
				payload: res.data,
			});
		});
};

export const logout = () => (dispatch, getState) => {
	dispatch({
		type: AUTH_LOGOUT,
	});
};

export const getAuth = () => (dispatch, getState) => {
	return axios
		.post(`${URL}/api/auth/user`, {}, config)
		.then(res => {
			dispatch({
				type: AUTH_USER,
				payload: res.data,
			});
		})
		.catch(err => {
			dispatch({
				type: AUTH_USER_FAIL,
			});
		});
};

export const register = item => (dispatch, getState) => {
	return axios.post(`${URL}/api/user/`, item, config).then(res => {
		dispatch({
			type: AUTH_REGISTER,
			payload: res.data,
		});
	});
};

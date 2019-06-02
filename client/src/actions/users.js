import axios from 'axios';

import { CREATE_USER, UPDATE_USER, DELETE_USER, URL } from './types';

const config = require('./config');

export const createUser = data => dispatch => {
	dispatch({
		type: CREATE_USER,
		payload: data,
	});
};

export const updateUser = data => dispatch => {
	dispatch({
		type: UPDATE_USER,
		payload: data,
	});
};

export const removeUser = id => dispatch => {
	dispatch({
		type: DELETE_USER,
		payload: id,
	});
};

export const getUsers = () => dispatch => {};

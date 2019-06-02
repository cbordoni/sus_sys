import axios from 'axios';

import {
	CREATE_USER_HISTORY,
	UPDATE_USER_HISTORY,
	DELETE_USER_HISTORY,
	GET_USER_HISTORY,
	URL,
} from './types';

const createUSER_HISTORY = data => dispatch =>
	dispatch({
		type: CREATE_USER_HISTORY,
		payload: data,
	});

const updateUSER_HISTORY = data => dispatch =>
	dispatch({
		type: UPDATE_USER_HISTORY,
		payload: data,
	});

const removeUSER_HISTORY = id => dispatch =>
	dispatch({
		type: DELETE_USER_HISTORY,
		payload: id,
	});

const getUSER_HISTORY = () => dispatch =>
	dispatch({
		type: GET_USER_HISTORY,
		payload: [
			{
				id: 0,
				num: 1,
				type: 'CRT',
			},
			{
				id: 1,
				num: 1,
				type: 'CRT',
			},
			{
				id: 2,
				num: 1,
				type: 'CRT',
			},
			{
				id: 3,
				num: 1,
				type: 'CRT',
			},
			{
				id: 4,
				num: 1,
				type: 'CRT',
			},
			{
				id: 5,
				num: 1,
				type: 'CRT',
			},
			{
				id: 6,
				num: 1,
				type: 'CRT',
			},
			{
				id: 7,
				num: 1,
				type: 'CRT',
			},
		],
	});

export {
	createUSER_HISTORY,
	updateUSER_HISTORY,
	removeUSER_HISTORY,
	getUSER_HISTORY,
};

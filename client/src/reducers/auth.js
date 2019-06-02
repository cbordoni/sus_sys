import {
	AUTH_LOGIN,
	AUTH_LOGOUT,
	AUTH_USER,
	AUTH_USER_FAIL,
} from '../actions/types';

const initialState = {
	user: null,
	auth: false,
	fetched: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case AUTH_LOGIN:
			localStorage.setItem('token', action.payload.token);

			return {
				...state,
				user: action.payload.user,
				fetched: true,
				auth: true,
			};
		case AUTH_USER:
			return {
				...state,
				user: action.payload.user,
				fetched: true,
				auth: true,
			};
		case AUTH_LOGOUT:
			localStorage.removeItem('token');

			return {
				...state,
				user: null,
				auth: false,
				fetched: true,
			};
		case AUTH_USER_FAIL:
			localStorage.removeItem('token');

			return {
				...state,
				fetched: true,
			};
		default:
			return state;
	}
};

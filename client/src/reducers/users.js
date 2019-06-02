import {
	CREATE_USER,
	UPDATE_USER,
	DELETE_USER,
	GET_USERS,
} from '../actions/types';

const initialState = {
	users: [],
	fetched: false,
};
export default (state = initialState, action) => {
	switch (action.type) {
		case CREATE_USER:
			return {
				...state,
				users: [...state.users, action.payload],
			};
		case UPDATE_USER:
			return {
				...state,
				users: state.users.map(item =>
					item.id === action.payload.id ? action.payload : item,
				),
			};
		case DELETE_USER:
			return {
				...state,
				users: state.users.filter(item => item.id !== action.payload),
			};
		case GET_USERS:
			return {
				users: action.payload.filter(item => item.active),
				fetched: true,
			};
		default:
			return state;
	}
};

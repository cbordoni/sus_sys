import {
	CREATE_APPOINTMENT,
	UPDATE_APPOINTMENT,
	GET_APPOINTMENTS,
} from '../actions/types';

const initialState = {
	appointments: [],
	fetched: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case CREATE_APPOINTMENT:
			return {
				...state,
				appointments: [...state.appointments, action.payload],
			};
		case UPDATE_APPOINTMENT:
			return {
				...state,
				appointments: state.appointments.map(item =>
					item.id === action.payload.id ? action.payload : item,
				),
			};
		case GET_APPOINTMENTS:
			return {
				appointments: action.payload,
				fetched: true,
			};
		default:
			return state;
	}
};

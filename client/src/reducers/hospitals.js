import {
	CREATE_HOSPITAL,
	UPDATE_HOSPITAL,
	DELETE_HOSPITAL,
	GET_HOSPITALS,
} from '../actions/types';

const initialState = {
	hospitals: [],
};

const byName = (a, b) => (a.name > b.name ? 1 : -1);

export default (state = initialState, action) => {
	switch (action.type) {
		case CREATE_HOSPITAL:
			return {
				...state,
				hospitals: [...state.hospitals, action.payload],
			};
		case UPDATE_HOSPITAL:
			return {
				...state,
				hospitals: state.hospitals.map(item =>
					item.id === action.payload.id ? action.payload : item,
				),
			};
		case DELETE_HOSPITAL:
			return {
				...state,
				hospitals: state.hospitals.filter(item => item.id !== action.payload),
			};
		case GET_HOSPITALS:
			return {
				...state,
				hospitals: action.payload.sort(byName),
			};
		default:
			return state;
	}
};

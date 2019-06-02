import { combineReducers } from 'redux';

import users from './users';
import hospitals from './hospitals';
import appointments from './appointments';
import auth from './auth';

export const reducers = combineReducers({
	users,
	appointments,
	hospitals,
	auth,
});

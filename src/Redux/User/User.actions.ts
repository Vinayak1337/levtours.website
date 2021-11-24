import { SET_USER } from './User.constants';

export const setUser = (user: User | null) => ({
	type: SET_USER,
	payload: user
});

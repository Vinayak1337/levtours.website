import { SET_SIDEBAR_POPUP } from './App.constants';

export const setSidebarPopup = (value?: boolean) => ({
	type: SET_SIDEBAR_POPUP,
	payload: value
});

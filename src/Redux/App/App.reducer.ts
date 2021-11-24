import { APP_INITIAL_STATE, SET_SIDEBAR_POPUP } from './App.constants';

export const appReducer = (
	state = APP_INITIAL_STATE,
	action: APPReducerAction
) => {
	switch (action.type) {
		case SET_SIDEBAR_POPUP:
			return {
				...state,
				app: {
					...state.app,
					showSidebar: action.payload === false ? false : !state.app.showSidebar
				}
			};

		default:
			return state;
	}
};

type APPReducerAction = {
	type: typeof SET_SIDEBAR_POPUP;
	payload?: boolean;
};

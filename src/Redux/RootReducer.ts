import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { userReducer } from './User/User.reducer';
import { windowReducer } from './Window/Window.reducer';
import { appReducer } from './App/App.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['userReducer']
};

export const rootReducer = combineReducers({
	userReducer,
	windowReducer,
	appReducer
});

export const persistCombined = persistReducer(persistConfig, rootReducer);

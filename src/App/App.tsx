import { FC } from 'react';
import { AppBody } from './App.styled';
import { Dispatch } from 'redux';
import {
	setWindowPageOffset,
	setWindowSize,
	setWindowTarget
} from '../Redux/Window/Window.actions';
import { connect } from 'react-redux';
import Router from '../Router/Router';
import { Header, Footer, TopScroll, Sidebar } from '../Components';

const App: FC<AppProps> = ({ setSize, setPageOffset, setWindowTarget }) => {
	window.onscroll = function () {
		setPageOffset({
			pageXOffset: window.pageXOffset,
			pageYOffset: window.pageYOffset
		});
	};

	window.onresize = function () {
		setSize({
			width: window.innerWidth,
			height: window.innerHeight
		});
	};

	window.onclick = function (event) {
		setWindowTarget(event.target);
	};

	return (
		<>
			<Header />
			<Sidebar />
			<AppBody>
				<Router />
			</AppBody>
			<TopScroll />
			<Footer />
		</>
	);
};

const stateDispatchToProps = (dispatch: Dispatch) => ({
	setSize: (size: WindowSize) => dispatch(setWindowSize(size)),
	setPageOffset: (pageOffset: WindowPageOffset) =>
		dispatch(setWindowPageOffset(pageOffset)),
	setWindowTarget: (target: EventTarget | null) =>
		dispatch(setWindowTarget(target))
});

export default connect(null, stateDispatchToProps)(App);

interface AppProps {
	setSize: (size: WindowSize) => void;
	setPageOffset: (pageOffset: WindowPageOffset) => void;
	setWindowTarget: (target: EventTarget | null) => void;
}

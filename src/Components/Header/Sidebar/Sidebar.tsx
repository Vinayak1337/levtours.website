import { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { Dispatch } from 'redux';
import { setSidebarPopup } from '../../../Redux/App/App.actions';
import Navbar from '../Navbar/Navbar';
import {
	SidebarBackdrop,
	SidebarCloseBtn,
	SidebarContainer,
	SidebarMenu
} from './Sidebar.styled';

const Sidebar: FC<SidebarProps & RouteComponentProps> = ({
	showSidebar,
	toggleSidebar,
	history
}) => {
	useEffect(() => {
		toggleSidebar(false);
	}, [history.location.pathname, toggleSidebar]);
	return (
		<SidebarContainer visible={showSidebar ? 'true' : undefined}>
			<SidebarBackdrop />
			<SidebarCloseBtn onClick={() => toggleSidebar(false)} />
			<SidebarMenu>
				<Navbar />
			</SidebarMenu>
		</SidebarContainer>
	);
};

const mapStateToProps = (state: RootState) => ({
	showSidebar: state.appReducer.app.showSidebar
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	toggleSidebar: (value?: boolean) => dispatch(setSidebarPopup(value))
});

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(Sidebar)
);

interface SidebarProps {
	showSidebar: boolean;
	toggleSidebar: (value?: boolean) => void;
}

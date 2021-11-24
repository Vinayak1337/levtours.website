import { FC } from 'react';
import { Dispatch } from 'redux';
import {
	MenuIconContainer,
	StyledIconButton,
	MenuIconLogo
} from './MenuIcon.styled';
import { setSidebarPopup } from '../../../Redux/App/App.actions';
import { connect } from 'react-redux';

const MenuIcon: FC<MenuIconProps> = ({ scrolling, toggleSidebar }) => {
	const handleClick = () => {
		toggleSidebar();
	};

	return (
		<MenuIconContainer onClick={handleClick}>
			<StyledIconButton
				color='inherit'
				aria-label='open drawer'
				scrolling={scrolling}>
				<MenuIconLogo fontSize='large' />
			</StyledIconButton>
		</MenuIconContainer>
	);
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
	toggleSidebar: () => dispatch(setSidebarPopup())
});

export default connect(null, mapDispatchToProps)(MenuIcon);

interface MenuIconProps {
	scrolling: string | undefined;
	toggleSidebar: () => void;
}

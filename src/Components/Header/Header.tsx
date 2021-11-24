import { FC, MutableRefObject, useEffect, useRef, useState } from 'react';
import { HeaderContainer, StyledAvatar } from './Header.styled';
import Navbar from './Navbar/Navbar';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import { connect } from 'react-redux';
import MenuIcon from './MenuIcon/MenuIcon';

const Header: FC<HeaderProps> = ({ windowWidth, pageYOffset }) => {
	const [scrolling, setScrolling] = useState<string | undefined>(undefined);

	const headerRef = useRef() as MutableRefObject<HTMLHeadElement>;
	const headerOffset = headerRef.current?.offsetTop;

	useEffect(() => {
		if (pageYOffset > headerOffset) return setScrolling('true');
		setScrolling(undefined);
	}, [headerOffset, pageYOffset]);

	return (
		<HeaderContainer
			windowWidth={windowWidth}
			scrolling={scrolling}
			ref={headerRef}>
			<HeaderLogo scrolling={scrolling} />
			{windowWidth > 1000 ? (
				<>
					<Navbar />
					<StyledAvatar src='/broken-image.jpg' />
				</>
			) : (
				<MenuIcon scrolling={scrolling} />
			)}
		</HeaderContainer>
	);
};

const mapStateToProps = (state: RootState) => ({
	windowWidth: state.windowReducer.window.width,
	pageYOffset: state.windowReducer.window.pageYOffset
});

export default connect(mapStateToProps)(Header);

interface HeaderProps {
	windowWidth: number;
	pageYOffset: number;
}

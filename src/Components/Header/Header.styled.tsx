import styled, { css } from 'styled-components';
import { NavbarLink } from './NavbarItem/NavbarItem.styled';
import { Avatar } from '@mui/material';

const sticky = css`
	background: var(--theme2);
	position: fixed;
	top: 0;
	width: 100%;
	padding: 20px 0px;
	transition: 1s;

	${NavbarLink} {
		color: white;
		transition: 0.7s;

		&:hover {
			color: var(--theme);
		}
	}
`;

interface HeaderContainerProps {
	scrolling?: string;
	windowWidth: number;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
	position: absolute;
	display: flex;
	justify-content: space-evenly;
	min-width: 100%;
	padding: 15px 0px;
	transition: 0.5s;
	z-index: 100;

	${({ scrolling }) => (scrolling ? sticky : null)}

	${({ windowWidth }) =>
		windowWidth <= 1000
			? `
			justify-content: space-between;
	`
			: ''}
`;

export const StyledAvatar = styled(Avatar)`
	cursor: pointer;
	transition: 0.5s;
	&:hover {
		background-color: var(--theme);
		transition: 0.5s;
		color: black;
	}
`;

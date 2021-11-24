import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarLink = styled(Link)`
	text-decoration: none;
	color: #061a3a;
	font-weight: 600;
	transition: 0.5s;
	font-size: 1.1rem;
	font-family: 'Work Sans', sans-serif;
	height: fit-content;

	&:hover {
		transition: 0.5s;
		color: var(--theme);
	}
`;

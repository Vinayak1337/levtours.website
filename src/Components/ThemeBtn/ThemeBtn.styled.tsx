import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ThemeBtnLink = styled(Link)`
	position: relative;
	display: inline-block;
	overflow: hidden;
	font-size: 17px;
	line-height: 25px;
	font-family: 'Work Sans', sans-serif;
	font-weight: 600;
	color: var(--theme2);
	border: 1px solid #e4e8e9;
	text-align: center;
	padding: 16.5px 41.5px;
	border-radius: 4px;
	z-index: 1;
	transition: all 500ms ease;

	&::before {
		transition-duration: 800ms;
		position: absolute;
		width: 200%;
		height: 200%;
		content: '';
		top: 110%;
		left: 50%;
		background: var(--theme);
		transform: translateX(-50%);
		border-radius: 50%;
		z-index: -1;
	}

	&:hover {
		color: white;
		box-shadow: 0px 15px 25px 0px rgba(255, 124, 91, 0.3);

		&::before {
			top: -40%;
		}
	}
`;

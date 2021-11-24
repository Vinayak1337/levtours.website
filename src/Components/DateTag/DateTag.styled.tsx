import styled from 'styled-components';
import { DateIconComponent } from '../../Assets/Images/.';

export const DateTagBody = styled.span`
	position: absolute;
	left: 20px;
	top: 28px;
	font-size: 15px;
	line-height: 26px;
	font-weight: 500;
	background: white;
	color: grey;
	border-radius: 25px;
	padding: 5px 20px 3px 55px;
	box-shadow: 0px 0px 40px 0px rgb(0 0 0 / 50%);
`;

export const DateTagIcon = styled(DateIconComponent)`
	position: absolute;
	left: 0px;
	top: -7px;
	width: 50px;
	height: 50px;
	line-height: 40px;
	text-align: center;
	font-size: 20px;
	fill: white;
	border: 5px solid white;
	border-radius: 50%;
	padding: 7px;
	box-shadow: 10px 0px 20px 0px rgb(0 0 0 / 15%);
	background: var(--theme);

	&::after {
		position: absolute;
		content: '';
		width: 100%;
		height: 100%;
		left: 0px;
		top: 0px;
		border-radius: 50%;
		box-shadow: 0px 0px 0px 5px white;
	}
`;

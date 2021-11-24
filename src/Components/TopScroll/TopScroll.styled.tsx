import styled, { css } from 'styled-components';
import { ArrowUpIconComponent } from '../../Assets/Images';

const rotateArrowIcon = css`
	transform: rotate(180deg);
`;

export const TopScrollIcon = styled(ArrowUpIconComponent)`
	display: inline-block;
	height: 38px;
	width: 38px;
	transition: 1s ease;
`;

const bottomBtnStyle = css`
	bottom: 50px;
	transition: 1s ease;
`;

const topBtnStyle = css`
	bottom: 150%;
	transition: 1s ease;
`;

export const TopScrollBtn = styled.button<{ pageYOffset: number }>`
	margin: 0px;
	overflow: visible;
	background: var(--theme);
	width: 55px;
	height: 55px;
	line-height: 64px;
	position: fixed;
	right: 30px;
	font-size: 40px;
	z-index: 99;
	color: white;
	text-align: center;
	cursor: pointer;
	transition: 1s ease;
	outline: none;
	border: none;

	${({ pageYOffset }) =>
		pageYOffset
			? `
        ${bottomBtnStyle}
        ${TopScrollIcon} {
			${rotateArrowIcon}
        }
    `
			: topBtnStyle}
`;

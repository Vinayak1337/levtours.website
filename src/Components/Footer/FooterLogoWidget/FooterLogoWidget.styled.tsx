import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FooterUlCss } from '../Footer.styled';

export const LogoWidgetContainer = styled.div`
	position: relative;
	margin-right: -15px;

	@media only screen and (max-width: 1200px) {
		margin: 0px !important;
	}

	@media only screen and (max-width: 991px) {
		margin: 0px opx 30px !important;
	}
`;

export const LogoContainer = styled.figure`
	position: relative;
	margin: 0px;
	margin-bottom: 35px;
`;

export const LogoLink = styled(Link)`
	font-size: 16px;
	line-height: 26px;
	color: #aeb1b8;
`;

export const Logo = styled.img`
	display: inline-block;
	max-width: 100%;
	height: auto;
	transition-delay: 0.1s;
	transition-timing-function: ease-in-out;
	transition-duration: 0.7s;
	transition-property: all;
	border-style: none;
	vertical-align: middle;
`;

export const LogoTextContainer = styled.div`
	margin-bottom: 50px;
`;

export const LogoText = styled.p`
	position: relative;
	font-family: 'Work Sans', sans-serif;
	font-weight: 600;
	margin: 0px;
	transition: all 500ms ease 0s;
	font-size: 16px;
	line-height: 26px;
	color: rgb(174, 177, 184);
`;

export const SocialLinkLi = styled.li`
	position: relative;
	margin-right: 10px !important;
	float: left;
	${FooterUlCss}

	@media only screen and (max-width: 1200px) {
		margin-bottom: 10px;
	}
`;

export const SocialLinkEl = styled(Link)`
	position: relative;
	display: inline-block;
	font-size: 15px;
	color: white;
	width: 40px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	background: rgba(255, 255, 255, 0.1);
	border-radius: 50%;
	text-decoration: none;
	transition: all 500ms ease 0s;

	&:hover {
		background: var(--theme);
	}
`;

export const SocialLinkElIcon = styled.i`
	position: relative;
	top: 15%;
	display: inline-block;
	font-style: normal;
	text-rendering: auto;
	line-height: 1;
	font-variant: normal;

	/* &:hover {
		fill: var(--theme2);
	} */
`;

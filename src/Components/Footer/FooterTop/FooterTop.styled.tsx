import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FooterUlCss } from '../Footer.styled';

export const FooterTopContainer = styled.div`
	position: relative;
	padding: 130px 0px 110px 0px;

	@media only screen and (min-width: 991px) {
		padding-bottom: 80px;
	}
`;

export const FooterTopBgImg = styled.div<{ imageUrl: string }>`
	position: absolute;
	left: 0px;
	bottom: 0px;
	width: 100%;
	height: 100%;
	background-repeat: repeat-x;
	animation: slide 100s linear infinite;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};

	@keyframes slide {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: 1920px 0;
		}
	}
`;

export const FooterTopRowContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	margin-right: -15px;
	margin-left: -15px;
`;

export const FooterTopContentContainer = styled.div`
	position: relative;
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;

	@media (min-width: 576px) {
		flex: 0 0 100%;
		max-width: 100%;
	}

	@media (min-width: 768px) {
		flex: 0 0 50%;
		max-width: 50%;
	}

	@media (min-width: 992px) {
		flex: 0 0 25%;
		max-width: 25%;
	}
`;

export const FooterPagesWidget = styled.div`
	position: relative;
	margin-left: 60px;

	@media only screen and (max-width: 991px) {
		margin: 0px 0px 30px !important;
	}
	@media only screen and (max-width: 1200px) {
		margin: 0px !important;
	}
`;

export const FooterPagesWidgetTitle = styled.div`
	position: relative;
	display: block;
	margin-bottom: 27px;
`;

export const FooterPagesWidgetTitleEl = styled.h3`
	position: relative;
	font-family: 'Work Sans', sans-serif;
	margin: 0px;
	font-size: 24px;
	line-height: 32px;
	color: white;
	font-weight: 600;
`;

export const FooterPagesWidgetContent = styled.li`
	position: relative;
	display: block;
	margin-bottom: 10px;
	${FooterUlCss}
`;

export const FooterPagesWidgetContentLink = styled(Link)`
	position: relative;
	display: inline-block;
	font-size: 16px;
	line-height: 26px;
	color: rgb(174, 177, 184);
	text-decoration: none;
	transition: all 500ms ease 0s;
	background-color: transparent;

	&::before {
		position: absolute;
		background: var(--theme);
		content: '';
		width: 0%;
		height: 1px;
		left: 0px;
		bottom: 4px;
		transition: all 500ms ease 0s;
	}
`;

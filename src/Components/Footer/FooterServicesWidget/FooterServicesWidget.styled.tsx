import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FooterUlCss } from '../Footer.styled';

export const ServicesWidgetContainer = styled.div`
	position: relative;
	margin-left: 60px;

	@media only screen and (max-width: 991px) {
		margin: 0px 0px 30px 0px !important;
	}

	@media only screen and (max-width: 1200px) {
		margin: 0px !important;
	}
`;

export const ServicesWidgetTitleContainer = styled.div`
	position: relative;
	display: block;
	margin-bottom: 27px;
	margin-top: 30px;
`;

export const ServicesWidgetTitle = styled.h3`
	font-size: 24px;
	line-height: 32px;
	color: white;
	font-weight: bold;
	font-family: sans-serif;
`;

export const ServicesWidgetLi = styled.li`
	position: relative;
	display: block;
	margin-bottom: 10px !important;
	${FooterUlCss}
`;

export const ServicesWidgetLiLink = styled(Link)`
	position: relative;
	display: inline-block;
	font-size: 16px;
	line-height: 26px;
	color: #aeb1b8;

	&::before {
		position: absolute;
		content: '';
		width: 0%;
		height: 1px;
		left: 0px;
		bottom: 4px;
		transition: all 500ms ease;
		background: var(--theme);
	}

	&:hover {
		color: var(--theme);

		&::before {
			width: 100%;
		}
	}
`;

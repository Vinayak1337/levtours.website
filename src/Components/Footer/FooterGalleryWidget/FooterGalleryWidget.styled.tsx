import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FooterUl } from '../Footer.styled';

export const GalleryWidgetContainer = styled.div`
	position: relative;
	margin-left: -58px;
	margin-right: 38px;

	@media only screen and (max-width: 991px) {
		margin: 0px 0px 30px 0px !important;
	}
	@media only screen and (max-width: 1200px) {
		margin: 0px !important;
	}

	${FooterUl} {
		position: relative;
		margin: 0px -5px;
	}
`;

export const GalleryWidgetTitleContainer = styled.div`
	position: relative;
	display: block;
	margin-bottom: 34px;
	margin-top: 34px;
`;

export const GalleryWidgetTitle = styled.div`
	font-size: 24px;
	line-height: 32px;
	color: white;
	font-weight: 600;
`;

export const GalleryWidgetLi = styled.li`
	position: relative;
	float: left;
	margin: 0px 5px 10px 5px;
`;

export const GalleryWidgetLiLink = styled(Link)`
	font-size: 16px;
	line-height: 26px;
	color: #aeb1b8;
`;

export const GalleryWidgeImageBox = styled.figure`
	position: relative;
	display: block;
	overflow: hidden;
	width: 90px;
	height: 90px;
	border-radius: 5px;
	background: var(--theme);
	margin: 0px;
`;

export const GalleryWidgeImg = styled.img`
	width: 100%;
	border-radius: 5px;
	transition: all 500ms ease;

	&:hover {
		opacity: 0.2;
	}
`;

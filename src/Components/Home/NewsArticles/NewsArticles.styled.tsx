import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HomeTitleContainer } from '../../../Pages/Home/Home.styled';

export const NewsArtTitleContainer = styled(HomeTitleContainer)`
	text-align: left;
`;

export const NewsArtContentBody = styled.div`
	position: relative;
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;

	@media (min-width: 576px) {
		-ms-flex: 0 0 100%;
		flex: 0 0 100%;
		max-width: 100%;
	}

	@media (min-width: 768px) {
		-ms-flex: 0 0 50%;
		flex: 0 0 50%;
		max-width: 50%;
	}

	@media (min-width: 992px) {
		-ms-flex: 0 0 33.333333%;
		flex: 0 0 33.333333%;
		max-width: 33.333333%;
	}
`;

export const NewsArtImg = styled.img`
	width: 100%;
	border-radius: 10px;
	transition: all 500ms ease;
`;
export const NewsArtInnerBox = styled.div`
	position: relative;
	display: block;

	&:hover {
		${NewsArtImg} {
			opacity: 0.2;
		}
	}
`;

export const NewsArtImgBox = styled.figure`
	position: relative;
	display: block;
	overflow: hidden;
	border-radius: 10px;
	background: var(--theme);
	margin: 0px;
	padding: 0px;
`;

export const NewsArtLowerContent = styled.div`
	position: relative;
	padding-top: 30px;
	text-align: left;
`;

export const NewsArtCategoryLink = styled(Link)`
	position: relative;
	display: inline-block;
	font-size: 15px;
	font-weight: 500;
	color: #fff;
	padding: 5px 21px;
	text-align: center;
	border-radius: 25px;
	margin-bottom: 14px;
	background: var(--theme);

	&:hover {
		background: var(--theme2);
	}
`;

export const NewsArtTitle = styled.h3`
	position: relative;
	display: block;
	font-size: 26px;
	line-height: 30px;
	font-weight: 800;
	margin-bottom: 12px;
`;

export const NewsArtTitleLink = styled(Link)`
	display: inline-block;
	color: var(--theme2);

	&:hover {
		color: var(--theme);
	}
`;

export const NewsArtInfoUl = styled.ul`
	position: relative;
	margin-bottom: 14px !important;
	list-style: none;
	padding: 0px;
	margin: 0px;

	&::after {
		display: block;
		clear: both;
		content: '';
	}
`;

export const NewsArtInfoLi = styled.li`
	list-style: none;
	padding: 0px;
	margin: 0px;
	position: relative;
	display: inline-block;
	font-size: 15px;
	color: #808080;
`;

export const NewsArtInfoLiSpan = styled.span`
	font-weight: 600;
`;

export const NewsArtInfoLiLink = styled(Link)`
	display: inline-block;
	color: var(--theme2);
	font-weight: 600;

	&:hover {
		color: var(--theme);
	}
`;

export const NewsArtDescription = styled.p`
	margin-bottom: 22px;
	font-weight: 600;
	letter-spacing: 0.5px;
`;

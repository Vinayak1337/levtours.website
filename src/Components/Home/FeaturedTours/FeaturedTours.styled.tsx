import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HomeSectionContainer } from '../../../Pages/Home/Home.styled';

export const FeaturedToursContainer = styled(HomeSectionContainer)`
	padding-top: 170px;
`;

export const FeaturedToursPattern = styled.div<{ imgUrl: string }>`
	position: absolute;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 121px;
	background-size: cover;
	background-repeat: no-repeat;
	background-image: url(${({ imgUrl }) => imgUrl});
`;

export const FeaturedToursContent = styled.div`
	position: relative;
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
	margin-bottom: 30px;

	@media (min-width: 576px) {
		flex: 0 0 100%;
		max-width: 100%;
	}

	@media (min-width: 768px) {
		flex: 0 0 50%;
		max-width: 50%;
	}

	@media (min-width: 992px) {
		flex: 0 0 33.3333%;
		max-width: 33.3333%;
	}
`;

export const FeaturedToursImgBox = styled.figure`
	position: relative;
	display: block;
	overflow: hidden;
	margin: 0px;

	img {
		width: 100%;
	}

	&::before {
		position: absolute;
		content: '';
		width: 100%;
		height: 0%;
		left: 0px;
		top: 0px;
		opacity: 0.8;
		transition: all 500ms ease 0s;
		background: var(--theme);
	}
`;

export const FeaturedToursInnerBox = styled.div`
	position: relative;
	display: block;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 15px 25px 0px;
	background: white;
	border-radius: 10px;
	overflow: hidden;

	&:hover {
		${FeaturedToursImgBox} {
			&::before {
				height: 100%;
			}
		}
	}
`;

export const FeaturedToursLink = styled(Link)`
	position: absolute;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
	font-size: 0px;
	color: #fff;
	z-index: 1;
`;

export const FeaturedToursLowerContent = styled.div`
	position: relative;
	padding: 33px 35px 40px 40px;
`;

export const FeaturedToursTitleLink = styled(Link)`
	display: inline-block;
	color: #061a3a;
`;

export const FeaturedToursTitle = styled.h3`
	display: block;
	font-size: 24px;
	line-height: 30px;
	font-weight: 700;
	margin-bottom: 5px;
	font-family: sans-serif;

	&:hover {
		${FeaturedToursTitleLink} {
			color: var(--theme);
		}
	}
`;

export const FeaturedToursPrice = styled.h4`
	display: block;
	font-size: 22px;
	line-height: 28px;
	font-weight: 700;
	margin-bottom: 22px;
	color: var(--theme);
	font-family: sans-serif;
`;

export const FeaturedToursPriceSpan = styled.span`
	font-size: 15px;
	font-weight: 600;
	color: #808080;
`;

export const FeaturedToursInfo = styled.ul`
	position: relative;
	display: block;
	background: #f5f7f8;
	padding: 10px 10px 9px 14px;
	border-radius: 5px;
	margin: 0px;
	margin-bottom: 22px;
	list-style: none;

	&::after {
		display: block;
		clear: both;
		content: '';
	}
`;

export const FeaturedToursInfoContent = styled.li`
	list-style: none;
	padding: 0px;
	position: relative;
	float: left;
	font-size: 15px;
	color: #808080;
	font-weight: 500;
	padding-left: 24px;
	margin-right: 35px;

	&:last-child {
		margin: 0px;
	}
`;

export const FeaturedToursInfoIcon = styled.i`
	position: absolute;
	height: 20px;
	width: 20px;
	left: 0px;
	top: 0px;
	margin-right: 5px;
	fill: #c7c7c7;
`;

export const FeaturedToursDescription = styled.p`
	margin-bottom: 21px;
	font-family: sans-serif;
`;

export const FeaturedToursBtnLink = styled(Link)`
	position: relative;
	display: inline-block;
	font-size: 15px;
	line-height: 26px;
	color: var(--theme2);
	font-weight: 600;
	border: 1px solid #e4e8e9;
	border-radius: 4px;
	padding: 11px 28px;
	text-align: center;

	&:hover {
		background: var(--theme);
		color: white;
	}
`;

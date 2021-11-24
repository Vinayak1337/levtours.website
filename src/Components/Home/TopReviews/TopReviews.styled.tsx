import styled from 'styled-components';
import { QuoateIcon, RateStarComponent } from '../../../Assets/Images';
import { HomeSectionContainer } from '../../../Pages/Home/Home.styled';

export const TopReviewsContainer = styled(HomeSectionContainer)`
	background: #f5f6f6;
`;

export const TopReviewsCarouselBody = styled.div`
	display: block;
	width: 100%;
	position: relative;
	z-index: 1;
	border-radius: 30px;
`;

export const TopReviewsCarouselOuter = styled.div`
	overflow: visible;
	position: relative;
	border-radius: 30px;
`;

export const TopRevCarsouselItem = styled.div`
	position: relative;
	min-height: 1px;
	float: left;
	user-select: none;
	margin-left: 30px;
	margin-right: 30px;
	margin-bottom: 100px;
`;

export const TopRevInnerBox = styled.div`
	position: relative;
	display: block;
	background: white;
	padding: 48px 30px 71px 30px;
	border-radius: 10px;
	box-shadow: 0px 10px 40px 0px rgb(0 0 0 / 10%);
`;

export const TopRevRatingUl = styled.ul`
	list-style: none;
	padding: 0px;
	margin: 0px;
	position: relative;
	margin-bottom: 23px;

	&::after {
		display: block;
		clear: both;
		content: '';
	}
`;

export const TopRevRatingLi = styled.li`
	position: relative;
	display: inline-block;
	font-size: 18px;
	list-style: none;
	padding: 0px;
	margin: 0px;
	color: #ffab01;
`;

export const TopRevRatingIcon = styled(RateStarComponent)`
	fill: #ffab01;
`;

export const TopRevDescriptionBox = styled.div`
	position: relative;
	margin-bottom: 23px;
`;

export const TopRevDescription = styled.p`
	font-size: 16px;
	line-height: 30px;
	font-weight: 600;
`;

export const TopRevQuoteIcon = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 59px;
	height: 41px;
	background-repeat: no-repeat;
	background-image: url(${QuoateIcon});
`;

export const TopRevAuthorName = styled.h4`
	position: relative;
	display: block;
	font-size: 20px;
	line-height: 28px;
	font-weight: 700;
	margin-bottom: 0px;
`;

export const TopRevAuthoDesignation = styled.span`
	position: relative;
	display: block;
	font-size: 15px;
	font-weight: 500;
`;

export const TopRevAuthoImgBox = styled.figure`
	position: absolute;
	left: 37.5%;
	transform: translateX(-50%);
	bottom: -47px;
	width: 95px;
	height: 95px;
	background: #ffffff;
	padding: 7px;
	border-radius: 50%;
	box-shadow: 0px 20px 40px 0px rgb(6 26 58 / 20%);
`;

export const TopRevAuthoImg = styled.img`
	display: block;
	transform-style: preserve-3d;
	width: 100%;
	border-radius: 50%;
`;

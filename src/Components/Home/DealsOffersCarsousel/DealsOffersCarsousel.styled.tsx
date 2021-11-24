import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DealsOffersContentOuter = styled.div`
	position: relative;
	overflow: hidden;
`;

export const CarsouselItemContainer = styled.div`
	position: relative;
	min-height: 1px;
	float: left;
	user-select: none;
	margin: 0px 15px;
	width: 95%;
`;

export const CarsouselItemBlock = styled.div`
	display: block;
`;

export const CarsouselItemImgBox = styled.figure`
	position: relative;
	display: block;
	overflow: hidden;
	border-radius: 10px;
	margin: 0px;

	&::before {
		position: absolute;
		content: '';
		width: 100%;
		height: 100%;
		background: linear-gradient(
			90deg,
			rgba(0, 0, 0, 0.6) 10%,
			rgba(0, 0, 0, 0) 100%
		);
		bottom: 0px;
		right: 0px;
		z-index: 1;
	}
`;

export const CarsouselItemImg = styled.img`
	width: 100%;
	border-radius: 10px;
	transition: all 500ms ease;
	display: block;
	transform-style: preserve-3d;
`;

export const CarsouselItemInnerBox = styled.div`
	position: relative;
	display: block;
	border-radius: 10px;
	overflow: hidden;

	&:hover {
		${CarsouselItemImg} {
			transform: scale(1.05);
		}
	}
`;

export const CarsouselContentBox = styled.div`
	position: absolute;
	left: 0px;
	top: 0px;
	right: 0px;
	width: 100%;
	height: 100%;
	z-index: 2;
`;

export const CarsouselItemTag = styled.span`
	position: absolute;
	display: inline-block;
	top: 30px;
	right: 30px;
	background: white;
	font-size: 15px;
	font-weight: 500;
	color: var(--theme2);
	text-align: center;
	padding: 4px 20px 2px 20px;
	border-radius: 0px 10px 0px 10px;
	box-shadow: 0px 10px 15px 0px rgba(6, 26, 58, 0.1);
`;

export const CarsouselItemName = styled.h3`
	position: absolute;
	left: 30px;
	bottom: 22px;
	display: inline-block;
	font-size: 24px;
	line-height: 32px;
	color: white;
	font-weight: 600;
`;

export const CarsouselItemLink = styled(Link)`
	display: inline-block;
	color: #ffffff;
`;

export const CarsouselItemPrice = styled.h4`
	position: absolute;
	right: 30px;
	bottom: 22px;
	font-size: 24px;
	line-height: 32px;
	font-weight: 600;
	color: var(--theme);
`;

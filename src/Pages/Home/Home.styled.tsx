import styled from 'styled-components';

export const HomeSectionContainer = styled.section`
	position: relative;
	text-align: center;
	width: 100%;
	padding: 114px 0px 120px 0px;
`;

export const HomeContentRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-right: -15px;
	margin-left: -15px;

	&::after {
		display: block;
		clear: both;
		content: '';
	}
`;

export const HomeTitleContainer = styled.div`
	position: relative;
	display: block;
	margin-bottom: 50px;
	text-align: center;

	@media only screen and (max-width: 767px) {
		margin-bottom: 30px;
	}
`;

export const HomeTitleTag = styled.p`
	font-family: sans-serif;
	position: relative;
	display: block;
	font-size: 1.06rem;
	line-height: 28px;
	color: #808080;
	font-weight: 600;
	text-transform: uppercase;
	margin-bottom: 2px;
`;

export const HomeTitle = styled.h2`
	position: relative;
	display: block;
	font-size: 3.13rem;
	line-height: 60px;
	font-family: 'Playfair Display', serif;
	font-weight: 900;

	@media only screen and (max-width: 767px) {
		font-size: 36px;
		line-height: 45px;
	}

	@media only screen and (max-width: 399px) {
		font-size: 30px;
		line-height: 38px;
	}
`;

export const HomeFadeInUpAnimation = styled.div`
	animation-duration: 1s;
	animation-fill-mode: both;
	animation-name: fadeInUp;

	@keyframes fadeInUp {
		0% {
			opacity: 0;
			transform: translateY(20px);
		}
		100% {
			opacity: 1;
			transform: translateY(0px);
		}
	}
`;

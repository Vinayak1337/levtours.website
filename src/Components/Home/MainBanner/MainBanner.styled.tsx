import styled from 'styled-components';

export const MainBannerContainer = styled.section`
	position: relative;
	background: white;
`;

export const MainBannerRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-right: -15px;
	margin-left: -15px;
	align-items: center !important;

	&::after {
		display: block;
		clear: both;
		content: '';
	}
`;

export const MainBannerContentContainer = styled.div`
	position: relative;
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;

	@media (min-width: 576px) {
		flex: 0 0 100%;
		max-width: 100%;
	}

	@media (min-width: 768px) {
		flex: 0 0 100%;
		max-width: 100%;
	}

	@media (min-width: 992px) {
		flex: 0 0 50%;
		max-width: 50%;
	}
`;

export const MainBannerContentheading = styled.h2`
	position: relative;
	display: block;
	font-size: 60px;
	line-height: 70px;
	font-family: 'Playfair Display', sans-serif;
	font-weight: 900;
	margin-bottom: 34px;
	text-shadow: 5px 9px rgb(0 0 0 / 10%);
`;

export const MainBannerContentPara = styled.p`
	display: block;
	font-size: 24px;
	line-height: 30px;
	color: #3a4760;
	font-weight: 600;
	margin-bottom: 44px;
`;

export const MainBannerImgContainer = styled.div`
	position: relative;
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;

	@media (min-width: 576px) {
		flex: 0 0 100%;
		max-width: 100%;
	}

	@media (min-width: 768px) {
		flex: 0 0 100%;
		max-width: 100%;
	}

	@media (min-width: 992px) {
		flex: 0 0 50%;
		max-width: 50%;
	}
`;

export const MainBannerImgBox = styled.figure`
	position: relative;
	display: block;
	margin-right: -108px;
`;

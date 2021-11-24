import styled from 'styled-components';

export const HomeSpecialsContentContainer = styled.div`
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
		flex: 0 0 25%;
		max-width: 25%;
	}
`;

export const HomeSpecialsImgBox = styled.figure`
	position: relative;
	display: block;
	overflow: hidden;
	margin: 0px;

	&::before {
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: 1;
		display: block;
		content: '';
		width: 0;
		height: 0;
		background: rgba(255, 255, 255, 0.2);
		border-radius: 0%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}

	@keyframes circle {
		0% {
			opacity: 1;
		}
		40% {
			opacity: 1;
		}
		100% {
			width: 200%;
			height: 200%;
			opacity: 0;
		}
	}
`;

export const HomeSpecialsImg = styled.img`
	width: 100%;
	transform: scale(1.05);
	transition: all 500ms ease;
`;

export const HomeSpecialsInnerBox = styled.div`
	position: relative;
	display: block;
	border-radius: 10px;
	overflow: hidden;
	background: white;
	box-shadow: 0px 15px 25px 0px rgb(0 0 0 / 8%);

	&:hover {
		${HomeSpecialsImgBox}:before {
			animation: circle 0.95s;
		}

		${HomeSpecialsImg} {
			transform: scale(1);
		}
	}
`;

export const HomeSpecialsLowerContent = styled.div`
	position: relative;
	display: block;
	padding: 60px 15px 25px 15px;
`;

export const HomeSpecialsIconBox = styled.div`
	position: absolute;
	left: 50%;
	top: -40px;
	transform: translateX(-50%);
	width: 80px;
	height: 80px;
	line-height: 80px;
	background: #fff;
	text-align: center;
	border-radius: 50%;
	font-size: 40px;
	box-shadow: 0px 15px 20px 0px rgb(0 0 0 / 6%);
	color: var(--theme);
	font-family: 'icomoon' !important;
	font-style: normal;
	font-weight: normal;
	font-variant: normal;
	text-transform: none;
`;

export const HomeSpecialsIcon = styled.i`
	position: relative;
	fill: var(--theme);
	height: 45px;
	width: 45px;
	top: 10px;
`;

export const HomeSpecialsContentText = styled.h4`
	display: block;
	font-size: 20px;
	line-height: 24px;
	font-weight: 700;
	font-family: sans-serif;
`;

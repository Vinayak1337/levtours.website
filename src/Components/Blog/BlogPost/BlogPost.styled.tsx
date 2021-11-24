import styled from 'styled-components';

export const BlogPostBlock = styled.div`
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
		flex: 0 0 50%;
		max-width: 50%;
	}
`;

export const BlogPostFade = styled.div`
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
			transform: translateY(0);
		}
	}
`;

export const BlogPostInnerBox = styled.div`
	margin-bottom: 60px;
	position: relative;
	display: block;
`;

export const BlogPostImageBox = styled.figure`
	position: relative;
	display: block;
	overflow: hidden;
	border-radius: 10px;
	background: #ff7c5b;
`;

export const BlogPostImg = styled.img`
	width: 100%;
	border-radius: 10px;
	transition: all 500ms ease;
`;

export const BlogPostLowerContent = styled.div`
	position: relative;
	padding-top: 30px;
	width: 200px;

	h3 {
		position: relative;
		display: block;
		font-size: 26px;
		line-height: 30px;
		font-weight: 600;
		margin-bottom: 12px;

		a {
			display: inline-block;
			color: #061a3a;
		}
	}

	p {
		margin-bottom: 22px;
		font-weight: 600;
	}
`;

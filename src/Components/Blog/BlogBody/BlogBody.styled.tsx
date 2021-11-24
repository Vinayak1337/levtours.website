import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const BlogSection = styled.section`
	position: relative;
	padding: 150px 0px;
`;

export const BlogRow = styled.div`
	display: -ms-flexbox;
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

export const BlogContentLeft = styled.div`
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
		-ms-flex: 0 0 100%;
		flex: 0 0 100%;
		max-width: 100%;
	}

	@media (min-width: 992px) {
		-ms-flex: 0 0 66.666667%;
		flex: 0 0 66.666667%;
		max-width: 66.666667%;
	}
`;

export const BlogPaginationUl = styled.ul`
	padding: 0px;
	margin: 0px;
	position: relative;
	display: block;
	list-style: none;
	border-radius: 0.25rem;

	&::after {
		display: block;
		clear: both;
		content: '';
	}
`;

export const BlogPaginationLi = styled.li`
	list-style: none;
	padding: 0px;
	margin: 0px;
	position: relative;
	float: left;
	margin-right: 10px;

	&:last-child {
		margin: 0px !important;
	}
`;

const linkStyle = css`
	color: #fff;
	background: var(--theme);
	box-shadow: 0px 15px 25px 0px rgba(255, 124, 91, 0.3);
`;

export const BlogPaginationLink = styled(Link)<{ current?: string }>`
	position: relative;
	display: inline-block;
	font-size: 17px;
	font-weight: 700;
	font-family: 'Work Sans', sans-serif;
	height: 50px;
	width: 50px;
	line-height: 50px;
	background: #ffffff;
	text-align: center;
	color: #061a3a;
	border-radius: 50%;
	z-index: 1;
	box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.08);
	transition: all 500ms ease;

	&:hover {
		${linkStyle}
	}

	${({ current }) => (current ? linkStyle : '')}
`;

import React from 'react';
import styled from 'styled-components';
import { blogsBgImg } from '../../../Assets/Images/.';
import { AutoContainer } from '../../../App/App.styled';

const BlogHeadSection = styled.section<{ image: string }>`
	position: relative;
	width: 100%;
	padding: 96px 0px 102px 0px;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	background-image: url(${({ image }) => image});
	text-align: center;

	&::before {
		position: absolute;
		content: '';
		background: #091122;
		width: 100%;
		height: 100%;
		left: 0px;
		top: 0px;
		right: 0px;
		opacity: 0.5;
	}
`;

const BlogsHeaderTitle = styled.h1`
	font-size: 50px;
	line-height: 60px;
	font-family: 'Playfair Display', sans-serif;
	color: #ffffff;
	font-weight: 900;
	margin-bottom: 14px;
`;

const BlogHeader = () => (
	<BlogHeadSection image={blogsBgImg}>
		<AutoContainer>
			<div>
				<BlogsHeaderTitle>Blog</BlogsHeaderTitle>
			</div>
		</AutoContainer>
	</BlogHeadSection>
);
export default BlogHeader;

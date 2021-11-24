import styled, { css } from 'styled-components';

export const FooterContainer = styled.footer`
	position: relative;
	background: rgb(20, 22, 28);
`;

export const FooterUlCss = css`
	list-style: none;
	padding: 0px;
	margin: 0px;
`;

export const FooterUl = styled.ul`
	${FooterUlCss}

	&::after {
		display: block;
		clear: both;
		content: '';
	}
`;

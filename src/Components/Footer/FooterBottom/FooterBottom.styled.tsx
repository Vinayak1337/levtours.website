import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FooterUl, FooterUlCss } from '../Footer.styled';

export const FooterBottomContainer = styled.div`
	position: relative;
	padding: 28px 0px;
	background: rgb(13, 14, 18);
	width: 100%;
`;

export const FooterBottomInnerContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const FooterBottomCopyright = styled.p`
	float: left;
	color: #aeb1b8;
	font-size: 16px;
	font-weight: bold;
	letter-spacing: 0.3px;

	${FooterUl} {
		float: right;
	}
`;

export const FooterBottomCopyrightLink = styled(Link)`
	color: #aeb1b8;

	&:hover {
		color: var(--theme);
	}
`;

export const FooterBottomLi = styled.li`
	position: relative;
	display: inline-block;
	font-size: 15px;
	line-height: 26px;
	color: #aeb1b8;
	margin-right: 25px !important;

	&:first-child {
		&::before {
			position: absolute;
			content: '';
			background: #aeb1b8;
			width: 1px;
			height: 15px;
			top: 6px;
			right: -15px;
		}
	}

	&:last-child {
		margin: 0px !important;
	}

	${FooterUlCss}
`;

export const FooterBottomLiLink = styled(Link)`
	display: inline-block;
	color: #aeb1b8;

	&:hover {
		color: var(--theme);
	}
`;

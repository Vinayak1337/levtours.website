import styled from 'styled-components';

export const ContactWidgetContainer = styled.div`
	@media only screen and (max-width: 991px) {
		margin: 0px 0px 30px 0px !important;
	}
	@media only screen and (max-width: 1200px) {
		margin: 0px !important;
	}
`;

export const ContactWidgetTitleContainer = styled.div`
	position: relative;
	display: block;
	margin-bottom: 27px;
	margin-top: 27px;
`;

export const ContactWidgetTitle = styled.h3`
	font-size: 24px;
	line-height: 32px;
	color: #ffffff;
	font-weight: 600;
`;

export const ContactWidgetLi = styled.li`
	position: relative;
	display: block;
	font-size: 16px;
	line-height: 26px;
	color: #aeb1b8;
	padding-left: 30px;
	margin-bottom: 19px;

	&:first-child {
		i {
			top: 6px;
		}
	}

	&:last-child {
		margin-bottom: 0px;
	}
`;

export const ContactWidgetLiIcon = styled.i`
	position: absolute;
	left: 0px;
	top: 2px;
	font-size: 20px;
	color: var(--theme);
`;

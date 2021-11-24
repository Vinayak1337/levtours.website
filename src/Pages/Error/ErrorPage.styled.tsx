import styled from 'styled-components';

export const ErrorPageContainer = styled.div`
	position: relative;
	height: 500px;
	max-height: 100%;
	width: 100%;
`;

export const ErrorPageContent = styled.div`
	display: inline-block;
	position: relative;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const ErrorPageSpan = styled.span`
	content: '';
	border-right: 1px solid black;
	padding: 0.5em 0px;
	margin: 0px 10px;
`;

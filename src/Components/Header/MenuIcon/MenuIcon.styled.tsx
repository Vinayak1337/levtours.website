import { IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import styled from 'styled-components';

export const MenuIconContainer = styled.div`
	padding-right: 10px;
`;

export const MenuIconLogo = styled(Menu)``;

export const StyledIconButton = styled(IconButton)<{ scrolling?: string }>`
	height: fit-content;
	padding: 10px !important;

	${({ scrolling }) =>
		scrolling
			? `
	${MenuIconLogo} {
		color: white;
	}
	`
			: ''}
`;

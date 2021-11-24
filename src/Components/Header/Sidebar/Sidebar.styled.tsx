import styled, { css } from 'styled-components';
import { CloseIconComponent } from '../../../Assets/Images';
import { NavbarContainer } from '../Navbar/Navbar.styled';
import { NavbarLink } from '../NavbarItem/NavbarItem.styled';

const visibleBackdrop = css`
	opacity: 0.7;
	visibility: visible;
	right: 100%;
`;

export const SidebarBackdrop = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	background: #000;
	transition: all 1s ease;
`;

const rotateCloseBtn = css`
	transform: rotate(360deg);
`;

export const SidebarCloseBtn = styled(CloseIconComponent)`
	position: absolute;
	right: 25px;
	top: 25px;
	width: 32px;
	height: 32px;
	cursor: pointer;
	z-index: 10;
	transition: all 0.9s ease;
`;

const visibleMenu = css`
	opacity: 1;
	visibility: visible;
	transition: all 1s ease;
	transform: translateX(0%);
`;

export const SidebarMenu = styled.nav`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	max-height: 100%;
	overflow-y: auto;
	background: var(--theme2);
	padding: 0px;
	z-index: 5;
	opacity: 0;
	visibility: hidden;
	border-radius: 0;
	transform: translateX(100%);
	transform: all 1s ease !important;

	${NavbarContainer} {
		margin-top: 100px;
		flex-direction: column;
		align-items: center;
		gap: 0px;

		${NavbarLink} {
			color: white;
			text-align: left;
			text-transform: uppercase;
			padding: 15px 25px;
			width: 250px;
			border-bottom: 1px solid rgba(250, 250, 250, 0.1);
		}
	}
`;

const visibleContainer = css`
	opacity: 1;
	visibility: visible;
`;

export const SidebarContainer = styled.div<{ visible?: string }>`
	position: fixed;
	right: 0;
	top: 0;
	width: 300px;
	padding-right: 30px;
	max-width: 100%;
	height: 100%;
	z-index: 99999;
	opacity: 0;
	visibility: hidden;
	transition: all 1s ease;

	${({ visible }) =>
		visible
			? `
        ${visibleContainer}
        ${SidebarMenu} {
            ${visibleMenu}
        }
        ${SidebarCloseBtn} {
            ${rotateCloseBtn}
        }
        ${SidebarBackdrop} {
            ${visibleBackdrop}
        }
    `
			: ''}
`;

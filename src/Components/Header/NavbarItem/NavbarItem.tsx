import { FC } from 'react';
import { NavbarLink } from './NavbarItem.styled';

const NavbarItem: FC<NavbarItemProps> = ({ label, to }) => (
	<NavbarLink to={to}>
		{label}
		<span />
	</NavbarLink>
);

export default NavbarItem;

interface NavbarItemProps {
	label: string;
	to: string;
}

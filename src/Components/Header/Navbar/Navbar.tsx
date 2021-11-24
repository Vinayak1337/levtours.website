import { FC } from 'react';
import NavbarItem from '../NavbarItem/NavbarItem';
import { NavbarContainer } from './Navbar.styled';

const Navbar: FC = () => (
	<NavbarContainer>
		<NavbarItem label='Home' to='/' />
		<NavbarItem label='Tours' to='/tours' />
		<NavbarItem label='Film Services' to='/' />
		<NavbarItem label='Castles' to='/' />
		<NavbarItem label='Boats and Yachts' to='/' />
		<NavbarItem label='Blog' to='/blogs' />
		<NavbarItem label='Contact' to='/' />
	</NavbarContainer>
);

export default Navbar;

import { FC } from 'react';
import {
	levToursWhiteTransBg,
	levToursBlackTransBg
} from '../../../Assets/Images';
import { LogoLinkContainer } from './HeaderLogo.styled';

const HeaderLogo: FC<HeaderLogoProps> = ({ scrolling }) => (
	<LogoLinkContainer to='/'>
		<img src={scrolling ? levToursWhiteTransBg : levToursBlackTransBg} alt='' />
	</LogoLinkContainer>
);

export default HeaderLogo;

interface HeaderLogoProps {
	scrolling: string | undefined;
}

import { FC } from 'react';
import { FooterContainer } from './Footer.styled';
import FooterBottom from './FooterBottom/FooterBottom';
import FooterTop from './FooterTop/FooterTop';

const Footer: FC = () => (
	<FooterContainer>
		<FooterTop />
		<FooterBottom />
	</FooterContainer>
);

export default Footer;

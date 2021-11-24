import {
	Facebook,
	Google,
	Instagram,
	LinkedIn,
	Twitter
} from '@mui/icons-material';
import { FC } from 'react';
import { levToursFooterLogo } from '../../../Assets/Images';
import { FooterUl } from '../Footer.styled';
import {
	LogoWidgetContainer,
	LogoContainer,
	Logo,
	LogoTextContainer,
	LogoText,
	SocialLinkLi,
	SocialLinkEl,
	SocialLinkElIcon
} from './FooterLogoWidget.styled';

const FooterLogoWidget: FC = () => (
	<LogoWidgetContainer>
		<LogoContainer>
			<Logo alt='' src={levToursFooterLogo} />
		</LogoContainer>
		<LogoTextContainer>
			<LogoText>
				Lorem ipsum dolor amet consetetur adi pisicing elit sed eiusm tempor in
				cididunt ut labore dolore magna aliqua enim.
			</LogoText>
		</LogoTextContainer>
		<FooterUl>
			<SocialLinkLi>
				<SocialLinkEl to='/'>
					<SocialLinkElIcon as={Facebook} />
				</SocialLinkEl>
			</SocialLinkLi>
			<SocialLinkLi>
				<SocialLinkEl to='/'>
					<SocialLinkElIcon as={Twitter} />
				</SocialLinkEl>
			</SocialLinkLi>
			<SocialLinkLi>
				<SocialLinkEl to='/'>
					<SocialLinkElIcon as={Instagram} />
				</SocialLinkEl>
			</SocialLinkLi>
			<SocialLinkLi>
				<SocialLinkEl to='/'>
					<SocialLinkElIcon as={Google} />
				</SocialLinkEl>
			</SocialLinkLi>
			<SocialLinkLi>
				<SocialLinkEl to='/'>
					<SocialLinkElIcon as={LinkedIn} />
				</SocialLinkEl>
			</SocialLinkLi>
		</FooterUl>
	</LogoWidgetContainer>
);

export default FooterLogoWidget;

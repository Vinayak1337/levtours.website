import { FC } from 'react';
import { AutoContainer } from '../../../App/App.styled';
import { FooterUl } from '../Footer.styled';
import {
	FooterBottomContainer,
	FooterBottomCopyright,
	FooterBottomCopyrightLink,
	FooterBottomInnerContainer,
	FooterBottomLi,
	FooterBottomLiLink
} from './FooterBottom.styled';

const FooterBottom: FC = () => (
	<FooterBottomContainer>
		<AutoContainer>
			<FooterBottomInnerContainer>
				<FooterBottomCopyright>
					<FooterBottomCopyrightLink to='/'>
						Lev Tours
					</FooterBottomCopyrightLink>{' '}
					© 2021 All Right Reserved
				</FooterBottomCopyright>
				<FooterUl>
					<FooterBottomLi>
						<FooterBottomLiLink to='/terms'>
							Terms of Service
						</FooterBottomLiLink>
					</FooterBottomLi>
					<FooterBottomLi>
						<FooterBottomLiLink to='/policy'>Privacy Policy</FooterBottomLiLink>
					</FooterBottomLi>
				</FooterUl>
			</FooterBottomInnerContainer>
		</AutoContainer>
	</FooterBottomContainer>
);

export default FooterBottom;

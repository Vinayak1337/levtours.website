import { FC } from 'react';
import { footerBgImg } from '../../../Assets/Images';
import {
	FooterTopBgImg,
	FooterTopContainer,
	FooterTopContentContainer,
	FooterTopRowContainer
} from './FooterTop.styled';
import FooterLogoWidget from '../FooterLogoWidget/FooterLogoWidget';
import FooterServicesWidget from '../FooterServicesWidget/FooterServicesWidget';
import FooterGalleryWidget from '../FooterGalleryWidget/FooterGalleryWidget';
import FooterContactWidget from '../FooterContactWidget/FooterContactWidget';
import { AutoContainer } from '../../../App/App.styled';

const FooterTop: FC = () => (
	<FooterTopContainer>
		<FooterTopBgImg imageUrl={footerBgImg} />
		<AutoContainer>
			<FooterTopRowContainer>
				<FooterTopContentContainer>
					<FooterLogoWidget />
				</FooterTopContentContainer>
				<FooterTopContentContainer>
					<FooterServicesWidget />
				</FooterTopContentContainer>
				<FooterTopContentContainer>
					<FooterGalleryWidget />
				</FooterTopContentContainer>
				<FooterTopContentContainer>
					<FooterContactWidget />
				</FooterTopContentContainer>
			</FooterTopRowContainer>
		</AutoContainer>
	</FooterTopContainer>
);

export default FooterTop;

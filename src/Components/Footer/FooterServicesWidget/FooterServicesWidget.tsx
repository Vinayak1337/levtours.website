import { FC } from 'react';
import { FooterUl } from '../Footer.styled';
import {
	ServicesWidgetContainer,
	ServicesWidgetLi,
	ServicesWidgetLiLink,
	ServicesWidgetTitle,
	ServicesWidgetTitleContainer
} from './FooterServicesWidget.styled';

const FooterServicesWidget: FC = () => (
	<ServicesWidgetContainer>
		<ServicesWidgetTitleContainer>
			<ServicesWidgetTitle>Services</ServicesWidgetTitle>
		</ServicesWidgetTitleContainer>
		<FooterUl>
			<ServicesWidgetLi>
				<ServicesWidgetLiLink to='/about'>About Us</ServicesWidgetLiLink>
			</ServicesWidgetLi>
			<ServicesWidgetLi>
				<ServicesWidgetLiLink to='/tours'>Tours</ServicesWidgetLiLink>
			</ServicesWidgetLi>
			<ServicesWidgetLi>
				<ServicesWidgetLiLink to='/film-services'>
					Film Services
				</ServicesWidgetLiLink>
			</ServicesWidgetLi>
			<ServicesWidgetLi>
				<ServicesWidgetLiLink to='/blogs'>Our Blog</ServicesWidgetLiLink>
			</ServicesWidgetLi>
			<ServicesWidgetLi>
				<ServicesWidgetLiLink to='/contact'>Contact Us</ServicesWidgetLiLink>
			</ServicesWidgetLi>
		</FooterUl>
	</ServicesWidgetContainer>
);

export default FooterServicesWidget;

import { Mail, Mic, Room } from '@mui/icons-material';
import { FC } from 'react';
import { FooterUl } from '../Footer.styled';
import {
	ContactWidgetContainer,
	ContactWidgetLi,
	ContactWidgetLiIcon,
	ContactWidgetTitle,
	ContactWidgetTitleContainer
} from './FooterContactWidget.styled';

const FooterContactWidget: FC = () => (
	<ContactWidgetContainer>
		<ContactWidgetTitleContainer>
			<ContactWidgetTitle>Contact</ContactWidgetTitle>
		</ContactWidgetTitleContainer>
		<FooterUl>
			<ContactWidgetLi>
				<ContactWidgetLiIcon as={Room} />
				<span>Flat 123, Street Name, city, Ukraine</span>
			</ContactWidgetLi>
			<ContactWidgetLi>
				<ContactWidgetLiIcon as={Mic} />
				<span>9848012345</span>
			</ContactWidgetLi>
			<ContactWidgetLi>
				<ContactWidgetLiIcon as={Mail} />
				<span>info@lev.tours</span>
			</ContactWidgetLi>
		</FooterUl>
	</ContactWidgetContainer>
);

export default FooterContactWidget;

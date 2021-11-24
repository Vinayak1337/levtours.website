import { FC } from 'react';
import {
	GalleryImg1,
	GalleryImg2,
	GalleryImg3,
	GalleryImg4,
	GalleryImg5,
	GalleryImg6
} from '../../../Assets/Images';
import { FooterUl } from '../Footer.styled';
import {
	GalleryWidgeImageBox,
	GalleryWidgeImg,
	GalleryWidgetContainer,
	GalleryWidgetLi,
	GalleryWidgetLiLink,
	GalleryWidgetTitle,
	GalleryWidgetTitleContainer
} from './FooterGalleryWidget.styled';

const FooterGalleryWidget: FC = () => (
	<GalleryWidgetContainer>
		<GalleryWidgetTitleContainer>
			<GalleryWidgetTitle>Gallery</GalleryWidgetTitle>
		</GalleryWidgetTitleContainer>
		<FooterUl>
			<GalleryWidgetLi>
				<GalleryWidgetLiLink to='/gallery'>
					<GalleryWidgeImageBox>
						<GalleryWidgeImg alt='' src={GalleryImg1} />
					</GalleryWidgeImageBox>
				</GalleryWidgetLiLink>
			</GalleryWidgetLi>
			<GalleryWidgetLi>
				<GalleryWidgetLiLink to='/gallery'>
					<GalleryWidgeImageBox>
						<GalleryWidgeImg alt='' src={GalleryImg2} />
					</GalleryWidgeImageBox>
				</GalleryWidgetLiLink>
			</GalleryWidgetLi>
			<GalleryWidgetLi>
				<GalleryWidgetLiLink to='/gallery'>
					<GalleryWidgeImageBox>
						<GalleryWidgeImg alt='' src={GalleryImg3} />
					</GalleryWidgeImageBox>
				</GalleryWidgetLiLink>
			</GalleryWidgetLi>
			<GalleryWidgetLi>
				<GalleryWidgetLiLink to='/gallery'>
					<GalleryWidgeImageBox>
						<GalleryWidgeImg alt='' src={GalleryImg4} />
					</GalleryWidgeImageBox>
				</GalleryWidgetLiLink>
			</GalleryWidgetLi>
			<GalleryWidgetLi>
				<GalleryWidgetLiLink to='/gallery'>
					<GalleryWidgeImageBox>
						<GalleryWidgeImg alt='' src={GalleryImg5} />
					</GalleryWidgeImageBox>
				</GalleryWidgetLiLink>
			</GalleryWidgetLi>
			<GalleryWidgetLi>
				<GalleryWidgetLiLink to='/gallery'>
					<GalleryWidgeImageBox>
						<GalleryWidgeImg alt='' src={GalleryImg6} />
					</GalleryWidgeImageBox>
				</GalleryWidgetLiLink>
			</GalleryWidgetLi>
		</FooterUl>
	</GalleryWidgetContainer>
);

export default FooterGalleryWidget;

import { FC } from 'react';
import { AutoContainer } from '../../../App/App.styled';
import {
	FeatureImg1,
	FeatureImg2,
	FeatureImg3,
	FeatureImg4,
	PersonPinComponent,
	PersonsComponent,
	SatisfiedComponent,
	VolunteerComponent
} from '../../../Assets/Images';
import {
	HomeSpecialsContentContainer,
	HomeSpecialsContentText,
	HomeSpecialsIcon,
	HomeSpecialsIconBox,
	HomeSpecialsImg,
	HomeSpecialsImgBox,
	HomeSpecialsInnerBox,
	HomeSpecialsLowerContent
} from './HomeSpecial.styled';
import {
	HomeContentRow,
	HomeFadeInUpAnimation,
	HomeSectionContainer,
	HomeTitle,
	HomeTitleContainer,
	HomeTitleTag
} from '../../../Pages/Home/Home.styled';

const HomeSpecialsData = [
	{
		image: FeatureImg1,
		icon: PersonPinComponent,
		text: '200+ Our Guides in Ukraine'
	},
	{
		image: FeatureImg2,
		icon: VolunteerComponent,
		text: '100% Trusted Tour Agency'
	},
	{
		image: FeatureImg3,
		icon: PersonsComponent,
		text: '12+ Years of Travel Experience'
	},
	{
		image: FeatureImg4,
		icon: SatisfiedComponent,
		text: '98% of Our Travelers are Happy'
	}
];

const HomeSpecials: FC = () => (
	<HomeSectionContainer>
		<AutoContainer>
			<HomeTitleContainer>
				<HomeTitleTag>Lev Tours Specials</HomeTitleTag>
				<HomeTitle>Why Travel with Lev Tours?</HomeTitle>
			</HomeTitleContainer>
			<HomeContentRow>
				{HomeSpecialsData.map(({ image, text, icon }, i) => (
					<HomeSpecialsContentContainer key={`HomeSpecials${i}`}>
						<HomeFadeInUpAnimation>
							<HomeSpecialsInnerBox>
								<HomeSpecialsImgBox>
									<HomeSpecialsImg src={image} alt='' />
								</HomeSpecialsImgBox>
								<HomeSpecialsLowerContent>
									<HomeSpecialsIconBox>
										<HomeSpecialsIcon as={icon} />
									</HomeSpecialsIconBox>
									<HomeSpecialsContentText>{text}</HomeSpecialsContentText>
								</HomeSpecialsLowerContent>
							</HomeSpecialsInnerBox>
						</HomeFadeInUpAnimation>
					</HomeSpecialsContentContainer>
				))}
			</HomeContentRow>
		</AutoContainer>
	</HomeSectionContainer>
);

export default HomeSpecials;

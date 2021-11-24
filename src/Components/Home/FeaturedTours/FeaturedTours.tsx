import { FC } from 'react';
import { ThemeBtn } from '../..';
import { AutoContainer } from '../../../App/App.styled';
import {
	AccessTimeComponent,
	FeaturedTour1,
	FeaturedTour2,
	FeaturedTour3,
	Pattern24
} from '../../../Assets/Images';
import {
	HomeContentRow,
	HomeFadeInUpAnimation,
	HomeTitle,
	HomeTitleContainer,
	HomeTitleTag
} from '../../../Pages/Home/Home.styled';
import {
	FeaturedToursContainer,
	FeaturedToursPattern,
	FeaturedToursContent,
	FeaturedToursInnerBox,
	FeaturedToursImgBox,
	FeaturedToursLink,
	FeaturedToursLowerContent,
	FeaturedToursPrice,
	FeaturedToursPriceSpan,
	FeaturedToursTitle,
	FeaturedToursTitleLink,
	FeaturedToursDescription,
	FeaturedToursInfo,
	FeaturedToursInfoContent,
	FeaturedToursInfoIcon
} from './FeaturedTours.styled';

const FeaturedToursData = [
	{
		image: FeaturedTour1,
		name: 'Trekking in Kyiv',
		price: '170.00',
		person: 1,
		duration: 5,
		description: 'Lorem ipsum dolor amet consectetur adipiscing sed.',
		link: '/'
	},
	{
		image: FeaturedTour2,
		price: '170.00',
		person: 1,
		duration: 5,
		description: 'Lorem ipsum dolor amet consectetur adipiscing sed.',
		link: '/',
		name: 'Sightseeing'
	},
	{
		image: FeaturedTour3,
		price: '170.00',
		person: 1,
		duration: 5,
		description: 'Lorem ipsum dolor amet consectetur adipiscing sed.',
		link: '/',
		name: 'Group Excursion'
	}
];

const FeaturedTours: FC = () => (
	<FeaturedToursContainer>
		<FeaturedToursPattern imgUrl={Pattern24} />
		<AutoContainer>
			<HomeTitleContainer>
				<HomeTitleTag>Modern & Beautiful</HomeTitleTag>
				<HomeTitle>Our Most Popular Adventures</HomeTitle>
			</HomeTitleContainer>
			<HomeContentRow>
				{FeaturedToursData.map(
					({ image, price, person, duration, description, link, name }, i) => (
						<FeaturedToursContent key={`FeaturedTours${i}`}>
							<HomeFadeInUpAnimation>
								<FeaturedToursInnerBox>
									<FeaturedToursImgBox>
										<img src={image} alt='' />
										<FeaturedToursLink to={link} />
									</FeaturedToursImgBox>
									<FeaturedToursLowerContent>
										<FeaturedToursTitle>
											<FeaturedToursTitleLink to='/'>
												{name}
											</FeaturedToursTitleLink>
										</FeaturedToursTitle>
										<FeaturedToursPrice>
											${price}
											<FeaturedToursPriceSpan>
												{' '}
												/ Per {person > 1 ? ` ${person} perople` : ' person'}
											</FeaturedToursPriceSpan>
										</FeaturedToursPrice>
										<FeaturedToursInfo>
											<FeaturedToursInfoContent>
												{duration} Days
												<FeaturedToursInfoIcon as={AccessTimeComponent} />
											</FeaturedToursInfoContent>
										</FeaturedToursInfo>
										<FeaturedToursDescription>
											{description}
										</FeaturedToursDescription>
										<ThemeBtn link={link}>See Details</ThemeBtn>
									</FeaturedToursLowerContent>
								</FeaturedToursInnerBox>
							</HomeFadeInUpAnimation>
						</FeaturedToursContent>
					)
				)}
			</HomeContentRow>
		</AutoContainer>
	</FeaturedToursContainer>
);

export default FeaturedTours;

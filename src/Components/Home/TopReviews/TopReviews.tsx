import { FC } from 'react';
import { AutoContainer } from '../../../App/App.styled';
import { Reviewer1, Reviewer2, Reviewer3 } from '../../../Assets/Images';
import {
	HomeTitle,
	HomeTitleContainer,
	HomeTitleTag
} from '../../../Pages/Home/Home.styled';
import {
	TopReviewsCarouselBody,
	TopReviewsCarouselOuter,
	TopReviewsContainer,
	TopRevCarsouselItem,
	TopRevDescriptionBox,
	TopRevInnerBox,
	TopRevRatingLi,
	TopRevRatingUl,
	TopRevRatingIcon,
	TopRevDescription,
	TopRevQuoteIcon,
	TopRevAuthoDesignation,
	TopRevAuthoImg,
	TopRevAuthoImgBox,
	TopRevAuthorName
} from './TopReviews.styled';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const TopReviewsData = [
	{
		description:
			'Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua ipsum suspen disse ultrices gravida Risus',
		name: 'Amy Johnson',
		designation: 'Traveler',
		image: Reviewer1
	},
	{
		description:
			'Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua ipsum suspen disse ultrices gravida Risus',
		name: 'Mike Hardson',
		designation: 'Traveler',
		image: Reviewer2
	},
	{
		description:
			'Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua ipsum suspen disse ultrices gravida Risus',
		name: 'Luaka Smith',
		designation: 'Traveler',
		image: Reviewer3
	},
	{
		description:
			'Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua ipsum suspen disse ultrices gravida Risus',
		name: 'Amy Johnson',
		designation: 'Traveler',
		image: Reviewer1
	},
	{
		description:
			'Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua ipsum suspen disse ultrices gravida Risus',
		name: 'Mike Hardson',
		designation: 'Traveler',
		image: Reviewer2
	},
	{
		description:
			'Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua ipsum suspen disse ultrices gravida Risus',
		name: 'Luaka Smith',
		designation: 'Traveler',
		image: Reviewer3
	}
];

const responsive = {
	desktop: {
		breakpoint: { max: 6000, min: 1024 },
		items: 3
	},
	tablet: {
		breakpoint: { max: 1024, min: 600 },
		items: 2
	},
	mobile: {
		breakpoint: { max: 600, min: 0 },
		items: 1
	}
};

const TopReviews: FC = () => (
	<TopReviewsContainer>
		<AutoContainer>
			<HomeTitleContainer>
				<HomeTitleTag>Review & Testimonials</HomeTitleTag>
				<HomeTitle>Top Reviews for Lev</HomeTitle>
			</HomeTitleContainer>
			<TopReviewsCarouselBody>
				<TopReviewsCarouselOuter>
					<Carousel
						autoPlay
						autoPlaySpeed={3000}
						transitionDuration={500}
						infinite
						customTransition='all 1s ease 0s'
						responsive={responsive}>
						{TopReviewsData.map(
							({ description, name, designation, image }, i) => (
								<TopRevCarsouselItem key={`TopRev${i}`}>
									<div>
										<TopRevInnerBox>
											<TopRevRatingUl>
												{Array.from(Array(5).keys()).map(v => (
													<TopRevRatingLi key={`RatingStar${v}`}>
														<TopRevRatingIcon />
													</TopRevRatingLi>
												))}
											</TopRevRatingUl>
											<TopRevDescriptionBox>
												<TopRevQuoteIcon />
												<TopRevDescription>{description}</TopRevDescription>
											</TopRevDescriptionBox>
											<div>
												<TopRevAuthorName>{name}</TopRevAuthorName>
												<TopRevAuthoDesignation>
													{designation}
												</TopRevAuthoDesignation>
												<TopRevAuthoImgBox>
													<TopRevAuthoImg src={image} alt='' />
												</TopRevAuthoImgBox>
											</div>
										</TopRevInnerBox>
									</div>
								</TopRevCarsouselItem>
							)
						)}
					</Carousel>
				</TopReviewsCarouselOuter>
			</TopReviewsCarouselBody>
		</AutoContainer>
	</TopReviewsContainer>
);

export default TopReviews;

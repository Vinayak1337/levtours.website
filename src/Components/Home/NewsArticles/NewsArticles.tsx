import { FC } from 'react';
import { Link } from 'react-router-dom';
import { DateTag, ThemeBtn } from '../..';
import { AutoContainer } from '../../../App/App.styled';
import { News1, News2, News3 } from '../../../Assets/Images';
import {
	HomeContentRow,
	HomeFadeInUpAnimation,
	HomeSectionContainer,
	HomeTitle,
	HomeTitleTag
} from '../../../Pages/Home/Home.styled';
import {
	NewsArtCategoryLink,
	NewsArtContentBody,
	NewsArtDescription,
	NewsArtImg,
	NewsArtImgBox,
	NewsArtInfoLi,
	NewsArtInfoLiLink,
	NewsArtInfoLiSpan,
	NewsArtInfoUl,
	NewsArtInnerBox,
	NewsArtLowerContent,
	NewsArtTitle,
	NewsArtTitleContainer,
	NewsArtTitleLink
} from './NewsArticles.styled';

const newsArticlesData = [
	{
		link: '/',
		image: News1,
		dateTag: '5 Mar, 2021',
		category: 'Lifestyle',
		title: 'Lorem Ipsum is the dummy text',
		description:
			'Lorem ipsum dolor sit amet consectur adip icing sed do eiusmod tempor incididunt labore dolore magna aliqua enim.',
		by: 'Eva Green',
		date: 'March 05, 2021'
	},
	{
		link: '/',
		image: News2,
		dateTag: '4 Jun, 2021',
		category: 'Lifestyle',
		title: 'Lorem Ipsum is the dummy text',
		description:
			'Lorem ipsum dolor sit amet consectur adip icing sed do eiusmod tempor incididunt labore dolore magna aliqua enim.',
		by: 'Eva Green',
		date: 'June 04, 2021'
	},
	{
		link: '/',
		image: News3,
		dateTag: '30 Jun, 2021',
		category: 'Lifestyle',
		title: 'Lorem Ipsum is the dummy text',
		description:
			'Lorem ipsum dolor sit amet consectur adip icing sed do eiusmod tempor incididunt labore dolore magna aliqua enim.',
		by: 'Eva Green',
		date: 'June 30, 2021'
	}
];

const NewsArticles: FC = () => (
	<HomeSectionContainer>
		<AutoContainer>
			<NewsArtTitleContainer>
				<HomeTitleTag>News & Articles</HomeTitleTag>
				<HomeTitle>Stay Update with Travio Tips</HomeTitle>
			</NewsArtTitleContainer>
			<HomeContentRow>
				{newsArticlesData.map(
					(
						{ link, image, dateTag, category, title, description, by, date },
						i
					) => (
						<NewsArtContentBody key={`news_article${i}`}>
							<HomeFadeInUpAnimation>
								<NewsArtInnerBox>
									<NewsArtImgBox>
										<Link to={link}>
											<NewsArtImg alt='' src={image} />
										</Link>
										<DateTag text={dateTag} />
									</NewsArtImgBox>
									<NewsArtLowerContent>
										<div>
											<NewsArtCategoryLink to={link}>
												{category}
											</NewsArtCategoryLink>
										</div>
										<NewsArtTitle>
											<NewsArtTitleLink to={link}>{title}</NewsArtTitleLink>
										</NewsArtTitle>
										<NewsArtInfoUl>
											<NewsArtInfoLi>
												<NewsArtInfoLiSpan>By </NewsArtInfoLiSpan>
												<NewsArtInfoLiLink to={link}>{by}</NewsArtInfoLiLink>
											</NewsArtInfoLi>
											<NewsArtInfoLi> - {date}</NewsArtInfoLi>
										</NewsArtInfoUl>
										<NewsArtDescription>{description}</NewsArtDescription>
										<ThemeBtn link={link}>See Details</ThemeBtn>
									</NewsArtLowerContent>
								</NewsArtInnerBox>
							</HomeFadeInUpAnimation>
						</NewsArtContentBody>
					)
				)}
			</HomeContentRow>
		</AutoContainer>
	</HomeSectionContainer>
);

export default NewsArticles;

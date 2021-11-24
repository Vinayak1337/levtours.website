import { FC } from 'react';
import {
	CarsouselItemContainer,
	CarsouselItemBlock,
	CarsouselItemInnerBox,
	CarsouselItemImgBox,
	CarsouselItemImg,
	CarsouselContentBox,
	CarsouselItemTag,
	CarsouselItemName,
	CarsouselItemLink,
	CarsouselItemPrice
} from './DealsOffersCarsousel.styled';
import CarouselBody from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
	OfferImg1,
	OfferImg2,
	OfferImg3,
	OfferImg4,
	OfferImg5,
	OfferImg6
} from '../../../Assets/Images';

const CarsouselData = [
	{
		tag: 'Get 50% Off',
		name: 'Kharkiv',
		price: 1250,
		image: OfferImg1,
		link: '/'
	},
	{
		tag: 'Get 50% Off',
		name: 'Vinnytsia',
		price: 1250,
		image: OfferImg2,
		link: '/'
	},
	{
		tag: 'Get 50% Off',
		name: 'Dnipro',
		price: 2000,
		image: OfferImg3,
		link: '/'
	},
	{
		tag: 'Get 50% Off',
		name: 'Mykolaiv',
		price: 1500,
		image: OfferImg4,
		link: '/'
	},
	{
		tag: 'Get 50% Off',
		name: 'Kyiv',
		price: 1500,
		image: OfferImg5,
		link: '/'
	},
	{
		tag: 'Get 50% Off',
		name: 'Odessa',
		price: 1170,
		image: OfferImg6,
		link: '/'
	},
	{
		tag: 'Get 50% Off',
		name: 'Dnipro',
		price: 2000,
		image: OfferImg3,
		link: '/'
	},
	{
		tag: 'Get 50% Off',
		name: 'Mykolaiv',
		price: 1500,
		image: OfferImg4,
		link: '/'
	},
	{
		tag: 'Get 50% Off',
		name: 'Kyiv',
		price: 1500,
		image: OfferImg5,
		link: '/'
	}
];

const DealsOffersCarsousel: FC = () => {
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

	return (
		<CarouselBody
			autoPlay={false}
			autoPlaySpeed={3000}
			transitionDuration={500}
			infinite
			customTransition='all 1s ease 0s'
			responsive={responsive}>
			{CarsouselData.map(({ image, tag, link, name, price }, i) => (
				<CarsouselItemContainer key={`CarsouselItem${i}`}>
					<CarsouselItemBlock>
						<CarsouselItemInnerBox>
							<CarsouselItemImgBox>
								<CarsouselItemImg alt='' src={image}></CarsouselItemImg>
							</CarsouselItemImgBox>
							<CarsouselContentBox>
								<CarsouselItemTag>{tag}</CarsouselItemTag>
								<CarsouselItemName>
									<CarsouselItemLink to={link}>{name}</CarsouselItemLink>
								</CarsouselItemName>
								<CarsouselItemPrice>${price}</CarsouselItemPrice>
							</CarsouselContentBox>
						</CarsouselItemInnerBox>
					</CarsouselItemBlock>
				</CarsouselItemContainer>
			))}
		</CarouselBody>
	);
};

export default DealsOffersCarsousel;

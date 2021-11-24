import { AutoContainer } from '../../../App/App.styled';
import {
	DealsOffersContentBody,
	DealsOffersContainer
} from './DealsOffers.styled';
import DealsOffersCarsousel from '../DealsOffersCarsousel/DealsOffersCarsousel';
import { FC } from 'react';
import {
	HomeTitle,
	HomeTitleContainer,
	HomeTitleTag
} from '../../../Pages/Home/Home.styled';

const DealsOffers: FC = () => (
	<DealsOffersContainer>
		<AutoContainer>
			<HomeTitleContainer>
				<HomeTitleTag>Deals & Offers</HomeTitleTag>
				<HomeTitle>Last Minute Amazing Deals</HomeTitle>
			</HomeTitleContainer>
			<DealsOffersContentBody>
				<DealsOffersCarsousel />
			</DealsOffersContentBody>
		</AutoContainer>
	</DealsOffersContainer>
);

export default DealsOffers;

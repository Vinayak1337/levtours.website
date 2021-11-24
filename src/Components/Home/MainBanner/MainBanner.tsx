import { FC } from 'react';
import {
	MainBannerContainer,
	MainBannerContentContainer,
	MainBannerContentheading,
	MainBannerContentPara,
	MainBannerImgBox,
	MainBannerImgContainer,
	MainBannerRow
} from './MainBanner.styled';
import { AutoContainer } from '../../../App/App.styled';
import { HomeBanner1 } from '../../../Assets/Images';

const MainBanner: FC = () => (
	<MainBannerContainer>
		<AutoContainer>
			<MainBannerRow>
				<MainBannerContentContainer>
					<div>
						<MainBannerContentheading>
							Where do you want to go?
						</MainBannerContentheading>
						<MainBannerContentPara>
							Discover your next great adventure
						</MainBannerContentPara>
					</div>
				</MainBannerContentContainer>
				<MainBannerImgContainer>
					<MainBannerImgBox>
						<img src={HomeBanner1} alt='' />
					</MainBannerImgBox>
				</MainBannerImgContainer>
			</MainBannerRow>
		</AutoContainer>
	</MainBannerContainer>
);

export default MainBanner;

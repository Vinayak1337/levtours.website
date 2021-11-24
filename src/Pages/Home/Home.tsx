import { FC } from 'react';
import * as HomeComponents from '../../Components/Home/.';

const Home: FC = () => {
	window.scrollTo({ behavior: 'smooth', top: 0 });

	return (
		<>
			{Object.values(HomeComponents).map((Component, i) => (
				<Component key={`HomeComponent${i}`} />
			))}
		</>
	);
};

export default Home;

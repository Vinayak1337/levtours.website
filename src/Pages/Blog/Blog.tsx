import { FC } from 'react';
import * as BlogComponents from '../../Components/Blog/.';

const Blog: FC = () => {
	window.scrollTo({ behavior: 'smooth', top: 0 });

	return (
		<>
			{Object.values(BlogComponents).map((Component, i) => (
				<Component key={`BlogComponent${i}`} />
			))}
		</>
	);
};

export default Blog;

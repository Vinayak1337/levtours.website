import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { AutoContainer } from '../../../App/App.styled';
import { baseUrl } from '../../../Assets/utils';
import {
	BlogContentLeft,
	BlogPaginationLi,
	BlogPaginationLink,
	BlogPaginationUl,
	BlogRow,
	BlogSection
} from './BlogBody.styled';
import axios from 'axios';
import BlogPost from '../BlogPost/BlogPost';

const BlogBody: FC = () => {
	const [state, setState] = useState({
		blogs: [],
		page: 1,
		totalBlogs: 0,
		pages: 1,
		limit: 10
	});

	const { blogs, page, totalBlogs, pages, limit } = state;

	const changeState = (newState: any) =>
		setState(prevState => ({ ...prevState, ...newState }));

	const fetchBlogs = useCallback(async () => {
		const res = await axios.get(
			`${baseUrl}/api/blog?page=${page}&limit=${limit}`
		);
		if (res.status === 200)
			changeState({
				...res.data,
				pages: Math.ceil(res.data.totalBlogs / limit)
			});
	}, [limit, page]);

	useEffect(() => {
		fetchBlogs();
	}, [fetchBlogs]);

	const getTotalPages = useMemo(() => {
		const length = pages > 1 ? pages : totalBlogs ? 1 : 0;
		return Array.from({ length }, (_, i) => i + 1);
	}, [pages, totalBlogs]);

	return (
		<BlogSection>
			<AutoContainer>
				<BlogRow>
					<BlogContentLeft>
						<div>
							<BlogRow>
								{blogs.map((blog, i) => (
									<BlogPost key={`blogPost${i}`} blog={blog} />
								))}
							</BlogRow>
							<div>
								<BlogPaginationUl>
									{getTotalPages.map((pageNo, i) => (
										<BlogPaginationLi>
											<BlogPaginationLink
												to='/'
												current={page === pageNo ? 'true' : undefined}>
												{pageNo}
											</BlogPaginationLink>
										</BlogPaginationLi>
									))}
								</BlogPaginationUl>
							</div>
						</div>
					</BlogContentLeft>
				</BlogRow>
			</AutoContainer>
		</BlogSection>
	);
};

export default BlogBody;

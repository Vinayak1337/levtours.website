import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
	BlogPostBlock,
	BlogPostFade,
	BlogPostImageBox,
	BlogPostImg,
	BlogPostInnerBox,
	BlogPostLowerContent
} from './BlogPost.styled';
import HTMLReactParser from 'html-react-parser';
import { ThemeBtn } from '../..';

const BlogPost: FC<BlogPostProps> = ({ blog }) => {
	return (
		<BlogPostBlock>
			<BlogPostFade>
				<BlogPostInnerBox>
					<BlogPostImageBox>
						<Link to={`blog/${blog._id}`}>
							<BlogPostImg alt='' src={blog.thumbnail} />
						</Link>
					</BlogPostImageBox>
					<BlogPostLowerContent>
						<h3>
							<Link to={`blog/${blog._id}`}>{blog.title}</Link>
						</h3>
						<p>{HTMLReactParser(blog.content.split('<br>')[0])}</p>
						<ThemeBtn link={`blog/${blog._id}`}>See Details</ThemeBtn>
					</BlogPostLowerContent>
				</BlogPostInnerBox>
			</BlogPostFade>
		</BlogPostBlock>
	);
};

export default BlogPost;

interface BlogPostProps {
	blog: any;
}

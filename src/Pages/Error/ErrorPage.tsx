import { FC } from 'react';
import {
	ErrorPageContainer,
	ErrorPageContent,
	ErrorPageSpan
} from './ErrorPage.styled';

const ErrorPage: FC = () => {
	window.scrollTo({ behavior: 'smooth', top: 0 });

	return (
		<ErrorPageContainer>
			<ErrorPageContent>
				404 <ErrorPageSpan /> Not Found
			</ErrorPageContent>
		</ErrorPageContainer>
	);
};

export default ErrorPage;

import { FC } from 'react';
import { Switch, Route } from 'react-router';
import { Blog, Dummy, ErrorPage, Home } from '../Pages';

const Router: FC = () => {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/tours' component={Dummy} />
			<Route exact path='/blogs' component={Blog} />
			<Route component={ErrorPage} />
		</Switch>
	);
};

export default Router;

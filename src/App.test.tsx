import { render, screen } from '@testing-library/react';
import App from './App/App';

test('renders learn react link', async () => {
	render(<App />);
	const element = await screen.findByTestId('App');
	expect(element).toBeInTheDocument();
});

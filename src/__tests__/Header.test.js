import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Components/Header';

describe('<Header />', () => {
	it('Header is rendered', () => {
		const { getByTestId } = render(<Header />);
		getByTestId('HeaderComponent');
	});
});

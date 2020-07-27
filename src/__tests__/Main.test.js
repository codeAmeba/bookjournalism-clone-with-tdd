import React from 'react';
import { render } from '@testing-library/react';
import Main from '../Pages/Main';

describe('<Main />', () => {
	it('renders Main component', () => {
		const { getByText, getByTestId } = render(<Main />);
		getByText('Hello');
		getByTestId('MainContainer');
	});
});

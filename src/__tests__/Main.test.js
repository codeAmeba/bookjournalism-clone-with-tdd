import React from 'react';
import { render } from '@testing-library/react';
import Main from '../Pages/Main';

describe('<Main />', () => {
	it('renders Main component', () => {
		const { getByTestId } = render(<Main />);
		getByTestId('MainContainer');
	});
});

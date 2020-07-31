import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from '../Components/Search';

describe('Search', () => {
	it('rendered search component', () => {
		const { getByTestId } = render(<Search />);
		expect(getByTestId('SearchContainer')).toBeInTheDocument();
	});
});

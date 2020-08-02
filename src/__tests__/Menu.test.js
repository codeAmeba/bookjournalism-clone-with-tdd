import React from 'react';
import { render, screen } from '@testing-library/react';
import Menu from '../Components/Menu';

describe('<Menu />', () => {
	it('rendered Menu component', () => {
		const { getByTestId } = render(<Menu />);
		expect(getByTestId('Menu')).toBeInTheDocument();
	});

	it('menu has list items', () => {
		const { getAllByRole } = render(<Menu />);
		expect(getAllByRole('listitem')).toBeTruthy();
	});

	it('has prime button', () => {
		const { getByText } = render(<Menu />);
		expect(getByText('PRIME')).toBeTruthy();
	});
});

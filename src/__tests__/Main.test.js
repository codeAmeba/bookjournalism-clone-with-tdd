import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Main from '../Pages/Main';

describe('Main', () => {
	it('rendered Main component', () => {
		const { getByTestId } = render(<Main />);
		expect(getByTestId('MainContainer')).toBeInTheDocument();
	});

	it('toggle event to open and close menu', () => {
		const { getByTestId } = render(<Main />);
		const openMenuIcon = getByTestId('menuIcon');

		fireEvent.click(openMenuIcon);
		expect(getByTestId('Menu')).toBeInTheDocument();
		console.log('open menu');

		const closeMenuIcon = getByTestId('closeIcon');
		fireEvent.click(closeMenuIcon);
		console.log('close menu');

		expect(screen.queryByTestId('Menu')).not.toBeInTheDocument();
	});
});

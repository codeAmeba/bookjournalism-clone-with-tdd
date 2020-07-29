import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../Components/Header';

describe('<Header />', () => {
	it('Header is rendered', () => {
		render(<Header />);
		expect(screen.getByText('BOOKJOURNALISM')).toBeInTheDocument();
	});

	it('has user and menu icons', () => {
		render(<Header />);
		expect(screen.getByTestId('menuIcon')).toBeInTheDocument();
		expect(screen.getByTestId('userIcon')).toBeInTheDocument();
	});
});

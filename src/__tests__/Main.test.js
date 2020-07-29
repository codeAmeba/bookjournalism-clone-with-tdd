import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Main from '../Pages/Main';
import Header from '../Components/Header';

describe('Main', () => {
	it('rendered Main component', () => {
		render(<Main />);
		expect(screen.getByTestId('MainContainer')).toBeInTheDocument();
	});

	it('click event on menu icon', () => {
		const handleClick = jest.fn();
		render(
			<Main>
				<Header handleClick={handleClick} />
			</Main>
		);
		fireEvent.click(screen.getByTestId('menuIcon'));
		expect(screen.getByTestId('Menu')).toBeInTheDocument();
	});
});

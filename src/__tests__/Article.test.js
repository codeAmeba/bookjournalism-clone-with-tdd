import React from 'react';
import { render, screen } from '@testing-library/react';
import Article from '../Components/Article';

describe('Article', () => {
	it('rendered article component', () => {
		const { getByTestId } = render(<Article />);
		expect(getByTestId('Article')).toBeInTheDocument();
	});
});

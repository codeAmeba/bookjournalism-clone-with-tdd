import React from 'react';
import { render } from '@testing-library/react';
import Article from '../Components/Article';

describe('Article', () => {
	it('rendered article component', () => {
		const { getByTestId } = render(<Article />);
		expect(getByTestId('Article')).toBeInTheDocument();
	});

	it('has main article', () => {
		const { getByTestId, getByAltText } = render(<Article />);
		expect(getByTestId('mainArticle')).toBeInTheDocument();
		expect(getByAltText('main article img')).toBeTruthy();
	});

	it('has sub articles', () => {
		const { getByTestId } = render(<Article />);
		expect(getByTestId('subArticle')).toBeInTheDocument();
	});
});

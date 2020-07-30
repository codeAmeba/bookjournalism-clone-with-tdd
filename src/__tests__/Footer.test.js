import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../Components/Footer';

describe('Footer', () => {
	it('rendered footer component', () => {
		const { getByTestId } = render(<Footer />);
		expect(getByTestId('Footer')).toBeInTheDocument();
	});

	it('has info icon', () => {
		const { getByTestId } = render(<Footer />);
		expect(getByTestId('infoIcon')).toBeInTheDocument();
	});

	it('has input email', () => {
		const { getByLabelText } = render(<Footer />);
		expect(getByLabelText('Weekly Newsletter', { selector: 'input' })).toBeInTheDocument();
	});
});

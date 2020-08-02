import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../Pages/Login';

describe('Login', () => {
	it('rendered login page', () => {
		const { getByTestId } = render(<Login />);
		expect(getByTestId('Login')).toBeInTheDocument();
	});
});

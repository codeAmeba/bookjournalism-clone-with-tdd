import React from 'react';
import { render } from '@testing-library/react';
import Main from '../Pages/Main';

describe('Main', () => {
	it('rendered Main component', () => {
		render(<Main />);
	});
});

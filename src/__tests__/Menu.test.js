import React from 'react';
import { render } from '@testing-library/react';
import Menu from '../Components/Menu';

describe('<Menu />', () => {
	it('rendered Menu component', () => {
		render(<Menu />);
	});
});

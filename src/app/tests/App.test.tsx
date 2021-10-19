import React from 'react';
import { render } from '../../../test-utils';
import App from '../App';

describe('app', () => {
	it('renders', () => {
		const { baseElement } = render(<App />);
		expect(baseElement).toBeInTheDocument();
	});
});

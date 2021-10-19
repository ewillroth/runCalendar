import React from 'react';
import { render } from '../../../test-utils';
import Cell from '../Cell';

describe('Cell', () => {
	it('renders', () => {
		const mockFn = jest.fn();
		const { baseElement } = render(
			<Cell date="" workout="" editWorkout={mockFn} index="" />
		);
		expect(baseElement).toBeInTheDocument();
	});
});

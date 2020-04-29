import { calculateCellDate } from '../dateUtils';

describe('calculateCellDate', () => {
	it('returns a properly formatted date', () => {
		expect(calculateCellDate('1990-06-19', 1)).toEqual('Wednesday June 20 1990');
	});
});

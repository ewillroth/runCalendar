import * as moment from 'moment';

export const DATE_FORMAT = 'dddd MMMM D YYYY';
export const DATE_INPUT_FORMAT = 'MMMM D YYYY';

export const calculateCellDate = (startDate: string, index: number) => {
	return moment(startDate).add(index, 'days').format(DATE_FORMAT);
};

import moment from 'moment';

export const DATE_FORMAT_OPTIONS = 'dddd MMMM D YYYY';
export const DATE_FORMAT_INPUT = 'MMMM D YYYY';
export const DATE_FORMAT_EVENT = 'YYYYMMDD';

export const calculateCellDate = (startDate: string, index: number) => {
	return moment(startDate).add(index, 'days').format(DATE_FORMAT_OPTIONS);
};

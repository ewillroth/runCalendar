import * as React from 'react';
import { Grid } from '@material-ui/core';
import Cell from './Cell';
import { calculateCellDate } from '../utils/dateUtils';

export interface ICalendarProps {
	workouts: String[];
	startDate: string;
}

const Calendar = ({ workouts, startDate }: ICalendarProps) => {
	const cells = workouts.map((workout: string, i) => {
		const date = calculateCellDate(startDate, i);
		return <Cell date={date} workout={workout} />;
	});
	return <Grid>{cells}</Grid>;
};

export default Calendar;

import * as React from 'react';
import { Grid } from '@material-ui/core';
import Cell from './Cell';
import { calculateCellDate } from '../utils/dateUtils';
import { IOptions } from './Options';

export interface ICalendarProps {
	workouts: String[];
	startDate: string;
	setWorkouts: React.Dispatch<React.SetStateAction<String[]>>;
	setOptions: React.Dispatch<React.SetStateAction<IOptions>>;
	options: IOptions;
	length: number;
}

const Calendar = ({ workouts, startDate, setWorkouts, length, options, setOptions }: ICalendarProps) => {
	const editWorkout = (e: any) => {
		const index = +e.target.name;
		const newWorkouts = [...workouts];
		newWorkouts[index] = e.target.value;
		setWorkouts(newWorkouts);
		setOptions({ ...options, plan: 'Custom' });
	};
	const cells = workouts.map((workout: string, i) => {
		const date = calculateCellDate(startDate, i);
		const index = i.toString();
		return <Cell index={index} date={date} workout={workout} editWorkout={editWorkout} />;
	});
	return (
		<Grid container spacing={3}>
			{cells}
		</Grid>
	);
};

export default Calendar;

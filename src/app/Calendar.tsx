import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Cell from './Cell';
import { calculateCellDate } from '../utils/utils';
import { IOptions } from './Options';
import Instructions from './Instructions';

export interface ICalendarProps {
	workouts: string[];
	startDate: string;
	setWorkouts: React.Dispatch<React.SetStateAction<string[]>>;
	setOptions: React.Dispatch<React.SetStateAction<IOptions>>;
	options: IOptions;
}

const useStyles = makeStyles({
	calendar: {
		padding: '100px 0',
	},
});

const Calendar = ({
	workouts,
	startDate,
	setWorkouts,
	options,
	setOptions,
}: ICalendarProps) => {
	const classes = useStyles();

	const editWorkout = (e: any) => {
		const index = +e.target.name;
		if (workouts[index] === e.target.value) return;
		const newWorkouts = [...workouts];
		newWorkouts[index] = e.target.value;
		setWorkouts(newWorkouts);
		setOptions({ ...options, plan: 'Custom' });
	};
	const cells = workouts.map((workout: string, i) => {
		const date = calculateCellDate(startDate, i);
		const index = i.toString();
		return (
			<Cell
				key={date}
				index={index}
				date={date}
				workout={workout}
				editWorkout={editWorkout}
			/>
		);
	});

	return (
		<Grid
			container
			spacing={3}
			justify="center"
			alignItems="center"
			className={classes.calendar}
		>
			{workouts.length > 0 ? cells : <Instructions />}
		</Grid>
	);
};

export default Calendar;

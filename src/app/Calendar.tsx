import React from 'react';
import { Grid, Popper } from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/core/styles';
import Cell from './Cell';
import { calculateCellDate } from '../utils/utils';
import { IOptions } from './Options';

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

const Placeholder = styled('div')({
	marginTop: '24px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
});

const Heading = styled('h1')({
	color: '#f50057',
});

const Text = styled('p')({
	margin: '12px 0',
});

const Calendar = ({ workouts, startDate, setWorkouts, options, setOptions }: ICalendarProps) => {
	const classes = useStyles();

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
		return <Cell key={date} index={index} date={date} workout={workout} editWorkout={editWorkout} />;
	});
	const placeholder = (
		<Placeholder>
			<Heading>Run Calendar</Heading>
			<Text>Generate a calendar file with a popular marathon training plan or a custom plan</Text>
			<Text>Select a plan above to begin or create a custom plan by changing the number of weeks.</Text>
		</Placeholder>
	);
	return (
		<Grid container spacing={3} justify='center' alignItems='center' className={classes.calendar}>
			{workouts.length > 0 ? cells : placeholder}
		</Grid>
	);
};

export default Calendar;

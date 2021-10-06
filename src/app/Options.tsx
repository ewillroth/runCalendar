import React, { useState, useEffect, SyntheticEvent } from 'react';
import moment from 'moment';
import { Grid, TextField, MenuItem } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/styles';
import {
	DATE_FORMAT_OPTIONS,
	getWorkouts,
	getPlanLength,
	editWorkoutsLength,
} from '../utils/utils';
import { plans } from '../utils/plans';

export interface IOptions {
	calendarName: string;
	startDate: string;
	endDate: string;
	length: number;
	plan: string;
}

export interface OptionsProps {
	options: IOptions;
	setOptions: React.Dispatch<React.SetStateAction<IOptions>>;
	setWorkouts: React.Dispatch<React.SetStateAction<string[]>>;
	workouts: string[];
	direction: 'row' | 'column';
}

const useStyles = makeStyles({
	options: {
		margin: '10px',
	},
	lengthInput: {
		width: '50px',
	},
	dateInput: {
		width: '140px',
	},
});

const Options = ({
	options,
	setOptions,
	setWorkouts,
	workouts,
	direction,
}: OptionsProps) => {
	const { calendarName, startDate, endDate, length, plan } = options;

	const [name, setName] = useState(calendarName);
	const [displayLength, setDisplayLength] = useState(length);

	useEffect(() => {
		setDisplayLength(length);
	}, [length]);

	const classes = useStyles();

	useEffect(() => {
		setName(calendarName);
	}, [calendarName]);

	const handleNameChange = (e: any) => {
		setName(e.target.value);
	};

	const handleNameBlur = (e: any) => {
		setOptions({ ...options, calendarName: e.target.value });
	};

	const handleLengthChange = (e: any) => {
		let newLength = e.target.value;
		if (e.target.value > 52) newLength = 52;
		setDisplayLength(newLength);
	};

	const handleLengthBlur = () => {
		const newStartDate = moment(endDate)
			.subtract(displayLength, 'weeks')
			.add(1, 'days')
			.format();
		setWorkouts(
			editWorkoutsLength(workouts, workouts.length, displayLength * 7)
		);
		setOptions({
			...options,
			plan: 'Custom',
			length: displayLength,
			startDate: newStartDate,
		});
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		switch (e.key) {
			case 'Enter':
				e.target && (e.target as HTMLElement).blur();
		}
	};

	const handleStartDateChange = (date: any) => {
		const formattedDate = moment(date).format();
		const newEndDate = moment(date)
			.add(length, 'weeks')
			.subtract(1, 'days')
			.format();
		setOptions({
			...options,
			startDate: formattedDate,
			endDate: newEndDate,
		});
	};

	const handleEndDateChange = (date: any) => {
		const formattedDate = moment(date).format();
		console.log(endDate);
		const newStartDate = moment(date)
			.subtract(length, 'weeks')
			.add(1, 'days')
			.format();
		console.log(newStartDate);
		setOptions({
			...options,
			startDate: newStartDate,
			endDate: formattedDate,
		});
	};

	const handlePlanChange = (e: any) => {
		if (e.target.value !== 'Custom') {
			const workouts = getWorkouts(e.target.value);
			const length = getPlanLength(e.target.value);
			const newStartDate = moment(endDate)
				.subtract(length, 'weeks')
				.add(1, 'days')
				.format();
			setOptions({
				...options,
				plan: e.target.value,
				length: length,
				startDate: newStartDate,
			});
			setWorkouts(workouts);
		} else {
			setOptions({ ...options, plan: e.target.value });
		}
	};

	return (
		<Grid
			className={classes.options}
			container
			spacing={2}
			direction={direction}
			justify="center"
			alignItems="flex-start"
		>
			<Grid item>
				<TextField
					size="medium"
					label="Calendar Name"
					value={name}
					onChange={handleNameChange}
					onBlur={handleNameBlur}
				/>
			</Grid>
			<Grid item>
				<DatePicker
					className={classes.dateInput}
					label="Start Date"
					format={DATE_FORMAT_OPTIONS}
					autoOk
					disableToolbar
					variant="inline"
					onChange={handleStartDateChange}
					value={startDate}
				></DatePicker>
			</Grid>
			<Grid item>
				<DatePicker
					className={classes.dateInput}
					label="End Date"
					format={DATE_FORMAT_OPTIONS}
					autoOk
					disableToolbar
					variant="inline"
					onChange={handleEndDateChange}
					value={endDate}
				></DatePicker>
			</Grid>
			<Grid item>
				<TextField
					className={classes.lengthInput}
					size="medium"
					label="Weeks"
					value={displayLength}
					onChange={handleLengthChange}
					onBlur={handleLengthBlur}
					onKeyDown={handleKeyDown}
				/>
			</Grid>
			<Grid item>
				<TextField
					label="Plan"
					value={plan}
					onChange={handlePlanChange}
					select
				>
					{Object.keys(plans).map((plan) => {
						return (
							<MenuItem key={plan} value={plan}>
								{plan}
							</MenuItem>
						);
					})}
					<MenuItem value="Custom">Custom</MenuItem>
				</TextField>
			</Grid>
		</Grid>
	);
};

export default Options;

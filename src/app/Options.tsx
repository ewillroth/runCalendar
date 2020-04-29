import React from 'react';
import moment from 'moment';
import { Grid, TextField, MenuItem } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import { DATE_FORMAT_OPTIONS, DATE_FORMAT_INPUT } from '../utils/dateUtils';
import { getWorkouts, getPlanLength, editWorkoutsLength } from '../utils/dataUtils';
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
}

const Options = ({ options, setOptions, setWorkouts, workouts }: OptionsProps) => {
	const { calendarName, startDate, endDate, length, plan } = options;

	const handleNameChange = (e: any) => {
		setOptions({ ...options, calendarName: e.target.value });
	};
	const handleLengthChange = (e: any) => {
		const newLength = e.target.value;
		const newEndDate = moment(startDate).add(newLength, 'weeks').format(DATE_FORMAT_OPTIONS);
		setWorkouts(editWorkoutsLength(workouts, workouts.length, newLength * 7));
		setOptions({ ...options, plan: 'Custom', length: newLength, endDate: newEndDate });
	};
	const handleStartDateChange = (date: any) => {
		const formattedDate = moment(date).format(DATE_FORMAT_OPTIONS);
		const newEndDate = moment(date).add(length, 'weeks').format(DATE_FORMAT_OPTIONS);
		setOptions({ ...options, startDate: formattedDate, endDate: newEndDate });
	};
	const handleEndDateChange = (date: any) => {
		const formattedDate = moment(date).format(DATE_FORMAT_OPTIONS);
		const newStartDate = moment(date).subtract(length, 'weeks').format(DATE_FORMAT_OPTIONS);
		setOptions({ ...options, startDate: newStartDate, endDate: formattedDate });
	};
	const handlePlanChange = (e: any) => {
		if (e.target.value !== 'Custom') {
			const workouts = getWorkouts(e.target.value);
			const length = getPlanLength(e.target.value);
			setOptions({ ...options, plan: e.target.value, length: length });
			setWorkouts(workouts);
		} else {
			setOptions({ ...options, plan: e.target.value });
		}
	};

	return (
		<Grid container spacing={2} direction='row' justify='center' alignItems='flex-start'>
			<Grid item>
				<TextField size='medium' label='Calendar Name' value={calendarName} onChange={handleNameChange} />
			</Grid>
			<Grid item>
				<DatePicker
					label='Start Date'
					format={DATE_FORMAT_INPUT}
					autoOk
					disableToolbar
					variant='inline'
					onChange={handleStartDateChange}
					value={startDate}></DatePicker>
			</Grid>
			<Grid item>
				<DatePicker
					label='End Date'
					format={DATE_FORMAT_INPUT}
					autoOk
					disableToolbar
					variant='inline'
					onChange={handleEndDateChange}
					value={endDate}></DatePicker>
			</Grid>
			<Grid item>
				<TextField size='medium' label='Weeks' value={length} onChange={handleLengthChange} />
			</Grid>
			<Grid item>
				<TextField label='Plan' value={plan} onChange={handlePlanChange} select>
					{Object.keys(plans).map((plan) => {
						return <MenuItem value={plan}>{plan}</MenuItem>;
					})}
					<MenuItem value='Custom'>Custom</MenuItem>
				</TextField>
			</Grid>
		</Grid>
	);
};

export default Options;

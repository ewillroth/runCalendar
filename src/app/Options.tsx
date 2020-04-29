import * as React from 'react';
import * as moment from 'moment';
import { Grid, TextField, MenuItem } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import { DATE_FORMAT, DATE_INPUT_FORMAT } from '../utils/dateUtils';
import IPlan from '../utils/IPlan';
import { getWorkouts, getPlanLength } from '../utils/dataUtils';

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
	setWorkouts: React.Dispatch<React.SetStateAction<String[]>>;
	workouts: String[];
}

const Options = ({ options, setOptions, setWorkouts, workouts }: OptionsProps) => {
	const { calendarName, startDate, endDate, length, plan } = options;

	const handleNameChange = (e: any) => {
		setOptions({ ...options, calendarName: e.target.value });
	};
	const handleLengthChange = (e: any) => {
		const newLength = e.target.value;
		const newEndDate = moment(startDate).add(newLength, 'weeks').format(DATE_FORMAT);
		setOptions({ ...options, plan: 'Custom', length: newLength, endDate: newEndDate });
	};
	const handleStartDateChange = (date: any) => {
		const formattedDate = moment(date).format(DATE_FORMAT);
		const newEndDate = moment(date).add(length, 'weeks').format(DATE_FORMAT);
		setOptions({ ...options, startDate: formattedDate, endDate: newEndDate });
	};
	const handleEndDateChange = (date: any) => {
		const formattedDate = moment(date).format(DATE_FORMAT);
		const newStartDate = moment(date).subtract(length, 'weeks').format(DATE_FORMAT);
		setOptions({ ...options, startDate: newStartDate, endDate: formattedDate });
	};
	const handlePlanChange = (e: any) => {
		if (e.target.value !== 'Custom') {
			const workouts = getWorkouts(e.target.value);
			const length = getPlanLength(e.target.value);
			setWorkouts(workouts);
			setOptions({ ...options, plan: e.target.value, length: length });
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
					format={DATE_INPUT_FORMAT}
					autoOk
					disableToolbar
					variant='inline'
					onChange={handleStartDateChange}
					value={startDate}></DatePicker>
			</Grid>
			<Grid item>
				<DatePicker
					label='End Date'
					format={DATE_INPUT_FORMAT}
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
					<MenuItem value='Custom'>Custom</MenuItem>
					<MenuItem value='Hansons Beginner'>Hansons Beginner</MenuItem>
					<MenuItem value='Hansons Advanced'>Hansons Advanced</MenuItem>
					<MenuItem value='Higdon Novice 1'>Higdon Novice 1</MenuItem>
					<MenuItem value='Higdon Novice 2'>Higdon Novice 2</MenuItem>
					<MenuItem value='Higdon Intermediate 1'>Higdon Intermediate 1</MenuItem>
					<MenuItem value='Higdon Intermediate 2'>Higdon Intermediate 2</MenuItem>
					<MenuItem value='Higdon Advanced 1'>Higdon Advanced 1</MenuItem>
					<MenuItem value='Higdon Advanced 2'>Higdon Advanced 2</MenuItem>
					<MenuItem value='Pfitzinger/Douglas: Up to 55 mi/wk, 18 weeks'>Pfitzinger/Douglas: Up to 55 mi/wk, 18 weeks</MenuItem>
					<MenuItem value='Pfitzinger/Douglas: 55-70 mi/Wk, 18 weeks'>Pfitzinger/Douglas: 55-70 mi/Wk, 18 weeks</MenuItem>
					<MenuItem value='Pfitzinger/Douglas: 70-85 mi/wk, 18 weeks'>Pfitzinger/Douglas: 70-85 mi/wk, 18 weeks</MenuItem>
					<MenuItem value='Pfitzinger/Douglas: Up to 55 mi/wk, 12 weeks'>Pfitzinger/Douglas: Up to 55 mi/wk, 12 weeks</MenuItem>
					<MenuItem value='Pfitzinger/Douglas: 55-70 mi/wk, 12 weeks'>Pfitzinger/Douglas: 55-70 mi/wk, 12 weeks</MenuItem>
					<MenuItem value='Hansons Beginner Half Marathon'>Hansons Beginner Half Marathon</MenuItem>
					<MenuItem value='Hansons Advanced Half Marathon'>Hansons Advanced Half Marathon</MenuItem>
				</TextField>
			</Grid>
		</Grid>
	);
};

export default Options;

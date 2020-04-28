import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import * as moment from 'moment';
import MomentUtils from '@date-io/moment';
import { Grid, Button } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import Calendar from './Calendar';
import Options, { IOptions } from './Options';
import { DATE_FORMAT } from '../utils/dateUtils';
import IPlan from '../utils/IPlan';

const { useState } = React;

const App = () => {
	const [options, setOptions] = useState<IOptions>({
		calendarName: 'test',
		startDate: moment().format(DATE_FORMAT),
		endDate: moment().add(24, 'w').format(DATE_FORMAT),
		length: 24,
		plan: 'Custom',
	});
	const [workouts, setWorkouts] = useState<String[]>([]);
	const [customPlan, setCustomPlan] = useState<IPlan>({
		name: 'Custom',
		length: 0,
		workouts: [],
	});
	return (
		<MuiPickersUtilsProvider utils={MomentUtils}>
			<Grid container direction='column' justify='center' alignItems='center'>
				<Grid container spacing={10} direction='row' justify='center' alignItems='center'>
					<Grid item>
						<Options
							options={options}
							setOptions={setOptions}
							setWorkouts={setWorkouts}
							setCustomPlan={setCustomPlan}
							workouts={workouts}
						/>
					</Grid>
					<Grid item>
						<Button size='small' color='primary' variant='contained' disableElevation>
							Download
						</Button>
					</Grid>
				</Grid>
				<Calendar workouts={workouts} startDate={options.startDate} />
			</Grid>
		</MuiPickersUtilsProvider>
	);
};

export default hot(App);

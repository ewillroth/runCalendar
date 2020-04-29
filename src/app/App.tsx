import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import * as moment from 'moment';
import MomentUtils from '@date-io/moment';
import { Grid, Button, AppBar } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import Calendar from './Calendar';
import Options, { IOptions } from './Options';
import { DATE_FORMAT } from '../utils/dateUtils';
import { getWorkouts } from '../utils/dataUtils';
import { Plans } from '../utils/dataUtils';

const { useState } = React;

const App = () => {
	const [options, setOptions] = useState<IOptions>({
		calendarName: 'test',
		startDate: moment().format(DATE_FORMAT),
		endDate: moment().add(24, 'w').format(DATE_FORMAT),
		length: 18,
		plan: 'Hansons Beginner',
	});
	const [workouts, setWorkouts] = useState<String[]>(getWorkouts(Plans['Hansons Beginner']));

	return (
		<MuiPickersUtilsProvider utils={MomentUtils}>
			<Grid container direction='column' justify='center' alignItems='center'>
				<AppBar color='default'>
					<Grid container spacing={10} direction='row' justify='center' alignItems='center'>
						<Grid item>
							<Options options={options} setOptions={setOptions} setWorkouts={setWorkouts} workouts={workouts} />
						</Grid>
						<Grid item>
							<Button size='small' color='primary' variant='contained' disableElevation>
								Download
							</Button>
						</Grid>
					</Grid>
				</AppBar>
				<Calendar
					setOptions={setOptions}
					options={options}
					setWorkouts={setWorkouts}
					length={length}
					workouts={workouts}
					startDate={options.startDate}
				/>
			</Grid>
		</MuiPickersUtilsProvider>
	);
};

export default hot(App);

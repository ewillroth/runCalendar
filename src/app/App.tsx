import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import moment from 'moment';
import MomentUtils from '@date-io/moment';
import { Grid, Button, AppBar } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import Calendar from './Calendar';
import Options, { IOptions } from './Options';
import { DATE_FORMAT_OPTIONS, DATE_FORMAT_EVENT, getWorkouts } from '../utils/utils';
import { Plans } from '../utils/plans';

const App = () => {
	const [options, setOptions] = useState<IOptions>({
		calendarName: 'New Calendar',
		startDate: moment().format(DATE_FORMAT_OPTIONS),
		endDate: moment().add(24, 'w').format(DATE_FORMAT_OPTIONS),
		length: 18,
		plan: 'Hansons Beginner',
	});
	const [workouts, setWorkouts] = useState<string[]>(getWorkouts(Plans['Hansons Beginner']));

	const handleClick = () => {
		const events = [];
		for (let i = 0; i < workouts.length; i++) {
			const date = moment(options.startDate).add(i, 'd').format(DATE_FORMAT_EVENT);
			const begin = `BEGIN:VEVENT\n`;
			const summary = `SUMMARY:${workouts[i]}\n`;
			const dtStart = `DTSTART:${date}\n`;
			const dtEnd = `DTEND:${date}\n`;
			const end = `END:VEVENT\n`;
			events.push(begin + summary + dtStart + dtEnd + end);
		}
		const start = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:+//runcalendar.app//runcalendar 2.0\nNAME:${options.calendarName}\nX-WR-CALNAME:${options.calendarName}\n`;
		const end = `END:VCALENDAR`;

		var blob = new Blob([start, events.join(''), end], { type: 'text/calendar;charset=utf-8;' });
		saveAs(blob, `${options.calendarName}.ics`);
	};

	return (
		<MuiPickersUtilsProvider utils={MomentUtils}>
			<Grid container direction='column' justify='center' alignItems='center'>
				<AppBar color='default' style={{ padding: '10px 0' }}>
					<Grid container spacing={10} direction='row' justify='center' alignItems='center'>
						<Grid item>
							<Options options={options} setOptions={setOptions} setWorkouts={setWorkouts} workouts={workouts} />
						</Grid>
						<Grid item>
							<Button onClick={handleClick} size='small' color='primary' variant='contained' disableElevation>
								Download
							</Button>
						</Grid>
					</Grid>
				</AppBar>
				<Calendar setOptions={setOptions} options={options} setWorkouts={setWorkouts} workouts={workouts} startDate={options.startDate} />
			</Grid>
		</MuiPickersUtilsProvider>
	);
};

export default hot(App);

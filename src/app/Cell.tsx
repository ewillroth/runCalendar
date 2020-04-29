import React from 'react';
import { Grid, TextField } from '@material-ui/core';
export interface ICellProps {
	date: string;
	workout: string;
	editWorkout: (e: any) => void;
	index: string;
}

const Cell = ({ date, workout, editWorkout, index }: ICellProps) => {
	return (
		<Grid item>
			<TextField multiline color='secondary' label={date} variant='outlined' name={index} onChange={editWorkout} value={workout} />
		</Grid>
	);
};

export default Cell;

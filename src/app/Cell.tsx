import * as React from 'react';
import { Grid, TextField } from '@material-ui/core';
const { useEffect, useState } = React;
export interface ICellProps {
	date: string;
	workout: string;
	editWorkout: (e: any) => void;
	index: string;
}

const Cell = ({ date, workout, editWorkout, index }: ICellProps) => {
	const [cellValue, setCellValue] = useState(workout);
	const handleChange = (e: any) => {
		setCellValue(e.target.value);
		editWorkout(e);
	};
	useEffect(() => {
		if (workout! == cellValue) setCellValue(workout);
	}, [workout]);
	return (
		<Grid item>
			<TextField multiline color='secondary' label={date} variant='outlined' name={index} onChange={handleChange} value={cellValue} />
		</Grid>
	);
};

export default Cell;

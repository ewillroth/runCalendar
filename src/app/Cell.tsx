import React, { useState, useEffect } from 'react';
import { Grid, TextField } from '@material-ui/core';
export interface ICellProps {
	date: string;
	workout: string;
	editWorkout: (e: any) => void;
	index: string;
}

const Cell = ({ date, workout, editWorkout, index }: ICellProps) => {
	const [value, setValue] = useState(workout);
	const handleChange = (e: any) => {
		setValue(e.target.value);
	};
	useEffect(() => {
		setValue(workout);
	}, [workout]);
	return (
		<Grid item>
			<TextField
				multiline
				color='secondary'
				label={date}
				variant='outlined'
				name={index}
				onChange={handleChange}
				value={value}
				onBlur={editWorkout}
			/>
		</Grid>
	);
};

export default Cell;

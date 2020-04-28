import * as React from 'react';
import { Grid } from '@material-ui/core';

export interface ICellProps {
	date: string;
	workout: string;
}

const Cell = ({ date, workout }: ICellProps) => {
	return (
		<Grid container direction='column' justify='center' alignItems='center'>
			<div>{date}</div>
			<div>{workout}</div>
		</Grid>
	);
};

export default Cell;

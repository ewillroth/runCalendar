import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import Button from './Button';
import Calendar from './Calendar';
import Options from './Options';

const App = () => {
	return (
		<>
			<Options />
			<Button />
			<Calendar />
		</>
	);
};

export default hot(App);

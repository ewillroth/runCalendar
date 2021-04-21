import React from 'react';
import { styled } from '@material-ui/core/styles';

const InstructionsContainer = styled('div')({
	marginTop: '24px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
});

const Heading = styled('h1')({
	color: '#f50057',
});

const Text = styled('p')({
	margin: '12px 0',
	color: '#000000DE',
});

const Instructions = () => {
	return (
		<InstructionsContainer>
			<Heading>Run Calendar</Heading>
			<Text>Generate a calendar file with a popular marathon training plan or a custom plan</Text>
			<Text>Select a plan above to begin or create a custom plan by changing the number of weeks</Text>
		</InstructionsContainer>
	);
};

export default Instructions;

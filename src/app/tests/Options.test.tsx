import React from "react";
import { render } from "../../../test-utils";
import Options from "../Options";

describe('Options', () => {
	it('renders', () => {
		const mockFn = jest.fn();
		const { baseElement } = render(
			<Options
				toggleTheme={mockFn}
				theme={{ palette: { type: 'light' } }}
				options={{
					calendarName: '',
					startDate: '',
					endDate: '',
					length: 0,
					plan: '',
				}}
				setOptions={mockFn}
				workouts={[]}
				setWorkouts={mockFn}
				direction="row"
			/>
		);
		expect(baseElement).toBeInTheDocument();
	});
});

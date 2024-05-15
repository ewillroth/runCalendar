import React from "react";
import { render } from "../../../test-utils";
import Calendar from "../Calendar";

describe("Calendar", () => {
  it("renders", () => {
    const mockFn = jest.fn();
    const { baseElement } = render(
      <Calendar
        workouts={[]}
        options={{
          calendarName: "",
          startDate: "",
          endDate: "",
          length: 0,
          plan: "",
          format: "ics",
        }}
        setWorkouts={mockFn}
        setOptions={mockFn}
        startDate=""
      />
    );
    expect(baseElement).toBeInTheDocument();
  });
});

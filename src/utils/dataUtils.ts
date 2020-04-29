import { plans, Plans } from './plans';

export const getWorkouts = (plan: Plans) => {
	return plans[plan].workouts;
};

export const getPlanLength = (plan: Plans) => {
	return plans[plan].length;
};

export const editWorkoutsLength = (workouts: string[], oldLength: number, newLength: number) => {
	if (oldLength > newLength) {
		const diff = oldLength - newLength;
		return workouts.slice(diff);
	} else if (oldLength < newLength) {
		const diff = newLength - oldLength;
		let newWorkouts = [...workouts];
		for (let i = 0; i < diff; i++) {
			newWorkouts.unshift('-');
		}
		return newWorkouts;
	} else {
		return workouts;
	}
};

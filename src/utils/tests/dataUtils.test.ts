import { editWorkoutsLength, getPlanLength, getWorkouts } from '../dataUtils';
import { Plans } from '../plans';

describe('editWorkoutsLength', () => {
	it('returns the workouts passed in if the lengths are the same', () => {
		const workouts = ['0', '1', '2'];
		const result = editWorkoutsLength(workouts, workouts.length, 3);
		expect(result).toEqual(workouts);
		expect(result.length).toEqual(workouts.length);
	});
	it('returns an array with the correct length when newLength < oldLength', () => {
		const workouts = ['0', '1', '2'];
		const result = editWorkoutsLength(workouts, workouts.length, 2);
		expect(result.length).toEqual(2);
	});
	it('removes items from the beginning of the array when newLength < oldLength', () => {
		const workouts = ['0', '1', '2'];
		const result = editWorkoutsLength(workouts, workouts.length, 2);
		expect(result).toEqual(['1', '2']);
	});
	it('returns an array with the correct length when newLength > oldLength', () => {
		const workouts = ['0', '1', '2'];
		const result = editWorkoutsLength(workouts, workouts.length, 4);
		expect(result.length).toEqual(4);
	});
	it('adds items to the beginning of the array when newLength > oldLength', () => {
		const workouts = ['0', '1', '2'];
		const result = editWorkoutsLength(workouts, workouts.length, 4);
		expect(result).toEqual(['-', '0', '1', '2']);
	});
});

describe('getPlanLength & getWorkouts', () => {
	it('returns the correct length for the plan passed in', () => {
		const result = getPlanLength(Plans['Hansons Beginner']);
		expect(result).toEqual(18);
	});
	it('returns the correct workouts for the plan passed in', () => {
		const result = getWorkouts(Plans['Hansons Beginner']);
		expect(result).toEqual([
			`rest`,
			`2 mi`,
			`rest`,
			`2 mi`,
			`rest`,
			`3 mi`,
			`4 mi`,
			`rest`,
			`3 mi`,
			`rest`,
			`3 mi`,
			`3 mi`,
			`3 mi`,
			`4 mi`,
			`rest`,
			`4 mi`,
			`rest`,
			`4 mi`,
			`4 mi`,
			`4 mi`,
			`5 mi`,
			`rest`,
			`5 mi`,
			`rest`,
			`3 mi`,
			`3 mi`,
			`5 mi`,
			`4 mi`,
			`rest`,
			`5 mi`,
			`rest`,
			`4 mi`,
			`5 mi`,
			`4 mi`,
			`6 mi`,
			`4 mi`,
			`1.5M warm up 12x400m @5k-10k pace w/ 400m jog rest 1.5M cool down`,
			`rest`,
			`1M warm up 5 Mile Tempo @Goal MP 1M cool down`,
			`4 mi`,
			`8 mi`,
			`8 mi`,
			`4 mi`,
			`1.5M warm up 8x600m @ 5k-10k Pace w. 400m jog rest 1.5M cool down`,
			`rest`,
			`1M warm up 5 Mile Tempo @ Goal MP 1M cool down`,
			`4 mi`,
			`6 mi`,
			`10 mi`,
			`6 mi`,
			`1.5M warm up 6x800m @ 5k-10k Pace w. 400m jog rest 1.5M cool down`,
			`rest`,
			`1M warm up 5 Mile Tempo @ Goal MP 1M cool down`,
			`5 mi`,
			`6 mi`,
			`10 mi`,
			`5 mi`,
			`1.5M warm up 5x1km @ 5k-10k Pace w. 400m jog rest 1.5M cool down`,
			`rest`,
			`1M warm up 8 Mile Tempo @ Goal MP 1M cool down`,
			`6 mi`,
			`5 mi`,
			`15 mi`,
			`7 mi`,
			`1.5M warm up 4x1200m @ 5k-10k Pace w. 400m jog rest 1.5M cool down`,
			`rest`,
			`1M warm up 8 Mile Tempo @ Goal MP 1M cool down`,
			`5 mi`,
			`8 mi`,
			`10 mi`,
			`5 mi`,
			`1.5M warm up 6xMile @MP-10s w. 400m jog rest 1.5M cool down`,
			`rest`,
			`1M warm up 8 Mile Tempo @ Goal MP 1M cool down`,
			`6 mi`,
			`8 mi`,
			`16 mi`,
			`5 mi`,
			`1.5M warm up 4x1.5 Miles @MP-10s w. 800m jog rest 1.5M cool down`,
			`rest`,
			`1M warm up 9 Mile Tempo @ Goal MP 1M cool down`,
			`5 mi`,
			`8 mi`,
			`10 mi`,
			`7 mi`,
			`1.5M warm up 3x2 Miles @MP-10s w. 800m jog rest 1.5M cool down`,
			`rest`,
			`1M warm up 9 Mile Tempo @ Goal MP 1M cool down`,
			`6 mi`,
			`6 mi`,
			`16 mi`,
			`5 mi`,
			`1.5M warm up 2x3 Miles @MP-10s w. 1 Mi jog rest 1.5M cool down`,
			`rest`,
			`1M warm up 9 Mile Tempo @ Goal MP 1M cool down`,
			`5 mi`,
			`8 mi`,
			`10 mi`,
			`7 mi`,
			`1.5M warm up 3x2 Miles @MP-10s w.800m jog rest 1.5M cool down`,
			`rest`,
			`1M warm up 10 Mile Tempo @ Goal MP 1M cool down`,
			`6 mi`,
			`6 mi`,
			`16 mi`,
			`5 mi`,
			`1.5M warm up 4x1.5 Miles @MP-10s w.800m jog rest 1.5M cool down`,
			`rest`,
			`1M warm up 10 Mile Tempo @ Goal MP 1M cool down`,
			`5 mi`,
			`8 mi`,
			`10 mi`,
			`7 mi`,
			`1.5M warm up 6xMile @MP-10s w.400m jog rest 1.5M cool down`,
			`rest`,
			`1M warm up 10 Mile Tempo @ Goal MP 1M cool down`,
			`6 mi`,
			`6 mi`,
			`8 mi`,
			`5 mi`,
			`5 mi`,
			`rest`,
			`6 mi`,
			`5 mi`,
			`3 mi`,
			`race`,
		]);
	});
});

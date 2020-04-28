import { plans } from './plans';

export enum Plans {
	'Hansons Beginner' = 'Hansons Beginner',
	'Hansons Advanced' = 'Hansons Advanced',
	'Higdon Novice 1' = 'Higdon Novice 1',
	'Higdon Novice 2' = 'Higdon Novice 2',
	'Higdon Intermediate 1' = 'Higdon Intermediate 1',
	'Higdon Intermediate 2' = 'Higdon Intermediate 2',
	'Higdon Advanced 1' = 'Higdon Advanced 1',
	'Higdon Advanced 2' = 'Higdon Advanced 2',
	'Pfitzinger/Douglas: Up to 55 mi/wk, 18 weeks' = 'Pfitzinger/Douglas: Up to 55 mi/wk, 18 weeks',
	'Pfitzinger/Douglas: 55-70 mi/Wk, 18 weeks' = 'Pfitzinger/Douglas: 55-70 mi/Wk, 18 weeks',
	'Pfitzinger/Douglas: 70-85 mi/wk, 18 weeks' = 'Pfitzinger/Douglas: 70-85 mi/wk, 18 weeks',
	'Pfitzinger/Douglas: Up to 55 mi/wk, 12 weeks' = 'Pfitzinger/Douglas: Up to 55 mi/wk, 12 weeks',
	'Pfitzinger/Douglas: 55-70 mi/wk, 12 weeks' = 'Pfitzinger/Douglas: 55-70 mi/wk, 12 weeks',
	'Hansons Beginner Half Marathon' = 'Hansons Beginner Half Marathon',
	'Hansons Advanced Half Marathon' = 'Hansons Advanced Half Marathon',
}

export const getWorkouts = (plan: Plans) => {
	return plans[plan].workouts;
};

export const getPlanLength = (plan: Plans) => {
	return plans[plan].length;
};

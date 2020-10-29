import { DISHES} from '../Shared/dishes.js';
import { COMMENTS } from '../Shared/comments.js';
import { PROMOTIONS } from '../Shared/promotions.js';
import { LEADERS } from '../Shared/leaders.js';

export const initialState = {
	dishes: DISHES,
	comments: COMMENTS,
	leaders: LEADERS,
	promotions: PROMOTIONS
};

export const Reducer = (state = initialState, action) => {
	return state;	
};

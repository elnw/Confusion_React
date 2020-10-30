import { createStore, combineReducers} from 'redux';
import { Dishes } from './dishes';
import { Leaders } from './leaders';
import { Promotions } from './Promotions';
import { Commentss } from './comments';

export const ConfigureStore = () => {
	const store = createStore(combineReducers({dishes: Dishes, comments: Commentss, promotions: Promotions, leaders: Leaders}));
	return store;
}

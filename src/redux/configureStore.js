import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Dishes } from './dishes';
import { Leaders } from './leaders';
import { Promotions } from './Promotions';
import { Commentss } from './comments';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
	const store = createStore(combineReducers({
            dishes: Dishes,
            comments: Commentss,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger));
	return store;
}

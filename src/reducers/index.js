import {combineReducers} from 'redux';
import eventsReducer from './eventsReducer';

const rootReducer = combineReducers({
    data: eventsReducer,
});

export default rootReducer; 
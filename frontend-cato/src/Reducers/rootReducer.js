import { combineReducers } from 'redux';
import sampleReducer from './sampleReducer';

const Reducers = combineReducers({
    sample: sampleReducer,
});

export default Reducers;
import { createStore } from 'redux';
import Reducers from '../Reducers/rootReducer';

const configStore = () => {
    return createStore(Reducers);
}

export default configStore;
import { createStore } from 'redux';
import rootReducer from '../reducers/index';

import sample from '../sample-data';

const initialState = {
    data: sample.data
};

const store = createStore(rootReducer, initialState);

export default store;
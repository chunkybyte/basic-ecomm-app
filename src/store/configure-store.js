import { createStore } from 'redux';
import rootReducer from '../reducers/index';

import data from '../sample-data';

const initialState = {
    data: data.data
};

const store = createStore(rootReducer, initialState);

export default store;
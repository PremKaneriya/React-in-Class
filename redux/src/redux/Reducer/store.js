import { thunk } from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from '.';

export const configureStore = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));

    return store;
};

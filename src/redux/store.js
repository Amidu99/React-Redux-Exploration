import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas/sagas.js';
import {usersSlice} from "./slice/usersSlice.js";
import { postsSlice } from './slice/postsSlice.js';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
        posts: postsSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
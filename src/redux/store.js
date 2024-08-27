import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas/sagas.js';
import {usersSlice} from "./slice/usersSlice.js";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { setUsers } from '../slice/usersSlice.js';
import { setPosts } from '../slice/postsSlice.js';

function* fetchUsersSaga() {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users');
    yield put(setUsers(response.data));
}

function* fetchPostsSaga() {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts');
    yield put(setPosts(response.data));
}

export function* rootSaga() {
    yield takeEvery('FETCH_USERS', fetchUsersSaga);
    yield takeEvery('FETCH_POSTS', fetchPostsSaga);
}

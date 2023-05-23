import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchJobs() {
    try {
        const response = yield axios.get('/api/viewjobs');
        yield put({
            type: 'SET_JOBS',
            payload: response.data
        });
    } catch (error) {
        console.log('JOBS GET request failed', error);
    }
}

function* jobsSaga() {
    yield takeEvery('FETCH_JOBS', fetchJobs);
}

export default jobsSaga;
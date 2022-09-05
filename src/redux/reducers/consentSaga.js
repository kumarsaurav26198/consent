import { call, put, takeEvery } from 'redux-saga/effects';
import { ActionTypes } from '../constants/actiontypes';


function* getConsentList() {
    // let data = yield fetch('https://62dbc602d1d97b9e0c53b578.mockapi.io/fakedata');
    let data = yield fetch('http://localhost:5000');
    // let data = yield fetch('https://jsonplaceholder.typicode.com/users');
    data = yield data.json();
    console.warn("api is called", data);
    yield put({ type: ActionTypes.FETCH_CONSENT, data });
}

function* consentSaga() {
    yield takeEvery(ActionTypes.FETCH_CONSENT, getConsentList);
}

export default consentSaga;


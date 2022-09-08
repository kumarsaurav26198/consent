import { call, put, takeEvery } from 'redux-saga/effects';
import { ActionTypes } from '../constants/actiontypes';


function* getConsentList() {
    let data = yield fetch('http://localhost:8080/api/tutorials');
    data = yield data.json();
    console.warn(" Saga api is called", data);
    yield put({ type: ActionTypes.FETCH_CONSENT_RECEIVED, data });
}

function* consentSaga() {
    yield takeEvery(ActionTypes.FETCH_CONSENT, getConsentList);
}

export default consentSaga;


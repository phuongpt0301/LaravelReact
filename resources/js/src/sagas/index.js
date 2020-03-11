// import AsyncStorage from '@react-native-community/async-storage';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { INITIALIZE_APP, INITIALIZE_APP_SUCCESS } from '../private/constants';

function* checkAuth() {
    // const data = AsyncStorage
    //   .getItem('dataAuth')
    //   .catch((error) => console.log('error check data authenticate'));

    yield put({ type: INITIALIZE_APP_SUCCESS, success: true });
}

export function* watchAuth() {
  yield takeEvery(INITIALIZE_APP, checkAuth);
}

export default function* rootSaga() {
  yield all([watchAuth()]);
}
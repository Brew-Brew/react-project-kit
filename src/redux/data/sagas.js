import { put, call, takeEvery } from 'redux-saga/effects';
import getData from '../../utils/getData';

import {
  LOAD_DATA,
  loadDailiesFailure,
  loadDataSuccess,
  loadDataRequest
} from './actions';

export function* loadDataFlow(){

  yield put(loadDataRequest());
  try {
      const datas = yield call(getData);
      yield put(loadDataSuccess(datas));
  } catch (error) {
    yield put(loadDailiesFailure(error));
  }
}

export function* watchData() {
  yield takeEvery(LOAD_DATA, loadDataFlow);
}

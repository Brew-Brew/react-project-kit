import { put, call, takeEvery } from 'redux-saga/effects';
import getDatas from '../../utils/getDatas';

import {
  LOAD_DATA,
  loadDailiesFailure,
  loadDataSuccess,
  loadDataRequest
} from './actions';

export function* loadDataFlow(){

  yield put(loadDataRequest());
  try {
      const datas = yield call(getDatas);
      const {data} = datas;
      yield put(loadDataSuccess(data));
  } catch (error) {
    yield put(loadDailiesFailure(error));
  }
}

export function* watchData() {
  yield takeEvery(LOAD_DATA, loadDataFlow);
}

import { all, fork } from 'redux-saga/effects';

import metaRoot from './meta/sagas';

export default function* root() {
  yield all([
    metaRoot(),
  ]);
}

import { all } from 'redux-saga/effects';

import  { watchData } from './data/sagas';

export default function* root() {
  yield all([
    watchData(),
  ]);
}

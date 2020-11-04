import { CHECK, Check, TEMP_SET_USER, TempSetUser } from 'modules/user/types';
import createRequestSaga from 'lib/createRequestSaga';
import * as authApi from 'lib/api/auth';
import { takeLatest } from 'redux-saga/effects';

export const tempSetUser: TempSetUser = (user) => ({
  type: TEMP_SET_USER,
  payload: {
    user,
  },
});
export const check: Check = () => ({
  type: CHECK,
});

const checkSaga = createRequestSaga(CHECK, authApi.check);
export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
}

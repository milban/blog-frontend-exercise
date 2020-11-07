import {
  CHECK,
  Check,
  CHECK_FAILURE,
  TEMP_SET_USER,
  TempSetUser,
} from 'modules/user/types';
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
const checkFailureSaga = () => {
  try {
    localStorage.removeItem('user');
  } catch (e) {
    console.log('localStorage is not working');
  }
};
export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
}

import {
  CHANGE_FIELD,
  ChangeField,
  INITIALIZE_FORM,
  InitializeForm,
  LOGIN,
  Login,
  REGISTER,
  Register,
} from 'modules/auth/types';
import createRequestSaga from 'lib/createRequestSaga';
import * as authApi from 'lib/api/auth';
import { takeLatest } from 'redux-saga/effects';

export const changeField: ChangeField = ({ form, key, value }) => ({
  type: CHANGE_FIELD,
  payload: {
    form,
    key,
    value,
  },
});
export const initializeForm: InitializeForm = ({ form }) => ({
  type: INITIALIZE_FORM,
  payload: { form },
});
export const register: Register = (args) => ({
  type: REGISTER,
  payload: args,
});
export const login: Login = (args) => ({
  type: LOGIN,
  payload: args,
});

const registerSaga = createRequestSaga(REGISTER, authApi.register);
const loginSaga = createRequestSaga(LOGIN, authApi.login);

export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
}

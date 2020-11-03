import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from 'modules/auth';
import loading from 'modules/loading';

const rootReducer = combineReducers({
  auth,
  loading,
});

export function* rootSaga() {
  yield all([authSaga()]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

import { combineReducers } from 'redux';
import auth from 'modules/auth';
import loading from 'modules/loading';

const rootReducer = combineReducers({
  auth,
  loading,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

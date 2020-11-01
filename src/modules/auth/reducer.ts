import { AuthAction, AuthState } from 'modules/auth/types';
import { CHANGE_FIELD } from 'modules/auth/actions';

const initialState: AuthState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    password: '',
  },
};

const auth = (state: AuthState = initialState, action: AuthAction) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return { ...state };
    default:
      return state;
  }
};

export default auth;

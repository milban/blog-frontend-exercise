import {
  AuthAction,
  AuthState,
  AuthType,
  CHANGE_FIELD,
  INITIALIZE_FORM,
} from 'modules/auth/types';

const initialState: AuthState = {
  [AuthType.Register]: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  [AuthType.Login]: {
    username: '',
    password: '',
  },
};

const auth = (state: AuthState = initialState, action: AuthAction) => {
  switch (action.type) {
    case CHANGE_FIELD: {
      const { form, key, value } = action.payload;
      return { ...state, [form]: { ...state[form], [key]: value } };
    }
    case INITIALIZE_FORM: {
      const { form } = action.payload;
      return { ...state, [form]: { ...initialState[form] } };
    }
    default:
      return state;
  }
};

export default auth;

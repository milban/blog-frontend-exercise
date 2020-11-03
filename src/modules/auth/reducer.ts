import {
  AuthAction,
  AuthState,
  AuthType,
  CHANGE_FIELD,
  INITIALIZE_FORM,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
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
  auth: null,
  authError: null,
};

const auth = (
  state: AuthState = initialState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case CHANGE_FIELD: {
      const { form, key, value } = action.payload;
      return { ...state, [form]: { ...state[form], [key]: value } };
    }
    case INITIALIZE_FORM: {
      const { form } = action.payload;
      return { ...state, [form]: { ...initialState[form] }, authError: null };
    }
    case REGISTER_SUCCESS:
      return { ...state, authError: null, auth: action.payload };
    case REGISTER_FAILURE:
      return { ...state, authError: action.payload };
    case LOGIN_SUCCESS:
      return { ...state, authError: null, auth: action.payload };
    case LOGIN_FAILURE:
      return { ...state, authError: action.payload };
    default:
      return state;
  }
};

export default auth;

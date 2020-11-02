import { createRequestActionTypes } from 'lib/createRequestSaga';

export enum AuthType {
  Login = 'login',
  Register = 'register',
}

export type AuthInputFieldKey = 'username' | 'password' | 'passwordConfirm';

export interface AuthFormInput {
  form: AuthType;
  key: AuthInputFieldKey;
  value: string;
}

export const CHANGE_FIELD = 'auth/CHANGE_FIELD' as const;
export const INITIALIZE_FORM = 'auth/INITIALIZE_FORM' as const;

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
  'auth/REGISTER',
);
export { REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE };

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  'auth/LOGIN',
);
export { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE };

interface ChangeFieldAction {
  type: typeof CHANGE_FIELD;
  payload: AuthFormInput;
}
interface InitializeFormAction {
  type: typeof INITIALIZE_FORM;
  payload: {
    form: AuthType;
  };
}
interface RegisterAction {
  type: typeof REGISTER;
  payload: {
    username: string;
    password: string;
  };
}
interface LoginAction {
  type: typeof LOGIN;
  payload: {
    username: string;
    password: string;
  };
}

export type ChangeField = (args: AuthFormInput) => ChangeFieldAction;
export type InitializeForm = (args: { form: AuthType }) => InitializeFormAction;
export type Register = (args: {
  username: string;
  password: string;
}) => RegisterAction;
export type Login = (args: {
  username: string;
  password: string;
}) => LoginAction;

export type AuthAction =
  | ChangeFieldAction
  | InitializeFormAction
  | RegisterAction
  | LoginAction;

export interface AuthState {
  [AuthType.Register]: {
    username: string;
    password: string;
    passwordConfirm: string;
  };
  [AuthType.Login]: {
    username: string;
    password: string;
  };
  authError: Error | null;
  auth: any;
}

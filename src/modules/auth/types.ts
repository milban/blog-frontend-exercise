import { FailureAction, SuccessAction } from 'modules/types';

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

export const REGISTER = 'auth/REGISTER' as const;
export const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS' as const;
export const REGISTER_FAILURE = 'auth/REGISTER_FAILURE' as const;

export const LOGIN = 'auth/LOGIN' as const;
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS' as const;
export const LOGIN_FAILURE = 'auth/LOGIN_FAILURE' as const;

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
  | SuccessAction<typeof REGISTER_SUCCESS, { username: string; _id: string }>
  | FailureAction<typeof REGISTER_FAILURE>
  | RegisterAction
  | SuccessAction<typeof LOGIN_SUCCESS, any>
  | FailureAction<typeof LOGIN_FAILURE>
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

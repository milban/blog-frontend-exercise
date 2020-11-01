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

interface ChangeFieldAction {
  type: typeof CHANGE_FIELD;
  payload: AuthFormInput;
}

export type ChangeField = (args: AuthFormInput) => ChangeFieldAction;

interface InitializeFormAction {
  type: typeof INITIALIZE_FORM;
  payload: {
    form: AuthType;
  };
}

export type InitializeForm = (args: { form: AuthType }) => InitializeFormAction;

export type AuthAction = ChangeFieldAction | InitializeFormAction;

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
}

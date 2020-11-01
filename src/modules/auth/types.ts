import { changeField, initializeForm } from 'modules/auth/actions';

export enum AuthType {
  Login = 'login',
  Register = 'register',
}

export enum AuthInputFieldKey {
  Username = 'username',
  Password = 'password',
  PasswordConfirm = 'passwordConfirm',
}

export interface AuthForm {
  form: AuthType;
  key: AuthInputFieldKey;
  value: string;
}

export type AuthAction = ReturnType<typeof changeField | typeof initializeForm>;

export interface AuthState {
  register: {
    username: string;
    password: string;
    passwordConfirm: string;
  };
  login: {
    username: string;
    password: string;
  };
}

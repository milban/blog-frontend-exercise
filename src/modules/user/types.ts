import { FailureAction, SuccessAction } from 'modules/types';
import { AxiosError } from 'axios';

export type User = { username: string; _id: string };

export const TEMP_SET_USER = 'user/TEMP_SET_USER' as const;

export const CHECK = 'user/CHECK' as const;
export const CHECK_SUCCESS = 'user/CHECK_SUCCESS' as const;
export const CHECK_FAILURE = 'user/CHECK_FAILURE' as const;

export const LOGOUT = 'auth/LOGOUT' as const;

interface TempSetUserAction {
  type: typeof TEMP_SET_USER;
  payload: {
    user: User;
  };
}
interface CheckAction {
  type: typeof CHECK;
}
interface LogoutAction {
  type: typeof LOGOUT;
}

export type TempSetUser = (user: User) => TempSetUserAction;
export type Check = () => CheckAction;
export type Logout = () => LogoutAction;

export type UserAction =
  | TempSetUserAction
  | SuccessAction<typeof CHECK_SUCCESS, User>
  | FailureAction<typeof CHECK_FAILURE>
  | CheckAction
  | LogoutAction;

export interface UserState {
  user: User | null;
  checkError: AxiosError | null;
}

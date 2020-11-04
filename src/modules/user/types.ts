import { FailureAction, SuccessAction } from 'modules/types';

export const TEMP_SET_USER = 'user/TEMP_SET_USER' as const;

export const CHECK = 'user/CHECK' as const;
export const CHECK_SUCCESS = 'user/CHECK_SUCCESS' as const;
export const CHECK_FAILURE = 'user/CHECK_FAILURE' as const;

interface TempSetUserAction {
  type: typeof TEMP_SET_USER;
  payload: {
    user: any;
  };
}
interface CheckAction {
  type: typeof CHECK;
}

export type TempSetUser = (user: any) => TempSetUserAction;
export type Check = () => CheckAction;

export type UserAction =
  | TempSetUserAction
  | SuccessAction<typeof CHECK_SUCCESS, { username: string; _id: string }>
  | FailureAction<typeof CHECK_FAILURE>
  | CheckAction;

export interface UserState {
  user: any;
  checkError: Error | null;
}

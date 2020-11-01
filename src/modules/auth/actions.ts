import { Action } from 'modules/types';
import { AuthForm, AuthType } from 'modules/auth/types';

export const CHANGE_FIELD = 'auth/CHANGE_FIELD' as const;
export const INITIALIZE_FORM = 'auth/INITIALIZE_FORM' as const;

export const changeField: Action<AuthForm, AuthForm> = ({
  form,
  key,
  value,
}) => ({
  type: CHANGE_FIELD,
  payload: {
    form,
    key,
    value,
  },
});
export const initializeForm: Action<{ form: AuthType }, { form: AuthType }> = ({
  form,
}) => ({
  type: INITIALIZE_FORM,
  payload: { form },
});

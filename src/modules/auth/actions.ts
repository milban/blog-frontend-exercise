import {
  CHANGE_FIELD,
  ChangeField,
  INITIALIZE_FORM,
  InitializeForm,
} from 'modules/auth/types';

export const changeField: ChangeField = ({ form, key, value }) => ({
  type: CHANGE_FIELD,
  payload: {
    form,
    key,
    value,
  },
});
export const initializeForm: InitializeForm = ({ form }) => ({
  type: INITIALIZE_FORM,
  payload: { form },
});

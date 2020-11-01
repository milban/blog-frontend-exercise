import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import { AuthType, changeField, initializeForm } from 'modules/auth';
import AuthForm from 'components/auth/AuthForm';
import { AuthInputElement } from 'components/auth/AuthInput';

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const { form } = useSelector((state: RootState) => ({
    form: state.auth.login,
  }));

  const onChange: React.ChangeEventHandler<AuthInputElement> = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: AuthType.Login,
        key: name,
        value,
      }),
    );
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(initializeForm({ form: AuthType.Login }));
  }, [dispatch]);

  return (
    <AuthForm
      type={AuthType.Login}
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default LoginForm;

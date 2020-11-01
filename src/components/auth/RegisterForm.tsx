import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import { AuthInputElement } from 'components/auth/AuthInput';
import { AuthType, changeField, initializeForm } from 'modules/auth';
import AuthForm from 'components/auth/AuthForm';

const RegisterForm: React.FC = () => {
  const dispatch = useDispatch();
  const { form } = useSelector((state: RootState) => ({
    form: state.auth.register,
  }));

  const onChange: React.ChangeEventHandler<AuthInputElement> = (event) => {
    const { name, value } = event.target;
    dispatch(
      changeField({
        form: AuthType.Register,
        key: name,
        value,
      }),
    );
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    dispatch(initializeForm({ form: AuthType.Register }));
  }, [dispatch]);

  return (
    <AuthForm
      type={AuthType.Register}
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default RegisterForm;

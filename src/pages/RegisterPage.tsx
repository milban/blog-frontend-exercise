import React from 'react';
import AuthForm from 'components/auth/AuthForm';
import AuthTemplate from 'components/auth/AuthTemplate';
import { AuthType } from 'modules/auth/types';

const RegisterPage: React.FC = () => {
  return (
    <AuthTemplate>{/*<AuthForm type={AuthType.Register} />*/}</AuthTemplate>
  );
};

export default RegisterPage;

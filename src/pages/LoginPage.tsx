import React from 'react';
import AuthTemplate from 'components/auth/AuthTemplate';
import AuthForm from 'components/auth/AuthForm';
import { AuthType } from 'modules/auth/types';

const LoginPage: React.FC = () => {
  return (
    <AuthTemplate>
      <AuthForm type={AuthType.Login} />
    </AuthTemplate>
  );
};

export default LoginPage;

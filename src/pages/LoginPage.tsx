import React from 'react';
import AuthTemplate from 'components/auth/AuthTemplate';
import AuthForm, { AuthType } from 'components/auth/AuthForm';

const LoginPage: React.FC = () => {
  return (
    <AuthTemplate>
      <AuthForm type={AuthType.login} />
    </AuthTemplate>
  );
};

export default LoginPage;

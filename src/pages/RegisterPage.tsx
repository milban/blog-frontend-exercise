import React from 'react';
import AuthForm, { AuthType } from 'components/auth/AuthForm';
import AuthTemplate from 'components/auth/AuthTemplate';

const RegisterPage: React.FC = () => {
  return (
    <AuthTemplate>
      <AuthForm type={AuthType.register} />
    </AuthTemplate>
  );
};

export default RegisterPage;

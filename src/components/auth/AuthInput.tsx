import React, { InputHTMLAttributes } from 'react';
import { AuthInputFieldKey } from 'modules/auth';

export interface AuthInputElement extends Omit<HTMLInputElement, 'name'> {
  name: AuthInputFieldKey;
}

interface AuthInputProps
  extends Omit<InputHTMLAttributes<AuthInputElement>, 'name'> {
  name: AuthInputFieldKey;
}

const AuthInput: React.FC<AuthInputProps> = ({ ...props }) => {
  return <input {...props} />;
};

export default AuthInput;

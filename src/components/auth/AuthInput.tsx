import React, { InputHTMLAttributes } from 'react';
import { AuthInputFieldKey } from 'modules/auth';
import styled from 'styled-components';
import palette from 'lib/styles/palette';

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

export const StyledAuthInput = styled(AuthInput)`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

export default AuthInput;

import React from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import { Link } from 'react-router-dom';
import Button from 'components/common/Button';
import { AuthState, AuthType } from 'modules/auth/types';
import AuthInput, { AuthInputElement } from 'components/auth/AuthInput';

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

const StyledAuthInput = styled(AuthInput)`
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

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const authTypeTextMap: { [key in AuthType]: string } = {
  [AuthType.Login]: '로그인',
  [AuthType.Register]: '회원가입',
};

interface AuthFormProps {
  type: AuthType;
  form: AuthState['login'];
  onChange: React.ChangeEventHandler<AuthInputElement>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

const AuthForm: React.FC<AuthFormProps> = ({
  type,
  form,
  onChange,
  onSubmit,
}) => {
  const text = authTypeTextMap[type];
  return (
    <AuthFormBlock>
      <h3>로그인</h3>
      <form onSubmit={onSubmit}>
        <StyledAuthInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <StyledAuthInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          value={form.password}
          onChange={onChange}
        />
        {type === AuthType.Register && (
          <StyledAuthInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            value={form.password}
            onChange={onChange}
          />
        )}
        <ButtonWithMarginTop cyan fullWidth>
          {text}
        </ButtonWithMarginTop>
      </form>
      <Footer>
        {type === AuthType.Login ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;

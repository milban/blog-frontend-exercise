import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import { AuthType, changeField, initializeForm } from 'modules/auth';
import { AuthInputElement, StyledAuthInput } from 'components/auth/AuthInput';
import AuthFooter from 'components/auth/AuthFooter';
import { Link } from 'react-router-dom';
import AuthFormContainer from 'components/auth/AuthFormContainer';
import authTypeTextMap from 'lib/textMap/authTypeTextMap';
import ButtonWithMarginTop from 'components/auth/ButtonWithMarginTop';

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
    <AuthFormContainer>
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
        <ButtonWithMarginTop cyan fullWidth>
          {authTypeTextMap[AuthType.Login]}
        </ButtonWithMarginTop>
      </form>
      <AuthFooter>
        <Link to="/register">{authTypeTextMap[AuthType.Register]}</Link>
      </AuthFooter>
    </AuthFormContainer>
  );
};

export default LoginForm;

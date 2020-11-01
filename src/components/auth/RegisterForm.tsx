import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import { AuthInputElement, StyledAuthInput } from 'components/auth/AuthInput';
import { AuthType, changeField, initializeForm } from 'modules/auth';
import AuthFooter from 'components/auth/AuthFooter';
import { Link } from 'react-router-dom';
import AuthFormContainer from 'components/auth/AuthFormContainer';
import authTypeTextMap from 'lib/textMap/authTypeTextMap';
import ButtonWithMarginTop from 'components/auth/ButtonWithMarginTop';

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
        <StyledAuthInput
          autoComplete="new-password"
          name="passwordConfirm"
          placeholder="비밀번호 확인"
          type="password"
          value={form.passwordConfirm}
          onChange={onChange}
        />
        <ButtonWithMarginTop cyan fullWidth>
          {authTypeTextMap[AuthType.Register]}
        </ButtonWithMarginTop>
      </form>
      <AuthFooter>
        <Link to="/login">{authTypeTextMap[AuthType.Login]}</Link>
      </AuthFooter>
    </AuthFormContainer>
  );
};

export default RegisterForm;

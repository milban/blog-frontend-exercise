import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import { AuthInputElement, StyledAuthInput } from 'components/auth/AuthInput';
import { AuthType, changeField, initializeForm, register } from 'modules/auth';
import AuthFooter from 'components/auth/AuthFooter';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import AuthFormContainer from 'components/auth/AuthFormContainer';
import authTypeTextMap from 'lib/textMap/authTypeTextMap';
import ButtonWithMarginTop from 'components/auth/ButtonWithMarginTop';
import { check } from 'modules/user';

const RegisterForm: React.FC<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();
  const {
    register: form,
    auth,
    authError,
    user,
  } = useSelector((state: RootState) => ({ ...state.auth, ...state.user }));

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
    const { username, password, passwordConfirm } = form;
    if (password !== passwordConfirm) {
      // TODO: 오류 처리
      return;
    }
    dispatch(register({ username, password }));
  };

  useEffect(() => {
    dispatch(initializeForm({ form: AuthType.Register }));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('오류 발생');
      console.log(authError);
      return;
    }
    if (auth) {
      console.log('회원가입 성공');
      console.log(auth);
      dispatch(check());
    }
  }, [authError, auth, dispatch]);

  useEffect(() => {
    if (!user) {
      return;
    }
    history.push('/');
  }, [user]);

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

export default withRouter(RegisterForm);

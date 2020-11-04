import React, { useEffect, useState } from 'react';
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
import ErrorMessage from 'components/common/ErrorMessage';

const RegisterForm: React.FC<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();
  const {
    register: form,
    auth,
    authError,
    user,
  } = useSelector((state: RootState) => ({ ...state.auth, ...state.user }));

  const [error, setError] = useState<string>();

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
    if ([username, password, passwordConfirm].includes('')) {
      setError('빈 칸을 모두 입력하세요.');
      return;
    }
    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }
    dispatch(register({ username, password }));
  };

  useEffect(() => {
    dispatch(initializeForm({ form: AuthType.Register }));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      if (authError.response?.status === 409) {
        setError('이미 존재하는 계정명입니다.');
        return;
      }
      setError('회원가입 실패');
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
        {error && <ErrorMessage>{error}</ErrorMessage>}
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

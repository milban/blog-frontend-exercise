import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import { AuthType, changeField, initializeForm, login } from 'modules/auth';
import { AuthInputElement, StyledAuthInput } from 'components/auth/AuthInput';
import AuthFooter from 'components/auth/AuthFooter';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import AuthFormContainer from 'components/auth/AuthFormContainer';
import authTypeTextMap from 'lib/textMap/authTypeTextMap';
import ButtonWithMarginTop from 'components/auth/ButtonWithMarginTop';
import { check } from 'modules/user';

const LoginForm: React.FC<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();
  const { login: form, auth, authError, user } = useSelector(
    (state: RootState) => ({
      ...state.auth,
      ...state.user,
    }),
  );

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
    const { username, password } = form;
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    dispatch(initializeForm({ form: AuthType.Login }));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('오류 발생');
      console.log(authError);
      return;
    }
    if (auth) {
      console.log('로그인 성공');
      dispatch(check());
    }
  }, [authError, auth, dispatch]);

  useEffect(() => {
    if (!user) {
      return;
    }
    history.push('/');
  }, [history, user]);

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

export default withRouter(LoginForm);

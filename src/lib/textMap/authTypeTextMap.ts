import { AuthType } from 'modules/auth';

const authTypeTextMap: { [key in AuthType]: string } = {
  [AuthType.Login]: '로그인',
  [AuthType.Register]: '회원가입',
};

export default authTypeTextMap;

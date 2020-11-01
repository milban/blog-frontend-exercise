import client from 'lib/api/client';
import { AuthState, AuthType } from 'modules/auth';

export const login = ({ password, username }: AuthState[AuthType.Login]) =>
  client.post('/api/auth/login', { password, username });

export const register = ({ password, username }: AuthState[AuthType.Login]) =>
  client.post('/api/auth/register', { password, username });

export const check = () => client.get('/api/auth/check');

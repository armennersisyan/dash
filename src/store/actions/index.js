export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function login(payload) {
  localStorage.setItem('token', payload.token);
  return { type: LOGIN, payload };
}

export function logout(payload) {
  localStorage.removeItem('token');
  return { type: LOGOUT, payload };
}

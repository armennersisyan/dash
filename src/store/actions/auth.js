import * as firebaseAPI from 'firebase';
import firebase from '../../services/firebase';

export function loginUserSuccess(payload) {
  localStorage.setItem('user', JSON.stringify(payload.user));
  return {
    type: 'LOGIN',
    payload,
  };
}

export function loginUserPending(status) {
  return {
    type: 'PENDING',
    status,
  };
}

export function logoutUserSuccess(payload) {
  localStorage.removeItem('user');
  return {
    type: 'LOGOUT',
    payload,
  };
}

export function registerUserRequest(payload) {
  return async function action(dispatch) {
    let response;
    try {
      response = await firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password);
      dispatch(loginUserSuccess(response));
    } catch (error) {
      return error;
    }
    return response;
  };
}

export function signUserGoogleRequest() {
  return async function action(dispatch) {
    let response;
    try {
      const provider = new firebaseAPI.auth.GoogleAuthProvider();
      response = await firebaseAPI
        .auth()
        .signInWithPopup(provider);
      dispatch(loginUserSuccess(response));
    } catch (error) {
      response = error;
    }
    return response;
  };
}

export function loginUserRequest(payload) {
  return async function action(dispatch) {
    dispatch(loginUserPending(true));
    let response;
    try {
      response = await firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password);
      dispatch(loginUserSuccess(response));
    } catch (error) {
      response = error;
    }
    dispatch(loginUserPending(false));
    return response;
  };
}

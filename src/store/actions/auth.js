import * as firebaseAPI from 'firebase';
import firebase from '../../services/firebase';

const database = firebaseAPI.database();

export function loginUserSuccess(payload) {
  localStorage.setItem('user', JSON.stringify(payload.user));
  return {
    type: 'LOGIN',
    payload,
  };
}

export function signUserPending(status) {
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

export function saveNewUserDataRequest(payload) {
  const details = {
    uid: payload.user.uid,
    email: payload.user.email,
    displayName: payload.user.displayName || payload.displayName || '',
  };
  database.ref(`users/${details.uid}`).set({ ...details });
}

export function getUserDataRequest(uid) {
  database.ref(`/users/${uid}`).once('value').then((snapshot) => {
    console.log('user by uid', snapshot.val());
    return snapshot.val();
  });
}

export function registerUserRequest(payload) {
  return async function action(dispatch) {
    dispatch(signUserPending(true));
    let response;
    try {
      response = await firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password);
      saveNewUserDataRequest({ ...response, ...payload });
      // getUserDataRequest(response.user.uid);
      dispatch(loginUserSuccess(response));
    } catch (error) {
      dispatch(signUserPending(false));
      return error;
    }
    dispatch(signUserPending(false));
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

      /**
       * On Register
       */
      if (response.additionalUserInfo.isNewUser) {
        saveNewUserDataRequest(response);
      }

      dispatch(loginUserSuccess(response));
    } catch (error) {
      response = error;
    }
    return response;
  };
}

export function loginUserRequest(payload) {
  return async function action(dispatch) {
    dispatch(signUserPending(true));
    let response;
    try {
      response = await firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password);
      dispatch(loginUserSuccess(response));
    } catch (error) {
      dispatch(signUserPending(false));
      response = error;
    }
    dispatch(signUserPending(false));
    return response;
  };
}

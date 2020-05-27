import * as firebaseAPI from 'firebase';

export default function getUsersRequest() {
  return async function action() {
    let response;
    try {
      return firebaseAPI.database().ref('/users/').once('value').then((snapshot) => {
        console.log('snapshot', snapshot.val());
      });
    } catch (error) {
      response = error;
    }
    return response;
  };
}

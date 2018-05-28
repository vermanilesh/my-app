import { authConstants } from './actions/auth.constants';

export const authMiddleware = store => next => action => {
  switch (action.type) {
    case authConstants.SIGN_IN:

      localStorage.setItem("email", "test@dispatchbot.com")
      return next({
        type: authConstants.SIGN_IN_SUCCESSFULL,
        payload: action.payload
      })
      /*return fetch(`http://localhost:3000/users/sign_in.json`, {
        method: "POST",
        payload,
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then((result) => {
        return next({
          type: authConstants.SIGN_IN_SUCCESSFULL,
          payload: result.json()
        })
      }, (error) => {
      })*/
    default:
      return next(action);
  }
}

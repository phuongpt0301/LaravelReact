import {
    INITIALIZE_APP,
    INITIALIZE_APP_SUCCESS,
  } from '../private/constants';
  
  const initialAuthState = {
    isLoggedIn: false,
    message: '',
    error: false,
    loading: true,
    isAppReady: false,
    signOutLoading: false
  };
  
  const authReducer = (state = initialAuthState, action) => {
    switch (action.type) {
      case INITIALIZE_APP:
        return { isAppReady: false, loading: true }
      case INITIALIZE_APP_SUCCESS:
        {
          return {
            ...action.payload, // update signin array with reponse data
            loading: false, // set loading to false
            isLoggedIn: true,
            isAppReady: true
          };
        }
      default:
        return state;
    }
  };
  
  export default authReducer;
  
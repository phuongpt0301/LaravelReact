import {
  INITIALIZE_APP,
  INITIALIZE_APP_SUCCESS,
} from '../private/constants';

export function initApp() {
    return { type: INITIALIZE_APP };
}
  
export  function initAppSuccess(data) {
    return {
      type: INITIALIZE_APP_SUCCESS,
      ...data
    }
}
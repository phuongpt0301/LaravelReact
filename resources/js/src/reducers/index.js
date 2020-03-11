import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistReducer } from 'redux-persist';

import authReducer from './AuthReducer';
// import navReducer from './NavigationReducer';

const rootPersistConfig = {
  key: 'root',
  storage: storage,
};

// const authPersistConfig = {
//   key: 'dataAuth',
//   storage: storage,
//   blacklist: ['dataAuth']
// };


const rootReducer = combineReducers({
  dataAuth: authReducer,
//   nav: navReducer,
  // dataSocket: socketReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);

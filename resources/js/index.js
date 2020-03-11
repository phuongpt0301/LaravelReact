import { AppContainer } from 'react-hot-loader';
import React from "react";
import ReactDOM from "react-dom";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import App from './src/components/App';
import { persistor, store } from './src/store';
import { initApp } from './src/actions/AuthAction';

const onBeforeLift = () => {
  // take some action before the gate lifts
  console.log('Before On Lift');
}

store.dispatch(initApp());


const render = Component =>
    ReactDOM.render(
    	<Provider store={store}>
	    	<PersistGate
	        loading={null}
	        onBeforeLift={onBeforeLift}
	        persistor={persistor}>
		        <AppContainer>
		            <Component />
		        </AppContainer>
	        </PersistGate>
        </Provider>,
        document.getElementById('app')
    );

render(App);

// Webpack Hot Module Replacement API
if (module.hot) module.hot.accept('./src/components/App', () => render(App));
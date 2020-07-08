import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/reducer/rootReducer'
import thunk from 'redux-thunk'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import firebase from './config/firebaseConfig'
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore'

// ======================================================
// Middleware Configuration
// ======================================================
const middleware = [
  thunk.withExtraArgument({ getFirestore }),
  // This is where you add other middleware like redux-observable
];
const store = createStore(rootReducer, 
  compose(
    applyMiddleware(...middleware),
    reduxFirestore(firebase)
    )
  )
const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

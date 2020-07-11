import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider, useSelector } from 'react-redux'
import rootReducer from './store/reducer/rootReducer'
import thunk from 'redux-thunk'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import firebase from './config/firebaseConfig'
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore'
import { isLoaded } from 'react-redux-firebase'
// ======================================================
// Middleware Configuration
// ======================================================
const middleware = [
  thunk.withExtraArgument({ getFirestore, getFirebase }),
  // This is where you add other middleware like redux-observable
];
const store = createStore(rootReducer, 
  compose(
    applyMiddleware(...middleware),
    reduxFirestore(firebase)
    )
  )

 // react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
}
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}
function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div className="text-center mt-5"><h3>Loading...</h3></div>;
  return children
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

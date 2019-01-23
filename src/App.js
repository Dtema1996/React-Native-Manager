import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from '@firebase/app';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDtcoV1ci4LhFnvXmLRgwIBXoW2S28BCF4',
      authDomain: 'manager-46152.firebaseapp.com',
      databaseURL: 'https://manager-46152.firebaseio.com',
      projectId: 'manager-46152',
      storageBucket: 'manager-46152.appspot.com',
      messagingSenderId: '328136957984'
  };
  firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from '@firebase/app';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyDtcoV1ci4LhFnvXmLRgwIBXoW2S28BCF4',
    authDomain: 'manager-46152.firebaseapp.com',
    databaseURL: 'https://ma  nager-46152.firebaseio.com',
    projectId: 'manager-46152',
    storageBucket: 'manager-46152.appspot.com',
    messagingSenderId: '328136957984'
  };
  firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;

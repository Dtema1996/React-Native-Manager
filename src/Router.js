import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import { Header } from './components/common';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="login" component={LoginForm}
          navBar={() => { return <Header headerText="Please Login" />; }}
          initial
        />
        <Scene
          key="employeeList"
          component={EmployeeList}
          navBar={() => { return <Header headerText="Employees" />; }}
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;

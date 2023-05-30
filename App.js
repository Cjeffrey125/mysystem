import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import GetStartedScreen from './interface/getStarted';
import SignUpScreen from './interface/signUpScreen';
import LoginScreen from './interface/loginScreen';
import Dashboard from './interface/dashBoard';
import Ticket from './interface/ticket';
import Favorite from './interface/favorite';
import Channel from './interface/channel';
import Profile from './interface/profile';
import ForgotPassword from './interface/ForgotPass';
import EmailAuthenticator from './interface/emailAuth';

const MainNavigator = createStackNavigator(
  {
    GetStarted: { screen: GetStartedScreen },
    SignUp: { screen: SignUpScreen },
    Login: {screen:LoginScreen},
    Dashboard: {screen:Dashboard},
    Ticket: {screen:Ticket},
    Favorite: {screen:Favorite},
    Channel: {screen:Channel},
    Profile: {screen:Profile},
    ForgotPassword : {screen:ForgotPassword},
    EmailAuthenticator: {screen:EmailAuthenticator}
  },
  {
    initialRouteName: 'GetStarted',
    headerMode:'none',
  }
);

const AppContainer = createAppContainer(MainNavigator);

const App = () => {
  return <AppContainer />;
};

export default App;

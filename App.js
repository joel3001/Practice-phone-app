/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
// import { createStackNavigator } from 'react-navigation';
import LoginScreen from './src/screens/loginScreen';
import SignUpScreen from './src/screens/signUpScreen';
import HomeScreen from './src/screens/homeScreen';
import Routes from './src/components/routes';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Routes/>
    );
  }
}

//const AppStackNavigatior = createStackNavigator(
  //{
    //Login: LoginScreen,
    //SignUp: SignUpScreen,
  //},
  //{
    //initialRouteName: 'Login',
  //}
//)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF6D00',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

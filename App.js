/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import Routes from './src/components/routes';
import Login from './src/screens/login'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
        backgroundColor="#00838F"
        barStyle="light-content"
      />
      <Routes/>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4DD0E1',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

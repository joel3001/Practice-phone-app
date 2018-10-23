import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar, TouchableOpacity, ImageBackground} from 'react-native';
import Logo from '../components/logo';
import ExistingGroups from '../components/existingGroups';
import { Actions } from 'react-native-router-flux';


export default class GroupsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <ImageBackground source={require('../images/header_bar.jpg')} style={{width: '100%', height: '100%'}}>
        <ExistingGroups />
        </ImageBackground>
      </View>
    );
  }
}

import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar, TouchableOpacity} from 'react-native';
import Logo from '../components/logo';
import HomePage from '../components/homePage';
import { Actions } from 'react-native-router-flux';


export default class HomeScreen extends Component <{}> {


    render() {
        return(
        <View style={styles.container}>
            <HomePage typeA="Create New Group" typeB="Existing Groups" typeC="Find My Mates"/>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF6D00',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    signUp: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    signUpText: {
        color: 'rgba(0,0,0,0.5)',
        fontSize: 16,
        fontWeight: '100',
    },
    signUpButton: {
        color: 'rgba(0,0,0,0.5)',
        fontSize: 16,
        fontWeight: '500',
    }
});

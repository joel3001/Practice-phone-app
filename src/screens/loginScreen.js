import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import Logo from '../components/logo';
import Form from '../components/form';

export default class LoginScreen extends Component <{}> {
    render() {
        return(
        <View style={styles.container}>
            <Logo />
            <Form type="Login"/>
            <View style={styles.signUp}>
                <Text style={styles.signUpText}>Don't have an account yet?</Text>
                <Text style={styles.signUpButton}> Sign up</Text>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4DD0E1',
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
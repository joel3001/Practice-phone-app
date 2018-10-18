import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar, TouchableOpacity} from 'react-native';
import Logo2 from '../components/logo2';
import Form2 from '../components/form2';
import { Actions } from 'react-native-router-flux';


export default class SignUpScreen extends Component <{}> {

    pressLogin() {
        Actions.pop()
    }

    render() {
        return(
        <View style={styles.container}>
            <Logo2 />
            <Form2 type="Sign Up"/>
            <View style={styles.signUp}>
                <Text style={styles.signUpText}>Already have an account?</Text>
                <TouchableOpacity onPress={this.pressLogin}><Text style={styles.signUpButton}> Sign in</Text></TouchableOpacity>
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
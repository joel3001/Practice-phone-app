import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ImageBackground } from 'react-native';
import Logo from '../components/logo';
import Form from '../components/form';
import { Actions } from 'react-native-router-flux';


export default class LoginScreen extends Component <{}> {

    pressSignUp() {
        Actions.signup()
    }

    render() {
        return(
        <View style={styles.container}>
            <ImageBackground source={require('../images/header_bar.jpg')} style={{width: '100%', height: '100%'}}>
            <Logo />
            <Form type="Login" />
            <View style={styles.signUp}>
                <Text style={styles.signUpText}>Don't have an account yet?</Text>
                <TouchableOpacity onPress={this.pressSignUp}><Text style={styles.signUpButton}> Sign up</Text></TouchableOpacity>
            </View>
            </ImageBackground>
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
        color: 'rgba(255,255,255,1)',
        fontSize: 16,
        fontWeight: '100',
    },
    signUpButton: {
        color: 'rgba(255,255,255,1)',
        fontSize: 16,
        fontWeight: '500',
    }
});
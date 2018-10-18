import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import LoginScreen from '../screens/loginScreen';
import SignUpScreen from '../screens/signUpScreen';

export default class Routes extends Component<{}> {
    render() {
        return(
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="login" component={LoginScreen} title="Login" initial={true}/>
                    <Scene key="signup" component={SignUpScreen} title="Register"/>
                </Stack>
            </Router>
        )
    }
}
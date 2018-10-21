import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import LoginScreen from '../screens/loginScreen';
import SignUpScreen from '../screens/signUpScreen';
import HomeScreen from '../screens/homeScreen';

export default class Routes extends Component<{}> {
    render() {
        return(
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="login" component={LoginScreen} title="Login" initial={true}/>
                    <Scene key="signup" component={SignUpScreen} title="Register"/>
                    <Scene key="mainpage" component={HomeScreen} title="Mainpage"/>
                </Stack>
            </Router>
        )
    }
}
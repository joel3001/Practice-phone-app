import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Login from '../screens/login';
import SignUp from '../screens/signup';

export default class Routes extends Component<{}> {
    render() {
        return(
            <Router>
                <Stack key="root">
                    <Scene key="login" component={Login} title="Login" initial={true}/>
                    <Scene key="register" component={SignUp} title="Register"/>
                </Stack>
            </Router>
        )
    }
}
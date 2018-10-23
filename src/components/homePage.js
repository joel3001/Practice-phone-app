import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import Logo3 from '../components/logo3';
import { Actions } from 'react-native-router-flux';

export default class HomePage extends Component<{}> {

constructor(props) {
    super(props) 
}

exgGroups() {
    Actions.exggroups()
}

  render() {
    return (
        <ImageBackground source={require('../images/header_bar.jpg')} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
            <Logo3 />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{this.props.typeA}</Text>
            </TouchableOpacity>
            <Logo3 />
            <TouchableOpacity style={styles.button} onPress={this.exgGroups}>
                <Text style={styles.buttonText}>{this.props.typeB}</Text>
            </TouchableOpacity>
            <Logo3 />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{this.props.typeC}</Text>
            </TouchableOpacity>
            <Logo3 />
        </View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    button: {
        width: 200,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 25,
        marginVertical: 15,
        paddingVertical: 10,
    },
    buttonText: {
      fontSize: 20,
      fontWeight: '500',
      color: '#000000',
      textAlign: 'center'   
    } 
});
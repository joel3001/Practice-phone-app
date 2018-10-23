import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Form2 extends Component<{}> {

constructor(props) {
    super(props) 
}

goToLogin() {
    Actions.login()
}

  render() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.inputBox} 
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="First Name" 
                placeholderTextColor="#000000"/>

            <TextInput style={styles.inputBox} 
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Last Name" 
                placeholderTextColor="#000000"/>

            <TextInput style={styles.inputBox} 
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Email" 
                placeholderTextColor="#000000"
                selectionColor="#000000"
                keyboardType="email-address"/>

            <TextInput style={styles.inputBox} 
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="New Password" 
                secureTextEntry={true}
                placeholderTextColor="#000000"/>

            <TextInput style={styles.inputBox} 
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Confirm New Password" 
                secureTextEntry={true}
                placeholderTextColor="#000000"/>
            
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={this.goToLogin}>{this.props.type}</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingTop: 100,
    },
  inputBox: {
      width: 300,
      backgroundColor: '#FFAB40',
      borderRadius: 25,
      paddingHorizontal: 16,
      fontSize: 16,
      marginVertical: 5,
    },
    button: {
        width: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 10,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: '500',
      color: '#000000',
      textAlign: 'center',   
    } 
});
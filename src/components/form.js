import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import HomeScreen from '../screens/homeScreen';
import { Actions } from 'react-native-router-flux';

export default class Form extends Component<{}> {

constructor(props) {
    super(props) 
}

goToMainPage() {
    Actions.mainpage()
}

  render() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.inputBox} 
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Email" 
                placeholderTextColor="#000000"
                selectionColor="#000000"
                keyboardType="email-address"
                onSubmitEditing={()=> this.password.focus}/>

            <TextInput style={styles.inputBox} 
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Password" 
                secureTextEntry={true}
                placeholderTextColor="#000000"
                ref={(input) => this.password = input}/>
            
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={this.goToMainPage}>{this.props.type}</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
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
      textAlign: 'center'   
    } 
});
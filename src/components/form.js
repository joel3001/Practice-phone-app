import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

export default class Form extends Component<{}> {

constructor(props) {
    super(props) 
}

  render() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.inputBox} 
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Email" 
                placeholderTextColor="#000000"/>

            <TextInput style={styles.inputBox} 
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Password" 
                secureTextEntry={true}
                placeholderTextColor="#000000"/>
            
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{this.props.type}</Text>
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
      backgroundColor: '#00838F',
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
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Logo3 from '../components/logo3';

export default class HomePage extends Component<{}> {

constructor(props) {
    super(props) 
}

  render() {
    return (
        <View style={styles.container}>
            <Logo3 />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{this.props.typeB}</Text>
            </TouchableOpacity>
            <Logo3 />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{this.props.typeA}</Text>
            </TouchableOpacity>
            <Logo3 />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{this.props.typeC}</Text>
            </TouchableOpacity>
            <Logo3 />

        </View>
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
        width: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 10,
    },
    buttonText: {
      fontSize: 20,
      fontWeight: '500',
      color: '#000000',
      textAlign: 'center'   
    } 
});
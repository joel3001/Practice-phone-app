import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class Logo extends Component<{}> {
  render() {
    return (
        <View style={styles.container}>
          <Image 
          style={{width: 200, height: 200}}
          source={require('../images/beer-logos-png-2.png')}
          />
          <Text style={styles.logoText}>Get to the bar...</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoText: {
      fontSize: 20,
      fontFamily: 'Roboto',
    }
});

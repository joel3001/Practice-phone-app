import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class Logo3 extends Component<{}> {
  render() {
    return (
        <View style={styles.container}>
          <Image 
          style={{width: 75, height: 75}}
          source={require('../images/beer4.png')}
          />
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

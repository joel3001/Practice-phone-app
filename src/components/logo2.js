import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class Logo2 extends Component<{}> {
  render() {
    return (
        <View style={styles.container}>
          <Image 
          style={{width: 100, height: 100}}
          source={require('../images/beer-logos-png-2.png')}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flexGrow: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
});

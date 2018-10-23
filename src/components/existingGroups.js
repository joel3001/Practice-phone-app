import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native';

export default class ExistingGroups extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headText}> My Groups </Text>
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
    headText: {
        fontSize: 40,
        fontWeight: '500',
        color: '#ffffff',
        marginTop: 10,
      },  
    }
);
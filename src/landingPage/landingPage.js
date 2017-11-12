import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';

const util = require('util');

export default class LandingPage extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return (
      <View style={styles.wrapper}>
        <Text> Landing Page </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

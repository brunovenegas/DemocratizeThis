import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';

const util = require('util');
const whatCanDemocracy = 'What can democracy do for you?';

export default class LandingPage extends Component {
  static navigationOptions = {
    title: 'Democratize This!',
  };
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.subtitle}>whatCanDemocracy</Text>
        <TextInput style={styles.textInput}>Hello hello 123</TextInput>
        <Text style={styles.subtitle}>Choices</Text>
        <TextInput style={styles.textInput}>Let us try this again</TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
    backgroundColor: '#3498db',
    flex: 1
  },
  subtitle: {
    color: 'white',
    fontWeight: '200'
  },
  textInput: {
    height: 40,
    width: '100%',
    color: 'white',
    borderColor: 'white',
    borderWidth: 1,
    padding: 10
  }
});

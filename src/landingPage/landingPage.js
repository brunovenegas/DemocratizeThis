import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

const util = require('util');
const whatCanDemocracy = 'What can democracy do for you?';
const choices = 'What choices will you give the people?'

export default class LandingPage extends Component {

  state = {
      issue: '',
      options: []
  }

  static navigationOptions = {
    title: 'Democratize This!',
  }

  createdIssue = (text) => {
    console.log(text);
    this.setState({ issue: text});
  }

  issueOptions = () => {
    console.log("fart");
  }

  render() {
    return (
      <View 
        style={styles.wrapper}>
        <Text 
          style={styles.subtitle}>
          {whatCanDemocracy}
        </Text>
        <View 
          style={styles.genericView}>
          <TextInput 
            style={styles.textInput}
            underlineColorAndroid = "transparent"
            placeholder = "Issue"
            onChangeText={(text) => this.createdIssue({text})}>
          </TextInput>
        </View>
        <Text 
          style={styles.subtitle}>
          {choices}
        </Text>
        <View 
          style={styles.genericView}>
          <TextInput 
            style={styles.textInput}
            underlineColorAndroid = "transparent"
            placeholder = "List your choices"
            multiline={true}
            numberOfLines={4}>
          </TextInput>
        </View>
        <View
          style={styles.genericView}>
          <Button
            style={styles.buttonContainer}
            title= "Submit"
            onPress = {() => this.issueOptions()}>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1
  },
  subtitle: {
    fontWeight: '200',
    padding: 10
  },
  textInput: {
    width: '95%',
    padding: 10,
    borderWidth: 1
  },
  genericView: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  buttonContainer: {
    width: '25%',
    padding: 10
  }
});

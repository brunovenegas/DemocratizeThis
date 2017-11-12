import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

const util = require('util');

export default class SplashScreen extends Component {
  static navigationOptions = {
    title: 'DEMOCRATIZE THIS',
  };

  render() {
    //console.log("this.props.navigation = " + util.inspect(this.props.navigation, false, null));
    var { navigate } = this.props.navigation;

    return (
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.title}>DEMOCRATIZE THIS</Text>
          <Image style={styles.philosopher} source={require('./plato.png')} />

          <Button
            onPress={() => navigate('LandingPage')}
            title="ON DEMOCRACY"
          />
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
    wrapper: {
    backgroundColor: '#3498db',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold'
  },
  subtitle: {
    color: 'white',
    fontWeight: '200',
    paddingBottom: 20
  },
  titleWrapper:  {
    justifyContent: 'center',
    flex: 1
  },
  philosopher: {
    width: 200,
    height: 200,
    margin: 50
  },
  buttonContainer: {
    backgroundColor: '#f1c40f',
    paddingVertical: 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
});

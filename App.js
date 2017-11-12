import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import SplashScreen from './src/splashScreen/splashScreen'
import LandingPage from './src/landingPage/landingPage'


export const DemocratizeThis = StackNavigator({
  Home: { screen: SplashScreen },
  LandingPage: { screen: LandingPage },
},

{  cardStyle: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
}
);

export default class App extends React.Component {
  render() {
    return <DemocratizeThis />;
  }
}

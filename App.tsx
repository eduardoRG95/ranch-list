import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Routes from './src/routes'

class reactTutorialApp extends Component {
   render() {
      return (
         <Routes />
      )
   }
}
export default reactTutorialApp
//AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp)
import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './pages/Home'
import List from './pages/Lists'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Ranch List" initial = {true} />
         <Scene key = "about" component = {List} title = "List" />
      </Scene>
   </Router>
)
export default Routes
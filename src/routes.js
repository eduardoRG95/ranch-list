import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
// import Welcome from './pages/welcome'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Create   from './pages/Create'

const Routes = () => (
   <Router>
      <Scene key = "root">
         {/* <Scene key="home" component={Welcome} title="Welcome" initial={true} /> */}
         <Scene key="home" component={Home} title="Ranch List" initial={true} />
         <Scene key = "about" component = {Cadastro} title = "Cadastre-se" />
         <Scene key = "list" component = {Create} title = "Crie sua lista" />
      </Scene>
   </Router>
)
export default Routes
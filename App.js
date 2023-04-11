import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Gujarat from './screens/Gujarat';
import Maharashtra from './screens/Maharashtra';
import Home from './screens/Home';

export default class App extends React.Component{
  render(){
    return(
      <SafeAreaProvider>
      <Home></Home>
      </SafeAreaProvider>
    )
  }
}
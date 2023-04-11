import React from 'react';
import {View,Text, Image} from 'react-native';
import MyHeader from '../Components/Header';

export default class WestBengal extends React.Component{
    render(){
      return(
        <View>
          <MyHeader title="West Bengal" navigation={this.props.navigation}></MyHeader>
          <Text> This is West Bengal</Text>
        </View>
      )
    }
  }
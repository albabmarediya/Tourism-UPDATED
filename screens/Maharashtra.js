import React from 'react';
import {View,Text, Image} from 'react-native';
import MyHeader from '../Components/Header';

export default class Maharashtra extends React.Component{
    render(){
      return(
        <View>
          <MyHeader title="Maharashtra" navigation={this.props.navigation}></MyHeader>
          <Text> This is Maharashtra</Text>
        </View>
      )
    }
  }
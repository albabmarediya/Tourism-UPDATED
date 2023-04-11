import React from 'react';
import {View,Text, Image} from 'react-native';
import MyHeader from '../Components/Header';

export default class Rajasthan extends React.Component{
    render(){
      return(
        <View>
          <MyHeader title="Rajasthan" navigation={this.props.navigation}></MyHeader>
          <Text> This is Rajasthan</Text>
        </View>
      )
    }
  }
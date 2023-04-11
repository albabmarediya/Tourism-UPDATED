import React from 'react';
import {View,Text, Image, StyleSheet} from 'react-native';
import MyHeader from '../Components/Header';

export default class Gujarat extends React.Component{
    render(){
      return(
        <View
        style={styles.container}
        >
          <MyHeader title="Gujarat" navigation={this.props.navigation}></MyHeader>
          {/* <Image
            source={require("../assets/Statue-of-Unity.jpg")}
          /> */}
          <Text>This is Gujarat</Text>
        </View>            
          

      )
    }
  }

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#2b6777',
    },
   
  })
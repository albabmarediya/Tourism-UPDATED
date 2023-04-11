import React from 'react';
import {View,Text,TouchableOpacity,Image,StyleSheet} from 'react-native';
import MyHeader from '../Components/Header';

export default class Home extends React.Component{
    render(){
      return(
        <View style={styles.container}>
            <MyHeader title="Home" navigation={this.props.navigation}></MyHeader>
          <Text style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center',}}>Select your City</Text>
         <View>
          <TouchableOpacity>
              <Image 
              style={{ height:120, width:140, margin: 10,}}
              source={{
          uri: 'https://static.vecteezy.com/system/resources/previews/007/366/529/original/gujarat-states-of-india-calligraphy-for-badge-icon-card-postcard-logo-banner-tag-illustration-eps10-mandala-orange-multicolor-bright-gradient-handwritten-stock-lettering-typography-vector.jpg',
          
        }}
              />
              
          </TouchableOpacity>
             <TouchableOpacity>
              <Image 
              style={{ height:120, width:140, margin: 10,}}
              source={{
          uri: 'https://static.vecteezy.com/system/resources/previews/007/368/712/original/maharashtra-handwritten-stock-lettering-typography-states-of-india-calligraphy-for-logotype-badge-icon-card-postcard-logo-banner-tag-illustration-eps10-mandala-orange-multicolor-gradient-vector.jpg',
        }}
              />
          </TouchableOpacity>

           <TouchableOpacity>
              <Image 
              style={{ height:120, width:140, margin: 10,}}
              source={{
          uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTExASFhUWGBYYFxUYFhYZGRsZFxcYGhgZGhceHSgiGhsnGxYXITEhJSkrLi4uGB8zODMsNygtLisBCgoKDg0OGxAQGysmICYtLS8uLi81LSstLystLTAtLi4yLS4vLS01LS0tLzAvLTAtLy0wLi0vLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAAAgEDBAUGB//EAEIQAAEDAQUFBQQIBQIHAQAAAAEAAhEDBBIhMUEFIlFhcQYTMoGRcqGxwRQjM0JSYpLwB4Ky0eGToiQ0U1TS4vEV/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAECAwQFBgf/xAA4EQABAwIDBgQEBAUFAAAAAAABAAIRAyExQVEEEmFxgfAikaHBEzKx4QUz0fEUNEJSchUjYoLS/9oADAMBAAIRAxEAPwDu0RF+dL6NEREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREVS08EDVMHBJVFJrUuYHiFLX0Vw3XvH9FUnRRLOf+VFXBnHT1UbmHwRzdEB1UUVSwqgaVTdOCmQiIQihSiIiIiIiIiIiIiIiIiIiIiIiIiIiIiK3aa7Kcd5VpsvCWhzt4gYSGjGJ1hWrLbaVWe7q03xgbrgY6xl5rZ2z1WtD3NIBzI7x/ZVFRpMArJREWKsiq3j0VFVnHyjirNxUFSI1EqQOoz+HRRdgZGSqBG8PT96LUY9+YVCpM9DGcTgf8lRY6cD6/vql7UT80DY8592JKm5iFCO3RzyUhpOPl6qLt79+oVccZnDVM7YIqA4AnT1VInHT0/YUovY5fvRRmTyCqe+PNSqOM4xqoqVTlhGnzUVm/FXbgiIiqpREREREREREREREREREREREREXLdoL1PaFGo1zgX2RwMEiO7tBDCOGD3LT9odqila7Jajum93VdzRjUpnMlo8RAx6gHNbbtO+bcRpTstEedSpVeR6XfVcv2grAVGPdi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',
        }}
              />
          </TouchableOpacity>

           <TouchableOpacity>
              <Image 
              style={{ height:120, width:140, margin: 10,}}
              source={{
          uri: 'data:image/jpeg;base64,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',
        }}
              />
          </TouchableOpacity>

        </View>
        </View>
      )
    }
  }

  const styles= StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#2b6777',
    },
  })
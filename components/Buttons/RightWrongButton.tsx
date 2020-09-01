import * as React from 'react';
import { Button, Alert, StyleSheet, Text, TouchableOpacity} from "react-native"
import { Component } from "react"
import { useNavigation } from '@react-navigation/native';








function RightWrongButton ({buttonTitle, rightWrong, screenName}: {buttonTitle: string, rightWrong: boolean, screenName: string}){
    const navigation = useNavigation();
 
    return (  
        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() => returnRightWrong(navigation, rightWrong, screenName)}
        >
          <Text style={styles.loginText}>{buttonTitle}</Text>
        </TouchableOpacity>

            
    );  


    
}


function returnRightWrong(navigation: any, rightWrong: boolean, screenName: string): void  {
    if (rightWrong) {
        navigation.navigate(screenName);
    }
    else {
        Alert.alert('Wrong button');
    }
}


const styles = StyleSheet.create({
    loginScreenButton:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#FFFFFF',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
      },
      loginText:{
          color:'#000',
          textAlign:'center',
          paddingLeft : 10,
          paddingRight : 10,
          fontWeight: "bold"
      }   
 })

export default RightWrongButton;









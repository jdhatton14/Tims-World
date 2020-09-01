import * as React from 'react';
//import {StyleSheet } from 'react-native';
import {StyleSheet, Button,SafeAreaView,Alert, TextInput, Image, ImageBackground} from 'react-native';
import tim from '../assets/images/Tim.jpg';





import RightWrongButton from '../components/Buttons/RightWrongButton';
import { Text, View } from '../components/Themed';
import { Component } from 'react';




const imageStyle = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: "center"
  }
});

export default class QuestionOneScreen extends Component {
  

    render() {
      return (
        <View style={styles.container}>
          <ImageBackground style={imageStyle.image} source={tim}>
            <Text>Where does Tim live?</Text>
            <RightWrongButton buttonTitle={"Omaha, NE"} rightWrong={false} screenName={"QuestionOne"} />
            <RightWrongButton buttonTitle={"Farmville, MN"} rightWrong={false} screenName={"QuestionOne"} />
            <RightWrongButton buttonTitle={"Ames, IA"} rightWrong={false} screenName={"QuestionOne"} />
            <RightWrongButton buttonTitle={"'The Hood'"} rightWrong={true} screenName={"QuestionTwo"} />
          </ImageBackground>
         
         
        </View>
      );
    }
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
   // alignItems: 'center',
    //justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  title1: {
    fontSize: 25,
    fontWeight: 'bold'
  }
});
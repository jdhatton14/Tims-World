import { Component } from "react";
import {StyleSheet, View, Image } from "react-native";
import tim from '../assets/images/Tim.jpg';


const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'cover'
    }
});

class BackgroundImage extends Component {
    render() {
        return (
          <View style={styles.container}>
            <Image 
            style={imageStyle.image}
            source={tim}
            />
            
          </View>
        );
    }
}
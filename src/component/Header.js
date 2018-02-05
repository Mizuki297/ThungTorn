import React, { Component } from 'react';
import { View,Text,StyleSheet,StatusBar } from "react-native";


export default class Herder extends Component{
    render(){
        return(
           <View style={{backgroundColor:"#FA8072"}}>
           <StatusBar
                    backgroundColor="#c35046"
                    barStyle="light-content"
                />
            <Text style={styles.text}>
            THUNGTORN
            </Text>
      </View>
        )
    }
}

const styles = StyleSheet.create({
  
    text:{
        fontSize:22,
        textAlign:'center',
        marginTop:25,
        backgroundColor:"#FA8072",
        color:"#ffffff"
    }
});
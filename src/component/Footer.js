import React, { Component } from 'react';
import { View,Text,StyleSheet,TouchableOpacity } from "react-native";
import { Actions } from 'react-native-router-flux';


export default class Herder extends Component{
    Sell(){
        Actions.Sell()
    }
    render(){
        return(
            
            <View style={styles.Option}>
                    <TouchableOpacity style={styles.Botton} >
                        <Text style={styles.Icon} >
                            ขาย
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.Sell} style={styles.Botton} >
                        <Text style={styles.Icon}>
                            รายได้
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Botton} >
                        <Text style={styles.Icon}>
                            สินค้า
                        </Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={styles.Botton} >
                        <Text style={styles.Icon}>
                            ยอดขาย
                        </Text>
                    </TouchableOpacity >
                </View>
        )
    }
}

const styles = StyleSheet.create({
    
    Option:{
        flex:0.4,
        backgroundColor:'#FA8072',
        flexDirection:"row",
        borderTopWidth:1,
        borderColor:"#fa8072",
        
        
        
        
    }, 
    Botton:{
        flex:1,
        backgroundColor:"#ffffff",
        
  
    },
    Icon:{
        textAlign:"center",
        marginTop:10,

    },
});
import React,{ Component }from 'react';
import { View,
        Text,
        StyleSheet,
        TouchableOpacity
 } from 'react-native'
import Footer from './Footer';

 export default class Sell extends Component{
     render(){
         return(
            <View style={{flex:1}} >
                {/* รายการขาย */}
                <View style={styles.Body} >
                    <Text style={styles.Text} >รายการขาย</Text>
                </View>
                {/* ข้อมูลการขาย */}
                <View style={{flex:3.8,backgroundColor:"#ffffff",flexDirection:"row"}} >
                    <View style={styles.Time} >
                        <Text style={styles.Text} >12:35</Text>
                    </View>
                    <View style={styles.Num} >
                        <Text style={styles.Text} >300 บาท</Text>
                    </View>
                </View>
                {/* ยอดขาย */}
                <View style={{flex:0.6,backgroundColor:"#c0c0c0",
                                flexDirection:"row",
                                borderColor:"#FA8072",
                                borderWidth:2}} >
                    <View style={{backgroundColor:"#ffffff"}} >
                        <Text style={styles.Text} >ยอดขาย</Text>
                    </View>
                    <View style={styles.Num} >
                        <Text style={styles.Text} >2,656 บ.</Text>
                    </View>
                </View>
                <Footer/>
            </View>
            
         );
     }
 }
 const styles=StyleSheet.create({
    Body:{
        flex:0.3,
        backgroundColor:"#ffffff",
        justifyContent:"center"
    },
    Data:{

    },
    Time:{
        alignItems:"flex-start",
        flex:1,
        height:50
    },
    Num:{
        alignItems:"flex-end",
        flex:1,
       backgroundColor:"#ffffff"
    },
    Text:{
        fontSize:25,
        backgroundColor:"#ffffff",
        margin:10
    },
 })
import React, { Component } from 'react';
import { View,
        StyleSheet,
        Text,
        TouchableOpacity,
        TextInput,
        StatusBar,
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import Header from './Header';
import Footer from './Footer';
export default class ThungTorn extends Component {
    Pay(){
        Actions.Pay()
    }
    Modify(){
        Actions.Modify()
    }
    render(){
        return(
            <View style={{flex:1,}} >
                {/* แสดงจำนวน */}
                <Header/>
                <View style={styles.Body} >             
                    <View style={styles.Bar} >
                        <Text style={styles.Num} >1</Text>
                        <Text style={styles.Text} >: ชิ้น </Text>
                    </View>
                    <View style={styles.Bar} >
                        <Text style={styles.Num} >6</Text>
                        <Text style={styles.Text} >: บาท </Text>
                    </View>
                </View>
                {/* ที่แสกน */}
                <View style={styles.Scan} >
                    <View style={styles.ScanT} >
                        <Text >Scanner</Text>
                    </View>
                </View>
                {/* แสดงข้อมูล */}
                <View style={styles.Data} >
                    <View style={{flex:1,backgroundColor:"#ffffff",justifyContent:"center"}} >
                        <View style={{flex:1,backgroundColor:"#ffffff"}} >
                            <Text style={styles.Textdata} >ม่าม่า</Text>
                        </View>
                        <View style={{flex:1,backgroundColor:"#ffffff"}} >
                            <Text style={styles.TextHead} >จำนวน</Text>
                        </View>
                        <View style={{flex:1}} ></View>
                        <View style={{flex:1}} >
                            <TouchableOpacity onPress={this.Modify} style={{backgroundColor:"#ffffff",}} >
                                {/* เชื่อมต่อกับหน้า Modify */}
                                <Text style={{fontSize:20,
                                    textAlign:"center",
                                    marginTop:10,color:"#1E90FF"}}
                                    >แก้ไข</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flex:1,
                        backgroundColor:"#ffffff",
                        alignItems:"center"}} >

                        <View style={{flex:1,justifyContent:"center"}} >
                            <View style={{flex:1,backgroundColor:"#ffffff"}} >
                                <Text style={styles.Textdata} >6 บาท</Text>
                            </View>
                            <View style={{flex:2,backgroundColor:"#ffffff"}} >
                                <View style={{flexDirection:"row",marginTop:12}} >
                                    <TouchableOpacity >
                                        <Text style={{width:30,
                                            backgroundColor:"#FA8072",
                                            fontSize:36.5,textAlign:"center",
                                            borderTopLeftRadius:10,
                                            borderBottomLeftRadius:10,
                                            color:"#ffffff"}} 
                                            >-</Text>
                                    </TouchableOpacity>
                                    <View style={{flex:1,backgroundColor:"#FA8072",justifyContent:"center"}} >
                                        <View style={{flex:1,width:80,
                                            backgroundColor:"#ffffff",
                                            marginBottom:5,
                                            marginTop:5,}} >
                                            <Text style={{flex:1,
                                            backgroundColor:"#ffffff",
                                            fontSize:20,
                                            textAlign:"center",
                                            marginBottom:5,
                                            marginTop:5,}} >1</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity>
                                        <Text style={{width:30,
                                            backgroundColor:"#FA8072",
                                            fontSize:36.5,textAlign:"center",
                                            borderBottomRightRadius:10,
                                            borderTopRightRadius:10,
                                            color:"#ffffff"}} 
                                            >+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{flex:1,backgroundColor:"#ffffff"}} >    
                                <TouchableOpacity onPress={this.Pay} style={{backgroundColor:"#FA8072",
                                                            borderRadius:10,
                                                            width:140}} >
                                    <Text style={{fontSize:22,
                                        textAlign:"center",
                                        marginTop:1,color:"#ffffff",}} 
                                        >ชำระเงิน</Text>
                                </TouchableOpacity>
                            </View>    
                        </View>
                    </View>
                </View>
                <Footer/>
            </View>
        );
    }
}
// จัดหน้า ui
const styles = StyleSheet.create({
    Head:{
        flex:0.45,
        backgroundColor:'#FA8072',
    },
    Body:{
        flex:0.65,
        backgroundColor:'#ffffff',
        flexDirection:"row",
        justifyContent:"space-around",
    },
    Scan:{
        flex:3,
        backgroundColor:'#ffffff',
    },
    Data:{
        flex:2,
        backgroundColor:'#B68E43',
        flexDirection:"row",
    },
    Option:{
        flex:0.6,
        backgroundColor:'#FA8072',
        flexDirection:"row",
    },
    Botton:{
        flex:1,
        marginTop:5,
        backgroundColor:"#ffffff",
  
    },
    Icon:{
        textAlign:"center",
        marginTop:10,

    },
    Text:{
        fontSize:22,
        textAlign:"center",
        marginTop:15,
    },
    Bar:{
        flex:1,
        backgroundColor:"#ffffff", 
        flexDirection:"row",
        justifyContent:"center"
    },
    Textdata:{
        fontSize:20,
        textAlign:"center",
        marginTop:10,
    },
    TextHead:{
        fontSize:20,
        textAlign:"center",
        marginTop:10,fontWeight:"bold"
    },
    Num:{
        fontSize:40,
        textAlign:"center",
        marginBottom:10,
        fontWeight:"bold",
        justifyContent:"center"
    },
    ScanT:{
        flex:1,
        backgroundColor:"#c0c0c0",
        marginLeft:20,
        marginRight:20,
        borderWidth:1
    }
});
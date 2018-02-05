import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class Modify extends Component{
    goBack(){
        Actions.pop()
    }
    render(){
        return(
            <View style={{flex:1,}} >
            {/* หัวข้อ */}
                <View style={{flex:0.3,backgroundColor:"#FA8072",
                            flexDirection:"row",justifyContent:"flex-end"}} >
                    
                    <TouchableOpacity style={styles.Buttom} >
                        <Text style={{fontSize:20,textAlign:"center",backgroundColor:"#FA8072",}} >ลบทั้งหมด</Text>
                    </TouchableOpacity>
                </View>
                {/* แถบหัวข้อสินค้า */}
                <View style={{flex:0.5,backgroundColor:"#3AA2B6",flexDirection:"row"}}>
                    <View style={styles.Head} >
                        <Text style={styles.TextHead} >สินค้า</Text>
                    </View>
                    <View style={styles.Head} >
                        <Text style={styles.TextHead}>ราคา</Text>
                    </View>
                    <View style={styles.Head} >
                        <Text style={styles.TextHead}>จำนวน</Text>
                    </View>
                </View>
                {/* ที่แสดงสินค้า */}
                <View style={{flex:4,backgroundColor:"#c0c0c0",}}>
                    <ScrollView >
                        {/* ข้อมูล 1 ชุด ตรงนี้*/}
                            <View style={{flex:0,flexDirection:"row",
                                        justifyContent:"space-between",marginTop:1,backgroundColor:"#ffffff"}} >
                                <Text style={styles.Text}>ม่าม่า</Text>
                                <Text style={styles.Text}>6 บาท</Text>
                                <Text style={styles.Text}>1</Text>
                                <TouchableOpacity style={styles.Buttom} >
                                    <Text style={{fontSize:20,textAlign:"center",color:"red",backgroundColor:"#ffffff",flex:1}} >X</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:0,flexDirection:"row",
                                        justifyContent:"space-between",marginTop:1,backgroundColor:"#ffffff"}} >
                                <Text style={styles.Text}>wiwi</Text>
                                <Text style={styles.Text}>6 บาท</Text>
                                <Text style={styles.Text}>1</Text>
                                <TouchableOpacity style={styles.Buttom} >
                                    <Text style={{fontSize:20,textAlign:"center",color:"red",backgroundColor:"#ffffff",flex:1}} >X</Text>
                                </TouchableOpacity>
                            </View>
                        {/* ถึงตรงนี้ */}
                    </ScrollView>
                </View>
                {/* ปุ่มกลับและลบ */}
                <View style={{flex:0.8,backgroundColor:"#B69A43",flexDirection:"row"}}>
                    <View style={{flex:1,backgroundColor:"#ffffff",
                                justifyContent:"flex-end"}} >
                        <TouchableOpacity onPress={this.goBack} style={{marginBottom:20}} >
                            <Text style={styles.TextButtom} >ยกเลิก</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,backgroundColor:"#ffffff",
                                justifyContent:"flex-end",alignItems:"center"}} >
                        {/* <TouchableOpacity style={{backgroundColor:"#ffffff",
                                                height:60,width:150,
                                                marginBottom:10,
                                                justifyContent:"center",
                                                borderRadius:15,borderColor:"#FA8072",borderStyle:"solid",borderWidth:2}} >
                            
                                <Text style={{fontSize:28,textAlign:"center",
                                            color:"#FA8072"}} >ลบ</Text>
                        </TouchableOpacity> */}
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    Head:{
        flex:1,
        backgroundColor:"#ffffff",
        alignItems:"center"
        
    },
    TextHead:{
        fontSize:22,
        color:"#000000",
        marginTop:10,
        marginRight:35

    },
    Buttom:{
        flex:0,
        backgroundColor:"#FA8072",
        justifyContent:"center",
    },
    Text:{
        fontSize:18,marginLeft:40,
    },
    TextButtom:{
        fontSize:20,
        textAlign:"center",
        color:"#1E90FF"
    }
});
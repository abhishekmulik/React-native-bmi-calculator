import React, { useState } from 'react'
import { View, Text,StyleSheet,ToastAndroid } from 'react-native'


const BmiResult = (props) => {
    const styles=StyleSheet.create({
        label:{
            fontSize:25,
            paddingHorizontal:10,
            color:'black'
        },
        green:{
            color:'green'
        },
        blue:{
            color:'#1a238a'
        },
        yellow:{
            color:'#e6d045'
        },
        red:{
            color:'red'
        }
    })
    const handleColors=()=>{
        if(props.data <= 18.5){
            return styles.blue.color
        }else if (props.data > 18.5 && props.data<=24.9){
            return styles.green.color
        }else if (props.data>25 && props.data<=29.9){
            return styles.yellow.color
        }else{
            return styles.red.color
        }
    }
    
    const statusColor=handleColors()
    
    return (
        <View>
        {
            props.data==='NaN' || props.data==='Infinity' || props.data<=0.00 ? 
            ToastAndroid.show('Enter valid info',2000)
            :
            <View>
                <Text style={styles.label}>Your B.M.I is : {props.data} </Text>
                <Text style={styles.label}>B.M.I status : <Text style={{color:statusColor}}>{props.status}</Text></Text>
            </View>
        }
        </View>
        
    )
}

export default BmiResult

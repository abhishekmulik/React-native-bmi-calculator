import React, { useState,useEffect } from 'react'
import {StyleSheet,View,Text,TextInput,Button,SafeAreaView, Keyboard} from 'react-native'
import BmiResult from './BmiResult'

function BmiForm() {
    const [displayResult,setDisplayResult]=useState(false)
    const [weight,setWeight]=useState(0)
    const [height,setHeight]=useState(0)
    const [bmiValue,setBmiValue]=useState(0)
    const [bmiStatus,setBmiStatus]=useState('')
    
    
    const calculateBmi=(weight,height)=>{
        const ht=height/100
        const bmi=weight/(ht*ht)
        setBmiValue(bmi.toFixed(2))   
    }

    const clickHandler=()=>{
        setDisplayResult(true)
        calculateBmi(weight,height)
        Keyboard.dismiss()
    }

    const handleBmiStatus=()=>{
        if(bmiValue <= 18.5){
            setBmiStatus('Under Weight')
        }else if (bmiValue > 18.5 && bmiValue<=24.9){
            setBmiStatus('Normal Weight')
        }else if (bmiValue>25 && bmiValue<=29.9){
            setBmiStatus('Over Weight')
        }else{
            setBmiStatus('Obesity')
        }
    }
    useEffect(()=>{
        handleBmiStatus()
    },[bmiValue])
    const Separator=()=>(
        <View style={styles.separator}/>
    )
    
    const styles=StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            marginHorizontal: 16,
          },
        input:{
            display:'flex',
            height:40,
            backgroundColor:'#f1f3f6',
            marginLeft:10,
            borderRadius:8,
            paddingHorizontal:80,
            borderColor:'grey'          
        },
        label:{
            fontSize:18,
            fontWeight:'bold',
            paddingHorizontal:5
        },
        separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
        },
        btn:{
            padding:20
        }
    })
    
        return (
        <SafeAreaView>
            <View style={{
            paddingTop:40,
            display:'flex',
            flexDirection:'row',
            allignItems:'center'
            }}>
                <Text style={styles.label}>Enter Weight <Text style={{fontWeight:'normal'}}>(in kg)</Text></Text>
                <TextInput style={styles.input} keyboardType='decimal-pad' onChangeText={(val)=>setWeight(val)}/>
            </View>
    
            <View style={{
            paddingTop:40,
            display:'flex',
            flexDirection:'row',
            allignItems:'center'
            }}>
                <Text style={styles.label}>Enter Height <Text style={{fontWeight:'normal'}}>(in cm)</Text></Text>
                <TextInput style={styles.input} keyboardType='decimal-pad' onChangeText={(val)=>setHeight(val)}/>
            </View>
            <Separator/>
            <View style={styles.btn}>
            <Button title='Check BMI' onPress={clickHandler}/>
            </View>
            
            {
                displayResult ? <BmiResult data={bmiValue} status={bmiStatus}/>: <Text></Text>                 
            }
            
        </SafeAreaView>
        
    )
}

export default BmiForm

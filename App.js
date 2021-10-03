import React,{useState} from 'react';
import { StyleSheet,Text,View } from 'react-native';
import BmiForm from './components/bmi/BmiForm';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  
  return(
    <SafeAreaProvider>
    <View>
      {/* <Header leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
          centerComponent={{ text: 'BMI Calculator', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}/> */}
          <Header centerComponent={{ text: 'BMI Calculator', style: { color: '#fff',fontWeight:'bold'} }}/> 
      <BmiForm/>
    </View>
    </SafeAreaProvider>
    
    
    
  )
}

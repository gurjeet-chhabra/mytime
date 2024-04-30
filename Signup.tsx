import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Signup = () => {
  return (
    <View style={styles.view}>
      <Text style={{padding:30, fontSize:30}}>Signup</Text>
      <View style={{width:400 , height:600 , borderColor:'white' , borderWidth:2, borderRadius:20 , 
        justifyContent:'center', alignItems:'center'
      }}>
      <Text style={{fontSize:30 , paddingBottom:20 }}>please enter your personal details</Text>
      <TextInput placeholder='please enter your email address' style={{paddingTop:20 , borderBottomWidth:1 , width:350}}/>
      <TextInput placeholder='please type first name'  style={{paddingTop:20 , borderBottomWidth:1 , width:350}}/>
      <TextInput placeholder='please type last name' style={{paddingTop:20 , borderBottomWidth:1 , width:350}}/>
      <TextInput placeholder='please enter mobile number' style={{paddingTop:20 ,width:350, 
        borderBottomWidth:1 , marginBottom:40}}/>
      <Button title='register'/>
      <Text style={{marginTop:20 , fontSize:15}}>login? </Text>
      </View>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  view:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  backgroundColor:'black'
  }
})
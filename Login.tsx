import { StyleSheet, Text, View , TextInput , Button} from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style={styles.view}>
    {/* <Text style={{fontSize:20 , marginTop:20 , fontWeight:'bold'}}>login</Text> */}
  <Text style={{padding:30 , fontSize:20 , fontWeight:'bold'}}>Hi There, Welcome to MyTime</Text>
  <View style={{width:400 , height:400 , justifyContent:'center' , borderColor:'white' , 
  borderWidth:1 , alignItems:'center' , borderRadius:20}}>
  <Text style={{fontSize:20 , paddingBottom:20}}>please enter your login details</Text>
  <TextInput style={{borderBottomColor:'white' ,  borderBottomWidth:1 , marginBottom:30, width:350}} placeholder='username'/>
  <TextInput style={{borderBottomColor:'white' ,  borderBottomWidth:1 , width:350 , marginBottom:20}} 
  placeholder='password' />
  <Button title='login'/>
  <Text style={{marginTop:20}}>dont have an account? sign up
  </Text>
  </View>
   </View>
  )
}

export default Login

const styles = StyleSheet.create({
  view:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black'
  }
})
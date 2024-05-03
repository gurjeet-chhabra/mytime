import { StyleSheet, Text, View , TextInput , Button} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

const App = () => {


  return (
   <View style={styles.view}>
  
  <View >
  <Text style={styles.welcome}>welcome back </Text>
  </View>

  
    <View style={styles.responsive}>
      <View style={styles.input}>
        
        <Icon name='envelope' size={25} color="#C1C1C1" style={{paddingLeft:10}}/>
    <TextInput placeholder='Enter your email address' placeholderTextColor={'#A4A1A1'} />
    <Icon name='check' size={25} color="#C1C1C1" style={{paddingRight:10}}/>
    </View>

    <View style={styles.input2}>
      <Icon name='key' size={25} color="#C1C1C1" />
    <TextInput placeholder='Enter Password' placeholderTextColor={'#A4A1A1'}/>
    <Icon name='eye' size={25} color="#C1C1C1" />
    </View>
    </View>

  <View style={styles.responsive}>
    <Text style={styles.forgot}>Forgot Password?</Text>
    </View>
   

<View style={styles.responsive}>
      <View style={styles.button}>
        <Text style={styles.Login}>Login</Text>
      </View>

<Text style={styles.or}>Or</Text>

      <View style={styles.signup}>
        <Text style={styles.Login}>Sign up</Text>
      </View>
      </View>
   
   </View>
  )
}

export default App

const styles = StyleSheet.create({
  view:{
     flex:1,
     //justifyContent:'center',
    //alignItems:'center',
    backgroundColor:'#FFFFFF'
  },
  welcome:{
    width:180,
    height:96,
    fontFamily:'poppins',
    fontWeight:'bold',
    fontSize:42,
    color:'#646464',
   marginTop:105,
   left:35,
  },
  input:{
    width:324,
    height:45,
    marginTop:279,
    //left:50,
    borderRadius:20,
    borderColor:'#C1C1C1',
    borderWidth:2,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  input2:{
    width:324,
    height:45,
    marginTop:351,
    //left:50,
    borderRadius:20,
    borderColor:'#C1C1C1',
    borderWidth:2,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  forgot:{
    width:123,
    height:19,
    marginTop:408,
    left:98,
    //fontWeight:700,
    fontSize:14,
    fontFamily:'Open Sans',
    color:'#A4A1A1'
   },
  button:{
    width:324,
    height:45,
    marginTop:481,
    color:'#747474',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:'#D9D9D9'
  },
  Login:{
   width:38,
   height:19,
   //top:494,
   //left:173,
   fontFamily:'Open Sans',
   //fontWeight:700,
   fontSize:14,
   color:'#747474',
  },
  or:{
   width:20,
   height:20,
   marginTop:544,
   //left:198,
   color:'#000000',
   fontSize:18,
   fontFamily:'Open Sans'
  },
  signup:{
    width:324,
    height:45,
    marginTop:581,
    //left:50,
    color:'#747474',
   justifyContent:'center',
   alignItems:'center',
    borderRadius:10,
    borderColor:'#A4A3A3',
    borderWidth:1
  },
  responsive:{
    alignItems:'center',
  }
})

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

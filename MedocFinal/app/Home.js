import React from "react";
import { TouchableOpacity, ImageBackground, Text, StyleSheet, View } from "react-native";

export default function page({ navigation }) {
  global.Myvar='';
  global.Myvar1='';
  global.IP='192.168.43.34';

  const pressHandler =() =>{
    navigation.navigate('Doctor');
  }
  const pressHandler1 =() =>{
    navigation.navigate('User');
  }  

  return (
        
      <View style={styles.container}>
        <ImageBackground source={require('../assets/bg1.png')} style={styles.image}>
        <Text style={styles.text}>MeDoc</Text>
        <Text style={styles.text1}>For Better care</Text>
        <View style={styles.container1}>
        <TouchableOpacity style={styles.nextButton} onPress={pressHandler}>
        <Text style={styles.nextButtonText}>Doctor</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nextButton} onPress={pressHandler1}>
        <Text style={styles.nextButtonText}>User</Text>
      </TouchableOpacity>
        </View>
        </ImageBackground>
      </View>
   
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  }, 
  image: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 16,

    },
    text: {
      fontWeight: "bold",
      fontSize: 40,
      color: '#fff',
    },
    text1: {
      fontSize: 15,
      fontStyle: "italic",
      color: '#fff',
    },
    container1: {
      justifyContent: "center",
      padding: 16,
      width: '110%',
      top: '30%',
      height:'40%',
      backgroundColor: '#FFFFFF',
      borderTopLeftRadius: 120,
    },
    nextButton: {
      marginTop: '5%',
      borderRadius: 60,
      height: '25%',
      top: '-5%',
      width: '70%',
      left:'15%',
      backgroundColor: '#3557b7',
      justifyContent: 'center',
      marginBottom: 10,
    },
    nextButtonText: {
      textAlign: 'center',
      fontSize: 20,
      color: '#fff',
      fontWeight: '700',
    },
  });



//   import React from 'react';
// import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, Button } from 'react-native';

// export default function Home({ navigation }) {

//   const pressHandler =() =>{
//     navigation.navigate('Doctor');
//   }
//   const pressHandler1 =() =>{
//     navigation.navigate('User');
//   }

//   return (
  
//   <View style={styles.container}>
//     <ImageBackground source={require('../assets/bg1.png')} style={styles.image}>
//     <TouchableOpacity style={styles.btn} onPress={pressHandler}>
//         <Image style={styles.imagestyle} source={require('../assets/doc.png')} />
//       </TouchableOpacity>
//       <Text style={styles.titleText}>Doctor</Text>
//       <TouchableOpacity style={styles.btn1} onPress={pressHandler1}>
//        <Image style={styles.imagestyle1} source={require('../assets/user.png')} />
//        </TouchableOpacity>
//        <Text style={styles.titleText}>Patient</Text>
//         <Text style={styles.titleText5}>Login to the app as..!</Text>
//     </ImageBackground>
//   </View>
  
//   );
// }

// const styles = StyleSheet.create({ 
//   container: {
//     flex: 1,
//     flexDirection: "column"
//   },
//   image: {
//     flex: 1,
//     resizeMode: "cover",
   
//   },
//   btn: {
//       marginTop: 130,
//       borderRadius: 200,
//       height: 200,
//       minWidth: 250,
//       marginBottom: 100,
//     },
//     imagestyle: {
//       position: 'absolute',
//       resizeMode: "center",
//       top: -240,
//       left: -70,
//     },
//     btn1: {
//       marginTop: -60,
//       borderRadius: 200,
//       height: 200,
//       minWidth: 250,
//       marginBottom: 100,
//     },
//   imagestyle1: {
//     position: 'absolute',
//     width: 180,
//     height: 180,
//     top: -70,
//     left: 100,
//   },
//   titleText: {
//     color: "white",
//     fontSize: 20,
//     fontWeight: "bold",
//     top: -180,
//     left: 160,
//   },
//   titleText1: {
//     color: "white",
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//  titleText5: {
//   color: "white",
//   fontSize: 20,
//   fontWeight: "bold",
//   top: -100,
//   left: 100,
// },
// });



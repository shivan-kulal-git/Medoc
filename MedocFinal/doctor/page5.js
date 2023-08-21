import React from "react";
import { ImageBackground, Alert, TouchableOpacity, Text, StyleSheet, View } from "react-native";

export default function page1({ navigation }) {
  const pressHandler22 =() =>{
    navigation.navigate('Account1');
  }
  const pressHandler24 =() =>{
    navigation.navigate('privacy');
  }
  const pressHandler25 =() =>{
    navigation.navigate('feedback');
  }
  const pressHandler26 =() =>{
    navigation.navigate('About');
  }
  
  const createTwoButtonAlert = () =>
  Alert.alert(
    "Logout",
    "Are you sure !",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () =>  navigation.navigate('HomeScreen')}
    ]
  );

    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/white.jpg')} style={styles.image}>
          <Text style={styles.text}>Settings</Text>
            <TouchableOpacity style={styles.btn1} onPress={pressHandler22}>
                <Text style={styles.text1} > Account </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn1} onPress={pressHandler24}>
                <Text style={styles.text1} > Privacy </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn1} onPress={pressHandler26}>
                <Text style={styles.text1} > About Us </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn1} onPress={pressHandler25} >
                <Text style={styles.text1} >Feedback</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn1} onPress={createTwoButtonAlert}>
                <Text style={styles.text1} > Logout </Text>
            </TouchableOpacity>
        </ImageBackground>
      </View>
);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
    },
    text:{
      paddingLeft: '5%',
      top: '5%',
      fontSize: 25,
      fontWeight: "bold",
      color: '#7a7a7a',
      paddingBottom:'20%',
       },
      btn1: {
        borderRadius: 20,
        height: '8%',
        justifyContent: 'center',
        minWidth: '100%',
        marginTop: '1%',
      },
      text1: {
        fontWeight: "bold",
        color: '#7a7a7a',
        fontSize: 17,
        left: '10%',
      },
  });
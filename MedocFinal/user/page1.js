import React from "react";
import {  TouchableOpacity, Text, StyleSheet, View, Image} from "react-native";

export default function page4({ navigation }) {
  
  const pressHandler20 =() =>{
    navigation.navigate('Appointment');
  }  
  const pressHandler21 =() =>{
    navigation.navigate('Hospital');
  }  
  const pressHandler22 =() =>{
    navigation.navigate('News');
  } 
  const pressHandler23 =() =>{
    navigation.navigate('Dictionary');
  } 
  const pressHandler24 =() =>{
    navigation.navigate('BMI_calculator');
  }  
  const pressHandler25 =() =>{
    navigation.navigate('Ambulance');
  }  
  
  return (
      <View style={styles.container}>
            <TouchableOpacity style={styles.buttoncontainer} onPress={pressHandler20}>
             <Image style={styles.img} source={require('../assets/appointment.png')} />
             <Text style={styles.buttontext}>Appointment</Text>
             <Text style={styles.buttontext4}>Get your Appointment here</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttoncontainer1} onPress={pressHandler21}>
             <Image style={styles.img} source={require('../assets/hospital.png')} />
             <Text style={styles.buttontext}>Your Hospitals</Text>
             <Text style={styles.buttontext4}>Find the Your Hospital</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttoncontainer2} onPress={pressHandler22}>
             <Image style={styles.img} source={require('../assets/news0.png')}/>
             <Text style={styles.buttontext}>News</Text>
             <Text style={styles.buttontext4}>Get instant News</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttoncontainer3} onPress={pressHandler23}>
             <Image style={styles.img} source={require('../assets/journal.png')}/>
             <Text style={styles.buttontext}> Disease Dictionary</Text>
             <Text style={styles.buttontext4}> Search yout dought </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttoncontainer5} onPress={pressHandler24}>
             <Image style={styles.img} source={require('../assets/bmi.png')}/>
             <Text style={styles.buttontext}>BMI calculator</Text>
             <Text style={styles.buttontext4}> How Fit are you </Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.buttoncontainer6} onPress={pressHandler25} >
             <Image style={styles.img} source={require('../assets/ambulance.png')} />
             <Text style={styles.buttontext}>Ambulance</Text>
             <Text style={styles.buttontext4}> Ambulance will be there in no time </Text>
            </TouchableOpacity >
      </View> 
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffff',
    },
    scrollView: {
      marginHorizontal: 10,
      marginVertical: 1,
    },
    buttoncontainer:{
      height: '25%' ,
      borderRadius:5,
      justifyContent: 'center',
      top:'5%',
      left: '5%',
      width:'40%',
      borderWidth:2,
      borderColor:"grey",
    },
    img:{
      width: '53%',
      bottom:'10%',
      left: '25%',
      height:'50%',
    },
     buttontext:{
       textAlign: 'center',
       color:"black",
       fontSize:15,
       top: '5%',
       fontWeight: "bold",
     },
     buttontext4:{
      textAlign: 'center',
      color:"darkgrey",
      fontSize:10,
      top: '5%',
      fontStyle: "italic",
    },
     buttoncontainer1:{
      height: '25%',
      borderRadius:5,
      justifyContent: 'center',
      top:'-20%',
      left: '55%',
      width: '40%',
      borderWidth:2,
      borderColor:"grey",
     },
     buttoncontainer2:{
      height: '25%',
      borderRadius:5,
      justifyContent: 'center',
      top:'-15%',
      left: '5%',
      width: '40%',
      borderWidth:2,
      borderColor:"grey",
     },
     buttoncontainer3:{
      height: '25%',
      borderRadius:5,
      justifyContent: 'center',
      top:'-40%',
      left: '55%',
      width:'40%',
      borderWidth:2,
      borderColor:"grey",
     },
     buttoncontainer5:{
      height: '25%',
      borderRadius:5,
      justifyContent: 'center',
      top:'-35%',
      left: '5%',
      width: '40%',
      borderWidth:2,
      borderColor:"grey",
     },
     buttoncontainer6:{
      height: '25%',
      borderRadius:5,
      justifyContent: 'center',
      top:'-60%',
      left: '55%',
      width: '40%',
      borderWidth:2,
      borderColor:"grey",
     },
     image: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 16,
    },
  });
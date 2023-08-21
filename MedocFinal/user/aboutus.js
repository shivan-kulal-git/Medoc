import React from "react";
import { ImageBackground, Text, StyleSheet, View } from "react-native";

export default function page1() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/image.png')} style={styles.image}>
        <View style={styles.paragraph1}>
        <Text style={styles.paragraph}>
        "MeDoc" is a Doctor-patients relationship application that allows users to manage their health information and connect to their Doctors. To use MeDoc you need create an account to gain access to the facilities provided by the application. It has a dictionary that lets you know about diseases its symptoms, causes , etc by typing its name. Then it connects to the doctor in online according to which diseases predicted. Then doctor will prescribe the medicine and  that document will be forward to the pharmacies. So pharmacies can deliver into customer home. This feature will be very useful in this pandemic situation. Otherwise,  user can take appointment with doctor based on their hospitals & departments  according to treatment type.  This app helps user with scheduling appointments and monitoring their immunization history. It also gives patients access to  diagnostic labs results which they can send directly to their doctors. The app uses notifications to remind patients about their appointments. It uses the GPS  which is useful to find the direction to nearest hospitals , pharmacies on a real-time map. It also includes a feature to call the Doctors directly from a list of doctors available . 
          It is an interactive application having user-friendly interface that is developed using React Native at the front end and My SQL database.
          Now a days health is very important. And covid-19 pandemic situation has caused headache for all of us. In the time of emergency we need to carry papers of medical related documents and peoples doesn’t know which document is needed and which one is not, And it is difficult to find at time of emergency. All the time we need to collect documents for lab and submit to doctor after that doctor need to check it and then doctor prescribe the medicine for customer it is a time consuming process. Some time we need to spend too much time to take appointment and connect with doctor, and we don’t know which hospital have which departments, which doctors are available and what about their timing also. 
          The aim is to develop an app with improved facilities. The app provides details of hospital with specified doctors. The hospital adds details of doctors in each department. With these users get details of hospitals by specifying treatment, doctors in specified department, location, etc. The app will provide navigation, time, distance to the hospital. Also, the user gets opportunity to get appointment with doctor.
          User can also get details of hospitals, doctors, pharmacies. 
        </Text>
        </View>
        </ImageBackground>
      </View>
);
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    width: "100%",
    backgroundColor: '#F7F7F7',
    marginTop: 1,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    },
    paragraph: {
      justifyContent: "center",
      fontSize: 11,
      textAlign: "center",
    },
    paragraph1: {
      justifyContent: "center",
      textAlign: "center",
      paddingLeft:20,
      paddingRight:20,
      paddingTop:50,
      paddingBottom:50
    },
    image: {
      alignItems: "center",
      justifyContent: "center",
    },
  });
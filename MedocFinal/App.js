import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';

import HomeScreen from './app/Home';
import Doctor from './app/doc';
import User from './app/user';
import UserRegistration from './app/ureg';
import DoctorRegistration from './app/dreg';
import forgotpassword from './app/forgotpassword';
import forgotpassworddoc from './app/forgotpassworddoc';
import Page from './app/act';
import Doctorpage from './app/dact';
import summery from './user/summery';
import appointment from './user/appointment';
import Appointment from './user/appointmentlist';
import Rx from './user/rx';
import Hospital from './user/nearby';
import Account from './user/account';
import Account1 from './doctor/Account';
import Privacy from './user/privacy';
import privacy from './doctor/privacy1';
import About from './user/aboutus';
import Docappoint from './doctor/Docappoint';
import patientlog from './doctor/patientlog';
import Ambulance from './user/ambulance';
import BMI_calculator from './user/Bmicalculator';
import Dictionary from './user/DiseaseDictionary';
import News from './user/News';
import bookingDate from './user/bookingDate';
import Hospitaldoc from './user/hospitaldoc';
import chat from './user/chat';
import ChatScreen from './user/chatscreen';
import Edit from './user/Edit';
import Dedit from './doctor/Dedit';
import getappointemnt from './user/getappointemnt';
import patientdetails from './doctor/patientdetails';
import addprecription from './doctor/addprecription';
import docchat from './doctor/docchat';
import feedback from './doctor/feedback';
import feedback1 from './user/feedback1.js';

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {

  return (

    <NavigationContainer >
      <RootStack.Navigator   >
       <RootStack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home Screen' }}/>
        <RootStack.Screen name="Doctor" component={Doctor} options={{ title: 'Doctor Login' }}/>
        <RootStack.Screen name="User" component={User} options={{ title: 'User Login' }}/>
        <RootStack.Screen name="UserRegistration" component={UserRegistration} options={{ title: 'User Registration' }}/>
        <RootStack.Screen name="DoctorRegistration" component={DoctorRegistration} options={{ title: 'Doctor Registration' }}/>
        <RootStack.Screen name="forgotpassworddoc" component={forgotpassworddoc} options={{ title: 'Forgot password' }}/>
        <RootStack.Screen name="forgotpassword" component={forgotpassword} options={{ title: 'Forgot password' }}/>
        <RootStack.Screen name="Page" component={Page}  options={{ title: 'Home' ,headerLeft:false}} />
        <RootStack.Screen name="Doctorpage" component={Doctorpage} options={{ title: 'Home' ,headerLeft:false}}/>
        <RootStack.Screen name="appointment" component={appointment}  options={{ title: 'Appointment list' }}/>
        <RootStack.Screen name="Appointment" component={Appointment} options={{ title: 'Appointment list' }}/>
        <RootStack.Screen name="summery" component={summery} options={{ title: 'Dictionary' }}/>
        <RootStack.Screen name="Rx" component={Rx} options={{ title: 'Prescription' }}/>
        <RootStack.Screen name="addprecription" component={addprecription} options={{ title: 'Add Prescription' }}/>
        <RootStack.Screen name="Hospital" component={Hospital} options={{ title: 'Hospital list' }}/>
        <RootStack.Screen name="Account" component={Account} />
        <RootStack.Screen name="Account1" component={Account1} options={{ title: 'Account' }}/>
        <RootStack.Screen name="Privacy" component={Privacy} />
        <RootStack.Screen name="privacy" component={privacy} options={{ title: 'Privacy' }}/>
        <RootStack.Screen name="About" component={About} />
        <RootStack.Screen name="Docappoint" component={Docappoint} options={{ title: 'Appointment list' }}/>
        <RootStack.Screen name="patientlog" component={patientlog} options={{ title: 'Patient list' }}/>
        <RootStack.Screen name="Ambulance" component={Ambulance} />
        <RootStack.Screen name="BMI_calculator" component={BMI_calculator} options={{ title: 'BMI Calculator' }}/>
        <RootStack.Screen name="Dictionary" component={Dictionary} />
        <RootStack.Screen name="News" component={News} />
        <RootStack.Screen name="bookingDate" component={bookingDate} options={{ title: 'Booking Date' }}/>
        <RootStack.Screen name="Hospitaldoc" component={Hospitaldoc}  options={{ title: 'Doctor list' }}/>
        <RootStack.Screen name="Edit" component={Edit} options={{ title: 'Edit' }}/>
        <RootStack.Screen name="Dedit" component={Dedit} options={{ title: 'Edit' }}/>
        <RootStack.Screen name="getappointemnt" component={getappointemnt} options={{ title: 'Get Appointment' }} />
        <RootStack.Screen name="patientdetails" component={patientdetails} options={{ title: 'Patient Prescription' }}/>
        <RootStack.Screen name="chat" component={chat} options={{ title: 'Chat' }}/>
        <RootStack.Screen name="ChatScreen" component={ChatScreen} options={{ title: 'Chat Screen' }}/>
        <RootStack.Screen name="docchat" component={docchat} options={{ title: 'Chat' }}/>
        <RootStack.Screen name="feedback" component={feedback} options={{ title: 'Feedback' }}/>
        <RootStack.Screen name="feedback1" component={feedback1} options={{ title: 'Feedback' }}/>
        </RootStack.Navigator>
    </NavigationContainer>
  );
}


export function App2() {
  return (
    <NavigationContainer>
      {

      }
    </NavigationContainer>
  );
}
export function App3() {
  return (
    <NavigationContainer>
      {

      }
    </NavigationContainer>
  );
}
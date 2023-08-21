import React, {useEffect } from "react";
import { BackHandler, StyleSheet, View } from "react-native";
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons'; 
import page1 from '../doctor/page1';
import page3 from '../doctor/page3';
import page5 from '../doctor/page5';

const Tab = createBottomTabNavigator();
export default function Doctorpage() {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
    return () => backHandler.remove()
  }, []) 
    return (
      <Tab.Navigator screenOptions={{
        "tabBarShowLabel": false,
        "headerShown": false,
        "tabBarStyle": [
          {
            "display": "flex"
          },
          null
        ]
      }}>
        {
        }
       
      <Tab.Screen  name={"Home"} component={page1} options={{
           tabBarIcon: ({focused}) =>(
               <View style={{
                 position:'absolute',
               }}>
                    <FontAwesome5 name="home" size={20}  color={focused ? 'red' : 'gray'}></FontAwesome5>
               </View>
           )
         }}></Tab.Screen>
         <Tab.Screen name={"Notification"} component={page3}  options={{
           tabBarIcon: ({focused}) =>(
               <View style={{
                 position:'absolute',
               }}>
                    <FontAwesome5 name="comment-medical" size={20}  color={focused ? 'red' : 'gray'}> </FontAwesome5>
               </View>
           )
         }}></Tab.Screen>
         <Tab.Screen name={"Setting"} component={page5}  options={{
           tabBarIcon: ({focused}) =>(
               <View style={{
                 position:'absolute',
               }}>
                    <FontAwesome5 name="cog" size={20}  color={focused ? 'red' : 'gray'}> </FontAwesome5>
               </View>
           )
         }}></Tab.Screen>
      </Tab.Navigator>
);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 16
    },
    navigationContainer: {
      backgroundColor: "#ecf0f1"
    },
    paragraph: {
      padding: 16,
      fontSize: 15,
      textAlign: "center"
    }
  });
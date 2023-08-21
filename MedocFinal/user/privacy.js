import React, { useState } from "react";
import { Alert, Text, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const AddEmployee = ({navigation}) => {

 const [Loading, setLoading] = useState(true);
 const [error, setError] = useState(null);


    const createTwoButtonAlert = () =>
      Alert.alert(
        "Delete Account",
        "Are you sure you want to Delete your Account .All your account details will also be deleted!",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => {
            fetch('http://'+global.IP+'/project/deleteuser.php?Pid='+global.MyVar)
              .then(res => res.json())
              .then(result => {
                if (result.message === "invalid") {
                  alert('error in delete');
                 } else {
                   alert('deleted successfully')
                   navigation.navigate('HomeScreen');
                 }
          
              }).catch(err => {
                setLoading(false);
                setError(err);
              })
          }}
        ]
      );

    return (
        
      <View style={styles.container}>
        <View style={styles.box}>
        <Text style={styles.paragraph}>
         Delete Your Account
        </Text>
        
        <Text style={styles.paragraph}>
          After this you will never be able to retrive your Account
        </Text>
         <TouchableOpacity style={styles.buttoncontainer} onPress={createTwoButtonAlert}>
          <Text style={styles.buttontext}>DELETE</Text>
        </TouchableOpacity>
        </View>
      </View>
   
);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      
      padding: 5,
     
     
    },
    paragraph: {
      padding: 16,
      fontSize: 15,
      textAlign: "center"
    },
   box:{
    borderWidth:3,
      borderColor:"pink",
      height:'30%',
      padding:'3%',
      borderRadius:10,
   },
   buttoncontainer:{
    height: '45%',
    borderRadius:10,
    backgroundColor: 'red',
    justifyContent: 'center',
    top:'5%',
  },
  buttontext:{
    textAlign: 'center',
    color: "white",
    fontSize:15,
    fontWeight	:'bold',
  },
  });
  export default AddEmployee;
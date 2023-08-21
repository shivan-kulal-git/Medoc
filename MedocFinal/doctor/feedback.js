import React, {useState } from "react";
import { Alert, Text, StyleSheet, View,TextInput ,TouchableOpacity} from "react-native";

const AddEmployee = ({navigation,route}) => {
   
  const getDetails = (type)=>{
     if(route.params){
        switch(type){
            case "feedback":
               return  route.params.feedback
             }
     }
     return ""
  }
  
   const [feedback,setfeedback]=useState(getDetails("feedback"))
   
   const performValidation = () =>{
     let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
     const regmobNo = /^[0]?[789]\d{9}$/;
     if(feedback ===''){
       Alert.alert('Fill the feedback');
     }else{
       submitData();
     }
   }
   
   const submitData = () =>{
     fetch('http://'+global.IP+'/project/feedback.php', {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            "feedback":feedback,   
         })
         }).then((response) => response.json())
             .then((responseJson) => {
               if(responseJson.message === "invalid"){
                 alert(responseJson.message);
               }else{
                 global.MyVar = responseJson.message;
                  navigation.navigate("Doctorpage" );
               }
             }).catch((error) => {
               console.error(error);
             });
   }
 
    return (
      <View style={styles.container}>
         <Text style={styles.paragraph}>
        Feedback
        </Text>
        <Text style={styles.paragraph1}>
          Tell us what can be Improved.
        </Text>
        <View style={{
        borderColor:"black",
        borderWidth: 1,
        width:'80%'
      }}>
      <TextInput
        multiline
        numberOfLines={10}
        style={{padding: 10}}
        value={feedback} 
        onChangeText={text=>setfeedback(text)}
        placeholder='Type Here ...'
      />
      </View>
      <TouchableOpacity style={styles.buttoncontainer2} onPress={() => performValidation()}>
          <Text style={styles.buttontext}>SUBMIT</Text>
        </TouchableOpacity>
       </View>
       );
      }
   
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      padding: '1%',
    },
    navigationContainer: {
      backgroundColor: "#ecf0f1"
    },
    paragraph: {
      padding: '5%',
      fontSize: 25,
      textAlign: "center"
    },
    paragraph1: {
      padding: '5%',
      fontSize: 15,
      textAlign: "center"
  },
 box1:{
   top:'5%',
    width:'99%',
    height:'40%',
    padding:'3%',
 },
 buttoncontainer2: {
  height: '7%',
  borderRadius: 50,
  backgroundColor: '#1e90ff',
  justifyContent: 'center',
  top: '3%',
  left:'1%',
  width: '90%',
},
buttontext: {
  textAlign: 'center',
  justifyContent: 'center',
  color: '#ecf0f1',
  fontSize: 15,
  fontWeight: "bold"
},
  });
  export default AddEmployee;
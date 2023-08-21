import React,{useState} from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native'
import moment from 'moment'; 

const Slot = ({navigation,route}) => {
 
  const getDetails = (type)=>{
    if(route.params){
       switch(type){
           case "Disease_name	":
              return route.params.Disease_name	
           case "Prescription":
             return route.params.Prescription
       }
    }
    return ""
 }
 
  const [Disease_name,setDisease_name]=useState(getDetails("Disease_name"))
  const [Prescription,setPrescription]=useState(getDetails("Prescription"))

  const performValidation = () =>{
    let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
    const regmobNo = /^[0]?[789]\d{9}$/;
    if(Disease_name ===''){
      Alert.alert('Fill the Disease name');
    }else if(Prescription ===''){
      Alert.alert('Fill the Prescription');
    }else{
      submitData();
    }
  }

  
  const submitData = () =>{
    fetch('http://'+global.IP+'/project/addprecription.php' ,{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "Pid": route.params.paramKey,
          "Did": global.MyVar1,
           "Disease_name":Disease_name,
           "Prescription":Prescription,
        })
        }).then((response) => response.json())
            .then((responseJson) => {
              alert(responseJson.message);
              navigation.navigate("patientlog");
            }).catch((error) => {
              console.error(error);
            });
  }

  var currentDate = moment().format("DD/MM/YYYY");

    return (
      <KeyboardAvoidingView enabled style={{backgroundColor:'#ffff'}}> 
      <ScrollView >
      <View style={styles.container}>
        <Text style={styles.add}>Date : {currentDate}</Text>
        <Text style={styles.add}>Disease name</Text>
        <TextInput
          style={styles.input}
          placeholder='Disease_name'
          autoCapitalize="none"
          placeholderTextColor='#8A8A8A'
          value={Disease_name} 
          onChangeText={text=>setDisease_name(text)}
        />
        <Text style={styles.add}>Prescription</Text>
        <TextInput
          style={styles.input1}
          placeholder='Prescription'
          autoCapitalize="none"
          multiline
          numberOfLines={5}
          placeholderTextColor='#8A8A8A'
          value={Prescription} 
          onChangeText={text=>setPrescription(text)}
        />
         <TouchableOpacity style={styles.buttoncontainer} onPress={() => performValidation()}>
                <Text style={styles.buttontext}>Add Precreption</Text>
              </TouchableOpacity>
      </View>
      </ScrollView>
      </KeyboardAvoidingView>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    marginTop:'5%',
    backgroundColor:'#ffff',
    padding: '3%',
  },
  add:{
    marginRight:'5%',
    marginLeft:'2%',
    marginBottom:'3%',
  },
  input: {  
    borderColor:'#8A8A8A',
    height: '15%',
    backgroundColor: '#ffff',
    marginLeft: '4%',
    marginRight:'5%',
    color: 'black',
    marginBottom:'5%',
    borderRadius: 5,
    fontSize: 14,
    fontWeight: '500',
    borderWidth: 1,
    padding:'5%',
  },
  input1: {
    width: '90%',
    borderColor:'#8A8A8A',
    height: '40%',
    backgroundColor: '#ffff',
    marginLeft: '4%',
    marginRight:'5%',
    color: 'black',
    marginBottom:'5%',
    borderRadius: 5,
    fontSize: 14,
    fontWeight: '500',
    borderWidth: 1,
    borderColor:"black",
    padding: '5%',
  },
  buttontext:{
    textAlign: 'center',
    color: "white",
    fontSize: 15,
    fontWeight	:'bold',
  },
  buttoncontainer:{
    height: '15%',
    borderRadius: 20,
    backgroundColor: '#1e90ff',
    justifyContent: 'center',
  },
})

export default Slot;

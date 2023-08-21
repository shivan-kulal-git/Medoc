import React,{useState} from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  ImageBackground,
} from 'react-native'
import { Alert } from 'react-native';
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const AddEmployee = ({navigation,route}) => {
 
  const [data, setData] = React.useState({
    username: "",
    pass: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const pressHandler3 =() =>{
        navigation.navigate('DoctorRegistration');
      }
      const pressHandler2 =() =>{
        navigation.navigate('forgotpassworddoc');
      }
 
  const getDetails = (type)=>{
    if(route.params){
       switch(type){
           case "username":
              return  route.params.username
           case "password":
            return  route.params.password
            }
    }
    return ""
 }

  const [username,setusername]=useState(getDetails("username"))
  const [password,setpassword]=useState(getDetails("password"))

  const performValidation = () =>{
    let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
    const regmobNo = /^[0]?[789]\d{9}$/;
    if(username ===''){
      Alert.alert('Fill the username');
    }else if(password ===''){
      Alert.alert('Fill the password');
    }else{
      submitData();
    }
  }

  const submitData = () =>{
    fetch('http://'+global.IP+'/project/logindoc.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
           "username":username,
           "password":password,
        })
        }).then((response) => response.json())
            .then((responseJson) => {
              if(responseJson.message === "username or password incorrect"){
                alert(responseJson.message);
            }else{
              global.MyVar1 = responseJson.message;
               navigation.navigate("Doctorpage");
            }
            }).catch((error) => {
              console.error(error);
            });
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

    return (
      <KeyboardAvoidingView enabled>
        <ScrollView>
          <ImageBackground source={require('../assets/bg1.png')} style={styles.image}>
            <View style={styles.container}>
              <View style={styles.header}>
                <Text style={styles.textheader}>Welcome!</Text>
              </View>
              <View style={styles.footer}>
                <Text style={styles.textfooter}>Username</Text>
                <View style={styles.action}>
                  <FontAwesome name="user-o" color='black' size={20} />
                  <TextInput
                    style={styles.textinput}
                    placeholder='Username'
                    autoCapitalize="none"
                    placeholderTextColor='#8A8A8A'
                    label="Name"
                    value={username} 
                    onChangeText={text=>setusername(text)}
                  />
                </View>
                <Text style={styles.textfooter}>Password</Text>
                <View style={styles.action}>
                  <Feather name="lock" color='black' size={20} />
                    <TextInput
                      style={styles.textinput}
                      placeholder='Password'
                      autoCapitalize="none"
                      value={password} 
                      secureTextEntry={data.secureTextEntry ? true : false}
                      onChangeText={text=>setpassword(text)}
                      placeholderTextColor='#8A8A8A'
                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ? (
                          <Feather name="eye-off" color="grey" size={20} />
                        ) : (
                          <Feather name="eye" color="grey" size={20} />
                        )}
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.buttoncontainer} onPress={() => performValidation()}>
                        <Text style={styles.buttontext}>LOGIN</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.buttoncontainer1} onPress={pressHandler2} >
                        <Text style={styles.buttontext1}>Forgot password</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.buttoncontainer2} onPress={pressHandler3}>
                        <Text style={styles.buttontext1}>Register</Text>
                      </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </ScrollView>
      </KeyboardAvoidingView> 
    )
  }

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex:1,
    padding: 8,
  },
  header:{
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingBottom: '55%',
    paddingTop: '20%',
  },
  textheader: {
    color: '#fffd',
    fontWeight:'bold',
    fontSize: 30,
    justifyContent: "center",
    top: '300%'
  },
  footer:{
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: '5%',
    paddingVertical: '18%',
  },
  textfooter:{
    color: '#05375a',
    fontSize: 18,
    marginTop: 17,
  },
  action:{
    flexDirection:'row',
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor:'#f2f2f2',
    paddingBottom: 5 , 
  },
  textinput:{
    flex: 1,
    marginTop: Platform.os === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  buttoncontainer:{
    height: '15%',
    borderRadius:50,
    backgroundColor: '#1e90ff',
    justifyContent: 'center',
    top:'10%',
  },
  buttontext:{
    textAlign: 'center',
    color: "white",
    fontSize:15,
    fontWeight	:'bold',
  },
  buttontext1:{
    textAlign: 'center',
    color: "deepskyblue",
    fontSize:15,
    fontWeight	:'bold',
  },
  buttoncontainer1:{
    top: '15%',
    backgroundColor: "white",
    right:'1%',
    width:'40%',
  },
  buttoncontainer2:{
    backgroundColor: "white",
    width:'40%',
    left:'60%',
    top:'7%',
  },
})

export default AddEmployee;
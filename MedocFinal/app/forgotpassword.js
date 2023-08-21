import React,{useState} from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native'
import { Alert } from 'react-native';
import Feather from "react-native-vector-icons/Feather";

const AddEmployee = ({navigation,route}) => {
 
  const [data, setData] = React.useState({
    username: "",
    pass: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const getDetails = (type)=>{
    if(route.params){
       switch(type){
           case "username":
              return  route.params.username
           case "Email":
            return  route.params.Email
           case "password":
            return  route.params.password
            }
    }
    return ""
 }

  const [username,setusername]=useState(getDetails("username"))
  const [Email,setEmail]=useState(getDetails("Email"))
  const [password,setpassword]=useState(getDetails("password"))
  
  const performValidation = () =>{
    let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
    const regmobNo = /^[0]?[789]\d{9}$/;
    if(username ===''){
      Alert.alert('Fill in the username');
    }else if(Email ===''){
      Alert.alert('Fill in the Email');
    }else if (reg.test(Email) === false) {
      Alert.alert('Fill the Valid Email Address');
    }else if(password ===''){
      Alert.alert('Please Fill out new password');
    }else{
      submitData();
    }

  }
  const submitData = () =>{
    fetch('http://'+global.IP+'/project/forgotpassuser.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
           "username":username,
           "Email":Email,
           "password":password,
        })
        }).then((response) => response.json())
            .then((responseJson) => {
              if(responseJson.message === "invalid"){
                alert("Username or Email id does not exist");
              }else{
                global.MyVar = responseJson.message;
                alert("Updated");
                 navigation.navigate("User" );
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
          <View style={styles.image}>
              <View style={styles.header}>
                <Text style={styles.textheader}>Forgot Password ?</Text>
              </View>
              <View style={styles.footer}>
                <Text style={styles.textfooter}>Enter Username</Text>
                <View style={styles.action}>
                  <TextInput
                    style={styles.textinput}
                    placeholder='Enter Username'
                    autoCapitalize="none"
                    placeholderTextColor='#8A8A8A'
                    label="Name"
                    value={username} 
                    onChangeText={text=>setusername(text)}
                  />
                </View>
                <Text style={styles.textfooter}>Enter email</Text>
                <View style={styles.action}>
                  <TextInput
                    style={styles.textinput}
                    placeholder='Enter email'
                    autoCapitalize="none"
                    value={Email}
                    onChangeText={text=>setEmail(text)}
                    placeholderTextColor='#8A8A8A'
                  />
                </View>
                <Text style={styles.textfooter}>Enter New password</Text>
                <View style={styles.action}>
                  <TextInput
                    style={styles.textinput}
                    placeholder='Enter New password'
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
                      <Text style={styles.buttontext}>Reset</Text>
                    </TouchableOpacity>
              </View>
            </View>
        </ScrollView>
      </KeyboardAvoidingView>  
    )
  }

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    backgroundColor:"skyblue",
    padding:"2%"
  },
  header:{
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingBottom: '60%',
    paddingTop: '1%',
  },
  textheader: {
    color: '#fffd',
    fontWeight:'bold',
    fontSize: 28,
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
  buttontext:{
    textAlign: 'center',
    color: "white",
    fontSize:15,
    fontWeight	:'bold',
  },
  textfooter:{
    color: '#05375a',
    fontSize: 18,
    marginTop: 20,
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
    top:'5%',
    },
})

export default AddEmployee;

// import React from 'react';
// import { TouchableOpacity } from 'react-native';
// import { Platform } from 'react-native';
// import { ViewBase } from 'react-native';
// import { StyleSheet, Text, View, ImageBackground, TextInput, AppRegistry, Alert ,Button} from 'react-native';

// export default function user({ navigation }) {

 
//   const pressHandler3 =() =>{
//     navigation.navigate('UserRegistration');
    
//   }
//   const pressHandler5 =() =>{
//     navigation.navigate('Page');
//   }
//   return (
  
//   <View style={styles.container}>
//      <ImageBackground source={require('../assets/bg1.png')} style={styles.image}>
//        <View style={styles.header}>
//          <Text style={styles.textheader}>Welcome!</Text>
//        </View>
//        <View style={styles.footer}>
//          <Text style={styles.textfooter}>Username</Text>
//            <View style={styles.action}>
//              <TextInput placeholder="Your Username" style={styles.textinput} autoCapitalize="none" />
//            </View>
//            <Text style={[styles.textfooter , {marginTop: 35}]}>Password</Text>
//            <View style={styles.action}>
//              <TextInput placeholder="Your password" secureTextEntry={true} style={styles.textinput} autoCapitalize="none"/>
//            </View>
//            <TouchableOpacity style={styles.buttoncontainer} onPress={pressHandler5}>
//              <Text style={styles.buttontext}>Login</Text>
//            </TouchableOpacity>
//            <TouchableOpacity style={styles.buttoncontainer1} onPress={pressHandler3}>
//              <Text style={styles.buttontext1}>Register</Text>
//              </TouchableOpacity>
//        </View>
//      </ImageBackground>
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
//   header:{
//     flex: 1,
//     justifyContent: 'flex-end',
//     paddingHorizontal: 20,
//     paddingBottom: 50 
//   },
//   footer:{
//     flex: 3,
//     backgroundColor: '#fff',
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     paddingHorizontal: 20,
//     paddingVertical: 30,
//   },
//   textheader: {
//     color: '#fff',
//     fontWeight:'bold',
//     fontSize:30,
//   },
//   textfooter:{
//     color: '#05375a',
//     fontSize: 18,
//   },
//   action:{
//     flexDirection:'row',
//     marginTop: 20,
//     borderBottomWidth: 1,
//     borderBottomColor:'#f2f2f2',
//     paddingBottom: 5 , 
//   },
//   textinput:{
//    flex: 1,
//    marginTop: Platform.os === 'ios' ? 0 : -12,
//    paddingLeft: 10,
//    color: '#05375a',
//   },
//   button:{
//    alignItems: 'center',
//    marginTop: 50,
//   },
//   signin:{
//    width:'100%',
//    height: 50,
//    justifyContent: 'center',
//    alignItems: 'center',
//    borderRadius: 10,
//   },
//   textsize: {
//    fontSize: 18,
//    fontWeight	:'bold',
//   },
//   buttoncontainer:{
//    height: 50,
//    borderRadius:50,
//    backgroundColor: '#1e90ff',
//    justifyContent: 'center',
//    top:30,
//   },
//   buttontext:{
//     textAlign: 'center',
//     color:'#ecf0f1',
//     fontSize:20,
//     fontWeight	:'bold',
//   },
//   buttontext1:{
//     textAlign: 'center',
//     color: "deepskyblue",
//     fontSize:20,
//     fontWeight	:'bold',
    
//   },
//   buttoncontainer1:{
//     top: 50,
//    },
// });

// import React, { Component } from 'react';
 
// import { StyleSheet, TextInput, View, Alert, Button, Text} from 'react-native';

// // Importing Stack Navigator library to add multiple activities.
// import { StackNavigator } from 'react-navigation';
 
// // Creating Login Activity.
// class LoginActivity extends Component {

//   // Setting up Login Activity title.
//   static navigationOptions =
//    {
//       title: 'LoginActivity',
//    };
 
// constructor(props) {
 
//     super(props)
 
//     this.state = {
 
//       UserEmail: '',
//       UserPassword: ''
 
//     }
 
//   }
 
// UserLoginFunction = () =>{
 
//  const { UserEmail }  = this.state ;
//  const { UserPassword }  = this.state ;
 
 
// fetch('https://reactnativecode.000webhostapp.com/User_Login.php', {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
 
//     email: UserEmail,
 
//     password: UserPassword
 
//   })
 
// }).then((response) => response.json())
//       .then((responseJson) => {

//         // If server response message same as Data Matched
//        if(responseJson === 'Data Matched')
//         {

//             //Then open Profile activity and send user email to profile activity.
//             this.props.navigation.navigate('Second', { Email: UserEmail });

//         }
//         else{

//           Alert.alert(responseJson);
//         }

//       }).catch((error) => {
//         console.error(error);
//       });
 
 
//   }
 
//   render() {
//     return (
 
// <View style={styles.MainContainer}>
 
//         <Text style= {styles.TextComponentStyle}>User Login Form</Text>
  
//         <TextInput
          
//           // Adding hint in Text Input using Place holder.
//           placeholder="Enter User Email"
 
//           onChangeText={UserEmail => this.setState({UserEmail})}
 
//           // Making the Under line Transparent.
//           underlineColorAndroid='transparent'
 
//           style={styles.TextInputStyleClass}
//         />
 
//         <TextInput
          
//           // Adding hint in Text Input using Place holder.
//           placeholder="Enter User Password"
 
//           onChangeText={UserPassword => this.setState({UserPassword})}
 
//           // Making the Under line Transparent.
//           underlineColorAndroid='transparent'
 
//           style={styles.TextInputStyleClass}
 
//           secureTextEntry={true}
//         />
 
//         <Button title="Click Here To Login" onPress={this.UserLoginFunction} color="#2196F3" />
      
  
 
// </View>
            
//     );
//   }
// }

// // Creating Profile activity.
// class ProfileActivity extends Component
// {

//   // Setting up profile activity title.
//    static navigationOptions =
//    {
//       title: 'ProfileActivity',
    
//    };
    

//    render()
//    {

//      const {goBack} = this.props.navigation;

//       return(
//          <View style = { styles.MainContainer }>
 
//             <Text style = {styles.TextComponentStyle}> { this.props.navigation.state.params.Email } </Text>

//             <Button title="Click here to Logout" onPress={ () => goBack(null) } />
 
//          </View>
//       );
//    }
// }

// export default MainProject = StackNavigator(
// {
//    First: { screen: LoginActivity },
   
//    Second: { screen: ProfileActivity }

// });
 
// const styles = StyleSheet.create({
 
// MainContainer :{
 
// justifyContent: 'center',
// flex:1,
// margin: 10,
// },
 
// TextInputStyleClass: {
 
// textAlign: 'center',
// marginBottom: 7,
// height: 40,
// borderWidth: 1,
// // Set border Hex Color Code Here.
//  borderColor: '#2196F3',
 
//  // Set border Radius.
//  borderRadius: 5 ,

// },

//  TextComponentStyle: {
//    fontSize: 20,
//   color: "#000",
//   textAlign: 'center', 
//   marginBottom: 15
//  }
// });


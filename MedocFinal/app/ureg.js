import React,{useState} from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Picker,
  Platform,
} from 'react-native'
import Feather from "react-native-vector-icons/Feather"; 
import { Alert } from 'react-native';

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
           case "name":
              return route.params.name
           case "gender":
              return route.params.gender
           case "Age":
              return route.params.Age
           case "phonenumber":
              return  route.params.phonenumber
           case "email":
              return route.params.email
           case "username":
              return  route.params.username
           case "password":
              return  route.params.password
           case "confirmpassword":
                return  route.params.confirmpassword
           case "address":
              return  route.params.address  
            }
    }
    return ""
 }
 
  const [name,setname]=useState(getDetails("name"))
  const [gender,setgender]=useState(getDetails("gender"))
  const [phonenumber,setphonenumber]=useState(getDetails("phonenumber"))
  const [email,setemail]=useState(getDetails("email"))
  const [Age,setAge]=useState(getDetails("Age"))
  const [username,setusername]=useState(getDetails("username"))
  const [password,setpassword]=useState(getDetails("password"))
  const [confirmpassword,setconfirmpassword]=useState(getDetails("confirmpassword"))
  const [address,setaddress]=useState(getDetails("address"))
 

  const performValidation = () =>{
    let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
    const regmobNo = /^[0]?[6789]\d{9}$/;
    if(name===''){
      Alert.alert('Fill in the name');
    }else if(gender ===''){
      Alert.alert('Fill in the gender');
    }else if(Age ===''){
      Alert.alert('Fill in the Age');
    }else if(Age<=10){
      Alert.alert('Age should be greater than 10');
    }else if(Age>=80){
      Alert.alert('Age should be less than 80');
    }else if(phonenumber ===''){
      Alert.alert('Fill in the Phone Number');
    }else if(regmobNo.test(phonenumber) === false ){
      Alert.alert('Fill the Valid Phone Number');
    }else if(email ===''){
      Alert.alert('Fill in the Email Address');
    }else if (reg.test(email) === false) {
      Alert.alert('Fill the Valid Email Address');
    }else if(address ===''){
      Alert.alert('Fill in the address');
    }else if(username ===''){
      Alert.alert('Fill in the username');
    }else if(password ===''){
      Alert.alert('Fill in the password');
    }else if(password.length<=6){
      Alert.alert('Password should be greater than 6 characters');
    }else if(confirmpassword ===''){
      Alert.alert('Fill in the confirmpassword');
    }else if(password !=confirmpassword){
      Alert.alert('Password Does not Match!');
    }else{
      submitData();
    }
  }

  const submitData = () =>{
    fetch('http://'+global.IP+'/project/usereg.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
           "name":name,
           "gender":gender,
           "email":email,
           "phonenumber":phonenumber,
           "Age":Age,
           "username":username,
           "password":password,
           "address":address,
        })
        }).then((response) => response.json())
            .then((responseJson) => {
              if(responseJson.message === "username exist"){
                alert("username already exists");
              }else if(responseJson.message === "phonenumber exist"){
                alert("Phone number already exists");
            }else if(responseJson.message === "email exist"){
              alert("Email already exists");
          }else if(responseJson.message === "error in query"){
                  alert(responseJson.message);
              }else{
                    alert(responseJson.message);
                    navigation.navigate("User");
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
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.textheader}>User Registration!</Text>
              <Text style={styles.texth1}>Add your details</Text>
            </View>
            <View style={styles.footer}>
              <Text style={styles.textfooter}>Name</Text>
              <View style={styles.action}>
                <TextInput
                  style={styles.textinput}
                  placeholder='Name'
                  autoCapitalize="none"
                  placeholderTextColor='#8A8A8A'
                  label="Name"
                  value={name} 
                  onChangeText={text=>setname(text)}
                />
              </View>
              <Text style={styles.textfooter}>Gender</Text>
              <View style={styles.action}>
                <Picker
                  selectedValue={gender}
                  style={{ height: 50, width: 150 }}
                  onValueChange={(itemValue, itemIndex) => setgender(itemValue)}>
                  <Picker.Item label="Other" value="Other" />
                  <Picker.Item label="Male" value="Male" />
                  <Picker.Item label="Female" value="Female" />
                </Picker>
              </View>
              <Text style={styles.textfooter}>Age</Text>
              <View style={styles.action}>
                <TextInput
                  style={styles.textinput}
                  placeholder='Age'
                  autoCapitalize="none"
                  value={Age}
                  keyboardType="number-pad"
                  onChangeText={text=>setAge(text)}
                  placeholderTextColor='#8A8A8A'
                />
              </View>
              <Text style={styles.textfooter}>Phone Number</Text>
              <View style={styles.action}>
                <TextInput
                  style={styles.textinput}
                  label="Phone"
                  placeholder='Phone Number'
                  autoCapitalize="none"
                  placeholderTextColor='#8A8A8A'
                  value={phonenumber} 
                  keyboardType="number-pad"
                  onChangeText={text=>setphonenumber(text)}
                />
              </View>
              <Text style={styles.textfooter}>Email</Text>
              <View style={styles.action}>
                <TextInput
                  style={styles.textinput}
                  placeholder='Email Id'
                  autoCapitalize="none"
                  placeholderTextColor='#8A8A8A'
                  value={email} 
                  onChangeText={text=>setemail(text)}
                />
              </View>
              <Text style={styles.textfooter}>Address</Text>
              <View style={styles.action}>
                <TextInput
                  style={styles.textinput}
                  placeholder='Address'
                  autoCapitalize="none"
                  placeholderTextColor='#8A8A8A'
                  label="Name"
                  value={address} 
                  onChangeText={text=>setaddress(text)}
                />
              </View>
              <Text style={styles.textfooter}>Username</Text>
              <View style={styles.action}>
                <TextInput
                  style={styles.textinput}
                  placeholder='Username'
                  autoCapitalize="none"
                  value={username} 
                  onChangeText={text=>setusername(text)}
                  placeholderTextColor='#8A8A8A'
                />
              </View>
              <Text style={styles.textfooter}>Password</Text>
              <View style={styles.action}>
                <TextInput
                  style={styles.textinput}
                  placeholder='Password'
                  autoCapitalize="none"
                  value={password} 
                  secureTextEntry={true}
                  onChangeText={text=>setpassword(text)}
                  placeholderTextColor='#8A8A8A'
                />
              </View>
              <Text style={styles.textfooter}>Confirm password</Text>
              <View style={styles.action}>
                <TextInput
                  style={styles.textinput}
                  placeholder='Password'
                  autoCapitalize="none"
                  value={confirmpassword} 
                  secureTextEntry={data.secureTextEntry ? true : false}
                  onChangeText={text=>setconfirmpassword(text)}
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
              <TouchableOpacity	style={styles.buttoncontainer}  onPress={() => performValidation()}>
                <Text style={styles.buttontext}>Register</Text>
              </TouchableOpacity>
              {/* <Button style={styles.buttoncontainer} 
                  mode="contained" 
                  onPress={() => performValidation()}>Register</Button> */}
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>  
    )
  }

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 10,
    backgroundColor:'#6dd5ed',
  },
  header:{
    justifyContent: 'flex-end',
    paddingHorizontal: '10%',
    paddingBottom: '10%',
    paddingTop: '18%'
  },
  textheader: {
    color: '#fffd',
    fontWeight:'bold',
    fontSize: 30,
  },
  texth1:{
    color: '#fffd',
    fontWeight:'bold',
  },
  footer:{
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: '10%',
    paddingVertical: '15%',
  },
  textfooter:{
    color: '#05375a',
    fontSize: 18,
    marginTop: '8%',
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
    height: 50,
    borderRadius:50,
    backgroundColor: '#1e90ff',
    justifyContent: 'center',
    top:30,
  },
  buttontext:{
    textAlign: 'center',
    color: "white",
    fontSize:15,
    fontWeight	:'bold',
  },
})

export default AddEmployee;
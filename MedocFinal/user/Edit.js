import React,{useState,useEffect} from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native'

const AddEmployee = ({navigation}) => {
  
  const fetchData = () => {
    fetch('http://'+global.IP+'/project/patient1.php?pid='+global.MyVar)
      .then(res => res.json())
      .then(result => {
        if (result.code === "404") {
          setNodata("No data found");
          setLoading(false);
        } else {
          global.name=result.data.Pname;
          global.gender=result.data.Gender;
          global.Age=result.data.Age;
          global.address=result.data.address;
          global.email=result.data.Email;
          global.Pno=result.data.Phone_no;
        }

      }).catch(err => {
        setLoading(false);
        setError(err);
      })
  }

  useEffect(() => {
    fetchData();
  }, [])
  
  
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [name,setname]=useState((global.name))
  const [gender,setgender]=useState((global.gender))
  const [phonenumber,setphonenumber]=useState((global.Pno))
  const [email,setemail]=useState((global.email))
  const [Age,setAge]=useState((global.Age))
  const [address,setaddress]=useState((global.address)) 

  const submitData = () =>{
    fetch('http://'+global.IP+'/project/updateuser.php', {
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
           "address":address,
           "Pid":global.MyVar,
        })
   
        }).then((response) => response.json())
            .then((responseJson) => {
              fetchData();
              alert(responseJson.message);
              navigation.navigate("Page");
              
   
            }).catch((error) => {
              console.error(error);
            });
  }


  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 12, justifyContent: 'center', alignItems: 'center' }}>
          Error fetching data...
          Check your network connection!
        </Text>
      </View>
    );
  }


    return (
      <KeyboardAvoidingView enabled>
      <ScrollView>
      <View style={styles.container}>
      <View style={styles.footer}>
        <Text style={styles.textfooter}>Name</Text>
        <View style={styles.action}>
        <TextInput
          style={styles.textinput}
          placeholder=''
          autoCapitalize="none"
          placeholderTextColor='#8A8A8A'
          label="Name"
          value={name} 
          onChangeText={text=>setname(text)}
        />
         </View>
        <Text style={styles.textfooter}>Gender</Text>
        <View style={styles.action}>
        <TextInput
          style={styles.textinput}
          placeholder=''
          autoCapitalize="none"
          placeholderTextColor='#8A8A8A'
          value={gender}
          onChangeText={text=>setgender(text)}
        />
        </View>
        <Text style={styles.textfooter}>Age</Text>
        <View style={styles.action}>
         <TextInput
          style={styles.textinput}
          placeholder=""
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
          placeholder=""
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
          placeholder=""
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
          placeholder=""
          autoCapitalize="none"
          placeholderTextColor='#8A8A8A'
          label="Name"
          value={address} 
          onChangeText={text=>setaddress(text)}
        />
         </View>
         <TouchableOpacity style={styles.buttoncontainer}  onPress={() => submitData()}>
          <Text style={styles.buttontext}>UPDATE</Text>
        </TouchableOpacity>
       
             
    
      </View>
      
      </View>
      </ScrollView>
      </KeyboardAvoidingView>
      
      
    )
  }


  const theme = {
    colors:{
        primary:"#006aff"
    }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    height:"100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  input: {
    //width: 300,
    borderColor:'#8A8A8A',
    height: 40,
    backgroundColor: 'transparent',
    marginLeft: 10,
    marginRight:10,
    color: 'black',
    marginBottom:10,
    borderRadius: 5,
    fontSize: 14,
    fontWeight: '500',
    borderWidth:1,
    padding:10,
  },
  container: {
    flex:1,
    padding: 10,
    backgroundColor:'#6dd5ed',
  },
  button:{
    marginTop:12,
    marginLeft:12,
    marginRight:12,
    marginBottom:12,
  },
  add:{
    marginRight:180,
    marginLeft:12,
    marginBottom:10,
  },
  modalView:{
    position:"absolute",
    bottom:2,
    width:"100%",
    backgroundColor:"white"

},
modalButtonView:{
    flexDirection:"row",
    justifyContent:"space-around",
    padding:10
},
centeredView: {
  flex: 1,
  justifyContent: "center",
  marginTop: 10,
},
modalView: {
  margin: 10,
  backgroundColor: "white",
  borderRadius: 20,
  height:420,
  padding:30,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  
},
button2:{
  borderRadius: 20,
  padding: 10,
  elevation: 2
},
button1: {
  marginTop:12,
  marginLeft:12,
  marginRight:12,
  marginBottom:12,
},
buttonOpen: {
  backgroundColor: "#F194FF",
},
buttonClose: {
  backgroundColor: "#2196F3",
},
header:{
  flex: 1,
  justifyContent: 'flex-end',
   paddingHorizontal: 20,
  paddingBottom: 30,
   paddingTop: 80
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
     flex: 1,
     backgroundColor: '#fff',
     borderTopLeftRadius: 30,
     borderTopRightRadius: 30,
     paddingHorizontal: '7%',
     paddingVertical: '20%',
    },
    textfooter:{
       color: '#05375a',
       fontSize: 18,
       marginTop: '5%',
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


// 'use strict';
// import React, {
//   Component,
//   StyleSheet,
//   TextInput,
//   TouchableHighlight,
//   AsyncStorage,
//   ActivityIndicatorIOS,
//   Text,
//   View
// } from 'react-native';

// const ACCESS_TOKEN = 'access_token';

// class Update extends Component {
//   constructor(props){
//     super(props);

//     this.state = {
//       email: "",
//       name: "",
//       password: "",
//       password_confirmation: "",
//       errors: [],
//       showProgress: false,
//       accessToken: this.props.accessToken,
//     }
//   }
//   componentWillMount() {
//     this.fetchUserData();
//   }
//   redirect(routeName, flash) {
//     this.props.navigator.push({
//       name: routeName,
//       passProps: {
//         flash: flash
//       }
//     });
//   }
//   async fetchUserData() {
//     let access_token = this.state.accessToken;
//     try {
//       let response = await fetch('http://'+global.IP+'/project/patient.php?pid='+global.MyVar);
//       let res = await response.text();
//       if (response.status >= 200 && response.status < 300) {
//           //Handle success
//           let userData = JSON.parse(res);
//           for(let data in userData) {
//             console.log("data is: " + data);
//             this.setState({[data]:userData[data]});
//           }
//       } else {
//           //Handle error
//           let error = res;
//           throw err;
//       }
//     } catch(error) {
//         //If something went wrong we will redirect to the login page
//         this.redirect('login');
//     }
//   }
//   async onUpdatePressed() {
//     this.setState({showProgress: true});
//     let access_token = this.state.accessToken;
//     try {
//       let response = await fetch("https://afternoon-beyond-22141.herokuapp.com/api/users/"+access_token, {
//                               method: 'PATCH',
//                               headers: {
//                                 'Accept': 'application/json',
//                                 'Content-Type': 'application/json',
//                               },
//                               body: JSON.stringify({
//                                 user:{
//                                   name: this.state.name,
//                                   email: this.state.email,
//                                   password: this.state.password,
//                                   password_confirmation: this.state.password_confirmation,
//                                 }
//                               })
//                            });
//       let res = await response.text();
//       if (response.status >= 200 && response.status < 300) {
//           //On success we redirect to home with flash success message
//           this.redirect('home', res)
//       } else {
//           //Handle errors
//           let error = res;
//           throw error
//       }
//     } catch(errors) {
//         //errors are in JSON form so we must parse them first.
//         let formErrors = JSON.parse(errors);
//         //We will store all the errors in the array.
//         let errorsArray = [];
//         for(var key in formErrors) {
//           //If array is bigger than one we need to split it.
//           if(formErrors[key].length > 1) {
//             formErrors[key].map(error => errorsArray.push(key + " " + error));
//           } else {
//             errorsArray.push(key + " " + formErrors[key]);
//           }
//         }
//         this.setState({errors: errorsArray})
//         this.setState({showProgress: false});
//     }
//   }
//   render() {

//     return (
//       <View style={styles.container}>
//         <Text style={styles.heading}>
//           Account Details
//         </Text>
//         <TextInput
//           onChangeText={ (text)=> this.setState({email: text}) }
//           style={styles.input} value={this.state.email}>
//         </TextInput>
//         <TextInput
//           onChangeText={ (text)=> this.setState({name: text}) }
//           style={styles.input} value={this.state.name}>
//         </TextInput>
//         <TextInput
//           onChangeText={ (text)=> this.setState({password: text}) }
//           style={styles.input}
//           placeholder="Password"
//           secureTextEntry={true}>
//         </TextInput>
//         <TextInput
//           onChangeText={ (text)=> this.setState({password_confirmation: text}) }
//           style={styles.input}
//           placeholder="Confirm Password"
//           secureTextEntry={true}>
//         </TextInput>
//         <TouchableHighlight onPress={this.onUpdatePressed.bind(this)} style={styles.button}>
//           <Text style={styles.buttonText}>
//             Update
//           </Text>
//         </TouchableHighlight>

//         <Errors errors={this.state.errors}/>

//         <ActivityIndicatorIOS animating={this.state.showProgress} size="large" style={styles.loader} />
//       </View>
//     );
//   }
// }

// const Errors = (props) => {
//   return (
//     <View>
//       {props.errors.map((error, i) => <Text key={i} style={styles.error}> {error} </Text>)}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//     padding: 10,
//     paddingTop: 80
//   },
//   input: {
//     height: 50,
//     marginTop: 10,
//     padding: 4,
//     fontSize: 18,
//     borderWidth: 1,
//     borderColor: '#48bbec'
//   },
//   button: {
//     height: 50,
//     backgroundColor: '#48BBEC',
//     alignSelf: 'stretch',
//     marginTop: 10,
//     justifyContent: 'center'
//   },
//   buttonText: {
//     fontSize: 22,
//     color: '#FFF',
//     alignSelf: 'center'
//   },
//   heading: {
//     fontSize: 30,
//   },
//   error: {
//     color: 'red',
//     paddingTop: 10
//   },
//   loader: {
//     marginTop: 20
//   }
// });

// export default Update;
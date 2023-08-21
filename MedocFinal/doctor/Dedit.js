import React,{useState,useEffect} from 'react'
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

  const AddEmployee = ({navigation,route}) => {
  
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [masterDataSource, setMasterDataSource] = useState([]);
 
const fetchData = () => {
  fetch('http://'+global.IP+'/project/doctor1.php?did='+global.MyVar1)
    .then(res => res.json())
    .then(result => {
      if (result.code === "404") {
        setNodata("No data found");
        setLoading(false);
      } else {
        global.Name=result.data.Name;
        global.Gender=result.data.Gender;
        global.age=result.data.age;
        global.Licence_no=result.data.Licence_no;
        global.Hospital_Name=result.data.Hospital_Name;
        global.Hospital_address=result.data.Hospital_address;
        global.Specialization=result.data.Specialization;
        global.Phone_no=result.data.Phone_no;
        global.E_mail=result.data.E_mail;
        
          setMasterDataSource(result.data);
          setLoading(false);
      }
    }).catch(err => {
      setLoading(false);
      setError(err);
    })
}
useEffect(() => {
  fetchData();
}, [])

  const [name,setname]=useState(global.Name)
  const [gender,setgender]=useState(global.Gender)
  const [phonenumber,setphonenumber]=useState(global.Phone_no)
  const [email,setemail]=useState(global.E_mail)
  const [Age,setAge]=useState(global.age)
  const [docregisterno,setdocregisterno]=useState(global.Licence_no)
  const [specilization,setspecilization]=useState(global.Specialization)
  const [hospitalname,sethospitalname]=useState(global.Hospital_Name)
  const [hospitaladdress,sethospitaladdress]=useState(global.Hospital_address)

  const performValidation = () =>{
    let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
    const regmobNo = /^[0]?[6789]\d{9}$/;
    if(name===''){
      Alert.alert('Fill the name');
    }else if(gender ===''){
      Alert.alert('Fill the gender');
    }else if (reg.test(email) === false) {
      Alert.alert('Fill the Valid Email Address');
    }else if(regmobNo.test(phonenumber) === false ){
      Alert.alert('Fill the Valid Phone Number');
    }else if(Age ===''){
      Alert.alert('Fill the Age');
    }else if(docregisterno ===''){
      Alert.alert('Fill the docregisterno');
    }else if(specilization ===''){
      Alert.alert('Fill the specilization');
    }else if(hospitalname ===''){
      Alert.alert('Fill the hospitalname');
    }else if(hospitaladdress ===''){
      Alert.alert('Fill the hospitaladdress');
    }else{
      submitData();
    }
  }

  const submitData = () =>{
    fetch('http://'+global.IP+'/project/updatedoc.php', {
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
           "docregisterno":docregisterno,
           "specilization":specilization,
           "hospitalname":hospitalname,
           "hospitaladdress":hospitaladdress,
           "Did":global.MyVar1,
        })
        }).then((response) => response.json())
            .then((responseJson) => {
              alert(responseJson.message);
              navigation.navigate("Doctorpage");
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
                    placeholder=""
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
                    placeholder=""
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
              <Text style={styles.textfooter}>Doctor's Regestration No</Text>
                <View style={styles.action}>
                  <TextInput
                    style={styles.textinput}
                    placeholder=""
                    placeholderTextColor='#8A8A8A'
                    value={docregisterno} 
                    onChangeText={text=>setdocregisterno(text)}
                  />
                </View>
              <Text style={styles.textfooter}>Specilization</Text>
                <View style={styles.action}>
                  <TextInput
                    style={styles.textinput}
                    placeholder=""
                    autoCapitalize="none"
                    placeholderTextColor='#8A8A8A'
                    value={specilization} 
                    onChangeText={text=>setspecilization(text)}
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
              <Text style={styles.textfooter}>Hospital Name</Text>
                <View style={styles.action}>
                  <TextInput
                    style={styles.textinput}
                    placeholder=""
                    autoCapitalize="none"
                    placeholderTextColor='#8A8A8A'
                    value={hospitalname} 
                    onChangeText={text=>sethospitalname(text)}
                  />
                </View>
              <Text style={styles.textfooter}>Hospital Address</Text>
                <View style={styles.action}>
                  <TextInput
                    style={styles.textinput}
                    placeholder=""
                    autoCapitalize="none"
                    placeholderTextColor='#8A8A8A'
                    value={hospitaladdress} 
                    onChangeText={text=>sethospitaladdress(text)}
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
                <TouchableOpacity	style={styles.buttoncontainer} onPress={() => performValidation()}>
                <Text style={styles.buttontext}>Update Details</Text>
              </TouchableOpacity>
                
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
    backgroundColor:'#1e90ff',
  },
  footer:{
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 60,
    flex: 1,
  },
  buttontext:{
    textAlign: 'center',
    color: "white",
    fontSize:15,
    fontWeight	:'bold',
  },
  textfooter:{
    fontSize: 18,
    marginTop: 20,
    color: '#05375a',
  },
  action:{
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor:'#f2f2f2',
    paddingBottom: 5 , 
    flexDirection:'row',
  },
  textinput:{
    marginTop: Platform.os === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    flex: 1,
  },
  buttoncontainer:{
    borderRadius:50,
    backgroundColor: '#1e90ff',
    justifyContent: 'center',
    top:30,
    height: 50,
  },
})

export default AddEmployee;
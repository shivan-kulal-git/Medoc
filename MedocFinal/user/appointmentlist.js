import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Platform, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import { Card } from 'react-native-paper';
import { SearchBar } from 'react-native-elements';

const DisplayEmployee = ({navigation}) => {
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [masterDataSource, setMasterDataSource] = useState([]);

  const fetchData = () => {
    fetch('http://'+global.IP+'/project/appoinment.php?pid='+global.MyVar)
      .then(res => res.json())
      .then(result => {
        if (result.code === "404") {
          setLoading(false);
        } else {
          setData(result.data);
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

  const submitData = (a) =>{
    fetch('http://'+global.IP+'/project/canapp.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
         "aid":a,
      })
      }).then((response) => response.json())
          .then((responseJson) => {
            if(responseJson.message === "invalid"){
              alert(responseJson.message);
            }else{
              alert("Success");
            }
           fetchData();
           navigation.navigate("Page");
          }).catch((error) => {
            console.error(error);
          });
  }

  const createTwoButtonAlert = (b) =>
  Alert.alert(
    "Cancel Appointment",
    "Are you sure !",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () =>
      submitData(b)}
    ]
  );

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.A_Date
          ? item.A_Date.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setData(newData);
      setSearch(text);
    } else {
      setData(masterDataSource);
      setSearch(text);
    }
  };
  
  const ListEmptyView = () => {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ textAlign: 'center' }}> Sorry, You dont have any Appointment yet..</Text>
      </View>
    );
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
    <View style={styles.container}>
      <SearchBar
        round
        searchIcon={{ size: 24 }}
        onChangeText={(text) => searchFilterFunction(text)}
        onClear={(text) => searchFilterFunction('')}
        placeholder="Search Date.."
        value={search}
      />
      {
        Loading ?
          <ActivityIndicator size="large" color="#0000ff"></ActivityIndicator>
          :
          <FlatList
            style={{ flex: 1 }}
            data={data}
            renderItem={({ item }) =>
              <View>
                <Card >
                  <View style={styles.listItem}>
                    <UserAvatar size={30} style={{ width: 60, height: 60, borderRadius: 30 }} name={item.Did}></UserAvatar>
                    <Text style={{ fontSize: 15, fontFamily: "sans-serif", left: '30%',top:'30%',position: 'absolute',}}>{item.A_Date}</Text>
                      <Text style={{ color: "green", fontSize: 13,  position: 'absolute',top:'60%',left:'30%' }}>{item.Name}</Text>
                      <Text style={{ color: "green", fontSize: 13,  position: 'absolute',top:'90%',left:'30%',width:'80%' }}>{item.Hospital_Name}</Text>
                        <TouchableOpacity style={styles.buttoncontainer2} onPress={() => createTwoButtonAlert(item.Aid)}>
                          <Text style={styles.buttontext}> Cancel </Text>
                        </TouchableOpacity>
                   </View>
                </Card>
              </View>
            }
            ListEmptyComponent={ListEmptyView()}
            keyExtractor={(item, index) => index.toString()}
            onRefresh={() => fetchData()}
            refreshing={Loading}
          />
      }
    </View>
  );
}

export default DisplayEmployee;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    width: "100%",
    backgroundColor: '#ffff',
    marginTop: 10,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
  },
  listItem: {
    marginTop: 10,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    backgroundColor: "#E8E8E8",
    borderColor: "black",
    width: "90%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 20,
  },
  fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#2E2EFF',
    borderRadius: 30,
    elevation: 8
  },
  fabIcon: {
    fontSize: 40,
    color: 'white'
  },
  buttoncontainer2: {
    height: '45%',
    borderRadius: 50,
    backgroundColor: '#1e90ff',
    justifyContent: 'center',
    top: '120%',
    left: '80%',
    position: 'absolute',
    width: '30%',
  },
  buttontext: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#ecf0f1',
    fontSize: 12,
  },
  TouchableOpacityStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 7,
    width: '90%',
    backgroundColor: '#00BCD4'
  },
});

// import React, { useRef, useState } from "react";
// import { ScrollView } from "react-native";
// import { Platform } from 'react-native';
// import { Button, TouchableOpacity, Image, TextInput, Text, StyleSheet, View } from "react-native";

// export default function page2({ navigation }) {

//     return (

//       <View style={styles.container}>
//         <ScrollView style={styles.scrollView}>

//       <View style={styles.btn2}>
//       <Image style={styles.search} source={require('../assets/search.png')} />
//              <TextInput placeholder=" Search doctor" style={styles.textinput} autoCapitalize="none" />
//       </View>
//       <View style={styles.btn}>
//       <Image style={styles.imagestyle1} source={require('../assets/doc3.png')} />
//       <Text style={styles.text1} > Dr.Anil kumar </Text>
//       <Text style={styles.text2} > Rupa clinic </Text>
//       <Text style={styles.text2} > 12/6/2021 </Text>
//       <Text style={styles.text2} > 4.00pm </Text>
//       <TouchableOpacity style={styles.buttoncontainer1}>
//              <Text style={styles.buttontext}>Cancel Appointment</Text>
//            </TouchableOpacity>
//       </View>




//       </ScrollView>
//       </View>

// );
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       padding: 5,

//     },
//     scrollView: {
//       marginHorizontal: 10,
//       marginVertical: 1,
//     },

//     btn2: {
//       marginTop: '3%',
//       borderRadius: 20,
//       height: 40,
//       justifyContent: 'center',
//       backgroundColor: '#ffff',
//       minWidth: '100%',
//       marginBottom: '1%',
//     },
//     textinput:{
//       flex: 1,
//       marginTop: Platform.os === 'ios' ? 0 : -12,
//       paddingLeft: '5%',
//       top: '10%',
//       color: '#05375a',
//      },
//      search: {
//       position: 'absolute',
//       top: '20%',
//       left: '90%',
//       height:'60%',
//       width:'8%'
//     },
//     btn: {
//       marginTop: '2%',
//       borderRadius: 20,
//       height: 150,
//       backgroundColor: '#ffff',
//       justifyContent: 'center',
//       minWidth: '90%',
//       marginBottom: '1%',
//     },
//     imagestyle1: {
//       position: 'absolute',
//       resizeMode: "center",
//       top: '20%',
//       left: '1%',
//       width: '30%',
//       height: '70%',
//     },
//     text1: {
//       color: "black",
//       fontSize: 15,
//       bottom: '5%',
//       left: '30%',
//     },
//     text2: {
//       color: '#05375a',
//       fontStyle: "italic",
//       fontSize: 15,
//       bottom: '5%',
//       left: '30%',
//     },
//     buttoncontainer1:{
//       height: '25%',
//       borderRadius:50,
//       backgroundColor: '#1e90ff',
//       justifyContent: 'center',
//       top:'5%',
//       left: '55%',
//       width: '40%',
//      },
//      buttontext:{
//       textAlign: 'center',
//       justifyContent: 'center',
//       color:'#ecf0f1',
//       fontSize:15,
//     },

//   });

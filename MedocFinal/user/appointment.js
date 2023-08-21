import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Platform, TouchableOpacity, ActivityIndicator} from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import { Card } from 'react-native-paper';
import { SearchBar } from 'react-native-elements';

const DisplayEmployee = ({ route }, props) => {
  const [data, setData] = useState([]);
  const [noData, setNodata] = useState('');
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [masterDataSource, setMasterDataSource] = useState([]);

  const fetchData = () => {
    fetch('http://'+global.IP+'/project/doc.php?val=' + route.params.paramKey)
      .then(res => res.json())
      .then(result => {
        if (result.code === "404") {
          setNodata("No data found");
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

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.Name
          ? item.Name.toUpperCase()
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
        <Text style={{ textAlign: 'center' }}> Sorry, No Data Present In FlatList... Try Again.</Text>
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
      <View style={styles.btn1}>
        <Text style={styles.serch1} > Hello </Text>
        <Text style={styles.serch} > Find your specialist </Text>
      </View>
      <SearchBar
        round
        searchIcon={{ size: 24 }}
        onChangeText={(text) => searchFilterFunction(text)}
        onClear={(text) => searchFilterFunction('')}
        placeholder="Type Here ..."
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
                    <UserAvatar size={30} style={{ width: 60, height: 60, borderRadius: 30 }} name={item.Name}></UserAvatar>
                    <Text style={{ fontSize: 15, fontFamily: "sans-serif", left: '30%',top:'30%',position: 'absolute', }}>{item.Name}</Text>
                    <Text style={{ color: "green", fontSize: 15, position: 'absolute',top:'60%',left:'30%'  }}>{route.params.paramKey}
                      </Text>
                    <TouchableOpacity style={styles.buttoncontainer1} onPress=
                      {() => props.navigation.navigate("chat")}>
                      <Text style={styles.buttontext}>Chat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttoncontainer2} onPress=
                      {() => props.navigation.navigate("bookingDate")}>
                      <Text style={styles.buttontext}>Get Appointment</Text>
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
    backgroundColor: '#F7F7F7',
    marginTop: 10,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
  },
  listItem: {
    marginTop: 5,
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
    borderRadius: 5
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
  btn1: {
    marginTop: '5%',
    borderRadius: 20,
    height: '3%',
    justifyContent: 'center',
    minWidth: '90%',
    marginBottom: '5%',
  },
  serch1: {
    color: "black",
    fontSize: 15,
    bottom: '50%',
    fontWeight: 'bold',
    left: '1%',
  },
  serch: {
    color: "black",
    fontSize: 20,
    bottom: '40%',
    fontWeight: 'bold',
    left: '1%',
  },
  buttoncontainer1: {
    height: '40%',
    borderRadius: 50,
    backgroundColor: '#1e90ff',
    justifyContent: 'center',
    top: '99%',
    left: '68%',
    position: 'absolute',
    width: '20%',
  },
  buttoncontainer2: {
    height: '40%',
    borderRadius: 50,
    backgroundColor: '#1e90ff',
    justifyContent: 'center',
    top: '11%',
    left: '1%',
    width: '35%',
  },
  buttontext: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#ecf0f1',
    fontSize: 15,
  },
});

// import React, { useRef, useState } from "react";
// import { ScrollView } from "react-native";
// import { Platform } from 'react-native';
// import { Button, TouchableOpacity, Image, TextInput, Text, StyleSheet, View } from "react-native";

// export default function page2({ navigation }) {
//   const pressHandler20 =() =>{
//     navigation.navigate('chat');
//   } 
//   const pressHandler21=() =>{
//     navigation.navigate('bookingDate');
//   }
//     return (

//       <View style={styles.container}>
//         <ScrollView style={styles.scrollView}>
//         <View style={styles.btn1}>
//       <Text style={styles.serch1} > Hello </Text>
//       <Text style={styles.serch} > Find your specialist </Text>
//       <TouchableOpacity style={styles.buttoncontainer5} onPress={() => navigation.goBack()}>
//       <Text style={styles.back} > Back </Text>
//                   </TouchableOpacity>
//     </View>
//       <View style={styles.btn2}>
//       <Image style={styles.search} source={require('../assets/search.png')} />
//              <TextInput placeholder=" Search doctor" style={styles.textinput} autoCapitalize="none" />
//       </View>
//       <View style={styles.btn}>
//       <Image style={styles.imagestyle1} source={require('../assets/doc3.png')} />
//       <Text style={styles.text1} > Dr.Anil kumar </Text>
//       <Text style={styles.text2} > Cardio specialist </Text>
//       <TouchableOpacity style={styles.buttoncontainer1}  onPress={pressHandler20}>
//              <Text style={styles.buttontext}>Chat</Text>
//            </TouchableOpacity>
//       <TouchableOpacity style={styles.buttoncontainer2}  onPress={pressHandler21}>
//              <Text style={styles.buttontext}>Get Appointment</Text>
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
//     btn1: {
//       marginTop: '15%',
//       borderRadius: 20,
//       height: '3%',
//       justifyContent: 'center',
//       minWidth: '90%',
//       marginBottom: '1%',
//     },
//     serch1: {
//       color: "black",
//       fontSize: 15,
//       bottom: '50%',
//       fontWeight:'bold',
//       left: '1%',
//     },
//     serch: {
//       color: "black",
//       fontSize: 20,
//       bottom: '40%',
//       fontWeight:'bold',
//       left: '1%',
//     },
//     buttoncontainer5:{
//       height: 35,
//       borderRadius:50,
//       backgroundColor: '#1e90ff',
//       justifyContent: 'center',
//       bottom: '100%',
//       left: '80%',
//       width: '20%',
//      },
//      back: {
//       justifyContent: 'center',
//       color: "black",
//       fontSize: 15,
//       fontWeight:'bold',
//       left: '25%',
//     },
//     btn2: {
//       marginTop: '8%',
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
//       marginTop: '1%',
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
//       bottom: '10%',
//       left: '30%',
//     },
//     text2: {
//       color: '#05375a',
//       fontStyle: "italic",
//       fontSize: 15,
//       bottom: '10%',
//       left: '30%',
//     },
//     buttoncontainer1:{
//       height: '20%',
//       borderRadius:50,
//       backgroundColor: '#1e90ff',
//       justifyContent: 'center',
//       top:'10%',
//       left: '55%',
//       width: '40%',
//      },
//      buttoncontainer2:{
//       height: '20%',
//       borderRadius:50,
//       backgroundColor: '#1e90ff',
//       justifyContent: 'center',
//       top:'13%',
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
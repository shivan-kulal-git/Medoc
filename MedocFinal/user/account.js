import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Platform, TouchableOpacity, ActivityIndicator } from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import { Card } from 'react-native-paper';

const DisplayEmployee = (props) => {
  const [data, setData] = useState([]);
  const [noData, setNodata] = useState('');
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [masterDataSource, setMasterDataSource] = useState([]);

  const fetchData = () => {
    fetch('http://'+global.IP+'/project/patient.php?pid='+global.MyVar)
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
                    <UserAvatar size={30} style={{bottom:'90%',left:'50%',width: 80,height: 80,borderRadius: 50, }} name={item.Pid}></UserAvatar>
                    <Text style={{position:'absolute',top:'130%',left:'23%',fontSize: 15,  fontFamily: "sans-serif",}}>Name : {item.Pname}</Text>
                    <Text style={{position: 'absolute',top:'160%',left:'23%',fontSize: 15,  fontFamily: "sans-serif",}}>Gender : {item.Gender}</Text>
                    <Text style={{position: 'absolute',top:'190%',left:'23%',fontSize: 15,  fontFamily: "sans-serif",}}>Age : {item.Age}</Text>
                    <Text style={{position: 'absolute',top:'220%',left:'23%',fontSize: 15,  fontFamily: "sans-serif",}}>Phone .no : {item.Phone_no}</Text>
                    <Text style={{position: 'absolute',top:'250%',left:'23%',fontSize: 15,  fontFamily: "sans-serif",}}>Address : {item.address}</Text>
                    <Text style={{position: 'absolute',top:'280%',left:'23%',fontSize: 15,  fontFamily: "sans-serif",}}>E-mail : {item.Email}</Text>
                    <Text style={{position: 'absolute',top:'310%',left:'23%',fontSize: 15,  fontFamily: "sans-serif",}}>Username : {item.username}</Text>
                    <TouchableOpacity style={styles.buttoncontainer2} onPress={()=>props.navigation.navigate("Edit")}>
                      <Text style={styles.buttontext}>Edit</Text>
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
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
  },
  listItem: {
    marginTop: '2%',
    padding: '30%',
    marginLeft: '2%',
    marginRight: '2%',
    marginBottom: '2%',
    backgroundColor: "#E8E8E8",
    borderColor: "black",
    width: "90%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 20,
  },
  buttoncontainer2: {
    position: 'absolute',
    height: '45%',
    borderRadius: 50,
    justifyContent: 'center',
    bottom: '20%',
    right: '10%',
    width: '40%',
  },
  buttontext: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#1e90ff',
    fontSize: 15,
  },
  TouchableOpacityStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 7,
    width: '90%',
    backgroundColor: '#00BCD4'
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    color: "black",
    marginVertical: 10,
  },
});

// import React, { useRef, useState } from "react";
// import { FontAwesome5 } from '@expo/vector-icons'; 
// import { Button, TouchableOpacity, Image, Text, StyleSheet, View } from "react-native";

// export default function page1({ navigation }) {
//   const pressHandler =() =>{
//     navigation.navigate('Edit');
//   }  
//     return (
        
//       <View style={styles.container}>
//        <TouchableOpacity style={styles.buttoncontainer}>
//         <Image style={styles.img} source={require('../assets/doc3.png')} />
//              <Text style={styles.buttontext}>ID</Text>
//              <Text style={styles.buttontext}>Name</Text>
//              <Text style={styles.buttontext}>Gender</Text>
//              <Text style={styles.buttontext}>Age</Text>
//              <Text style={styles.buttontext}>Phone</Text>
//              <Text style={styles.buttontext}>Address</Text>
//              <Text style={styles.buttontext}>Email</Text>
//            </TouchableOpacity>
        
//           <TouchableOpacity  style={styles.buttoncontainer1} onPress={pressHandler}>
//             <Text style={styles.buttontext2}>Edit</Text>
//           </TouchableOpacity>
//       </View>
   
// );
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: "center",
//       justifyContent: "center",
//       padding: 16
//     },
//     buttoncontainer:{
//       height: '37%' ,
//       borderRadius: 15,
//       justifyContent: 'center',
//       bottom:'25%',
//       width:'95%',
//       borderWidth:2,
//       borderColor:"grey",
//      },
//      img: {
//      width: '15%',
//       bottom:'25%',
//       left: '43%',
//       height:'24%',
//     },
//      buttontext:{
//        textAlign: 'center',
//        color:"black",
//        fontSize:15,
//        bottom: '20%',
//        fontWeight: "bold",
//      },
//      buttontext4:{
//       textAlign: 'center',
//       color:"darkgrey",
//       fontSize:10,
//       bottom: '17%',
//       fontStyle: "italic",
//     },
//     buttoncontainer1:{
//       bottom:'30%',
//       left:'40%',
//     },
//     buttontext2:{
//       color:"blue",
//     },
//   });

  

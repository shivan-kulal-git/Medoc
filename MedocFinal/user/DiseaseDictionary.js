import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Platform, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Card } from 'react-native-paper';
import { SearchBar } from 'react-native-elements';

const DisplayEmployee = (props) => {
  const [data, setData] = useState([]);
  const [noData, setNodata] = useState('');
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [masterDataSource, setMasterDataSource] = useState([]);

  const fetchData = () => {
    fetch('http://'+global.IP+'/project/listdict.php')
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
        const itemData = item.Dis_name
          ? item.Dis_name.toUpperCase()
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

  let colors = ['#FFCCFF', '#99ffcc', '#ffcccc', '#ffffcc'];

  return (
    <View style={styles.container}>

      <SearchBar
        round
        searchIcon={{ size: 24 }}
        onChangeText={(text) => searchFilterFunction(text)}
        onClear={(text) => searchFilterFunction('')}
        placeholder="Seach Diseases ..."
        value={search}
      />
      {
        Loading ?
          <ActivityIndicator size="large" color="#0000ff"></ActivityIndicator>
          :
          <FlatList
            style={{ flex: 1 }}
            data={data}
            renderItem={({ item,index }) =>
              <TouchableOpacity>
                <Card onPress=
                  {() => props.navigation.navigate("summery", {
                    paramKey: item.Dis_name,
                  })}>
                  <View style={{marginTop: 10,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    backgroundColor: colors[index % colors.length],
    borderColor: "black",
    width: "90%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 5}}>
                    <Text style={{ fontSize: 15, fontFamily: "sans-serif", fontWeight: "bold", left: '30%' }}>{item.Dis_name}</Text>
                  </View>
                </Card>
              </TouchableOpacity>
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
  }
});

// import React, { useRef, useState } from "react";
// import { ScrollView } from "react-native";
// import { Platform } from 'react-native';
// import { Button, TouchableOpacity, Image, TextInput, Text, StyleSheet, View } from "react-native";


// export default function page1({ navigation }) {
//   const pressHandler41 =() =>{
//     navigation.navigate('summery');
//   }
//     return (

//       <View style={styles.container}>
//         <ScrollView style={styles.scrollView}>
//           <View style={styles.btn2}>
//           <Image style={styles.search} source={require('../assets/search.png')} />
//              <TextInput placeholder=" Search Disease..." style={styles.textinput} autoCapitalize="none" />
//           </View>
//           <TouchableOpacity style={styles.btn} onPress={pressHandler41}>
//               <Text style={styles.text1} >
//                 Covid-19
//               </Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.btn} onPress={pressHandler41}>
//               <Text style={styles.text1} >
//                 Acne
//               </Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.btn} onPress={pressHandler41}>
//               <Text style={styles.text1} >
//               Anaemia
//               </Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.btn} onPress={pressHandler41}>
//               <Text style={styles.text1} >
//               Appindicitis
//               </Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.btn} onPress={pressHandler41}>
//               <Text style={styles.text1} >
//               Arthritis
//               </Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.btn} onPress={pressHandler41}>
//               <Text style={styles.text1} >
//               Asthma
//               </Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.btn} onPress={pressHandler41}>
//               <Text style={styles.text1} >
//               Bird-flu
//               </Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.btn} onPress={pressHandler41}>
//               <Text style={styles.text1} >
//               Chikungunya
//               </Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.btn} onPress={pressHandler41}>
//               <Text style={styles.text1} >
//               Heart disease
//               </Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.btn} onPress={pressHandler41}>
//               <Text style={styles.text1} >
//               Cancer
//               </Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.btn} onPress={pressHandler41}>
//               <Text style={styles.text1} >
//               Stroke and cerebrovascular diseases
//               </Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.btn} onPress={pressHandler41}>
//               <Text style={styles.text1} >
//               Alzheimer’s disease
//               </Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.btn} onPress={pressHandler41}>
//               <Text style={styles.text1} >
//               Diabetes
//               </Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.btn} onPress={pressHandler41}>
//               <Text style={styles.text1} >
//               Influenza and pneumonia
//               </Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.btn} onPress={pressHandler41}>
//               <Text style={styles.text1} >
//               Kidney disease
//               </Text>
//           </TouchableOpacity>

//           <View style={styles.btn3}>
//           </View>
//         </ScrollView>
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
//       height: '4%',
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
//       borderRadius: 10,
//       height: 70,
//       backgroundColor: '#ffff',
//       justifyContent: 'center',
//       minWidth: '90%',
//       marginBottom: '1%',
//     },
//     text1: {
//       color: "black",
//       fontSize: 20,
//       top: '5%',
//       fontWeight: "bold",
//       left: '10%',
//     },
//     btn3: {
//       marginTop: '15%',
//       height: '20%',
//       justifyContent: 'center',
//       minWidth: '90%',
//       marginBottom: '10%',
//     },
//   });
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList,  Platform, ActivityIndicator} from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import { Card } from 'react-native-paper';
import { SearchBar } from 'react-native-elements';

const DisplayEmployee = (props) => {
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [masterDataSource, setMasterDataSource] = useState([]);

  const fetchData = () => {
    fetch('http://'+global.IP+'/project/patientlog.php?Did='+global.MyVar1)
      .then(res => res.json())
      .then(result => {
        if (result.code === "404") {
          alert('no data found');
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
        const itemData = item.Pname
          ? item.Pname.toUpperCase()
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
        <Text style={styles.serch} > Find patient details</Text>
      </View>
      <SearchBar
        round
        searchIcon={{ size: 24 }}
        onChangeText={(text) => searchFilterFunction(text)}
        onClear={(text) => searchFilterFunction('')}
        placeholder="Type Name Here ..."
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
                <Card  >
                  <View style={styles.listItem}>
                  <UserAvatar size={30} style={{bottom:'90%',left:'50%',width: 60,height: 60,borderRadius: 50, }} name={item.Pid}></UserAvatar> 
                    <Text style={{position:'absolute',top:'130%',left:'23%',fontSize: 12,  fontFamily: "sans-serif",}}>Name : {item.Pname}</Text>
                    <Text style={{position: 'absolute',top:'160%',left:'23%',fontSize: 12,  fontFamily: "sans-serif",}}>Gender : {item.Gender}</Text>
                    <Text style={{position: 'absolute',top:'190%',left:'23%',fontSize: 12,  fontFamily: "sans-serif",}}>Age : {item.Age}</Text>
                    <Text style={{position: 'absolute',top:'220%',left:'23%',fontSize: 12,  fontFamily: "sans-serif",}}>Phone .no : {item.Phone_no}</Text>
                    <Text style={{position: 'absolute',top:'250%',left:'23%',fontSize: 12,  fontFamily: "sans-serif",}}>Address : {item.address}</Text>
                    <Text style={{position: 'absolute',top:'280%',left:'23%',fontSize: 12,  fontFamily: "sans-serif",}}>E-mail : {item.Email}</Text>
                 <Text onPress=
                  {() => props.navigation.navigate("patientdetails",{
                    paramKey: item.Pid,
                  })}  style={{position: 'absolute',top:'400%',left:'175%',fontSize: 12,  fontFamily: "sans-serif",color:'#0000ff'}}>click to see precription </Text>
                    <Text onPress=
                  {() => props.navigation.navigate("addprecription",{
                    paramKey: item.Pid,
                  })}  style={{position: 'absolute',top:'400%',left:'23%',fontSize: 12,  fontFamily: "sans-serif",color:'#0000ff'}}>Add Prescription </Text>
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
    marginTop: 10,
    padding: '30%',
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
    top: '11%',
    left: '1%',
    width: '40%',
  },
  buttontext: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#ecf0f1',
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
});

// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, FlatList, Image, Platform, TouchableOpacity, ActivityIndicator, Button } from 'react-native';
// import UserAvatar from 'react-native-user-avatar';
// import { Card } from 'react-native-paper';
// import { SearchBar } from 'react-native-elements';
// import { AntDesign } from '@expo/vector-icons';

// const DisplayEmployee = (props, { navigation }) => {
//   const [data, setData] = useState([]);
//   const [noData, setNodata] = useState('');
//   const [Loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [search, setSearch] = useState('');
//   const [masterDataSource, setMasterDataSource] = useState([]);

//   const fetchData = () => {
//     fetch('http://192.168.137.1/project/patientlist.php')
//       .then(res => res.json())
//       .then(result => {
//         if (result.code === "404") {
//           setNodata("No data found");
//           setLoading(false);
//         } else {
//           setData(result.data);
//           setMasterDataSource(result.data);
//           setLoading(false);
//         }

//       }).catch(err => {
//         setLoading(false);
//         setError(err);
//       })
//   }

//   useEffect(() => {
//     fetchData();
//   }, [])


//   const searchFilterFunction = (text) => {
//     if (text) {
//       const newData = masterDataSource.filter(function (item) {
//         const itemData = item.Hospital_Name
//           ? item.Hospital_Name.toUpperCase()
//           : ''.toUpperCase();
//         const textData = text.toUpperCase();
//         return itemData.indexOf(textData) > -1;
//       });
//       setData(newData);
//       setSearch(text);
//     } else {
//       // Inserted text is blank
//       // Update FilteredDataSource with masterDataSource
//       setData(masterDataSource);
//       setSearch(text);
//     }

//   };



//   const ListEmptyView = () => {
//     return (
//       <View style={styles.MainContainer}>

//         <Text style={{ textAlign: 'center' }}> Sorry, No Data Present In FlatList... Try Again.</Text>

//       </View>

//     );
//   }


//   if (error) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text style={{ fontSize: 12, justifyContent: 'center', alignItems: 'center' }}>
//           Error fetching data...
//           Check your network connection!
//         </Text>
//       </View>
//     );
//   }


//   return (
//     <View style={styles.container}>

//       <View style={styles.btn1}>
//         <Text style={styles.serch1} > Hello </Text>
//         <Text style={styles.serch} > Find your Hospital </Text>
//       </View>

//       <SearchBar
//         round
//         searchIcon={{ size: 24 }}
//         // placeholderTextColor={'#g5g5g5'}
//         onChangeText={(text) => searchFilterFunction(text)}
//         onClear={(text) => searchFilterFunction('')}
//         placeholder="Type Here ..."
//         value={search}
//       />

//       {
//         Loading ?
//           <ActivityIndicator size="large" color="#0000ff"></ActivityIndicator>
//           :

//           <FlatList
//             style={{ flex: 1, }}
//             data={data}
//             renderItem={({ item }) =>
//               <TouchableOpacity>
//                 <Card >
//                   <View style={styles.listItem}>
//                     <UserAvatar size={30} style={{ width: 60, height: 60, borderRadius: 30 }} name={item.PSid}></UserAvatar>
//                     <Text style={{ fontSize: 15, fontFamily: "sans-serif", left: '40%', }}>{item.Hospital_Name}</Text>

//                     <View style={{ alignItems: "center", justifyContent: "center", flex: 1, marginRght: 10 }}>
//                       <Text style={{ color: "green", fontSize: 15 }}>{item.employee_uuid}</Text>
//                     </View>

                   


//                   </View>
//                 </Card>
//               </TouchableOpacity>
//             }
//             ListEmptyComponent={ListEmptyView()}
//             keyExtractor={(item, index) => index.toString()}
//             onRefresh={() => fetchData()}
//             refreshing={Loading}
//           //keyExtractor={item => item.email}
//           />
//       }

//       {/* <TouchableOpacity style={styles.fab} onPress={()=>props.navigation.navigate("AddEmployee")}>
//             <Text style={styles.fabIcon}>+</Text>
//           </TouchableOpacity> */}
//     </View>

//   );

// }


// export default DisplayEmployee;
// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     flex: 1,
//     width: "100%",
//     //margin: 10,
//     backgroundColor: "#ffff",
//     marginTop: 10,

//     paddingTop: (Platform.OS === 'ios') ? 20 : 0,
//   },
//   listItem: {
//     marginTop: 5,
//     padding: 20,
//     marginLeft: 10,
//     marginRight: 10,
//     marginBottom: 5,
//     backgroundColor: "#E8E8E8",
//     borderColor: "black",
//     width: "90%",
//     flex: 1,
//     alignSelf: "center",
//     flexDirection: "row",
//     borderRadius: 20
//   },
//   fab: {
//     position: 'absolute',
//     width: 56,
//     height: 56,
//     alignItems: 'center',
//     justifyContent: 'center',
//     right: 20,
//     bottom: 20,
//     backgroundColor: '#2E2EFF',
//     borderRadius: 30,
//     elevation: 8
//   },
//   fabIcon: {
//     fontSize: 40,
//     color: 'white'
//   },
//   btn1: {
//     marginTop: '5%',
//     borderRadius: 20,
//     height: '3%',
//     justifyContent: 'center',
//     minWidth: '90%',
//     marginBottom: '5%',
//   },
//   serch1: {
//     color: "black",
//     fontSize: 15,
//     bottom: '50%',
//     fontWeight: 'bold',
//     left: '1%',
//   },
//   serch: {
//     color: "black",
//     fontSize: 20,
//     bottom: '40%',
//     fontWeight: 'bold',
//     left: '1%',
//   },

//   buttoncontainer1: {
//     height: '40%',
//     borderRadius: 50,
//     backgroundColor: '#1e90ff',
//     justifyContent: 'center',
//     top: '1%',
//     left: '99%',
//     width: '20%',
//   },
// });



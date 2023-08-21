import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Platform, TouchableOpacity, ActivityIndicator } from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import { Card } from 'react-native-paper';
import { SearchBar } from 'react-native-elements';
import call from 'react-native-phone-call';

const DisplayEmployee = (props) => {
  const [data, setData] = useState([]);
  const [noData, setNodata] = useState('');
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [masterDataSource, setMasterDataSource] = useState([]);

  const fetchData = () => {
    fetch('http://'+global.IP+'/project/docchatlist.php?Did='+global.MyVar1)
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
        const itemData = item.Hospital_Name
          ? item.Hospital_Name.toUpperCase()
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

  const triggerCall = (inputValue) => {
    if (inputValue.length != 10) {
      alert('Please insert correct contact number');
      return;
    }

    const args = {
      number: inputValue,
      prompt: true,
    };
    call(args).catch(console.error);
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
            style={{ flex: 1, }}
            data={data}
            renderItem={({ item }) =>
              <TouchableOpacity>
                <Card onPress=
                  {() => props.navigation.navigate("docchat", {
                    paramKey: item.Pid,
                  })} >
                  <View style={styles.listItem}>
                    <UserAvatar size={30} style={{ width: 60, height: 60, borderRadius: 30 }} name={item.Hospital_Name}></UserAvatar>
                    <Text style={{ color: "green", fontSize: 13,  position: 'absolute',top:'30%',left:'40%' }}>{item.Pid}</Text>
                      <Text style={{ color: "green", fontSize: 13,  position: 'absolute',top:'60%',left:'40%' }}>{item.Pname}</Text>
                      <TouchableOpacity style={styles.buttoncontainer2} onPress={() => triggerCall(item.Phone_no)}>
                      <Text style={styles.buttontext}>Call</Text>
                    </TouchableOpacity>
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
    backgroundColor: "#ffff",
    marginTop: 10,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
  },
  listItem: {
    marginTop: '3%',
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
    borderRadius: 20
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
    top: '1%',
    left: '99%',
    width: '20%',
  },
  buttoncontainer2: {
    position: 'absolute',
    height: '40%',
    borderRadius: 50,
    backgroundColor: '#1e90ff',
    justifyContent: 'center',
    top: '105%',
    right: '5%',
    width: '35%',
  },
  buttontext: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#ecf0f1',
    fontSize: 15,
  },
});
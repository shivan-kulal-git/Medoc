import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Platform, TouchableOpacity, ActivityIndicator} from 'react-native';
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
    fetch('http://'+global.IP+'/project/prescription.php?pid='+global.MyVar)
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
        const itemData = item.P_Date
          ? item.P_Date.toUpperCase()
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
        <Text style={{ textAlign: 'center' }}> Sorry, You dont have any precreption yet.</Text>
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
        placeholder="Search Date ..."
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
              <TouchableOpacity>
                <Card onPress={() => props.navigation.navigate("Rx", {paramKey: item.P_Date,})}>
                  <View style={styles.listItem}>
                    <Text style={{ fontSize: 15, fontFamily: "sans-serif", left: '40%', }}>Date : {item.P_Date}</Text>
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
    borderRadius: 18
  },
});
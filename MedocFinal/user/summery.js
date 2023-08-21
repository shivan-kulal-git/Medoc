import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Platform, ActivityIndicator } from 'react-native';
import { Card } from 'react-native-paper';

const hospitaldoc = ({ route }) => {
  const [data, setData] = useState([]);
  const [noData, setNodata] = useState('');
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [masterDataSource, setMasterDataSource] = useState([]);

  const fetchData = () => {
    fetch('http://'+global.IP+'/project/sdict.php?val=' + route.params.paramKey)
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
                  <View style={styles.container}>
                    <Text style={styles.heading}>
                      {route.params.paramKey}
                    </Text>

                    <Text style={styles.textStyle1}>
                      Defination :
                    </Text>

                    <Text style={styles.textStyle}>
                      {item.Dis_defination}
                    </Text>

                    <Text style={styles.textStyle1}>
                      Symptoms :
                    </Text>

                    <Text style={styles.textStyle}>
                      {item.Symptoms}
                    </Text>

                    <Text style={styles.textStyle1}>
                      Cause :
                    </Text>

                    <Text style={styles.textStyle}>
                      {item.Causes}
                    </Text>
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


export default hospitaldoc;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    width: "100%",
    //margin: 10,
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
    height: '40%',
    borderRadius: 50,
    backgroundColor: '#1e90ff',
    justifyContent: 'center',
    top: '11%',
    left: '-30%',
    width: '35%',
  },
  buttontext: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#ecf0f1',
    fontSize: 15,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',

    marginVertical: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    color: "black",
    marginVertical: 10,
  },
  textStyle1: {
    textAlign: 'center',
    fontSize: 20,
    fontStyle: "italic",
    color: "black",
    marginVertical: 10,
  },
});

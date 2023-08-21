import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Platform, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native';
import { Card } from 'react-native-paper';

const DisplayEmployee = ({route}) => {
  if(global.Pid!= route.params.paramKey){
  global.Pid= route.params.paramKey;
  }
  const [data, setData] = useState([]);
  const [noData, setNodata] = useState('');
  const [Loading, setLoading] = useState(true);
  const [masterDataSource, setMasterDataSource] = useState([]);

  const fetchData = () => {
    fetch('http://'+global.IP+'/project/dischat2.php?pid='+global.Pid+'&&did='+global.MyVar1)
      .then(res => res.json())
      .then(result => {
        if (result.code === "404") {
          setNodata("No data found");
          setLoading(false);
        } else {
          global.Pid=result.data.Pid;
          setData(result.data);
          setMasterDataSource(result.data);
          setLoading(false);
        }
      }).catch(err => {
        setLoading(false);
      })
  }
  useEffect(() => {
    fetchData();
  }, [])

  const performValidation = () =>{
    let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
    const regmobNo = /^[0]?[789]\d{9}$/;
    if(Message ===''){
      Alert.alert('Fill the Message');
    }else{
      setMessage({
        text: 'hi',
      })
      submitData();
    }
  }

  const getDetails = (type)=>{
     if(route.params){
        switch(type){
            case "Message":
               return  route.params.Message
             }
     }
     return ""
  }
  
  const [Message,setMessage]=useState(getDetails("Message"))

  const submitData = () =>{
    fetch('http://'+global.IP+'/project/chatsend2.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
           "pid": global.Pid,
           "did": global.MyVar1,
           "Message":Message,
           "sender":'Doctor',
        })
        }).then((response) => response.json())
            .then((responseJson) => {
              if(responseJson.message === "invalid"){
                alert(responseJson.message);
              }else{
                fetchData();
              }
            }).catch((error) => {
              console.error(error);
            });
  }

  const ListEmptyView = () => {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ textAlign: 'center' }}> Start Chat!</Text>
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
            style={{ flex: 1 ,marginBottom:'11.5%'}}
            data={data}
            renderItem={({ item, index }) => { 
           return (
            <View>
              <View>
                      {item.sender === "Doctor" && <View>
                        <View >
                        <Card>
                          <View style={{
                    backgroundColor: "#0078fe",
                    padding:10,
                    marginLeft: '45%',
                    borderRadius: 5,
                    marginTop: 5,
                    marginRight: "5%",
                    maxWidth: '50%',
                    alignSelf: 'flex-end',
                    borderRadius: 20,
                  }} key={index}>
                          <Text style={{ fontSize: 16, color: "#fff", }} key={index}>{item.Message}</Text>
                          <View style={styles.rightArrow}></View>
                          <View style={styles.rightArrowOverlap}></View>
                          </View>
                          </Card>
                        </View>
                      </View>}
                      <View />
                      {item.sender === "Patient" && <View>
                        <View>
                        <Card>
                          <View  style={{
                    backgroundColor: "#47FA3A",
                    padding:10,
                    borderRadius: 5,
                    marginTop: 5,
                    marginLeft: "5%",
                    maxWidth: '50%',
                    alignSelf: 'flex-start',
                    borderRadius: 20,
                  }} key={index}>
                          <Text style={{ fontSize: 16, color: "#000",justifyContent:"center" }} key={index}>{item.Message}</Text>
                          <View style={styles.leftArrow}></View>
                          <View style={styles.leftArrowOverlap}></View>
                          </View>
                          </Card>
                        </View>
                      </View>}
                    </View>
              </View>
            )
           }
          }
            ListEmptyComponent={ListEmptyView()}
            keyExtractor={(item, index) => index.toString()}
            onRefresh={() => fetchData()}
            refreshing={Loading}
          />
      }
        <View style={styles.action}>
        <TextInput
          style={styles.textinput}
          placeholder='Type here.....'
          autoCapitalize="none"
          placeholderTextColor='#8A8A8A'
          label="Message"
          value={Message} 
          onChangeText={text=>setMessage(text)}
        />
         </View>
      <TouchableOpacity style={styles.fab} onPress={() => performValidation()} >
            <Text style={styles.fabIcon}>send</Text>
          </TouchableOpacity>
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
    marginTop: '1%',
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
    width: "99%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 10
  },
  fab: {
    position: 'absolute',
    width: '12%',
    height: '7%',
    alignItems: 'center',
    justifyContent: 'center',
    left: '88%',
    top: '93%',
    backgroundColor: '#2E2EFF',
    borderRadius: 3,
    elevation: 8
  },
  fabIcon: {
    fontSize: 15,
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
  action:{
    borderBottomColor:'#f2f2f2', 
    position: 'absolute',
    borderColor: "black",
     borderWidth:2,
     top:'93%',
     width:'100%',
     height:'7%'
   },
   textinput:{
     top:'25%',
     left:'3%',
     position: 'absolute',
   },
   rightArrow: {
    position: "absolute",
    backgroundColor: "#0078fe",
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomLeftRadius: 25,
    right: -10
  },
  rightArrowOverlap: {
    position: "absolute",
    backgroundColor: "#ffff",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomLeftRadius: 18,
    right: -20
  },
  leftArrow: {
    position: "absolute",
    backgroundColor: "#47FA3A",
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomRightRadius: 25,
    left: -10
},
leftArrowOverlap: {
    position: "absolute",
    backgroundColor: "#ffff",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomRightRadius: 18,
    left: -20
},
});
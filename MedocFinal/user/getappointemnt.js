import React, { Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,Alert
} from 'react-native';
import Commonstyle from '../components/commonstyle'
import {Calendar} from 'react-native-calendars';

export default class Calc extends Component {
  constructor({props}) {
    super(props);
    this.state = {
     
    };
    this.onDayPress = this.onDayPress.bind(this);
  }
  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
    global.date=day.dateString;
    Alert.alert(
      "Book Appointment",
      "Are you sure you want to get appointment on this date!",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => {
        fetch('http://'+global.IP+'/project/getapp.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
         
         "date":global.date,
         "Pid": global.MyVar,
         "Did": global.docid,
         
      })
 
      }).then((response) => response.json())
          .then((responseJson) => {
            
            if(responseJson.message === "invalid"){ 
              alert(responseJson.message);
            }else if(responseJson.message === "exist"){
              alert(responseJson.message);
            }else if(responseJson.message === "error"){
              alert('date must be greater than today');
            }else{
              alert("Success");
              // global.MyVar = responseJson.message;
             
            }
          
 
          }).catch((error) => {
            console.error(error);
          });
        }
      }
      ]
    );

    
  }
  _onPressBack(){
    const {goBack} = this.props.navigation
      goBack()
  }
  
  

  render() {
    
    return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <View style={styles.toolbar}>
        <TouchableOpacity onPress={() => this._onPressBack() }><Text style={styles.toolbarButton}>Back</Text></TouchableOpacity>
                    <Text style={Commonstyle.toolbarTitle}></Text>
                    <Text style={Commonstyle.toolbarButton}></Text>
      </View  >
        <Calendar
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays
          markedDates={{[this.state.selected]: {selected: true}}}
          theme={{
            selectedDayBackgroundColor: 'green',
            todayTextColor: 'green',
            arrowColor: 'green',
          }}
        />
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350,
  },
  toolbar:{
    height: '10%',
     backgroundColor:'#3EFC6A',
  },
  toolbarButton:{
    fontSize: 20,
    top: '80%',
    left: '5%',
  }
});


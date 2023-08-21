import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Alert } from 'react-native'
class Inputs extends Component {
   state = {
      height: '',
      weight: '',
      bmi: '',
      BmiResult: '',
   }
   handleHeight = (text) => {
      this.setState({ height: text })
   }
   handleWeight = (text) => {
      this.setState({ weight: text })
   }

  performValidation = (h,w) =>{
      
      if(h>170){
        Alert.alert('Height cannot be over 170 cm');
      }else if(w >400){
        Alert.alert('Weight cannot be over 400 kg');
      }else if(h <10){
         Alert.alert('Height cannot be less than 10 cm');
       }else if(w <1){
         Alert.alert('Weight cannot be less than 1 kg');
       }else{
         this.calculate(h,w);
      }
    }

   calculate = (height, weight) => {
      //calculation
      var result = (parseFloat(weight)*10000)/(parseFloat(height)*parseFloat(height));
      result = result.toFixed(2);
      //display result
      this.setState({ bmi: result })
      if(result<18.5){
         this.setState({BmiResult:'Underweight'})
      }
      else if(result>=18.5&&result<25){
         this.setState({BmiResult:'Normal weight'})
      }
      else if(result>=25&&result<30){
         this.setState({BmiResult:'Overweight'})
      }
      else if(result>=30){
         this.setState({BmiResult:'Obese'})
      }
      else{
         alert('Incorrect Input!');
         this.setState({BmiResult:''})
      }
   }
   render() {
      
      return (
         <View style = {styles.container}>
            <Text style={styles.title}>BMI Calculator</Text>
            <Text  style = {styles.label}>Height</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Height (Cm)"
               autoCapitalize = "none"
               keyboardType="number-pad"
               onChangeText = {this.handleHeight}/>
            <Text  style = {styles.label}>Weight</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Weight (Kg)"
               autoCapitalize = "none"
               keyboardType="number-pad"
               onChangeText = {this.handleWeight}/>
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.performValidation(this.state.height, this.state.weight)
               }>
               <Text style = {styles.submitButtonText}> Calculate </Text>
            </TouchableOpacity>
            <Text style = {styles.output}>{this.state.bmi}</Text>
            <Text style = {styles.resultText}>{this.state.BmiResult}</Text>
            </View>
      )
   }
}
export default Inputs
const styles = StyleSheet.create({
   container: {
      paddingTop: '3%',
      
   },
   title:{
      paddingTop: '10%',
      paddingBottom: '10%',
      textAlign: "center",
      fontSize: 30,
      fontWeight:"bold",
   },
   label:{
      marginLeft: '5%',
   },
   input: {
      margin: '4%',
      borderRadius: 10,
      height: '8%',
      borderWidth: 1,
      padding: '3%',
   },
   submitButton: {
      backgroundColor: '#ff6666',
      borderRadius: 10,
      padding: '2%',
      margin: '5%',
      height: '7%',
      width: '60%',
      left: '15%',
   },
   submitButtonText:{
      textAlign: "center",
      color: 'white',
      fontSize: 18,
   },
   output:{
      textAlign: "center",
      fontSize: 30,
   },
   resultText:{
      paddingTop:20,
      paddingBottom:10,
      textAlign: "center",
      fontSize: 30,
      color: 'blue'
   },
  
})
import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class App extends Component {
  render(){
    return(
      <View>
        <Text style={styles.title}>App Project</Text>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  title:{
    color: "red",
    textAlign: "center"
  }
})
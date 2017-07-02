import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      a:0,
      d:0,
      start:false,
      n:0
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
         Math Series
        </Text>
        <Text style={styles.instructions}>
          Series is {this.state.seriesTxt}
        </Text>
        <Text style={styles.instructions} onPress={this.start.bind(this)}>
         Tab to play
        </Text>
        <Text style={styles.instructions}></Text>
      </View>
    );
  }
  start(){
    const a = Math.floor(Math.random() * 10) + 1;
    const d = Math.floor(Math.random() * 10) + 1;
    var nextOne = a+ d;
    var nextTwo = nextOne+d;
    this.setState({
      start:true,
      seriesTxt : a + ', '+ nextOne  + ', '+ nextTwo +'  ...'
    });
   // startGame(a,d,0);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#282F44',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#71C4F7',
    marginBottom: 5,
  },
});


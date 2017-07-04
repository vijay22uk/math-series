import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
//todo stateless Component
export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
         Math Series
        </Text>
        <Text style={styles.instructions}>
          Guess number in series ...
        </Text>
        <Text style={styles.instructions} onPress={this.start.bind(this)}>
         Tab to play
        </Text>
        <Text style={styles.instructions}></Text>
      </View>
    );
  }
  start(){
    this.props.start();
   // startGame(a,d,0);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
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


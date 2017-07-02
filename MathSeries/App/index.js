import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
         Math Series
        </Text>
        <Text style={styles.instructions}>
          Series is 3,5,8 . . . 
        </Text>
        <Text style={styles.instructions}>
         Tab to play
        </Text>
      </View>
    );
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


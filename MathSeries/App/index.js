import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Welcome from './welcome'
import Game from './game'
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
      <View style={{flex:1}}>
       { (! this.state.start ) && (<Welcome  start={this.start.bind(this)} />)
       }
       { (this.state.start ) && (<Game  end={this.end.bind(this)} />)
       }
      </View>
    );
  }
  end(){
    this.setState({
      start:false
    });
  }
  start(){
   
    this.setState({
      start:true
    });
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


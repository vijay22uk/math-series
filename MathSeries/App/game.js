import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import * as Animatable from 'react-native-animatable';
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 0,
            d: 0,
            n: 0,
            lastThree: [],
            toGuess: -1,
            currentGuess:null
        }
    }
    componentWillMount() {
        this.start()
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => { this.userInput() } }>
                    <Text style={styles.welcome}>
                        Math Series
                </Text>
                    <Text style={styles.instructions}>
                        {this.state.lastThree.join(', ')}

                    </Text>
                    <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ height:45, fontSize:34, color: 'white', textAlign: 'center' }}>
                        {this.state.currentGuess}
                    </Animatable.Text>
                    <Text style={styles.instructions}>
                        Tap when next number is displayed.
        </Text>
                </TouchableOpacity>
            </View>
        );
    }
    start() {
        const a = Math.floor(Math.random() * 10) + 1;
        const d = Math.floor(Math.random() * 5) + 1;
        var nextOne = a + d;
        var nextTwo = nextOne + d;
        this.setState({
            lastThree: [a, nextOne, nextTwo],
            n: 3,
            toGuess: nextTwo + d,
            a,
            d
        });
        this.startGuessing(nextTwo + d);
        
        // startGame(a,d,0);
    }
    nextTick() {
        let {a, d, n, lastThree, toGuess} = this.state;
        ++n;
        const nextNumber = a + (n * d);
        lastThree.shift();
        lastThree.push(toGuess);
        this.setState({
            lastThree: [...lastThree],
            n: n,
            toGuess: nextNumber,
            guess: nextNumber,
            currentGuess:null
        });
        this.startGuessing(nextNumber);
        //lastThree.push();

    }
    startGuessing(nextNumber) {
        this.guesserLoop && clearInterval(this.guesserLoop);
        this.guesserLoop = setInterval(() => {
            const random = getRandomInt(this.state.toGuess-2, this.state.toGuess+ 3)
           debugger
            this.setState({
                currentGuess: random
            })
        },600)
    }
    userInput() {
        if (this.state.toGuess === this.state.currentGuess) {
            this.nextTick();
        } else {
            // life --
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#282F44',
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


import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, Linking, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const [counter, setCounter] = useState(0)
  const [time_click, setTimeClick] = useState(0)
  const [current, setCurrent] = useState(true)

  const onclickHandler = () => {
    setCounter(counter + 5)
    setTimeClick(time_click + 1)
  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>{counter}</Text>
      <Button title='Add' onPress={onclickHandler}></Button>
      <Text style={styles.text}>You clicked {time_click} times</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ff00ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffff',
    fontSize: 20,
    fontStyle: 'italic',
    margin:10,
  }
});
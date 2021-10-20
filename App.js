import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('Mash')
  const [session, setSession] = useState({ number: 6, title: 'state' })
  const [current, setCurrent] = useState(true)

  const onClickHandler = () => {
    setName('Programming with Mash')
  }

  return (
    <View style={styles.body}>
      <View style={styles.view1}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text}>2</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text}>3</Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  view1: {
    
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    
    backgroundColor: '#f00fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    
    backgroundColor: '#f00f',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#ffffff',
    fontSize: 40,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'uppercase',
  },
  button: {
    width : 200,
    height : 100,
  }
});

export default App;
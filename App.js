import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [name, setName] = useState('Mash')
  const [session, setSession] = useState({ number: 6, title: 'state' })
  const [current, setCurrent] = useState(true)

  const onClickHandler = () => {
    setName('Programming with Mash')
  }

  return (
    <View style={styles.body}>
      
      <View style={styles.container1}>
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

      <View style={styles.container2}>
        <View style={styles.view4}>
          <Text style={styles.text}>4</Text>
        </View>
        <View style={styles.view5}>
          <Text style={styles.text}>5</Text>
        </View>
      </View>

      <View style={styles.container3}>
        <View style={styles.view6}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.view7}>
          <Text style={styles.text}>7</Text>
        </View>
      </View>

      {/* <View style={{backgroundColor: '#00ffff', marginTop: 20, alignItems: 'center'}}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={{backgroundColor: '#00ffff', alignItems: 'center'}}>
        <Text style={styles.text}>1</Text>
        <Text style={styles.text}>1</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },

  container1: {
    flex: 1,
    flexDirection: 'row', 
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop:28,
  },
  view1: {
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flex: 2,
    backgroundColor: '#f00fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    flex:3,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  container2: {
    flex: 2,
    flexDirection: 'column', 
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  view4: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view5: {
    flex:1,
    backgroundColor: 'chartreuse',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container3: {
    flex: 6,
    flexDirection: 'row', 
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  view6: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view7: {
    flex:1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'black',
    fontSize: 30,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
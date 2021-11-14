import React, { useState } from 'react';
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';

import {
  StyleSheet,
  View,
  Text,
  Pressable
} from 'react-native';

class App extends React.Component {
  
  constructor(props){
    super(props)
  }

  Stack = createStackNavigator()



  render ()
  {
    return (

    <NavigationContainer>
      <this.Stack.Navigator>

        <this.Stack.Screen 
          name="Screen_A"
          component={ScreenA}
          options={{
            header: () => null
          }}
        >
        </this.Stack.Screen>

        <this.Stack.Screen 
          name="Screen_B"
          component={ScreenB}
        >
        </this.Stack.Screen>

      </this.Stack.Navigator>
    </NavigationContainer>

  )}
}

const styles=StyleSheet.create({
  body:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text:{
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10
  }
})

export default App;
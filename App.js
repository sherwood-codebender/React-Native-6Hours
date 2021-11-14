import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInputBase,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
} from 'react-native';

class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      userInput: "",
      submit: false,
    }
    this.handleChangeText = this.handleChangeText.bind(this);
    this.onPressHandler = this.onPressHandler.bind(this);
  }

  handleChangeText(e)  {
    this.setState({
      userInput: e
    });
  }

  onPressHandler() {
    this.setState({
      submit: !this.state.submit,
    })
  }

  render (){

    return (
    <View style={styles.body}>
        <Text style={styles.text}>
          Please write your name:
        </Text>
        <TextInput 
          style={styles.input}
          placeholder='Account'
          value={this.state.userInput}
          onChangeText={this.handleChangeText}
        />

        {/* <Button 
          title={this.state.submit ? "Clear" : 'Submit' }
          onPress = {this.onPressHandler}
        /> */}

        {/* <TouchableOpacity
          style={styles.button}
          onPress={this.onPressHandler}
          activeOpacity={0.3}
        >

          <Text style={styles.text}> 
            {this.state.submit ? "Clear" : 'Submit'}
          </Text>
        
        </TouchableOpacity> */}

        <Pressable
          onPress={this.onPressHandler}
          style={ ({pressed}) => [
            {backgroundColor: pressed ? 'green' : "blue"}, 
            styles.button ]
          }
          android_ripple={{color: 'red'}}
        >
          <Text style={styles.text}> 
            {this.state.submit ? "Clear" : 'Submit'}
          </Text>
        </Pressable>


        {
          this.state.submit &&
          <Text style={styles.text}>
          Your name is: {this.state.userInput}
          </Text>
        
        }

    </View>
    )
  }
}

// const App = () => {
  
//   return ( 
//     <View style={styles.body}>
//       <Text style={styles.text}>
//         Please write your name:
//       </Text>
//       <TextInput 
//         style={styles.input}
//         placeholder='Account'
//       />
//     </View>
//   )
// };

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },

  text: {
    color: 'black',
    fontSize: 40,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'uppercase',
  },

  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10
  },

  button: {
    
    width: 150,
    height: 50,
    alignItems: "center"
  }
});

export default App;
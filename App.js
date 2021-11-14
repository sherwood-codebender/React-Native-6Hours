import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollViewBase,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
} from 'react-native';

const App = () => {
  const [Items, setItems] = useState([
    { name: 'Item 1'},
    { name: 'Item 2'},
    { name: 'Item 3'},
    { name: 'Item 4'},
    { name: 'Item 5'},
    { name: 'Item 6'},
    { name: 'Item 7'},
    { name: 'Item 8'},
  ]);
  
  const DATA = [
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3']
    },
    {
      title: 'Title 2',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3']
    },
    {
      title: 'Title 3',
      data: ['Item 3-1', 'Item 3-2', 'Item 3-3']
    },
    {
      title: 'Title 4',
      data: ['Item 4-1', 'Item 4-2', 'Item 4-3']
    }
  ]
  const [Refreshing, setRefreshing] = useState(false) 
  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, {name: 'Item 69'}]);
    setRefreshing(false);
  }
  return ( 
    <SectionList
    keyExtractor={(item, index) => index.toString()}
    sections = {DATA}
    renderItem={({item}) => (
        
          <Text style={styles.text}>{item}</Text>
        
    )}
    renderSectionHeader={({section}) => (
      <View style={styles.item}>
        <Text style={styles.text}>{section.title}</Text>
      </View>
    )}
    ></SectionList>




    // <FlatList 
    // keyExtractor={(item, index) => index.toString()}
    // data={Items}
    // renderItem={({item}) => (
    //   <View style={styles.item}>
    //     <Text style={styles.text}>{item.name}</Text>
    //   </View>
    // )}
    
    // refreshControl={
    //   <RefreshControl refreshing = {Refreshing}
    //   onRefresh={onRefresh}
    //   colors={['#ff00ff']} />}
    // />  

    

    //   <ScrollView
    //   style={styles.body}
    //   refreshControl={
    //     <RefreshControl refreshing = {Refreshing}
    //     onRefresh={onRefresh}
    //     colors={['#ff00ff']} />
    //   }
    //   >
    //   {
    //     Items.map((i) => {
    //       return (
    //         <View style={styles.item} key={i.key}>
    //           <Text style={styles.text}>{i.item}</Text>
    //         </View>
    //       )
    //     })
    //   }
      
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#0000ff',
  },
  item: {
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },

  text: {
    color: 'black',
    fontSize: 40,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'uppercase',
  },
});

export default App;
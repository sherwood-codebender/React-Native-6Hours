import React from 'react';
import {
  FlatList,
  SafeAreaView
} from 'react-native';
import Member from './Member';


const PathImage = "https://media-exp1.licdn.com/dms/image/C5603AQGBT3S8tKrDpw/profile-displayphoto-shrink_100_100/0/1623593359314?e=1642636800&v=beta&t=LQrcToDEl6aLg7LRL5G0yeox7WFHURnFd1wVbO4SCNo"

const members = [
  {name: "Sherwood", mssv: 1548754, avatar: PathImage},
  {name: "Beck", mssv: 1548754, avatar: PathImage},
  {name: "Tom", mssv: 1548754, avatar: PathImage},
  {name: "Alex", mssv: 1548754, avatar: PathImage},
  {name: "John", mssv: 1548754, avatar: PathImage},
]

const App = () => {
  return (
    <SafeAreaView>
      <FlatList 
      numColumns={2}
      data={members}
      keyExtractor= {(item, index) => index.toString()}
      renderItem={ ({item}) => (<Member member={item}/>)}></FlatList>
    </SafeAreaView>
  )
}

export default App;
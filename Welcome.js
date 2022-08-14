import React, {useEffect, useRef, useState} from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Example from './component/BottomSheet';
import TodoItem from './component/TodoItem';
import RBSheet from 'react-native-raw-bottom-sheet';
import BottomSheet from './component/BottomSheet';
import uuid from 'react-native-uuid';

function test() {
  console.log('Click me button pressed');
}

const Welcome = ({navigation, route}) => {
  let data = route.params; 

  const [items, setItems] = useState([
    {
      id: uuid.v4(),
      text: 'Faire un bébé',
      descp: 'some little description here',
    },
    {
      id: uuid.v4(),
      text: 'Voyager dans le monde',
      descp: 'another little description here',
    },
    {
      id: uuid.v4(),
      text: 'Voyager dans le monde',
      descp: 'another little description here',
    },
  ]);

  useEffect( () => {
    AddItem(data?.taskName , data?.taskDescp)
  }, [])
  
  
  {
    /* Remove item function*/
  }
  const removeItem = id => {
    setItems(oldItems => {
      return oldItems.filter(item => item.id != id);
    });
  };

  { /* Add item*/}


  const AddItem = (text, descp) => {
    setItems( oldItems => {
      return [{ id:uuid.v4(), text, descp}, ...oldItems]
    });
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText1}> Today</Text>
        <Text style={styles.headerText2}> 25 July 2022, Monday</Text>
      </View>

      <View style={styles.search}>
        <Text style={styles.searchText}>Search</Text>
      </View>

      <View style={styles.menu}>
        <Text style={styles.menuText}>Undone</Text>
        <Text style={styles.d}>Meetings</Text>
        <Text style={styles.d}>Consumption</Text>
      </View>

      <Text>{data?.taskName}</Text>

      <View style={styles.body}>
        <FlatList
          data={items}
          renderItem={({item}) => (
            <TodoItem item={item} removeItem={removeItem} />
          )}
        />
      </View>

      <TouchableOpacity
        style={styles.fabbtn}
        onPress={() => navigation.navigate('AddTask')}>
        <Text style={styles.fabText}>Add new task</Text>
      </TouchableOpacity>

      {/*  <BottomSheet refRBSheet={refRBSheet} />  onPress={() => refRBSheet.current.open()} */}
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  header: {
    width: '100%',
    height: '10%',
    paddingLeft: 15,
  },

  headerText1: {
    fontSize: 30,
    marginTop: '5%',
    fontWeight: '600',
    color: 'black',
  },

  headerText2: {
    marginLeft: 5,
    color: '#dde0e9',
  },

  search: {
    margin: '5%',
    backgroundColor: '#68a0cf',
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    overflow: 'hidden',
  },

  searchText: {
    color: 'white',
  },

  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  menuText: {
    color: '#8db7ff',
    backgroundColor: '#cddff7',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5,
    paddingTop: 5,
    borderRadius: 20,
  },

  body: {
    width: '100%',
    height: 480,
    paddingLeft: '5%',
    paddingRight: '5%',
    marginTop: 20,
  },

  fabbtn: {
    height: '8%',
    backgroundColor: '#68a0cf',
    borderRadius: 35,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  fabText: {
    color: 'white',
    fontWeight: '700',
  },
});

import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, FlatList, View, TouchableOpacity, Image } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    desc: 'nah',
    date: '26/03/2021',
    time: '14:00 pm',
    title: 'First Item',
    adress: 'adress 1',
    people: [],
    free: false,
    repeat: false
  },
];

const EventType = ({ isFree }) => {
  if (isFree) {
    return (
      <View>
        <Text style={{ color: 'white', textAlign: 'right' }}>free</Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text style={{ color: 'white', textAlign: 'right' }}>Not free</Text>
      </View>
    );
  }
}

const EventRepeat = ({ isRepeating }) => {
  if (isRepeating) {
    return (
      <View>
        <Text style={{ color: 'white', textAlign: 'right' }}>Repeating</Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text style={{ color: 'white', textAlign: 'right' }}>Not Repeating</Text>
      </View>
    );
  }
}

const Item = ({ title, date, free, repeat }) => (
  <View style={styles.item}>
    <Text style={styles.eventName}>{title}</Text>
    <Text style={styles.dateText}>{date}</Text>
    <EventType isFree={free} />
    <EventRepeat isRepeating={repeat} />
  </View>
);

const Main = ({ navigation, route }) => {

  const [list, updateList] = useState(false);

  useEffect(() => {
    if (route.params === undefined) { //initial value will always be undefined 

    } else {
      if (list == false) {
        DATA.push(route.params.event);
        updateList(true);
      }
    }
  });

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        console.log(item);
        navigation.navigate('Detail', item)
      }}>
      <Item title={item.title} date={item.date} free={item.free} repeat={item.repeat} />
    </TouchableOpacity>
  );

  return (
    <View>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Image
            style={{marginLeft:16, width:30, height:30}}
            source={require('../assets/settings.png')} />
        </TouchableOpacity>
        <Text style={styles.title}>Event</Text>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => navigation.navigate('Groups')}>
          <Text style={styles.buttonGroup}>
            Groups
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <View style={{ height: '85%' }}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={list}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('CreateEvent')
          }}>
          <Text style={{ color: 'white' }}>ADD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'gray',
    padding: 20,
    borderRadius: 12,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 10,
    flex: 3,
  },
  buttonGroup: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 8,
    width: 65
  },
  button: {
    position: 'absolute',
    borderRadius: 50,
    backgroundColor: 'gray',
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  line: {
    borderBottomWidth: 1,
    marginHorizontal: '5%',
  },
  eventName: {
    fontSize: 25,
    color: 'white',
  },
  dateText: {
    fontSize: 14,
    color: 'white',
    width: '80%',
  },

});

export default Main;